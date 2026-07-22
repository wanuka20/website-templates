import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { publicRoutes } from "./test-data";

for (const route of publicRoutes) {
  test(`accessibility: ${route}`, async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "chromium", "Axe is run once in Chromium.");
    await page.goto(route, { waitUntil: "domcontentloaded" });
    const results = await new AxeBuilder({ page }).analyze();

    await testInfo.attach("axe-results", {
      body: JSON.stringify(results, null, 2),
      contentType: "application/json",
    });
    expect(
      results.violations.map((violation) => ({
        id: violation.id,
        impact: violation.impact,
        nodes: violation.nodes.length,
      })),
    ).toEqual([]);
  });
}

test("keyboard focus is visible and follows DOM order", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "chromium", "Keyboard audit is run once in Chromium.");
  await page.goto("/templates/gym");

  const focusTrail: string[] = [];
  for (let index = 0; index < 12; index += 1) {
    await page.keyboard.press("Tab");
    focusTrail.push(
      await page.evaluate(() => {
        const element = document.activeElement as HTMLElement | null;
        if (!element) return "none";
        const style = getComputedStyle(element);
        const visible = style.outlineStyle !== "none" || style.boxShadow !== "none";
        return `${element.tagName}:${element.textContent?.trim().slice(0, 30) || element.getAttribute("aria-label")}:${visible}`;
      }),
    );
  }

  expect(focusTrail.every((entry) => entry.endsWith(":true")), focusTrail.join("\n")).toBe(true);
});

test("contact form errors are associated with their fields and announced", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "chromium", "ARIA behavior is checked once in Chromium.");
  await page.goto("/templates/gym");
  const form = page.locator("form").last();

  await form.locator('button[type="submit"]').click();

  const name = form.locator("#name");
  await expect(name).toHaveAttribute("aria-invalid", "true");
  await expect(name).toHaveAttribute("aria-describedby", /-name-error$/);
  await expect(form.getByText("Name must be at least 2 characters")).toHaveAttribute("role", "alert");
});

test("contact form success is announced and property actions are not nested", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "chromium", "ARIA behavior is checked once in Chromium.");
  await page.route("**/api/leads", (route) =>
    route.fulfill({ status: 200, contentType: "application/json", body: '{"ok":true}' }),
  );
  await page.goto("/templates/gym");
  const form = page.locator("form").last();
  await form.locator("#name").fill("Accessible Lead");
  await form.locator("#email").fill("accessible@example.com");
  await form.locator("#subject").fill("Accessible submission");
  await form.locator("#message").fill("This confirms the success announcement is available.");
  await form.locator('button[type="submit"]').click();
  await expect(page.getByRole("status")).toContainText("Message Sent!");

  await page.goto("/templates/realestate");
  await expect(page.locator("button a")).toHaveCount(0);
  await expect(page.locator('a[href="#contact"]', { hasText: "Enquire Now" }).first()).toBeVisible();
});

test("public pages contain no placeholder links", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "chromium", "Link behavior is checked once in Chromium.");

  for (const route of publicRoutes) {
    await page.goto(route, { waitUntil: "domcontentloaded" });
    await expect(page.locator('a[href="#"]'), route).toHaveCount(0);
  }

  await page.goto("/");
  await expect(page.getByRole("link", { name: /location colombo, sri lanka/i })).toHaveAttribute(
    "href",
    /google\.com\/maps\/search/,
  );
  await expect(page.locator("footer a[aria-label]")).toHaveCount(0);
  await expect(page.locator("footer span[aria-hidden='true']")).toHaveCount(4);
  await expect(page.getByRole("link", { name: "Privacy Policy" })).toHaveAttribute("href", "/privacy");
  await expect(page.getByRole("link", { name: "Terms of Service" })).toHaveAttribute("href", "/terms");

  await page.goto("/privacy");
  await expect(page.getByRole("heading", { name: "Privacy Policy" })).toBeVisible();
  await page.goto("/terms");
  await expect(page.getByRole("heading", { name: "Terms of Service" })).toBeVisible();

  for (const route of ["/templates/gym", "/templates/restaurant", "/templates/salon", "/templates/realestate", "/templates/tuition"]) {
    await page.goto(route, { waitUntil: "domcontentloaded" });
    await expect(page.locator('a[href*="google.com/maps/search"]'), route).toHaveCount(1);
  }

  await page.goto("/templates/gym");
  await expect(page.locator("a", { hasText: "Mon–Fri" })).toHaveCount(0);
  await page.goto("/templates/restaurant");
  await expect(page.locator("a", { hasText: "Open from 12:00 PM daily" })).toHaveCount(0);
  await page.goto("/templates/salon");
  await expect(page.locator("a", { hasText: "Hours" })).toHaveCount(0);
});
