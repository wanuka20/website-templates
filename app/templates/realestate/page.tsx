import type { Metadata } from "next";
import { realestateConfig } from "@/config/realestate";
import { generateMetadata as genMeta } from "@/lib/seo";
import { RealEstateNavbar } from "@/components/templates/realestate/RealEstateNavbar";
import { RealEstateHero } from "@/components/templates/realestate/RealEstateHero";
import { RealEstateProperties } from "@/components/templates/realestate/RealEstateProperties";
import { RealEstateAgent } from "@/components/templates/realestate/RealEstateAgent";
import { RealEstateServices } from "@/components/templates/realestate/RealEstateServices";
import { RealEstateTestimonials } from "@/components/templates/realestate/RealEstateTestimonials";
import { RealEstateContact } from "@/components/templates/realestate/RealEstateContact";
import { RealEstateFooter } from "@/components/templates/realestate/RealEstateFooter";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

export const metadata: Metadata = genMeta(realestateConfig.seo, "/templates/realestate");

export default function RealEstateTemplatePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <RealEstateNavbar config={realestateConfig} />
      <main>
        <RealEstateHero config={realestateConfig} />
        <RealEstateProperties config={realestateConfig} />
        <RealEstateAgent config={realestateConfig} />
        <RealEstateServices config={realestateConfig} />
        <RealEstateTestimonials config={realestateConfig} />
        <RealEstateContact config={realestateConfig} />
      </main>
      <RealEstateFooter config={realestateConfig} />
      <WhatsAppButton config={realestateConfig.whatsapp} />
    </div>
  );
}
