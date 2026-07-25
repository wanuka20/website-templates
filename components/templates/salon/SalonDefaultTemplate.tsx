import { SalonNavbar } from "@/components/templates/salon/SalonNavbar";
import { SalonHero } from "@/components/templates/salon/SalonHero";
import { SalonServices } from "@/components/templates/salon/SalonServices";
import { SalonPricing } from "@/components/templates/salon/SalonPricing";
import { SalonStylists } from "@/components/templates/salon/SalonStylists";
import { SalonGallery } from "@/components/templates/salon/SalonGallery";
import { SalonReviews } from "@/components/templates/salon/SalonReviews";
import { SalonContact } from "@/components/templates/salon/SalonContact";
import { SalonFooter } from "@/components/templates/salon/SalonFooter";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import type { SalonConfig } from "@/types";

export function SalonDefaultTemplate({ config }: { config: SalonConfig }) {
  return <div className="flex min-h-screen flex-col"><SalonNavbar config={config} /><main><SalonHero config={config} /><SalonServices config={config} /><SalonPricing config={config} /><SalonStylists config={config} /><SalonGallery config={config} /><SalonReviews config={config} /><SalonContact config={config} /></main><SalonFooter config={config} /><WhatsAppButton config={config.whatsapp} /></div>;
}
