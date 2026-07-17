import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const urlKeys = [
  "NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL",
  "NEXT_PUBLIC_GYM_GOOGLE_APPS_SCRIPT_URL",
  "NEXT_PUBLIC_RESTAURANT_GOOGLE_APPS_SCRIPT_URL",
  "NEXT_PUBLIC_SALON_GOOGLE_APPS_SCRIPT_URL",
  "NEXT_PUBLIC_REALESTATE_GOOGLE_APPS_SCRIPT_URL",
  "NEXT_PUBLIC_TUITION_GOOGLE_APPS_SCRIPT_URL",
] as const;

beforeEach(() => {
  vi.resetModules();
  for (const key of urlKeys) delete process.env[key];
});

afterEach(() => vi.unstubAllGlobals());

describe("contact Apps Script request construction", () => {
  it("uses the template endpoint and sends correctly encoded source data", async () => {
    process.env.NEXT_PUBLIC_GYM_GOOGLE_APPS_SCRIPT_URL = "https://example.test/gym-leads";
    const fetchMock = vi.fn().mockResolvedValue(undefined);
    vi.stubGlobal("fetch", fetchMock);
    vi.stubGlobal("window", { location: { pathname: "/templates/gym" } });
    const { submitLeadToGoogleSheet } = await import("@/lib/googleSheets");

    await submitLeadToGoogleSheet({
      template: "gym",
      businessName: "Iron & Peak / Fitness",
      data: {
        name: "Test User",
        email: "test+production@example.com",
        phone: "+94 77 123 4567",
        subject: "Question & quote",
        message: "A message with spaces, ampersands & unicode: පුහුණු.",
      },
    });

    const [url, options] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe("https://example.test/gym-leads");
    expect(options).toMatchObject({
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
    });
    expect(JSON.parse(String(options.body))).toMatchObject({
      template: "gym",
      businessName: "Iron & Peak / Fitness",
      sourcePage: "/templates/gym",
      subject: "Question & quote",
    });
  });

  it("uses the shared endpoint when no template endpoint is set", async () => {
    process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL = "https://example.test/shared";
    const fetchMock = vi.fn().mockResolvedValue(undefined);
    vi.stubGlobal("fetch", fetchMock);
    const { submitLeadToGoogleSheet } = await import("@/lib/googleSheets");

    await submitLeadToGoogleSheet({
      template: "salon",
      businessName: "Salon",
      data: { name: "Test", email: "test@example.com", subject: "Test", message: "Long enough" },
    });
    expect(fetchMock).toHaveBeenCalledWith(
      "https://example.test/shared",
      expect.any(Object),
    );
  });

  it("rejects when no endpoint is configured", async () => {
    const { submitLeadToGoogleSheet } = await import("@/lib/googleSheets");
    await expect(
      submitLeadToGoogleSheet({
        template: "tuition",
        businessName: "Tuition",
        data: { name: "Test", email: "test@example.com", subject: "Test", message: "Long enough" },
      }),
    ).rejects.toThrow("Missing Google Apps Script URL for tuition");
  });

  it("surfaces network failures to the form", async () => {
    process.env.NEXT_PUBLIC_RESTAURANT_GOOGLE_APPS_SCRIPT_URL =
      "https://example.test/restaurant-leads";
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("offline")));
    const { submitLeadToGoogleSheet } = await import("@/lib/googleSheets");

    await expect(
      submitLeadToGoogleSheet({
        template: "restaurant",
        businessName: "Restaurant",
        data: { name: "Test", email: "test@example.com", subject: "Test", message: "Long enough" },
      }),
    ).rejects.toThrow("offline");
  });
});
