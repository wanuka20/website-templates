export const gymDesigns = ["editorial", "classic"] as const;
export type GymDesign = (typeof gymDesigns)[number];

// Reserved theme HEX values for Gym designs.
export const gymThemeColors = {
  color1: "#DC2626",
  color2: "#171717",
} as const;

// Used when the Sheet value is blank or invalid.
export const gymDesign: GymDesign = "classic";

export function resolveGymDesign(value?: string): GymDesign {
  return gymDesigns.includes(value as GymDesign)
    ? (value as GymDesign)
    : gymDesign;
}
