"use client";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import type { SalonConfig } from "@/types";

export function SalonGallery({ config }: { config: SalonConfig }) {
  return (
    <section id="gallery" className="section-padding bg-background template-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Before & After"
          title="Real Transformations"
          description="Witness the magic of our award-winning treatments through these stunning transformations."
        />

        <AnimatedSection>
          <div className="grid gap-6 md:grid-cols-3">
            {config.beforeAfter.map((item) => (
              <div key={item.id} className="group overflow-hidden rounded-2xl border bg-card shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-2">
                  <div className="relative overflow-hidden">
                    <img src={item.before} alt="Before"
                      className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute left-2 top-2">
                      <Badge variant="secondary" className="text-xs">Before</Badge>
                    </div>
                  </div>
                  <div className="relative overflow-hidden">
                    <img src={item.after} alt="After"
                      className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute right-2 top-2">
                      <Badge className="bg-rose-500 text-white text-xs">After</Badge>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <p className="font-semibold text-sm">{item.treatment}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
