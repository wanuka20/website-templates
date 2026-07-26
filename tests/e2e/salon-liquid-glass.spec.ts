import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Salon liquid-glass design", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/templates/salon");
  });

  test("renders the selected design and preserves mapped content", async ({ page }) => {
    await expect(page.getByRole("heading", { name: /where beauty meets artistry/i })).toBeVisible();
    await expect(page.locator("#services article")).toHaveCount(8);
    await expect(page.locator("#stylists article")).toHaveCount(4);
    await expect(page.locator("#gallery article")).toHaveCount(3);
    await expect(page.locator("#gallery img")).toHaveCount(6);
    await expect(page.locator("#reviews article")).toHaveCount(3);
    await expect(page.locator('form input[name="website"]')).toHaveCount(1);
  });

  test("filters services and supports keyboard pricing tabs", async ({ page }) => {
    await page.getByRole("button", { name: "Skin", exact: true }).first().click();
    await expect(page.locator("#services article")).toHaveCount(1);
    await expect(page.locator("#services")).toContainText("Hydra Facial");

    const hairTab = page.getByRole("tab", { name: "Hair" });
    await hairTab.focus();
    await page.keyboard.press("ArrowRight");
    await expect(page.getByRole("tab", { name: "Skin" })).toHaveAttribute("aria-selected", "true");
    await expect(page.getByRole("tabpanel")).toContainText("Hydra Facial");
  });

  test("mobile navigation opens, links to anchors, and closes", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    const menuButton = page.getByRole("button", { name: "Open navigation menu" });
    await menuButton.click();
    await expect(page.getByRole("link", { name: "Services", exact: true }).first()).toBeVisible();
    await page.getByRole("link", { name: "Services", exact: true }).first().click();
    await expect(page).toHaveURL(/#services$/);
    await expect(page.getByRole("button", { name: "Open navigation menu" })).toBeVisible();
  });

  test("theme persists and form validation never submits a lead", async ({ page }) => {
    let leadRequests = 0;
    page.on("request", (request) => {
      if (request.url().includes("/api/leads")) leadRequests += 1;
    });

    const themeButton = page.getByRole("button", { name: /switch to (dark|light) mode/i });
    await themeButton.click();
    const themeClass = await page.locator("html").getAttribute("class");
    await page.reload();
    await expect(page.locator("html")).toHaveAttribute("class", themeClass ?? "");

    await page.locator('form button[type="submit"]').click();
    await expect(page.getByText("Name must be at least 2 characters")).toBeVisible();
    expect(leadRequests).toBe(0);
  });

  test("shows failed submission state with a mocked API", async ({ page }) => {
    await page.route("**/api/leads", (route) =>
      route.fulfill({ status: 502, contentType: "application/json", body: '{"ok":false}' }),
    );
    const form = page.locator("form");
    await form.locator("#name").fill("Salon Test");
    await form.locator("#email").fill("salon-test@example.com");
    await form.locator("#subject").fill("Mocked failure");
    await form.locator("#message").fill("This request is intercepted and never reaches a live sheet.");
    await form.locator('button[type="submit"]').click();
    await expect(form.getByRole("alert")).toContainText("Something went wrong");
  });

  test("announces success with a mocked API", async ({ page }) => {
    await page.route("**/api/leads", (route) =>
      route.fulfill({ status: 200, contentType: "application/json", body: '{"ok":true}' }),
    );
    const form = page.locator("form");
    await form.locator("#name").fill("Salon Test");
    await form.locator("#email").fill("salon-test@example.com");
    await form.locator("#subject").fill("Mocked success");
    await form.locator("#message").fill("This request is intercepted and never reaches a live sheet.");
    await form.locator('button[type="submit"]').click();
    await expect(page.getByRole("status")).toContainText("Message Sent!");
  });

  test("shows the timeout retry state without reaching a live API", async ({ page }) => {
    await page.route("**/api/leads", async (route) => {
      await new Promise((resolve) => setTimeout(resolve, 20_000));
      await route.fulfill({ status: 200, contentType: "application/json", body: '{"ok":true}' });
    });
    const form = page.locator("form");
    await form.locator("#name").fill("Salon Test");
    await form.locator("#email").fill("salon-test@example.com");
    await form.locator("#subject").fill("Mocked timeout");
    await form.locator("#message").fill("This delayed request is intercepted and never reaches a live sheet.");
    await form.locator('button[type="submit"]').click();
    await expect(form.getByRole("alert")).toContainText("taking longer than expected", {
      timeout: 18_000,
    });
    await expect(form.locator("#name")).toHaveValue("Salon Test");
  });

  test("has no horizontal overflow and no detectable accessibility violations", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "chromium", "Focused Axe check runs once in Chromium.");
    for (const viewport of [
      { width: 1440, height: 1000 },
      { width: 1024, height: 900 },
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
      results.violations.flatMap((violation) => violation.nodes.map((node) => ({
        id: violation.id,
        target: node.target,
        html: node.html,
      }))),
    ).toEqual([]);
  });
});
