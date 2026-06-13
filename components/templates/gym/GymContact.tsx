"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/shared/ContactForm";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { WhatsAppInline } from "@/components/shared/WhatsAppButton";
import type { GymConfig } from "@/types";

export function GymContact({ config }: { config: GymConfig }) {
  const contactDetails = [
    { icon: Phone, label: "Phone", value: config.phone, href: `tel:${config.phone}` },
    { icon: Mail, label: "Email", value: config.email, href: `mailto:${config.email}` },
    { icon: MapPin, label: "Address", value: `${config.address}, ${config.city}`, href: "#" },
    { icon: Clock, label: "Hours", value: "Mon–Fri: 5am–11pm | Sat–Sun: 6am–10pm", href: "#" },
  ];

  return (
    <section id="contact" className="section-padding bg-background template-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Start Your Journey Today"
          description="Ready to transform your fitness? Contact us and we'll get you started with a free trial session."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <AnimatedSection direction="left">
            <div className="space-y-6">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-start gap-4 rounded-xl border bg-card p-5 transition-all hover:border-orange-500 hover:shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {label}
                    </div>
                    <div className="mt-0.5 font-medium">{value}</div>
                  </div>
                </a>
              ))}

              <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 p-6 text-white">
                <h4 className="mb-2 text-lg font-bold">Free Trial Session!</h4>
                <p className="mb-4 text-sm text-white/80">
                  Message us on WhatsApp to claim your free 1-day trial. No commitment required.
                </p>
                <WhatsAppInline
                  config={config.whatsapp}
                  label="Claim Free Trial"
                  className="w-full justify-center"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="rounded-2xl border bg-card p-8 shadow-sm">
              <h3 className="mb-6 text-xl font-bold">Send Us a Message</h3>
              <ContactForm accentColor="#f97316" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
