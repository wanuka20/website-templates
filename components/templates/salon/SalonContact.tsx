"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/shared/ContactForm";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { WhatsAppInline } from "@/components/shared/WhatsAppButton";
import { submitLeadToGoogleSheet } from "@/lib/googleSheets";
import { getGoogleMapsSearchUrl } from "@/lib/contact-links";
import type { SalonConfig } from "@/types";

export function SalonContact({ config }: { config: SalonConfig }) {
  return (
    <section id="contact" className="section-padding bg-background template-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Book an Appointment"
          title="Reserve Your Slot"
          description="Contact us to schedule your appointment. We'll confirm within 2 hours."
        />
        <div className="grid gap-12 lg:grid-cols-2">
          <AnimatedSection direction="left">
            <div className="space-y-5">
              {[
                { icon: Phone, label: "Phone", value: config.phone, href: `tel:${config.phone}` },
                { icon: Mail, label: "Email", value: config.email, href: `mailto:${config.email}` },
                { icon: MapPin, label: "Address", value: `${config.address}, ${config.city}`, href: getGoogleMapsSearchUrl(config.address, config.city) },
                { icon: Clock, label: "Hours", value: config.openingHoursText },
              ].map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-100 text-rose-500 dark:bg-rose-900/30">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
                    <div className="mt-0.5 font-medium text-sm">{value}</div>
                  </div>
                  </>
                );

                return href ? (
                  <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="flex items-start gap-4 rounded-xl border bg-card p-5 transition-all hover:border-rose-300 hover:shadow-sm">
                    {content}
                  </a>
                ) : (
                  <div key={label} className="flex items-start gap-4 rounded-xl border bg-card p-5">
                    {content}
                  </div>
                );
              })}
              <div className="rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 p-6 text-white">
                <h3 className="mb-2 font-bold">Quick Booking via WhatsApp</h3>
                <p className="mb-4 text-sm text-white/80">Tell us the service and preferred time and we&apos;ll confirm your slot instantly.</p>
                <WhatsAppInline config={config.whatsapp} label="Book on WhatsApp" className="w-full justify-center" />
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <div className="rounded-2xl border bg-card p-8 shadow-sm">
              <h3 className="mb-6 text-xl font-bold">Send an Enquiry</h3>
              <ContactForm
                accentColor="#f43f5e"
                onSubmit={({ data, honeypot }) =>
                  submitLeadToGoogleSheet({
                    template: "salon",
                    businessName: config.name,
                    data,
                    honeypot,
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
