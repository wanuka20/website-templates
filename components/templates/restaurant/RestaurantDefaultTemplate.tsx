import { RestaurantNavbar } from "@/components/templates/restaurant/RestaurantNavbar";
import { RestaurantHero } from "@/components/templates/restaurant/RestaurantHero";
import { RestaurantFeatured } from "@/components/templates/restaurant/RestaurantFeatured";
import { RestaurantMenu } from "@/components/templates/restaurant/RestaurantMenu";
import { RestaurantAbout } from "@/components/templates/restaurant/RestaurantAbout";
import { RestaurantTestimonials } from "@/components/templates/restaurant/RestaurantTestimonials";
import { RestaurantGallery } from "@/components/templates/restaurant/RestaurantGallery";
import { RestaurantContact } from "@/components/templates/restaurant/RestaurantContact";
import { RestaurantFooter } from "@/components/templates/restaurant/RestaurantFooter";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import type { RestaurantConfig } from "@/types";

export function RestaurantDefaultTemplate({ config }: { config: RestaurantConfig }) {
  return <div className="flex min-h-screen flex-col"><RestaurantNavbar config={config} /><main><RestaurantHero config={config} /><RestaurantFeatured config={config} /><RestaurantMenu config={config} /><RestaurantAbout config={config} /><RestaurantTestimonials config={config} /><RestaurantGallery config={config} /><RestaurantContact config={config} /></main><RestaurantFooter config={config} /><WhatsAppButton config={config.whatsapp} /></div>;
}
