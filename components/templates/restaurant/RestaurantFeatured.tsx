"use client";

import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { Flame, Leaf, Star } from "lucide-react";
import type { RestaurantConfig } from "@/types";

export function RestaurantFeatured({ config }: { config: RestaurantConfig }) {
  return (
    <section id="featured" className="section-padding bg-amber-50 dark:bg-amber-950/20 template-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Chef's Recommendations"
          title="Signature Dishes"
          description="Our most celebrated creations — the dishes our guests return for again and again."
        />

        <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {config.featuredDishes.slice(0, 3).map((dish) => (
            <StaggerItem key={dish.id}>
              <div className="group overflow-hidden rounded-2xl border bg-white dark:bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                {dish.image && (
                  <div className="relative h-52 overflow-hidden">
                    <img src={dish.image} alt={dish.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-amber-500 text-white text-xs">
                        <Star className="mr-1 h-3 w-3 fill-white" />Chef&apos;s Pick
                      </Badge>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <div className="rounded-full bg-black/70 px-3 py-1 text-white font-bold text-sm backdrop-blur">
                        LKR {dish.price.toLocaleString()}
                      </div>
                    </div>
                  </div>
                )}
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-1">{dish.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{dish.description}</p>
                  <div className="flex items-center gap-3">
                    {dish.spicy && <div className="flex items-center gap-1 text-xs text-red-500"><Flame className="h-3 w-3" />Spicy</div>}
                    {dish.vegetarian && <div className="flex items-center gap-1 text-xs text-green-600"><Leaf className="h-3 w-3" />Vegetarian</div>}
                    <Badge variant="secondary" className="text-xs ml-auto">{dish.category}</Badge>
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
