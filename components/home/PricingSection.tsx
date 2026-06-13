"use client";

import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";
import Link from "next/link";
import type { MarketplacePricingPlan } from "@/types";

const plans: MarketplacePricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: 0,
    period: "one-time",
    description: "Browse and preview all templates for free.",
    features: [
      "Access to all 5 templates",
      "Full preview of every page",
      "Template documentation",
      "Community support",
    ],
  },
  {
    id: "single",
    name: "Single Template",
    price: 4900,
    period: "one-time",
    description: "One template with full source code and lifetime updates.",
    features: [
      "Complete source code",
      "Lifetime access & updates",
      "CMS config file",
      "WhatsApp integration",
      "SEO setup",
      "Vercel deployment guide",
      "Email support (30 days)",
    ],
    highlighted: true,
    badge: "Most Popular",
  },
  {
    id: "bundle",
    name: "All Templates Bundle",
    price: 14900,
    period: "one-time",
    description: "All 5 templates for you or your clients. Best value.",
    features: [
      "All 5 template source codes",
      "Lifetime access & updates",
      "Priority email support",
      "Commercial licence",
      "Resale rights",
      "Free customisation consult",
      "Early access to new templates",
    ],
    badge: "Best Value",
  },
];

const formatLKR = (price: number) => {
  if (price === 0) return "Free";
  return `LKR ${price.toLocaleString()}`;
};

export function PricingSection() {
  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Pricing"
          title="Simple, Transparent Pricing"
          description="One-time payment. No subscriptions, no hidden fees. Own your template forever."
        />

        <StaggerContainer className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <StaggerItem key={plan.id}>
              <div
                className={cn(
                  "relative flex flex-col overflow-hidden rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:shadow-xl",
                  plan.highlighted
                    ? "border-primary bg-primary text-primary-foreground shadow-primary/20"
                    : "bg-card hover:-translate-y-1"
                )}
              >
                {plan.badge && (
                  <div className="absolute right-4 top-4">
                    <Badge
                      variant={plan.highlighted ? "secondary" : "default"}
                      className="font-semibold"
                    >
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className={cn(
                      "mb-1 text-xl font-bold",
                      plan.highlighted && "text-primary-foreground"
                    )}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={cn(
                      "text-sm",
                      plan.highlighted
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    )}
                  >
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-end gap-1">
                    <span
                      className={cn(
                        "text-4xl font-extrabold",
                        plan.highlighted && "text-primary-foreground"
                      )}
                    >
                      {formatLKR(plan.price)}
                    </span>
                  </div>
                  <span
                    className={cn(
                      "text-sm",
                      plan.highlighted
                        ? "text-primary-foreground/60"
                        : "text-muted-foreground"
                    )}
                  >
                    {plan.price > 0 ? "one-time payment" : "forever free"}
                  </span>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          plan.highlighted
                            ? "text-primary-foreground"
                            : "text-primary"
                        )}
                      />
                      <span
                        className={
                          plan.highlighted ? "text-primary-foreground/90" : ""
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  variant={plan.highlighted ? "secondary" : "default"}
                  className="w-full gap-2 font-semibold"
                >
                  <Link href="/contact">
                    {plan.price === 0 ? "Browse Free" : "Get Started"}
                    {plan.highlighted && <Zap className="h-4 w-4" />}
                  </Link>
                </Button>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Prices in Sri Lankan Rupees (LKR). Need a custom template?{" "}
          <Link href="/contact" className="text-primary underline-offset-4 hover:underline">
            Contact us
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
