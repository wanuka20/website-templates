"use client";

import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/shared/ContactForm";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+94 77 123 4567",
    href: "tel:+94771234567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@websitetemplates.lk",
    href: "mailto:hello@websitetemplates.lk",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Colombo, Sri Lanka",
    href: "#",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us instantly",
    href: "https://wa.me/94771234567",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's Build Your Website"
          description="Have questions about our templates or need a custom solution? We'd love to hear from you."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <AnimatedSection direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="mb-4 text-2xl font-bold">We&apos;re here to help</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you need help choosing the right template, customising
                  it for your brand, or have any technical questions — our team
                  is ready to assist you.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-start gap-3 rounded-xl border bg-card p-4 transition-all hover:border-primary hover:shadow-sm"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          {item.label}
                        </div>
                        <div className="mt-0.5 text-sm font-medium group-hover:text-primary transition-colors">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-primary to-blue-600 p-6 text-white">
                <h4 className="mb-2 text-lg font-bold">Quick Response Guaranteed</h4>
                <p className="text-sm text-white/80">
                  Message us on WhatsApp for the fastest response. We typically reply within 30 minutes during business hours.
                </p>
                <a
                  href="https://wa.me/94771234567?text=Hi! I'm interested in your website templates."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#128C7E]"
                >
                  <MessageCircle className="h-4 w-4 fill-white" />
                  Open WhatsApp
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection direction="right">
            <div className="rounded-2xl border bg-card p-8 shadow-sm">
              <h3 className="mb-6 text-xl font-bold">Send Us a Message</h3>
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
