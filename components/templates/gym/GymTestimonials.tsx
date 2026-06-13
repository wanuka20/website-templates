"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { StarRating } from "@/components/shared/StarRating";
import { Quote } from "lucide-react";
import { getInitials } from "@/lib/utils";
import type { GymConfig } from "@/types";

export function GymTestimonials({ config }: { config: GymConfig }) {
  return (
    <section id="testimonials" className="section-padding bg-zinc-950 template-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Success Stories"
          title="Real Results, Real People"
          description="Don't take our word for it — hear from the members who transformed their lives at IronPeak."
          light
        />

        <StaggerContainer className="grid gap-6 md:grid-cols-3">
          {config.testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <div className="rounded-2xl bg-zinc-800 p-8 transition-all duration-300 hover:bg-zinc-700 hover:-translate-y-1">
                <Quote className="mb-4 h-8 w-8 text-orange-500" />
                <p className="mb-6 text-white/80 leading-relaxed text-sm">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 ring-2 ring-orange-500/30">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-orange-500 text-white">
                      {getInitials(testimonial.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-xs text-white/50">{testimonial.role}</div>
                    <StarRating rating={testimonial.rating} size="sm" className="mt-1" />
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
