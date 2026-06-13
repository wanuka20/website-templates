"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/shared/ContactForm";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { WhatsAppInline } from "@/components/shared/WhatsAppButton";
import type { TuitionConfig } from "@/types";

export function TuitionContact({ config }: { config: TuitionConfig }) {
  return (
    <section id="contact" className="section-padding bg-background template-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Enrol Now"
          title="Register for Classes"
          description="Limited seats available. Contact us today to secure your spot for the upcoming term."
        />
        <div className="grid gap-12 lg:grid-cols-2">
          <AnimatedSection direction="left">
            <div className="space-y-5">
              {[
                { icon: Phone, label: "Phone", value: config.phone, href: `tel:${config.phone}` },
                { icon: Mail, label: "Email", value: config.email, href: `mailto:${config.email}` },
                { icon: MapPin, label: "Address", value: `${config.address}, ${config.city}`, href: "#" },
              ].map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} className="flex items-start gap-4 rounded-xl border bg-card p-5 hover:border-blue-300 hover:shadow-sm transition-all">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
                    <div className="mt-0.5 font-medium text-sm">{value}</div>
                  </div>
                </a>
              ))}
              <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white">
                <h4 className="mb-2 font-bold">WhatsApp Registration</h4>
                <p className="mb-4 text-sm text-blue-100">Message us your child&apos;s name, grade, and subjects to start the registration process immediately.</p>
                <WhatsAppInline config={config.whatsapp} label="Register via WhatsApp" className="w-full justify-center" />
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <div className="rounded-2xl border bg-card p-8 shadow-sm">
              <h3 className="mb-6 text-xl font-bold">Registration Enquiry</h3>
              <ContactForm accentColor="#2563eb" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
