"use client";

import { Home, TrendingUp, Key, BarChart3, PieChart, FileText } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";
import type { RealEstateConfig } from "@/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home, TrendingUp, Key, BarChart3, PieChart, FileText,
};

export function RealEstateServices({ config }: { config: RealEstateConfig }) {
  return (
    <section id="services" className="section-padding bg-background template-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Services"
          title="Full-Service Real Estate"
          description="End-to-end property solutions — buying, selling, renting, valuation, and investment advisory."
        />
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {config.services.map((service) => {
            const Icon = iconMap[service.icon] ?? Home;
            return (
              <StaggerItem key={service.id}>
                <div className="group rounded-2xl border bg-card p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-emerald-200 dark:hover:border-emerald-800">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 font-bold text-lg">{service.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
