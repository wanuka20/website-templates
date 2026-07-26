export const realEstateDesigns = ["default"] as const;
export type RealEstateDesign = (typeof realEstateDesigns)[number];

// Reserved theme HEX values for Real Estate designs.
export const realEstateThemeColors = {
  color1: "#0F766E",
  color2: "#1E3A5F",
} as const;

// Used when the Sheet value is blank or invalid.
export const realEstateDesign: RealEstateDesign = "default";

export function resolveRealEstateDesign(value?: string): RealEstateDesign {
  return realEstateDesigns.includes(value as RealEstateDesign)
    ? (value as RealEstateDesign)
    : realEstateDesign;
}
