import { expect, test } from "@playwright/test";
import { publicRoutes, representativeAsset, templateRoutes } from "./test-data";

for (const route of publicRoutes) {
  test(`${route} renders without runtime or same-origin request failures`, async ({ page }) => {
    const runtimeErrors: string[] = [];
    const failedResponses: string[] = [];

    page.on("pageerror", (error) => runtimeErrors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") runtimeErrors.push(message.text());
    });
    page.on("response", (response) => {
      if (
        page.url().startsWith("http") &&
        new URL(response.url()).origin === new URL(page.url()).origin &&
        response.status() >= 400
      ) {
        failedResponses.push(`${response.status()} ${response.url()}`);
      }
    });

    const response = await page.goto(route, { waitUntil: "domcontentloaded" });
    expect(response?.status(), `HTTP status for ${route}`).toBe(200);
    await expect(page.locator("body")).toBeVisible();
    await expect(page.locator("h1").first()).toBeVisible();

    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight) {
        window.scrollTo(0, y);
        await new Promise((resolve) => setTimeout(resolve, 20));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(300);

    const brokenImages = await page.locator("img").evaluateAll((images) =>
      (images as HTMLImageElement[])
        .filter((image) => image.complete && image.naturalWidth === 0)
        .map((image) => image.getAttribute("src") || image.getAttribute("alt") || "unknown"),
    );
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );

    expect(brokenImages, `broken images on ${route}`).toEqual([]);
    expect(overflow, `horizontal overflow in pixels on ${route}`).toBeLessThanOrEqual(1);
    expect(runtimeErrors, `runtime/console errors on ${route}`).toEqual([]);
    expect(failedResponses, `same-origin HTTP failures on ${route}`).toEqual([]);
  });
}

test("API, static asset, and 404 behavior", async ({ request, page }) => {
  const api = await request.get("/api/gym-content");
  expect(api.status()).toBe(200);
  await expect(api.json()).resolves.toMatchObject({ ok: true, gym: expect.any(Object) });

  const asset = await request.get(representativeAsset);
  expect(asset.status()).toBe(200);
  expect(asset.headers()["content-type"]).toMatch(/^image\//);

  const missing = await page.goto("/__production_readiness_missing_route__");
  expect(missing?.status()).toBe(404);
  await expect(page.getByText("This page could not be found.")).toBeVisible();
});

for (const route of templateRoutes) {
  test(`${route} internal anchors resolve to unique targets`, async ({ page }) => {
    await page.goto(route, { waitUntil: "domcontentloaded" });
    const anchors = await page.locator('a[href^="#"]').evaluateAll((links) =>
      [...new Set(links.map((link) => link.getAttribute("href")).filter(Boolean))],
    );

    expect(anchors.length).toBeGreaterThan(0);
    for (const href of anchors) {
      if (!href || href === "#") continue;
      expect(await page.locator(href).count(), `${route} target ${href}`).toBe(1);
    }
  });
}
