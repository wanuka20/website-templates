import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { gymConfig } from "@/config/gym";

const contentUrlKeys = [
  "GOOGLE_SHEET_WEB_APP_URL",
  "NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL",
  "GYM_GOOGLE_SHEET_WEB_APP_URL",
  "NEXT_PUBLIC_GYM_GOOGLE_APPS_SCRIPT_URL",
  "RESTAURANT_GOOGLE_SHEET_WEB_APP_URL",
  "NEXT_PUBLIC_RESTAURANT_GOOGLE_APPS_SCRIPT_URL",
  "SALON_GOOGLE_SHEET_WEB_APP_URL",
  "NEXT_PUBLIC_SALON_GOOGLE_APPS_SCRIPT_URL",
  "REALESTATE_GOOGLE_SHEET_WEB_APP_URL",
  "NEXT_PUBLIC_REALESTATE_GOOGLE_APPS_SCRIPT_URL",
  "TUITION_GOOGLE_SHEET_WEB_APP_URL",
  "NEXT_PUBLIC_TUITION_GOOGLE_APPS_SCRIPT_URL",
] as const;

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

async function loadModule() {
  vi.resetModules();
  return import("@/lib/template-content");
}

beforeEach(() => {
  for (const key of contentUrlKeys) delete process.env[key];
  delete process.env.GOOGLE_SHEETS_REVALIDATE_SECONDS;
  delete process.env.GOOGLE_SHEETS_REQUEST_TIMEOUT_MS;
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("Google Sheets content normalization and fallback", () => {
  it("uses valid Sheets values and normalizes Drive image URLs", async () => {
    process.env.GYM_GOOGLE_SHEET_WEB_APP_URL = "https://example.test/gym";
    const fetchMock = vi.fn().mockResolvedValue(
      jsonResponse({
        ok: true,
        content: {
          name: "Sheet Gym",
          heroTitle: "Train from the Sheet",
          heroImage: "https://drive.google.com/file/d/drive-file-id/view?usp=sharing",
        },
      }),
    );
    vi.stubGlobal("fetch", fetchMock);

    const { getGymContent } = await loadModule();
    const content = await getGymContent();

    expect(content.name).toBe("Sheet Gym");
    expect(content.heroTitle).toBe("Train from the Sheet");
    expect(content.heroImage).toBe(
      "https://drive.google.com/thumbnail?id=drive-file-id&sz=w1600",
    );
    expect(fetchMock).toHaveBeenCalledWith(
      "https://example.test/gym?action=gymContent&template=gym",
      expect.objectContaining({
        cache: "force-cache",
        next: { revalidate: 300, tags: ["template-content:gym"] },
      }),
    );
  });

  it("preserves local image paths", async () => {
    process.env.GYM_GOOGLE_SHEET_WEB_APP_URL = "https://example.test/gym";
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        jsonResponse({
          ok: true,
          content: {
            heroImage: "/placeholder_images/gym-adminsheet/settings-brand-d12.jpg",
          },
        }),
      ),
    );

    const { getGymContent } = await loadModule();
    const content = await getGymContent();
    expect(content.heroImage).toBe(
      "/placeholder_images/gym-adminsheet/settings-brand-d12.jpg",
    );
  });

  it("falls back field-by-field for empty, malformed, and partial values", async () => {
    process.env.GYM_GOOGLE_SHEET_WEB_APP_URL = "https://example.test/gym";
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        jsonResponse({
          ok: true,
          content: {
            name: "Partially Updated Gym",
            heroTitle: "   ",
            "membership.1.price": "not-a-number",
            "membership.1.highlighted": "not-a-boolean",
          },
        }),
      ),
    );

    const { getGymContent } = await loadModule();
    const content = await getGymContent();
    expect(content.name).toBe("Partially Updated Gym");
    expect(content.heroTitle).toBe(gymConfig.heroTitle);
    expect(content.membership[0].price).toBe(gymConfig.membership[0].price);
    expect(content.membership[0].highlighted).toBe(false);
  });

  it.each([
    ["missing URL", undefined, undefined],
    ["HTTP error", "https://example.test/gym", jsonResponse({}, 503)],
    ["ok=false", "https://example.test/gym", jsonResponse({ ok: false, error: "bad" })],
    ["missing content", "https://example.test/gym", jsonResponse({ ok: true })],
  ])("returns the full fallback for %s", async (_label, url, response) => {
    if (url) process.env.GYM_GOOGLE_SHEET_WEB_APP_URL = url;
    const fetchMock = vi.fn();
    if (response) fetchMock.mockResolvedValue(response);
    vi.stubGlobal("fetch", fetchMock);

    const { getGymContent } = await loadModule();
    expect(await getGymContent()).toEqual(gymConfig);
  });

  it("returns fallback for malformed JSON", async () => {
    process.env.GYM_GOOGLE_SHEET_WEB_APP_URL = "https://example.test/gym";
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("not json")));
    const { getGymContent } = await loadModule();
    expect(await getGymContent()).toEqual(gymConfig);
  });

  it("aborts a slow Apps Script request at the configured timeout", async () => {
    process.env.GYM_GOOGLE_SHEET_WEB_APP_URL = "https://example.test/gym";
    process.env.GOOGLE_SHEETS_REQUEST_TIMEOUT_MS = "10";
    const fetchMock = vi.fn((_url: string, init: RequestInit) =>
      new Promise<Response>((_resolve, reject) => {
        init.signal?.addEventListener("abort", () =>
          reject(new DOMException("Aborted", "AbortError")),
        );
      }),
    );
    vi.stubGlobal("fetch", fetchMock);

    const { getGymContent } = await loadModule();
    const started = Date.now();
    expect(await getGymContent()).toEqual(gymConfig);
    expect(Date.now() - started).toBeLessThan(500);
    expect((fetchMock.mock.calls[0][1] as RequestInit).signal?.aborted).toBe(true);
  });

  it("uses configurable revalidation and independent cache tags", async () => {
    process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL = "https://example.test/common";
    process.env.GOOGLE_SHEETS_REVALIDATE_SECONDS = "30";
    const fetchMock = vi.fn().mockResolvedValue(jsonResponse({ ok: true, content: {} }));
    vi.stubGlobal("fetch", fetchMock);

    const contentModule = await loadModule();
    await Promise.all([
      contentModule.getGymContent(),
      contentModule.getRestaurantContent(),
      contentModule.getSalonContent(),
      contentModule.getRealEstateContent(),
      contentModule.getTuitionContent(),
    ]);

    const tags = fetchMock.mock.calls.map(
      (call) => (call[1] as { next: { tags: string[]; revalidate: number } }).next,
    );
    expect(tags.map((item) => item.tags[0]).sort()).toEqual([
      "template-content:gym",
      "template-content:realestate",
      "template-content:restaurant",
      "template-content:salon",
      "template-content:tuition",
    ]);
    expect(tags.every((item) => item.revalidate === 30)).toBe(true);
  });
});
