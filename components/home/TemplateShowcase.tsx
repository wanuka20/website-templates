"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Copy, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import type { TemplateCard } from "@/types";

const templates: TemplateCard[] = [
  {
    id: "gym",
    name: "IronPeak Fitness",
    category: "Gym & Fitness",
    description:
      "A high-energy fitness template with membership plans, trainer profiles, class schedules, and a dynamic gallery.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    previewUrl: "/templates/gym",
    tags: ["Membership", "Trainers", "Schedule", "Gallery"],
    color: "from-orange-500 to-red-600",
  },
  {
    id: "salon",
    name: "Lumière Beauty Studio",
    category: "Beauty & Salon",
    description:
      "A luxury salon template featuring services, stylist profiles, before/after gallery, and an elegant booking CTA.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
    previewUrl: "/templates/salon",
    tags: ["Services", "Stylists", "Booking", "Gallery"],
    color: "from-pink-500 to-rose-600",
  },
  {
    id: "restaurant",
    name: "Spice Route Kitchen",
    category: "Restaurant & Dining",
    description:
      "A premium restaurant template with menu categories, featured dishes, gallery, and table reservations.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    previewUrl: "/templates/restaurant",
    tags: ["Menu", "Gallery", "Reservations", "Reviews"],
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "tuition",
    name: "Apex Academy",
    category: "Education & Tuition",
    description:
      "A trustworthy tuition template with subjects, teacher profiles, student results, and class schedules.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    previewUrl: "/templates/tuition",
    tags: ["Subjects", "Teachers", "Results", "Schedule"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "realestate",
    name: "Keshan Realty",
    category: "Real Estate",
    description:
      "A modern real estate template with property listings, agent profile, services, and inquiry forms.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    previewUrl: "/templates/realestate",
    tags: ["Properties", "Agent", "Services", "Inquiry"],
    color: "from-emerald-500 to-teal-600",
  },
];

export function TemplateShowcase() {
  return (
    <section id="templates" className="section-padding bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Template Gallery"
          title="5 Ready-Made Business Websites"
          description="Each template is production-ready. Simply update the config file with your business details and you're live."
        />

        <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <StaggerItem key={template.id}>
              <motion.div
                className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                whileHover={{ y: -4 }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${template.color} opacity-80`}
                  />
                  <img
                    src={template.image}
                    alt={template.name}
                    className="h-full w-full object-cover mix-blend-overlay transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end p-4">
                    <Badge
                      variant="outline"
                      className="border-white/30 bg-black/30 text-white backdrop-blur-sm"
                    >
                      {template.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{template.name}</h3>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                    {template.description}
                  </p>
                  <div className="mb-5 flex flex-wrap gap-1.5">
                    {template.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button asChild className="flex-1 gap-1.5" size="sm">
                      <Link href={template.previewUrl}>
                        <ExternalLink className="h-3.5 w-3.5" />
                        Preview
                      </Link>
                    </Button>
                    <Button variant="outline" className="flex-1 gap-1.5" size="sm" asChild>
                      <Link href="/contact">
                        <Copy className="h-3.5 w-3.5" />
                        Get Template
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline" className="gap-2">
            <Link href="/templates">
              View All Templates
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
