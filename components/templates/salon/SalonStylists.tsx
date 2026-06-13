"use client";

import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { Scissors } from "lucide-react";
import type { SalonConfig } from "@/types";

export function SalonStylists({ config }: { config: SalonConfig }) {
  return (
    <section id="stylists" className="section-padding bg-rose-50 dark:bg-rose-950/20 template-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Meet Our Team"
          title="Artists Behind the Magic"
          description="Our internationally trained stylists bring passion, skill, and artistry to every appointment."
        />

        <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {config.stylists.map((stylist) => (
            <StaggerItem key={stylist.id}>
              <div className="group overflow-hidden rounded-2xl border bg-white dark:bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="relative h-72 overflow-hidden">
                  <img src={stylist.image} alt={stylist.name}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 p-4">
                    <Badge className="bg-rose-500 text-white text-xs">{stylist.experience}</Badge>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg">{stylist.name}</h3>
                  <p className="text-sm text-rose-500 font-medium">{stylist.role}</p>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-3">{stylist.bio}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {stylist.specialties.map((s) => (
                      <div key={s} className="flex items-center gap-1 text-xs text-muted-foreground bg-muted rounded-full px-2 py-0.5">
                        <Scissors className="h-2.5 w-2.5" />{s}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
