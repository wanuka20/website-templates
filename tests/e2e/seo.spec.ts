import { expect, test } from "@playwright/test";
import { publicRoutes } from "./test-data";

for (const route of publicRoutes) {
  test(`SEO metadata: ${route}`, async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "chromium", "Metadata is browser-independent.");
    await page.goto(route);
    expect(await page.title()).not.toBe("");
    const description = await page.locator('meta[name="description"]').getAttribute("content");
    expect(description?.trim().length).toBeGreaterThanOrEqual(30);
    expect(await page.locator('link[rel="canonical"]').count()).toBe(1);
    expect(await page.locator('meta[property="og:title"]').count()).toBe(1);
    expect(await page.locator('meta[property="og:description"]').count()).toBe(1);
    expect(await page.locator("h1").count()).toBe(1);
  });
}

test("robots, sitemap, and favicon are available", async ({ request }, testInfo) => {
  test.skip(testInfo.project.name !== "chromium", "Static SEO assets are browser-independent.");
  for (const path of ["/robots.txt", "/sitemap.xml", "/favicon.ico"]) {
    const response = await request.get(path);
    expect(response.status(), path).toBe(200);
  }
});
