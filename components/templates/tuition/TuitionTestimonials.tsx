"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { StarRating } from "@/components/shared/StarRating";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { Quote } from "lucide-react";
import { getInitials } from "@/lib/utils";
import type { TuitionConfig } from "@/types";

export function TuitionTestimonials({ config }: { config: TuitionConfig }) {
  if (!config.testimonials.length) {
    return null;
  }

  return (
    <section id="testimonials" className="section-padding bg-blue-950 text-white template-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Parent & Student Stories"
          title="Trusted by Families"
          description="Hear from the students and parents who learn with Apex Academy."
          light
        />
        <StaggerContainer className="grid gap-6 md:grid-cols-3">
          {config.testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <div className="rounded-2xl bg-white/10 p-8 transition-transform hover:-translate-y-1">
                <Quote className="mb-4 h-8 w-8 text-blue-300" />
                <p className="mb-6 text-sm leading-relaxed text-white/80">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 ring-2 ring-blue-300/30">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-blue-600 text-white">{getInitials(testimonial.name)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-xs text-white/60">{testimonial.role}</div>
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
