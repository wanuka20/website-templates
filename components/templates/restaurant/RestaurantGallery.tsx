"use client";

import { SectionHeader } from "@/components/shared/SectionHeader";
import Image from "next/image";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import type { RestaurantConfig } from "@/types";

export function RestaurantGallery({ config }: { config: RestaurantConfig }) {
  return (
    <section id="gallery" className="section-padding bg-background template-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Gallery"
          title="Ambience & Artistry"
          description="Every detail — from the décor to the plating — is crafted for your experience."
        />
        <AnimatedSection>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {config.galleryImages.map((image, i) => (
              <div key={image.id}
                className={`group relative overflow-hidden rounded-xl ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
                <Image src={image.src} alt={image.alt} width={800} height={600}
                  sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw"
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${i === 0 ? "h-80 md:h-full" : "h-36 md:h-44"}`} />
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
