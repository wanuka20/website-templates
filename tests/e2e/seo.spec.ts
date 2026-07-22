import { expect, test } from "@playwright/test";
import { publicRoutes } from "./test-data";

for (const route of publicRoutes) {
  test(`SEO metadata: ${route}`, async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "chromium", "Metadata is browser-independent.");
    await page.goto(route);
    expect(await page.title()).not.toBe("");
    const description = await page.locator('meta[name="description"]').getAttribute("content");
    const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
    expect(description?.trim().length).toBeGreaterThanOrEqual(30);
    expect(await page.locator('link[rel="canonical"]').count()).toBe(1);
    expect(new URL(canonical ?? "").pathname).toBe(route);
    expect(await page.locator('meta[property="og:title"]').count()).toBe(1);
    expect(await page.locator('meta[property="og:description"]').count()).toBe(1);
    expect(await page.locator("h1").count()).toBe(1);
  });
}

test("robots, sitemap, and app icon are available", async ({ request }, testInfo) => {
  test.skip(testInfo.project.name !== "chromium", "Static SEO assets are browser-independent.");
  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);
  await expect(robots.text()).resolves.toContain("Sitemap:");
  await expect(robots.text()).resolves.toContain("Disallow: /api/");

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  await expect(sitemap.text()).resolves.toContain("/templates/gym");
  await expect(sitemap.text()).resolves.toContain("/templates/tuition");

  const homepage = await request.get("/");
  const homepageHtml = await homepage.text();
  const iconHref = homepageHtml.match(/<link[^>]+rel="icon"[^>]+href="([^"]+)"/i)?.[1];
  expect(iconHref).toBeDefined();

  const icon = await request.get(iconHref!);
  expect(icon.status()).toBe(200);
  expect(icon.headers()["content-type"]).toMatch(/^image\/png/);
});
