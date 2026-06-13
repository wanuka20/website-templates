"use client";

import { StarRating } from "@/components/shared/StarRating";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { GraduationCap, Users } from "lucide-react";
import type { TuitionConfig } from "@/types";

export function TuitionTeachers({ config }: { config: TuitionConfig }) {
  return (
    <section id="teachers" className="section-padding bg-blue-50 dark:bg-blue-950/20 template-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Teachers"
          title="Learn from the Best"
          description="Our faculty are accomplished academics who are passionate about student success."
        />
        <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {config.teachers.map((teacher) => (
            <StaggerItem key={teacher.id}>
              <div className="group overflow-hidden rounded-2xl border bg-white dark:bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img src={teacher.image} alt={teacher.name}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-base">{teacher.name}</h3>
                  <p className="text-sm text-blue-600 font-medium mt-0.5">{teacher.subject}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{teacher.qualification}</p>
                  <p className="mt-3 text-xs text-muted-foreground leading-relaxed line-clamp-3">{teacher.bio}</p>
                  <div className="mt-4 flex items-center justify-between border-t pt-3">
                    <StarRating rating={teacher.rating} size="sm" />
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Users className="h-3 w-3" />{teacher.studentsCount}+ students
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                    <GraduationCap className="h-3 w-3 text-blue-500" />{teacher.experience} experience
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
