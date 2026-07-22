import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const environmentKeys = [
  "GOOGLE_SHEET_WEB_APP_URL",
  "NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL",
  "GYM_GOOGLE_SHEET_WEB_APP_URL",
  "NEXT_PUBLIC_GYM_GOOGLE_APPS_SCRIPT_URL",
] as const;

const validLead = {
  template: "gym",
  businessName: "PowerHouse",
  sourcePage: "/templates/gym",
  name: "Test User",
  email: "test@example.com",
  phone: "+94 77 123 4567",
  subject: "Membership enquiry",
  message: "Please send me more information about membership.",
};

function request(body: unknown) {
  return new Request("http://localhost/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

function upstreamResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

beforeEach(() => {
  vi.resetModules();
  for (const key of environmentKeys) delete process.env[key];
  vi.spyOn(console, "error").mockImplementation(() => undefined);
});

afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe("POST /api/leads", () => {
  it("returns success only after Apps Script confirms ok=true", async () => {
    process.env.GYM_GOOGLE_SHEET_WEB_APP_URL =
      "https://script.google.com/macros/s/test-gym/exec";
    const fetchMock = vi.fn().mockResolvedValue(upstreamResponse({ ok: true }));
    vi.stubGlobal("fetch", fetchMock);
    const { POST } = await import("@/app/api/leads/route");

    const response = await POST(request(validLead));

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ ok: true });
    expect(fetchMock).toHaveBeenCalledWith(
      "https://script.google.com/macros/s/test-gym/exec",
      expect.objectContaining({
        method: "POST",
        cache: "no-store",
        redirect: "follow",
      }),
    );
    const options = fetchMock.mock.calls[0][1] as RequestInit;
    expect(JSON.parse(String(options.body))).toMatchObject(validLead);
    expect(JSON.parse(String(options.body))).not.toHaveProperty("website");
  });

  it("turns an Apps Script HTTP error into HTTP 502", async () => {
    process.env.GYM_GOOGLE_SHEET_WEB_APP_URL =
      "https://script.google.com/macros/s/test-gym/exec";
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(upstreamResponse({ ok: false }, 500)));
    const { POST } = await import("@/app/api/leads/route");

    const response = await POST(request(validLead));

    expect(response.status).toBe(502);
    await expect(response.json()).resolves.toMatchObject({ ok: false });
  });

  it("rejects HTTP 200 with ok=false", async () => {
    process.env.GYM_GOOGLE_SHEET_WEB_APP_URL =
      "https://script.google.com/macros/s/test-gym/exec";
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(upstreamResponse({ ok: false })));
    const { POST } = await import("@/app/api/leads/route");

    expect((await POST(request(validLead))).status).toBe(502);
  });

  it("rejects an invalid Apps Script JSON response", async () => {
    process.env.GYM_GOOGLE_SHEET_WEB_APP_URL =
      "https://script.google.com/macros/s/test-gym/exec";
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("not-json")));
    const { POST } = await import("@/app/api/leads/route");

    expect((await POST(request(validLead))).status).toBe(502);
  });

  it("rejects invalid form data before contacting Apps Script", async () => {
    process.env.GYM_GOOGLE_SHEET_WEB_APP_URL =
      "https://script.google.com/macros/s/test-gym/exec";
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    const { POST } = await import("@/app/api/leads/route");

    const response = await POST(request({ ...validLead, email: "not-an-email" }));

    expect(response.status).toBe(400);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("silently accepts a filled honeypot without contacting Apps Script", async () => {
    process.env.GYM_GOOGLE_SHEET_WEB_APP_URL =
      "https://script.google.com/macros/s/test-gym/exec";
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    const { POST } = await import("@/app/api/leads/route");

    const response = await POST(request({ website: "https://spam.example" }));

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ ok: true });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("returns HTTP 503 when an endpoint is missing or untrusted", async () => {
    const { POST } = await import("@/app/api/leads/route");
    expect((await POST(request(validLead))).status).toBe(503);

    process.env.GYM_GOOGLE_SHEET_WEB_APP_URL = "https://example.com/collect";
    expect((await POST(request(validLead))).status).toBe(503);
  });
});
