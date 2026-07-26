import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Restaurant editorial design", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/templates/restaurant");
  });

  test("renders mapped content in the editorial section order", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: /an unforgettable culinary journey/i }),
    ).toBeVisible();
    await expect(page.locator("#featured article")).toHaveCount(3);
    await expect(page.locator("#about")).toContainText("Opening hours");
    await expect(page.locator("#testimonials article")).toHaveCount(3);
    await expect(page.locator("#gallery figure")).toHaveCount(6);
    await expect(page.locator('form input[name="website"]')).toHaveCount(1);
  });

  test("filters menu categories with accessible pressed state", async ({ page }) => {
    const mains = page.getByRole("button", { name: "Mains", exact: true });
    await mains.click();
    await expect(mains).toHaveAttribute("aria-pressed", "true");
    await expect(
      page.locator("#menu article", { hasText: "Mutton Kottu" }),
    ).toHaveCount(1);
    await expect(
      page.locator("#menu article", { hasText: "Coconut Prawn Soup" }),
    ).toHaveCount(0);
  });

  test("mobile navigation opens, follows anchors, and closes", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.getByRole("button", { name: "Open navigation menu" }).click();
    const menuLink = page.getByRole("link", { name: "Gallery", exact: true }).first();
    await expect(menuLink).toBeVisible();
    await menuLink.click();
    await expect(page).toHaveURL(/#gallery$/);
    await expect(page.getByRole("button", { name: "Open navigation menu" })).toBeVisible();
  });

  test("preserves theme state and validates without sending a real lead", async ({ page }) => {
    let leadRequests = 0;
    page.on("request", (request) => {
      if (request.url().includes("/api/leads")) leadRequests += 1;
    });

    const themeButton = page.getByRole("button", {
      name: /switch to (dark|light) mode/i,
    });
    await themeButton.click();
    const themeClass = await page.locator("html").getAttribute("class");
    await page.reload();
    await expect(page.locator("html")).toHaveAttribute("class", themeClass ?? "");

    await page.locator('form button[type="submit"]').click();
    await expect(page.getByText("Name must be at least 2 characters")).toBeVisible();
    expect(leadRequests).toBe(0);
  });

  test("keeps contact, map, and WhatsApp links functional", async ({ page }) => {
    await expect(page.locator('#contact a[href^="tel:"]')).toHaveCount(1);
    await expect(page.locator('#contact a[href^="mailto:"]')).toHaveCount(1);
    await expect(page.locator('#contact a[href*="google.com/maps/search"]')).toHaveCount(1);
    await expect(page.locator('a[aria-label="Chat on WhatsApp"]')).toHaveAttribute(
      "href",
      /wa\.me/,
    );
  });

  test("has no viewport overflow and no detectable Axe violations", async ({
    page,
  }, testInfo) => {
    test.skip(testInfo.project.name !== "chromium", "Focused Axe check runs in Chromium.");

    for (const viewport of [
      { width: 1440, height: 1000 },
      { width: 768, height: 1024 },
      { width: 390, height: 844 },
    ]) {
      await page.setViewportSize(viewport);
      await page.reload();
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow).toBeLessThanOrEqual(1);
    }

    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.reload();
    const results = await new AxeBuilder({ page }).analyze();
    expect(
      results.violations.flatMap((violation) =>
        violation.nodes.map((node) => ({
          id: violation.id,
          target: node.target,
          html: node.html,
        })),
      ),
    ).toEqual([]);
  });
});
