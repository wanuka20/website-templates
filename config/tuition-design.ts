export const tuitionDesigns = ["default"] as const;
export type TuitionDesign = (typeof tuitionDesigns)[number];

// Reserved theme HEX values for Tuition designs.
export const tuitionThemeColors = {
  color1: "#4F46E5",
  color2: "#0F172A",
} as const;

// Used when the Sheet value is blank or invalid.
export const tuitionDesign: TuitionDesign = "default";

export function resolveTuitionDesign(value?: string): TuitionDesign {
  return tuitionDesigns.includes(value as TuitionDesign)
    ? (value as TuitionDesign)
    : tuitionDesign;
}
