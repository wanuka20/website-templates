import { expect, test } from "@playwright/test";
import { liveLeadData, templateRoutes } from "./test-data";

test.describe("@live production Apps Script submissions", () => {
  test.skip(
    process.env.RUN_PRODUCTION_LEAD_TESTS !== "1",
    "Set RUN_PRODUCTION_LEAD_TESTS=1 through npm run test:leads.",
  );

  for (const route of templateRoutes) {
    test(`submits exactly one labelled lead from ${route}`, async ({ page }) => {
      await page.goto(route);
      const form = page.locator("form").last();
      await form.locator("#name").fill(liveLeadData.name);
      await form.locator("#email").fill(liveLeadData.email);
      await form.locator("#phone").fill(liveLeadData.phone);
      await form.locator("#subject").fill(liveLeadData.subject);
      await form.locator("#message").fill(`${liveLeadData.message} Source: ${route}`);
      await form.locator('button[type="submit"]').click();
      await expect(page.getByText("Message Sent!")).toBeVisible({ timeout: 15_000 });
    });
  }
});
