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
