export const salonDesigns = ["default", "liquid-glass"] as const;
export type SalonDesign = (typeof salonDesigns)[number];

export type SalonThemeColors = {
  color1: string;
  color2: string;
};

// Change these HEX values to customize the default Salon design.
export const salonDefaultThemeColors: SalonThemeColors = {
  color1: "#F43F5E",
  color2: "#DB2777",
};

// Change these HEX values to customize the liquid-glass Salon design.
export const salonLiquidGlassThemeColors: SalonThemeColors = {
  color1: "#f7c3e1",
  color2: "#fcd2d2",
};

// Keep each design's colors together so the active renderer can select its own theme.
export const salonThemeColors: Record<SalonDesign, SalonThemeColors> = {
  default: salonDefaultThemeColors,
  "liquid-glass": salonLiquidGlassThemeColors,
};

// Used when the Sheet value is blank or invalid.
export const salonDesign: SalonDesign = "default";

export function resolveSalonDesign(value?: string): SalonDesign {
  return salonDesigns.includes(value as SalonDesign)
    ? (value as SalonDesign)
    : salonDesign;
}
