"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/shared/ContactForm";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { WhatsAppInline } from "@/components/shared/WhatsAppButton";
import { submitLeadToGoogleSheet } from "@/lib/googleSheets";
import { getGoogleMapsSearchUrl } from "@/lib/contact-links";
import type { GymConfig } from "@/types";

export function GymContact({ config }: { config: GymConfig }) {
  const contactDetails = [
    { icon: Phone, label: "Phone", value: config.phone, href: `tel:${config.phone}` }, { icon: Mail, label: "Email", value: config.email, href: `mailto:${config.email}` },
    { icon: MapPin, label: "Address", value: `${config.address}, ${config.city}`, href: getGoogleMapsSearchUrl(config.address, config.city) }, { icon: Clock, label: "Hours", value: "Mon–Fri: 5am–11pm | Sat–Sun: 6am–10pm" },
  ];
  return <section id="contact" className="section-padding bg-[#080808] template-section"><div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-12"><span className="text-[11px] font-bold uppercase tracking-[0.22em] text-red-500">Get in touch</span><h2 className="mt-4 text-5xl font-black uppercase leading-[0.84] tracking-[-0.065em] text-white sm:text-6xl">Start your <span className="text-red-600">journey.</span></h2></div><div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]"><AnimatedSection direction="left"><div><p className="max-w-md text-sm leading-relaxed text-zinc-400">Ready to transform your fitness? Contact us and we&apos;ll get you started with a free trial session.</p><div className="mt-8 divide-y divide-white/10 border-y border-white/10">{contactDetails.map(({ icon: Icon, label, value, href }) => { const content = <><Icon className="mt-0.5 h-5 w-5 shrink-0 text-red-500" /><div><div className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500">{label}</div><div className="mt-1 text-sm text-zinc-200">{value}</div></div></>; return href ? <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="flex gap-4 py-5 transition-colors hover:bg-white/[0.03] hover:text-white">{content}</a> : <div key={label} className="flex gap-4 py-5">{content}</div>; })}</div><div className="mt-8 border border-red-600 bg-red-600/10 p-6"><h3 className="text-lg font-black uppercase tracking-[-0.03em] text-white">Free trial session</h3><p className="mt-2 text-sm leading-relaxed text-zinc-400">Message us on WhatsApp to claim your free 1-day trial. No commitment required.</p><WhatsAppInline config={config.whatsapp} label="Claim Free Trial" className="mt-5 rounded-none bg-red-600 px-5 text-xs uppercase tracking-[0.12em] hover:bg-red-700" /></div></div></AnimatedSection><AnimatedSection direction="right"><div className="border border-white/15 bg-[#111] p-6 sm:p-8"><h3 className="text-2xl font-black uppercase tracking-[-0.04em] text-white">Send a message</h3><p className="mt-2 text-sm text-zinc-500">We&apos;ll get back to you within 24 hours.</p><ContactForm className="mt-7" accentColor="#dc2626" light onSubmit={({ data, honeypot }) => submitLeadToGoogleSheet({ template: "gym", businessName: config.name, data, honeypot })} /></div></AnimatedSection></div></div></section>;
}
