"use client";

import { Phone, Mail, MapPin, MapIcon } from "lucide-react";
import { ContactForm } from "@/components/shared/ContactForm";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { WhatsAppInline } from "@/components/shared/WhatsAppButton";
import { Badge } from "@/components/ui/badge";
import { submitLeadToGoogleSheet } from "@/lib/googleSheets";
import type { RealEstateConfig } from "@/types";

export function RealEstateContact({ config }: { config: RealEstateConfig }) {
  return (
    <section id="contact" className="section-padding bg-background template-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Property Inquiry"
          title="Let's Find Your Dream Property"
          description="Tell us what you're looking for and we'll find the perfect match from our extensive portfolio."
        />
        <div className="grid gap-12 lg:grid-cols-2">
          <AnimatedSection direction="left">
            <div className="space-y-5">
              {[
                { icon: Phone, label: "Direct Line", value: config.agent.phone, href: `tel:${config.agent.phone}` },
                { icon: Mail, label: "Email", value: config.agent.email, href: `mailto:${config.agent.email}` },
                { icon: MapPin, label: "Office", value: `${config.address}, ${config.city}`, href: "#" },
              ].map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} className="flex items-start gap-4 rounded-xl border bg-card p-5 hover:border-emerald-300 hover:shadow-sm transition-all">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
                    <div className="mt-0.5 font-medium text-sm">{value}</div>
                  </div>
                </a>
              ))}

              <div className="rounded-2xl border bg-card p-5">
                <h4 className="mb-3 font-semibold flex items-center gap-2">
                  <MapIcon className="h-4 w-4 text-emerald-500" />Areas We Cover
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {config.areas.map((area) => (
                    <Badge key={area} variant="secondary" className="text-xs">{area}</Badge>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 p-6 text-white">
                <h4 className="mb-2 font-bold">WhatsApp Property Search</h4>
                <p className="mb-4 text-sm text-white/80">Tell us your budget, preferred location and property type. We&apos;ll send you matching listings right away.</p>
                <WhatsAppInline config={config.whatsapp} label="Search via WhatsApp" className="w-full justify-center" />
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <div className="rounded-2xl border bg-card p-8 shadow-sm">
              <h3 className="mb-6 text-xl font-bold">Property Inquiry Form</h3>
              <ContactForm
                accentColor="#059669"
                onSubmit={(data) =>
                  submitLeadToGoogleSheet({
                    template: "realestate",
                    businessName: config.name,
                    data,
                  })
                }
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
