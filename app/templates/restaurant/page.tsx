import type { Metadata } from "next";
import { restaurantConfig } from "@/config/restaurant";
import { generateMetadata as genMeta } from "@/lib/seo";
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

export const metadata: Metadata = genMeta(restaurantConfig.seo, "/templates/restaurant");

export default function RestaurantTemplatePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <RestaurantNavbar config={restaurantConfig} />
      <main>
        <RestaurantHero config={restaurantConfig} />
        <RestaurantFeatured config={restaurantConfig} />
        <RestaurantMenu config={restaurantConfig} />
        <RestaurantAbout config={restaurantConfig} />
        <RestaurantTestimonials config={restaurantConfig} />
        <RestaurantGallery config={restaurantConfig} />
        <RestaurantContact config={restaurantConfig} />
      </main>
      <RestaurantFooter config={restaurantConfig} />
      <WhatsAppButton config={restaurantConfig.whatsapp} />
    </div>
  );
}
