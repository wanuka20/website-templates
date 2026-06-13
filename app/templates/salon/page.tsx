import type { Metadata } from "next";
import { salonConfig } from "@/config/salon";
import { generateMetadata as genMeta } from "@/lib/seo";
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

export const metadata: Metadata = genMeta(salonConfig.seo, "/templates/salon");

export default function SalonTemplatePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SalonNavbar config={salonConfig} />
      <main>
        <SalonHero config={salonConfig} />
        <SalonServices config={salonConfig} />
        <SalonPricing config={salonConfig} />
        <SalonStylists config={salonConfig} />
        <SalonGallery config={salonConfig} />
        <SalonReviews config={salonConfig} />
        <SalonContact config={salonConfig} />
      </main>
      <SalonFooter config={salonConfig} />
      <WhatsAppButton config={salonConfig.whatsapp} />
    </div>
  );
}
