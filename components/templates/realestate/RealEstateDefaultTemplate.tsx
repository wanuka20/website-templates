import { RealEstateNavbar } from "@/components/templates/realestate/RealEstateNavbar";
import { RealEstateHero } from "@/components/templates/realestate/RealEstateHero";
import { RealEstateProperties } from "@/components/templates/realestate/RealEstateProperties";
import { RealEstateAgent } from "@/components/templates/realestate/RealEstateAgent";
import { RealEstateServices } from "@/components/templates/realestate/RealEstateServices";
import { RealEstateTestimonials } from "@/components/templates/realestate/RealEstateTestimonials";
import { RealEstateContact } from "@/components/templates/realestate/RealEstateContact";
import { RealEstateFooter } from "@/components/templates/realestate/RealEstateFooter";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import type { RealEstateConfig } from "@/types";

export function RealEstateDefaultTemplate({ config }: { config: RealEstateConfig }) {
  return <div className="flex min-h-screen flex-col"><RealEstateNavbar config={config} /><main><RealEstateHero config={config} /><RealEstateProperties config={config} /><RealEstateAgent config={config} /><RealEstateServices config={config} /><RealEstateTestimonials config={config} /><RealEstateContact config={config} /></main><RealEstateFooter config={config} /><WhatsAppButton config={config.whatsapp} /></div>;
}
