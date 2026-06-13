"use client";

import { Check } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeader } from "@/components/shared/SectionHeader";
import type { GymConfig } from "@/types";

export function GymAbout({ config }: { config: GymConfig }) {
  return (
    <section id="about" className="section-padding bg-background template-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection direction="left">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=700&q=80"
                alt="Gym interior"
                className="rounded-2xl shadow-2xl w-full object-cover h-[480px]"
              />
              <div className="absolute -bottom-6 -right-6 hidden lg:block">
                <div className="rounded-2xl bg-orange-500 p-6 text-white shadow-xl">
                  <div className="text-4xl font-black">10+</div>
                  <div className="text-sm font-medium opacity-90">Years of Excellence</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
                About Us
              </span>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                More Than a Gym —{" "}
                <span className="text-orange-500">A Lifestyle</span>
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {config.description}
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Founded with a single mission — to make world-class fitness accessible to everyone in {config.city}. Whether you&apos;re a first-timer or a seasoned athlete, we have everything you need to reach your goals.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {config.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 shrink-0 text-orange-500" />
                    {amenity}
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
