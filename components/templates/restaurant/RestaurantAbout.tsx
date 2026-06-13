"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Clock } from "lucide-react";
import type { RestaurantConfig } from "@/types";

export function RestaurantAbout({ config }: { config: RestaurantConfig }) {
  return (
    <section id="about" className="section-padding bg-background template-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection direction="left">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80"
                alt="Restaurant interior" className="rounded-2xl object-cover h-64 w-full" />
              <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&q=80"
                alt="Chef" className="rounded-2xl object-cover h-64 w-full mt-8" />
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <span className="text-sm font-semibold uppercase tracking-widest text-amber-500">Our Story</span>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              Where Tradition Meets <span className="text-amber-500">Modernity</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{config.description}</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every recipe has been perfected over generations, using only the finest locally sourced ingredients.
              Our chefs bring decades of expertise to every plate, ensuring an experience that&apos;s truly unforgettable.
            </p>
            <div className="mt-8 rounded-2xl border bg-card p-6">
              <h4 className="mb-4 font-bold flex items-center gap-2">
                <Clock className="h-5 w-5 text-amber-500" />Opening Hours
              </h4>
              <div className="space-y-2">
                {config.openingHours.map((hours) => (
                  <div key={hours.day} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{hours.day}</span>
                    <span className="font-medium">
                      {hours.closed ? "Closed" : `${hours.open} – ${hours.close}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
