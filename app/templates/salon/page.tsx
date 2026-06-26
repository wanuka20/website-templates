import type { Metadata } from "next";
import { getSalonContent } from "@/lib/template-content";
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

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const config = await getSalonContent();

  return genMeta(config.seo, "/templates/salon");
}

export default async function SalonTemplatePage() {
  const salonConfig = await getSalonContent();

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
