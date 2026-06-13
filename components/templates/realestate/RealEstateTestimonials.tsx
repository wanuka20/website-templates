"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { StarRating } from "@/components/shared/StarRating";
import { Quote } from "lucide-react";
import { getInitials } from "@/lib/utils";
import type { RealEstateConfig } from "@/types";

export function RealEstateTestimonials({ config }: { config: RealEstateConfig }) {
  return (
    <section id="testimonials" className="section-padding bg-emerald-950 template-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Client Stories"
          title="Happy Property Owners"
          description="Hundreds of families have found their dream home through Keshan Realty."
          light
        />
        <StaggerContainer className="grid gap-6 md:grid-cols-3">
          {config.testimonials.map((t) => (
            <StaggerItem key={t.id}>
              <div className="rounded-2xl bg-emerald-900/60 border border-emerald-800 p-8 hover:bg-emerald-900 transition-all duration-300 hover:-translate-y-1">
                <Quote className="mb-4 h-7 w-7 text-emerald-400" />
                <StarRating rating={t.rating} className="mb-4" />
                <p className="mb-6 text-emerald-100/80 text-sm leading-relaxed">&ldquo;{t.content}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 ring-2 ring-emerald-500/30">
                    <AvatarImage src={t.avatar} alt={t.name} />
                    <AvatarFallback className="bg-emerald-600 text-white text-xs">{getInitials(t.name)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-white text-sm">{t.name}</div>
                    <div className="text-xs text-emerald-300/60">{t.role}</div>
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
