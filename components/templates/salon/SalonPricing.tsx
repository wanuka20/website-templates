"use client";

import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import type { SalonConfig } from "@/types";

export function SalonPricing({ config }: { config: SalonConfig }) {
  const categories = config.serviceCategories;

  return (
    <section id="pricing" className="section-padding bg-background template-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Pricing"
          title="Clear, Transparent Pricing"
          description="No surprises, no hidden fees. All prices include consultation and aftercare advice."
        />

        <AnimatedSection>
          <Tabs defaultValue={categories[0]} className="w-full">
            <TabsList className="mb-8 flex flex-wrap justify-center gap-1 h-auto bg-transparent">
              {categories.map((cat) => (
                <TabsTrigger key={cat} value={cat}
                  className="rounded-full border data-[state=active]:bg-rose-500 data-[state=active]:text-white data-[state=active]:border-rose-500">
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((cat) => {
              const items = config.pricing.filter((p) => p.category === cat);
              return (
                <TabsContent key={cat} value={cat}>
                  <div className="overflow-hidden rounded-2xl border bg-card">
                    {items.map((item, i) => (
                      <div key={item.id}
                        className={`flex items-center justify-between px-6 py-5 transition-colors hover:bg-muted/30 ${i !== 0 ? "border-t" : ""}`}>
                        <div className="flex-1">
                          <div className="font-semibold">{item.name}</div>
                          <div className="text-sm text-muted-foreground mt-0.5">{item.description}</div>
                        </div>
                        <div className="flex items-center gap-6 ml-4">
                          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                            <Clock className="h-3.5 w-3.5" />{item.duration}
                          </div>
                          <div className="w-32 text-right font-bold text-rose-500">
                            LKR {item.price.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </AnimatedSection>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">Ready for Your Transformation?</h3>
          <p className="text-white/80 mb-6">Book your appointment today — slots fill up quickly!</p>
          <Button size="lg" className="bg-white text-rose-500 hover:bg-white/90 font-bold">
            <a href="#contact">Book an Appointment</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
