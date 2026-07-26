export const restaurantDesigns = ["default", "editorial"] as const;
export type RestaurantDesign = (typeof restaurantDesigns)[number];

// Reserved theme HEX values for Restaurant designs.
export const restaurantThemeColors = {
  color1: "#89B0DE",
  color2: "#726F61",
} as const;

// Used when the Sheet value is blank or invalid.
export const restaurantDesign: RestaurantDesign = "editorial";

export function resolveRestaurantDesign(value?: string): RestaurantDesign {
  return restaurantDesigns.includes(value as RestaurantDesign)
    ? (value as RestaurantDesign)
    : restaurantDesign;
}
