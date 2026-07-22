import { describe, expect, it } from "vitest";
import { getGoogleMapsSearchUrl } from "@/lib/contact-links";

describe("getGoogleMapsSearchUrl", () => {
  it("creates an encoded Google Maps search URL from address parts", () => {
    expect(getGoogleMapsSearchUrl("12 Main St.", "Colombo 03")).toBe(
      "https://www.google.com/maps/search/?api=1&query=12%20Main%20St.%2C%20Colombo%2003",
    );
  });

  it("ignores empty address parts", () => {
    expect(getGoogleMapsSearchUrl("", " Colombo ")).toBe(
      "https://www.google.com/maps/search/?api=1&query=Colombo",
    );
  });

  it("returns undefined when no location is available", () => {
    expect(getGoogleMapsSearchUrl(undefined, "   ")).toBeUndefined();
  });
});
