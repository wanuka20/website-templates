"use client";

import { Calculator, FlaskConical, BookOpen, Monitor, Atom } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import type { TuitionConfig } from "@/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calculator,
  FlaskConical,
  BookOpen,
  Monitor,
  Atom,
};

export function TuitionSubjects({ config }: { config: TuitionConfig }) {
  return (
    <section id="subjects" className="section-padding bg-background template-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Subjects Offered"
          title="Comprehensive Coverage"
          description="Expert tuition for O/L and A/L examinations across all major subject streams."
        />
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {config.subjects.map((subject) => {
            const Icon = iconMap[subject.icon] ?? BookOpen;
            return (
              <StaggerItem key={subject.id}>
                <div className="group rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 dark:hover:border-blue-800">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-bold text-lg">{subject.name}</h3>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{subject.description}</p>
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {subject.levels.map((level) => (
                      <Badge key={level} variant="secondary" className="text-xs">{level}</Badge>
                    ))}
                  </div>
                  <div className="text-xs text-muted-foreground border-t pt-3">
                    <span className="font-semibold text-blue-600">{subject.studentsCount}+</span> students enrolled
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
