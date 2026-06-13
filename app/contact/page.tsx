import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/home/ContactSection";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { whatsappConfig } from "@/config/whatsapp";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — WebsiteTemplates",
  description:
    "Get in touch with WebsiteTemplates. Questions about our templates? Need a custom solution? We're here to help.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <div className="bg-gradient-to-br from-slate-900 to-blue-950 py-16 text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="outline" className="mb-4 border-blue-400/40 bg-blue-500/10 text-blue-300">
              Contact
            </Badge>
            <h1 className="text-4xl font-black sm:text-5xl">Let&apos;s Talk</h1>
            <p className="mt-4 text-white/70 max-w-xl mx-auto">
              Have a question or need a custom template? Our team typically responds within a few hours.
            </p>
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton config={whatsappConfig} />
    </div>
  );
}
