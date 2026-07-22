import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { TemplateShowcase } from "@/components/home/TemplateShowcase";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { PricingSection } from "@/components/home/PricingSection";
import { ContactSection } from "@/components/home/ContactSection";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { whatsappConfig } from "@/config/whatsapp";
import { generateStaticMetadata } from "@/lib/seo";

export const metadata = generateStaticMetadata(
  "WebsiteTemplates — Professional Business Websites in Minutes",
  "Launch your business online with our professional website templates. Built for gyms, salons, restaurants, tuition centres, and real estate agents.",
  "/",
);

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TemplateShowcase />
        <FeaturesSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton config={whatsappConfig} />
    </div>
  );
}
