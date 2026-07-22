import { afterEach, describe, expect, it, vi } from "vitest";

afterEach(() => {
  delete process.env.NEXT_PUBLIC_LEAD_SUBMISSION_TIMEOUT_MS;
  vi.resetModules();
  vi.unstubAllGlobals();
});

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

const submission = {
  template: "gym" as const,
  businessName: "Iron & Peak / Fitness",
  data: {
    name: "Test User",
    email: "test+production@example.com",
    phone: "+94 77 123 4567",
    subject: "Question & quote",
    message: "A message with spaces, ampersands & unicode: පුහුණු.",
  },
};

describe("contact lead proxy request construction", () => {
  it("uses the same-origin proxy and sends the complete lead payload", async () => {
    const fetchMock = vi.fn().mockResolvedValue(jsonResponse({ ok: true }));
    vi.stubGlobal("fetch", fetchMock);
    vi.stubGlobal("window", { location: { pathname: "/templates/gym" } });
    const { submitLeadToGoogleSheet } = await import("@/lib/googleSheets");

    await submitLeadToGoogleSheet(submission);

    const [url, options] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe("/api/leads");
    expect(options).toMatchObject({
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    expect(options).not.toHaveProperty("mode");
    expect(JSON.parse(String(options.body))).toMatchObject({
      template: "gym",
      businessName: "Iron & Peak / Fitness",
      sourcePage: "/templates/gym",
      phone: "+94 77 123 4567",
      subject: "Question & quote",
    });
  });

  it("includes the honeypot only in the proxy payload", async () => {
    const fetchMock = vi.fn().mockResolvedValue(jsonResponse({ ok: true }));
    vi.stubGlobal("fetch", fetchMock);
    const { submitLeadToGoogleSheet } = await import("@/lib/googleSheets");

    await submitLeadToGoogleSheet({ ...submission, honeypot: "bot-filled-value" });

    expect(JSON.parse(String(fetchMock.mock.calls[0][1].body))).toMatchObject({
      website: "bot-filled-value",
    });
  });

  it("rejects an HTTP error response", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(jsonResponse({ ok: false }, 500)));
    const { submitLeadToGoogleSheet } = await import("@/lib/googleSheets");

    await expect(submitLeadToGoogleSheet(submission)).rejects.toThrow(
      "The message could not be sent.",
    );
  });

  it("rejects HTTP 200 when the proxy reports ok=false", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(jsonResponse({ ok: false })));
    const { submitLeadToGoogleSheet } = await import("@/lib/googleSheets");

    await expect(submitLeadToGoogleSheet(submission)).rejects.toThrow(
      "The message could not be sent.",
    );
  });

  it("rejects malformed JSON instead of assuming success", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response("not-json", {
          status: 200,
          headers: { "Content-Type": "text/plain" },
        }),
      ),
    );
    const { submitLeadToGoogleSheet } = await import("@/lib/googleSheets");

    await expect(submitLeadToGoogleSheet(submission)).rejects.toThrow(
      "The message service returned an invalid response.",
    );
  });

  it("surfaces network failures to the form", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("offline")));
    const { submitLeadToGoogleSheet } = await import("@/lib/googleSheets");

    await expect(submitLeadToGoogleSheet(submission)).rejects.toThrow("offline");
  });

  it("aborts a slow request and reports a dedicated timeout error", async () => {
    process.env.NEXT_PUBLIC_LEAD_SUBMISSION_TIMEOUT_MS = "25";
    const fetchMock = vi.fn(
      (_url: string, options: RequestInit) =>
        new Promise<Response>((_resolve, reject) => {
          options.signal?.addEventListener("abort", () => {
            reject(new DOMException("The operation was aborted.", "AbortError"));
          });
        }),
    );
    vi.stubGlobal("fetch", fetchMock);
    vi.stubGlobal("window", { location: { pathname: "/templates/gym" } });
    const { LeadSubmissionTimeoutError, submitLeadToGoogleSheet } = await import(
      "@/lib/googleSheets"
    );

    await expect(submitLeadToGoogleSheet(submission)).rejects.toBeInstanceOf(
      LeadSubmissionTimeoutError,
    );
    expect(fetchMock.mock.calls[0][1]).toMatchObject({ signal: expect.any(AbortSignal) });
  });
});
