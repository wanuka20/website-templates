import { describe, expect, it } from "vitest";
import { resolveGymDesign } from "@/config/gym-design";
import { resolveRealEstateDesign } from "@/config/realestate-design";
import { resolveRestaurantDesign } from "@/config/restaurant-design";
import { resolveSalonDesign } from "@/config/salon-design";
import { resolveTuitionDesign } from "@/config/tuition-design";

describe("Google Sheets template theme selection", () => {
  it("accepts every currently supported Sheet theme", () => {
    expect(resolveGymDesign("classic")).toBe("classic");
    expect(resolveGymDesign("editorial")).toBe("editorial");
    expect(resolveSalonDesign("default")).toBe("default");
    expect(resolveSalonDesign("liquid-glass")).toBe("liquid-glass");
    expect(resolveRestaurantDesign("default")).toBe("default");
    expect(resolveRestaurantDesign("editorial")).toBe("editorial");
    expect(resolveRealEstateDesign("default")).toBe("default");
    expect(resolveTuitionDesign("default")).toBe("default");
  });

  it("uses the current code setting for blank or invalid Sheet values", () => {
    expect(resolveGymDesign()).toBe("classic");
    expect(resolveGymDesign("unknown")).toBe("classic");
    expect(resolveSalonDesign("unknown")).toBe("default");
    expect(resolveRestaurantDesign("unknown")).toBe("editorial");
    expect(resolveRealEstateDesign("unknown")).toBe("default");
    expect(resolveTuitionDesign("unknown")).toBe("default");
  });
});
