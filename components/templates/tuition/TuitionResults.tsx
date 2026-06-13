"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Trophy } from "lucide-react";
import { getInitials } from "@/lib/utils";
import type { TuitionConfig } from "@/types";

export function TuitionResults({ config }: { config: TuitionConfig }) {
  return (
    <section id="results" className="section-padding bg-background template-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Student Results"
          title="Proven Track Record"
          description="Our students consistently achieve outstanding results in national examinations."
        />

        {/* Achievement stats */}
        <AnimatedSection className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {config.achievements.map((a) => (
            <div key={a.id} className="rounded-2xl bg-blue-600 p-6 text-white text-center shadow-lg shadow-blue-500/20">
              <div className="text-3xl font-black mb-1">{a.value}</div>
              <div className="text-sm text-blue-100">{a.label}</div>
            </div>
          ))}
        </AnimatedSection>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {config.results.map((result) => (
            <StaggerItem key={result.id}>
              <div className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                <Avatar className="h-16 w-16 mx-auto mb-4 ring-4 ring-blue-100 dark:ring-blue-900/50">
                  <AvatarImage src={result.avatar} alt={result.studentName} />
                  <AvatarFallback className="bg-blue-600 text-white">{getInitials(result.studentName)}</AvatarFallback>
                </Avatar>
                <div className="flex justify-center mb-3">
                  <Badge className="bg-blue-600 text-white text-lg font-black px-4 py-1">
                    {result.grade}
                  </Badge>
                </div>
                <h3 className="font-bold">{result.studentName}</h3>
                <p className="text-sm text-blue-600 font-medium">{result.subject}</p>
                <p className="text-xs text-muted-foreground mt-0.5">Results {result.year}</p>
                {result.testimonial && (
                  <p className="mt-4 text-xs text-muted-foreground leading-relaxed italic border-t pt-4">
                    &ldquo;{result.testimonial}&rdquo;
                  </p>
                )}
                <Trophy className="mx-auto mt-4 h-5 w-5 text-yellow-500" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
