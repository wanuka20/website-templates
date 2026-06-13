"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/shared/ContactForm";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { WhatsAppInline } from "@/components/shared/WhatsAppButton";
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
                { icon: MapPin, label: "Address", value: `${config.address}, ${config.city}`, href: "#" },
                { icon: Clock, label: "Hours", value: "Mon–Sat: 9am–8pm | Sun: 10am–6pm", href: "#" },
              ].map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} className="flex items-start gap-4 rounded-xl border bg-card p-5 transition-all hover:border-rose-300 hover:shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-100 text-rose-500 dark:bg-rose-900/30">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
                    <div className="mt-0.5 font-medium text-sm">{value}</div>
                  </div>
                </a>
              ))}
              <div className="rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 p-6 text-white">
                <h4 className="mb-2 font-bold">Quick Booking via WhatsApp</h4>
                <p className="mb-4 text-sm text-white/80">Tell us the service and preferred time and we&apos;ll confirm your slot instantly.</p>
                <WhatsAppInline config={config.whatsapp} label="Book on WhatsApp" className="w-full justify-center" />
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <div className="rounded-2xl border bg-card p-8 shadow-sm">
              <h3 className="mb-6 text-xl font-bold">Send an Enquiry</h3>
              <ContactForm accentColor="#f43f5e" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
