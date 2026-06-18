"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/shared/ContactForm";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { WhatsAppInline } from "@/components/shared/WhatsAppButton";
import { submitLeadToGoogleSheet } from "@/lib/googleSheets";
import type { RestaurantConfig } from "@/types";

export function RestaurantContact({ config }: { config: RestaurantConfig }) {
  return (
    <section id="contact" className="section-padding bg-background template-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Reservations"
          title="Book Your Table"
          description="Reserve your table for an unforgettable dining experience. We recommend booking in advance for weekends."
        />
        <div className="grid gap-12 lg:grid-cols-2">
          <AnimatedSection direction="left">
            <div className="space-y-5">
              {[
                { icon: Phone, label: "Reservations", value: config.reservationPhone, href: `tel:${config.reservationPhone}` },
                { icon: Mail, label: "Email", value: config.email, href: `mailto:${config.email}` },
                { icon: MapPin, label: "Address", value: `${config.address}, ${config.city}`, href: "#" },
                { icon: Clock, label: "Kitchen Hours", value: "Open from 12:00 PM daily", href: "#" },
              ].map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} className="flex items-start gap-4 rounded-xl border bg-card p-5 hover:border-amber-300 hover:shadow-sm transition-all">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-900/30">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
                    <div className="mt-0.5 font-medium text-sm">{value}</div>
                  </div>
                </a>
              ))}
              <div className="rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 p-6 text-white">
                <h4 className="mb-2 font-bold">Instant Reservation via WhatsApp</h4>
                <p className="mb-4 text-sm text-white/80">Tell us your preferred date, time, and party size — we&apos;ll confirm immediately.</p>
                <WhatsAppInline config={config.whatsapp} label="Reserve on WhatsApp" className="w-full justify-center" />
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <div className="rounded-2xl border bg-card p-8 shadow-sm">
              <h3 className="mb-6 text-xl font-bold">Make a Reservation</h3>
              <ContactForm
                accentColor="#f59e0b"
                onSubmit={(data) =>
                  submitLeadToGoogleSheet({
                    template: "restaurant",
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
