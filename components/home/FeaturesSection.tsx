"use client";

import {
  Zap,
  Smartphone,
  Palette,
  Code2,
  Search,
  MessageCircle,
  FileEdit,
  Shield,
} from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Zap,
    title: "Instant Launch",
    description:
      "Deploy to Vercel in under 5 minutes. No server configuration, no DevOps knowledge required.",
    color: "text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description:
      "Every template is fully responsive and tested across all screen sizes — phones, tablets, desktops.",
    color: "text-blue-500 bg-blue-100 dark:bg-blue-900/30",
  },
  {
    icon: Palette,
    title: "Professional Design",
    description:
      "Crafted by experienced UI/UX designers. Consistent, modern aesthetics that build trust.",
    color: "text-purple-500 bg-purple-100 dark:bg-purple-900/30",
  },
  {
    icon: FileEdit,
    title: "Simple CMS Config",
    description:
      "All business content lives in one TypeScript config file. Non-technical owners can edit it easily.",
    color: "text-green-500 bg-green-100 dark:bg-green-900/30",
  },
  {
    icon: Search,
    title: "SEO Optimised",
    description:
      "Meta tags, Open Graph, Twitter Cards, and structured schema markup built in from day one.",
    color: "text-cyan-500 bg-cyan-100 dark:bg-cyan-900/30",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    description:
      "Floating WhatsApp button on every template. Configure your number in a single config file.",
    color: "text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    icon: Code2,
    title: "Clean TypeScript",
    description:
      "Strongly typed, well-structured code. Built with Next.js 15, Tailwind CSS, and Shadcn UI.",
    color: "text-orange-500 bg-orange-100 dark:bg-orange-900/30",
  },
  {
    icon: Shield,
    title: "Dark Mode",
    description:
      "Full dark/light mode support across the entire app, persisted in localStorage with system default.",
    color: "text-slate-500 bg-slate-100 dark:bg-slate-900/30",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Everything Your Business Needs"
          description="Our templates aren't just pretty — they're engineered for real-world business use from day one."
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <StaggerItem key={feature.title}>
                <div className="group rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div
                    className={cn(
                      "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl",
                      feature.color
                    )}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-semibold text-base">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
