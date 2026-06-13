"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { Flame, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";
import type { RestaurantConfig } from "@/types";

export function RestaurantMenu({ config }: { config: RestaurantConfig }) {
  const [activeCategory, setActiveCategory] = useState(config.menuCategories[0]);

  const filtered = config.menu.filter((m) => m.category === activeCategory);

  return (
    <section id="menu" className="section-padding bg-background template-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Menu"
          title="A Symphony of Flavours"
          description="Each dish is crafted from the freshest local ingredients, honouring Sri Lankan culinary traditions."
        />

        <AnimatedSection className="mb-8 flex flex-wrap justify-center gap-2">
          {config.menuCategories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={cn("rounded-full px-5 py-2 text-sm font-medium transition-all",
                activeCategory === cat
                  ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30"
                  : "border bg-card text-muted-foreground hover:border-amber-500 hover:text-amber-500")}>
              {cat}
            </button>
          ))}
        </AnimatedSection>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <StaggerItem key={item.id}>
              <div className="group flex gap-4 rounded-2xl border bg-card p-5 shadow-sm transition-all hover:shadow-md hover:border-amber-200 dark:hover:border-amber-800">
                {item.image && (
                  <img src={item.image} alt={item.name}
                    className="h-20 w-20 flex-shrink-0 rounded-xl object-cover transition-transform group-hover:scale-105" />
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-base leading-tight">{item.name}</h3>
                    <div className="shrink-0 font-bold text-amber-600">
                      LKR {item.price.toLocaleString()}
                    </div>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed line-clamp-2">{item.description}</p>
                  <div className="mt-2 flex items-center gap-2">
                    {item.spicy && (
                      <div className="flex items-center gap-1 text-xs text-red-500">
                        <Flame className="h-3 w-3" />Spicy
                      </div>
                    )}
                    {item.vegetarian && (
                      <div className="flex items-center gap-1 text-xs text-green-600">
                        <Leaf className="h-3 w-3" />Veg
                      </div>
                    )}
                    {item.featured && (
                      <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 text-xs">
                        Chef's Pick
                      </Badge>
                    )}
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
