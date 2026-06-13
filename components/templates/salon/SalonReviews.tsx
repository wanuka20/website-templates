"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { StarRating } from "@/components/shared/StarRating";
import { Quote } from "lucide-react";
import { getInitials } from "@/lib/utils";
import type { SalonConfig } from "@/types";

export function SalonReviews({ config }: { config: SalonConfig }) {
  return (
    <section id="reviews" className="section-padding bg-rose-50 dark:bg-rose-950/20 template-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Client Reviews"
          title="Our Clients Love Us"
          description="Hundreds of satisfied clients trust Lumière for their beauty needs."
        />

        <StaggerContainer className="grid gap-6 md:grid-cols-3">
          {config.testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <div className="rounded-2xl bg-white dark:bg-card border p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Quote className="mb-4 h-7 w-7 text-rose-400" />
                <StarRating rating={testimonial.rating} className="mb-4" />
                <p className="mb-6 text-muted-foreground leading-relaxed text-sm">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 ring-2 ring-rose-200">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-rose-500 text-white text-xs">
                      {getInitials(testimonial.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
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
