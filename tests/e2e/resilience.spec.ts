import { expect, test } from "@playwright/test";
import { templateRoutes } from "./test-data";

test("mobile navigation can be opened, used, and closed", async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.startsWith("mobile-"), "Mobile projects only.");
  await page.goto("/templates/gym");
  const menuButton = page.locator('header button[aria-haspopup="dialog"]');
  await expect(menuButton).toBeVisible();
  await menuButton.click();
  const mobileLink = page.locator('[role="dialog"] a[href="#about"]');
  await expect(mobileLink).toBeVisible();
  await mobileLink.click();
  await expect(page).toHaveURL(/#about$/);
  await expect(mobileLink).not.toBeVisible();
});

test("template deep links retain readable server-rendered content without JavaScript", async ({ browser }, testInfo) => {
  test.skip(testInfo.project.name !== "chromium", "JavaScript-disabled behavior is browser-independent.");
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  for (const route of templateRoutes) {
    const response = await page.goto(route, { waitUntil: "domcontentloaded" });
    expect(response?.status(), route).toBe(200);
    await expect(page.locator("h1")).toBeVisible();
  }
  await context.close();
});

test("200% zoom does not add horizontal page overflow", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "chromium", "Zoom audit is browser-independent.");
  for (const route of templateRoutes) {
    await page.goto(route);
    await page.evaluate(() => {
      document.documentElement.style.zoom = "2";
    });
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow, route).toBeLessThanOrEqual(1);
  }
});

test("a failed contact request shows a usable error and does not show success", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "chromium", "Failure handling is browser-independent.");
  await page.route("https://script.google.com/**", (route) => route.abort("failed"));
  await page.goto("/templates/gym");
  const form = page.locator("form").last();
  await form.locator("#name").fill("Failure Test");
  await form.locator("#email").fill("failure@example.com");
  await form.locator("#subject").fill("Failure handling");
  await form.locator("#message").fill("This request is intentionally forced to fail.");
  await form.locator('button[type="submit"]').click();
  await expect(form.getByText("Something went wrong. Please try again in a moment.")).toBeVisible();
  await expect(page.getByText("Message Sent!")).toHaveCount(0);
});

test("duplicate clicks create at most one browser request", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "chromium", "Submission concurrency is browser-independent.");
  let submissions = 0;
  await page.route("https://script.google.com/**", async (route) => {
    submissions += 1;
    await new Promise((resolve) => setTimeout(resolve, 250));
    await route.fulfill({ status: 200, body: "{}" });
  });
  await page.goto("/templates/gym");
  const form = page.locator("form").last();
  await form.locator("#name").fill("Duplicate Test");
  await form.locator("#email").fill("duplicate@example.com");
  await form.locator("#subject").fill("Duplicate handling");
  await form.locator("#message").fill("This tests rapid duplicate submission clicks.");
  const submit = form.locator('button[type="submit"]');
  await submit.dblclick({ force: true });
  await expect(page.getByText("Message Sent!")).toBeVisible();
  expect(submissions).toBe(1);
});

test("an Apps Script HTTP error is not reported as success", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "chromium", "HTTP failure handling is browser-independent.");
  await page.route("https://script.google.com/**", (route) =>
    route.fulfill({ status: 500, contentType: "application/json", body: '{"ok":false}' }),
  );
  await page.goto("/templates/gym");
  const form = page.locator("form").last();
  await form.locator("#name").fill("HTTP Failure Test");
  await form.locator("#email").fill("failure@example.com");
  await form.locator("#subject").fill("HTTP failure handling");
  await form.locator("#message").fill("This mocked Apps Script request returns HTTP 500.");
  await form.locator('button[type="submit"]').click();
  await expect(form.getByText("Something went wrong. Please try again in a moment.")).toBeVisible();
  await expect(page.getByText("Message Sent!")).toHaveCount(0);
});
