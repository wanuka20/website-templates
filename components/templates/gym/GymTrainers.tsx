"use client";

import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { Award } from "lucide-react";
import type { GymConfig } from "@/types";

export function GymTrainers({ config }: { config: GymConfig }) {
  return (
    <section id="trainers" className="section-padding bg-background template-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Trainers"
          title="Train With the Best"
          description="Our certified trainers bring expertise, passion, and personalised attention to every client session."
        />

        <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {config.trainers.map((trainer) => (
            <StaggerItem key={trainer.id}>
              <div className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <Badge className="bg-orange-500 text-white text-xs">
                      {trainer.experience} experience
                    </Badge>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg">{trainer.name}</h3>
                  <p className="text-sm text-orange-500 font-medium mt-0.5">
                    {trainer.specialization}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {trainer.bio}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {trainer.certifications.map((cert) => (
                      <div key={cert} className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Award className="h-3 w-3 text-orange-400" />
                        {cert}
                      </div>
                    ))}
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
