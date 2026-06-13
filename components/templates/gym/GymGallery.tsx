"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { GymConfig } from "@/types";

export function GymGallery({ config }: { config: GymConfig }) {
  const categories = ["All", ...Array.from(new Set(config.galleryImages.map((i) => i.category).filter(Boolean)))];
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? config.galleryImages
      : config.galleryImages.filter((i) => i.category === active);

  return (
    <section id="gallery" className="section-padding bg-background template-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Gallery"
          title="See Our World-Class Facility"
          description="State-of-the-art equipment, spacious studios, and premium amenities — all under one roof."
        />

        <AnimatedSection>
          {/* Category filter */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat as string)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-all",
                  active === cat
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                    : "border bg-card text-muted-foreground hover:border-orange-500 hover:text-orange-500"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {filtered.map((image, index) => (
              <div
                key={image.id}
                className={cn(
                  "group relative overflow-hidden rounded-xl",
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                )}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={cn(
                    "w-full object-cover transition-transform duration-500 group-hover:scale-105",
                    index === 0 ? "h-64 md:h-full" : "h-40 md:h-48"
                  )}
                />
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/30" />
                {image.category && (
                  <div className="absolute bottom-3 left-3 opacity-0 transition-opacity group-hover:opacity-100">
                    <Badge className="bg-orange-500 text-white text-xs">
                      {image.category}
                    </Badge>
                  </div>
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
