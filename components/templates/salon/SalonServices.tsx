"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SalonConfig } from "@/types";

export function SalonServices({ config }: { config: SalonConfig }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...config.serviceCategories];

  const filtered = activeCategory === "All"
    ? config.services
    : config.services.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="section-padding bg-background template-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Services"
          title="Treatments for Every You"
          description="From everyday glam to bridal transformations — we have a service for every occasion."
        />

        <AnimatedSection className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={cn("rounded-full px-5 py-2 text-sm font-medium transition-all",
                activeCategory === cat
                  ? "bg-rose-500 text-white shadow-lg shadow-rose-500/30"
                  : "border bg-card text-muted-foreground hover:border-rose-500 hover:text-rose-500"
              )}>
              {cat}
            </button>
          ))}
        </AnimatedSection>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((service) => (
            <StaggerItem key={service.id}>
              <div className="group rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-rose-200 dark:hover:border-rose-800">
                <Badge variant="secondary" className="mb-4 text-xs">{service.category}</Badge>
                <h3 className="mb-2 font-bold text-base group-hover:text-rose-500 transition-colors">{service.name}</h3>
                <p className="mb-4 text-xs text-muted-foreground leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />{service.duration}
                  </div>
                  <div className="font-bold text-rose-500">LKR {service.price.toLocaleString()}</div>
                </div>
                <a href="#contact"
                  className="mt-4 flex items-center gap-1 text-xs font-medium text-rose-500 opacity-0 transition-opacity group-hover:opacity-100">
                  Book Now <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
