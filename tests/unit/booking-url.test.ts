import { describe, expect, it } from "vitest";
import { isExternalBookingUrl, resolveBookingUrl } from "@/lib/booking-url";

describe("booking URL resolution", () => {
  it("uses the contact section when no booking URL is configured", () => {
    expect(resolveBookingUrl()).toBe("#contact");
    expect(resolveBookingUrl("  ")).toBe("#contact");
  });

  it("allows page anchors and HTTP(S) booking services", () => {
    expect(resolveBookingUrl("#contact")).toBe("#contact");
    expect(resolveBookingUrl("https://www.fresha.com/a/salon")).toBe(
      "https://www.fresha.com/a/salon",
    );
    expect(isExternalBookingUrl("https://www.fresha.com/a/salon")).toBe(true);
  });

  it("migrates the legacy #booking link to the contact form", () => {
    expect(resolveBookingUrl("#booking")).toBe("#contact");
  });

  it("rejects unsafe booking protocols", () => {
    expect(resolveBookingUrl("javascript:alert(1)")).toBe("#contact");
    expect(isExternalBookingUrl("#contact")).toBe(false);
  });
});
