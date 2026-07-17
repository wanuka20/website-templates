import { expect, test } from "@playwright/test";
import { publicRoutes, templateRoutes } from "./test-data";

test.describe("forms", () => {
  for (const route of ["/contact", ...templateRoutes]) {
    test(`${route} validates required fields and email`, async ({ page }, testInfo) => {
      test.skip(testInfo.project.name !== "chromium", "Form validation is browser-independent.");
      await page.goto(route);
      const form = page.locator("form").last();
      await form.locator('button[type="submit"]').click();
      await expect(form.getByText("Name must be at least 2 characters")).toBeVisible();
      await expect(form.getByText("Please enter a valid email address")).toBeVisible();
      await expect(form.getByText("Subject must be at least 3 characters")).toBeVisible();
      await expect(form.getByText("Message must be at least 10 characters")).toBeVisible();

      await form.locator("#name").fill("A");
      await form.locator("#email").fill("not-an-email");
      await form.locator("#subject").fill("No");
      await form.locator("#message").fill("Too short");
      await form.locator('button[type="submit"]').click();
      await expect(form.getByText("Name must be at least 2 characters")).toBeVisible();
      await expect(form.getByText("Please enter a valid email address")).toBeVisible();
    });
  }
});

test("homepage contact form remains simulated", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "chromium", "Submission behavior is browser-independent.");
  await page.goto("/");
  const form = page.locator("form").last();
  await form.locator("#name").fill("Production Test");
  await form.locator("#email").fill("test@example.com");
  await form.locator("#subject").fill("Simulated test");
  await form.locator("#message").fill("This must not create a real production lead.");
  await form.locator('button[type="submit"]').click();
  await expect(page.getByText("Message Sent!")).toBeVisible();
});

test("theme choice persists after reload", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "chromium", "Theme storage is browser-independent.");
  await page.goto("/templates/gym");
  const themeButton = page.getByRole("button", { name: /theme|dark|light/i }).first();
  await expect(themeButton).toBeVisible();
  await themeButton.click();
  const classAfterClick = await page.locator("html").getAttribute("class");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("class", classAfterClick || "");
});

for (const route of publicRoutes) {
  test(`${route} has no placeholder or unsafe new-tab links`, async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "chromium", "Link semantics are browser-independent.");
    await page.goto(route);
    const problems = await page.locator("a").evaluateAll((links) =>
      links.flatMap((node) => {
        const link = node as HTMLAnchorElement;
        const href = link.getAttribute("href") || "";
        const rel = link.getAttribute("rel") || "";
        const issues: string[] = [];
        if (!href || href === "#" || href.startsWith("javascript:")) {
          issues.push(`placeholder:${link.textContent?.trim() || "unlabelled"}`);
        }
        if (link.target === "_blank" && !rel.includes("noopener")) {
          issues.push(`unsafe-new-tab:${href}`);
        }
        return issues;
      }),
    );
    expect(problems).toEqual([]);
  });
}

test("reduced motion disables non-essential animation", async ({ browser }, testInfo) => {
  test.skip(testInfo.project.name !== "chromium", "Reduced motion is browser-independent.");
  const context = await browser.newContext({ reducedMotion: "reduce" });
  const page = await context.newPage();
  await page.goto("/templates/gym");
  const animated = await page.locator("*").evaluateAll((elements) =>
    elements.filter((element) => {
      const style = getComputedStyle(element);
      const animation = style.animationDuration.split(",").some((value) => parseFloat(value) > 0.01);
      const transition = style.transitionDuration.split(",").some((value) => parseFloat(value) > 0.01);
      return animation || transition;
    }).length,
  );
  expect(animated).toBe(0);
  await context.close();
});
