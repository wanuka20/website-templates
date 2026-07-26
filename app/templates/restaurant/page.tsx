import type { Metadata } from "next";
import type { ComponentType } from "react";
import { getRestaurantContent } from "@/lib/template-content";
import { generateMetadata as genMeta } from "@/lib/seo";
import { resolveRestaurantDesign, type RestaurantDesign } from "@/config/restaurant-design";
import { RestaurantDefaultTemplate } from "@/components/templates/restaurant/RestaurantDefaultTemplate";
import { RestaurantEditorialTemplate } from "@/components/templates/restaurant/RestaurantEditorialTemplate";
import type { RestaurantConfig } from "@/types";

const restaurantTemplates: Record<RestaurantDesign, ComponentType<{ config: RestaurantConfig }>> = {
  default: RestaurantDefaultTemplate,
  editorial: RestaurantEditorialTemplate,
};

export async function generateMetadata(): Promise<Metadata> {
  const config = await getRestaurantContent();

  return genMeta(config.seo, "/templates/restaurant");
}

export default async function RestaurantTemplatePage() {
  const restaurantConfig = await getRestaurantContent();
  const RestaurantTemplate =
    restaurantTemplates[resolveRestaurantDesign(restaurantConfig.themeTemplate)];

  return <RestaurantTemplate config={restaurantConfig} />;
}
