"use client";

import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";
import type { GymConfig } from "@/types";

export function GymMembership({ config }: { config: GymConfig }) {
  return (
    <section
      id="membership"
      className="section-padding bg-zinc-950 template-section"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Membership Plans"
          title="Choose Your Path"
          description="Flexible plans designed for every fitness goal and budget. No contracts — cancel anytime."
          light
        />

        <StaggerContainer className="grid gap-8 md:grid-cols-3">
          {config.membership.map((plan) => (
            <StaggerItem key={plan.id}>
              <div
                className={cn(
                  "relative flex flex-col overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1",
                  plan.highlighted
                    ? "bg-orange-500 text-white shadow-2xl shadow-orange-500/30"
                    : "bg-zinc-800 text-white hover:bg-zinc-700"
                )}
              >
                {plan.badge && (
                  <div className="absolute right-4 top-4">
                    <Badge className="bg-white text-orange-500 font-bold text-xs">
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-extrabold">{plan.name}</h3>
                  <p className={cn("mt-1 text-sm", plan.highlighted ? "text-white/80" : "text-white/60")}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-end gap-1">
                    <span className="text-xs font-medium opacity-70">{plan.currency}</span>
                    <span className="text-4xl font-black">
                      {plan.price.toLocaleString()}
                    </span>
                  </div>
                  <span className={cn("text-xs", plan.highlighted ? "text-white/70" : "text-white/50")}>
                    per {plan.period}
                  </span>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          plan.highlighted ? "text-white" : "text-orange-400"
                        )}
                      />
                      <span className="opacity-90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className={cn(
                    "w-full font-bold",
                    plan.highlighted
                      ? "bg-white text-orange-500 hover:bg-white/90"
                      : "bg-orange-500 text-white hover:bg-orange-600"
                  )}
                >
                  Get Started
                  {plan.highlighted && <Zap className="ml-1.5 h-4 w-4" />}
                </Button>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
