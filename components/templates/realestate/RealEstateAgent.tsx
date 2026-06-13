"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Phone, Mail, Award, Globe } from "lucide-react";
import { WhatsAppInline } from "@/components/shared/WhatsAppButton";
import type { RealEstateConfig } from "@/types";

export function RealEstateAgent({ config }: { config: RealEstateConfig }) {
  const { agent, whatsapp } = config;

  return (
    <section id="agent" className="section-padding bg-emerald-50 dark:bg-emerald-950/20 template-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection direction="left">
            <div className="relative">
              <img src={agent.image} alt={agent.name}
                className="rounded-2xl shadow-2xl w-full object-cover object-top h-[520px]" />
              <div className="absolute -bottom-6 -right-6 hidden lg:block">
                <div className="rounded-2xl bg-emerald-600 p-5 text-white shadow-xl">
                  <div className="text-3xl font-black">{agent.totalSales}</div>
                  <div className="text-xs text-emerald-100">Total Property Sales</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">Meet Your Agent</span>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">{agent.name}</h2>
            <p className="text-emerald-600 font-medium mt-1">{agent.title}</p>

            <div className="mt-4 grid grid-cols-3 gap-4 rounded-2xl border bg-card p-5">
              {[
                { label: "Experience", value: agent.experience },
                { label: "Clients Served", value: agent.clientsServed },
                { label: "Total Sales", value: agent.totalSales },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <div className="text-lg font-black text-emerald-600">{value}</div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-muted-foreground leading-relaxed whitespace-pre-line text-sm">{agent.bio}</p>

            <div className="mt-6">
              <h4 className="mb-3 font-semibold flex items-center gap-2">
                <Award className="h-4 w-4 text-emerald-500" />Certifications
              </h4>
              <div className="flex flex-wrap gap-2">
                {agent.certifications.map((cert) => (
                  <Badge key={cert} variant="secondary" className="text-xs">{cert}</Badge>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h4 className="mb-3 font-semibold flex items-center gap-2">
                <Globe className="h-4 w-4 text-emerald-500" />Languages
              </h4>
              <div className="flex gap-2">
                {agent.languages.map((lang) => (
                  <Badge key={lang} className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 text-xs">{lang}</Badge>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="gap-2 bg-emerald-600 hover:bg-emerald-700 flex-1">
                <a href={`tel:${agent.phone}`}><Phone className="h-4 w-4" />Call {agent.name.split(" ")[0]}</a>
              </Button>
              <WhatsAppInline config={whatsapp} label="WhatsApp" className="flex-1 justify-center" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
