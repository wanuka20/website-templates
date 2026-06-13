import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PricingSection } from "@/components/home/PricingSection";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { whatsappConfig } from "@/config/whatsapp";
import { Badge } from "@/components/ui/badge";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Simple One-Time Payment",
  description:
    "Transparent pricing for our website templates. One-time payment, no subscriptions. Own your template forever.",
};

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <div className="bg-gradient-to-br from-slate-900 to-blue-950 py-16 text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="outline" className="mb-4 border-blue-400/40 bg-blue-500/10 text-blue-300">
              Pricing
            </Badge>
            <h1 className="text-4xl font-black sm:text-5xl">Simple, Transparent Pricing</h1>
            <p className="mt-4 text-white/70 max-w-xl mx-auto">
              Pay once, own forever. No subscriptions, no hidden costs. Launch your business website today.
            </p>
          </div>
        </div>
        <PricingSection />
        <FeaturesSection />
      </main>
      <Footer />
      <WhatsAppButton config={whatsappConfig} />
    </div>
  );
}
