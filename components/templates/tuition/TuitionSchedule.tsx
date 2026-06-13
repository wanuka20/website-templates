"use client";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Clock, Users, Badge as BadgeIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { TuitionConfig } from "@/types";

export function TuitionSchedule({ config }: { config: TuitionConfig }) {
  return (
    <section id="schedule" className="section-padding bg-blue-50 dark:bg-blue-950/20 template-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Class Schedule"
          title="Upcoming Classes"
          description="Limited seats available — register early to secure your child's spot."
        />
        <AnimatedSection>
          <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/50">
                    {["Subject", "Teacher", "Day", "Time", "Duration", "Level", "Seats"].map((h) => (
                      <th key={h} className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {config.schedule.map((cls, index) => (
                    <tr key={cls.id} className={cn("hover:bg-muted/30 transition-colors", index % 2 === 0 ? "" : "bg-muted/10")}>
                      <td className="px-6 py-4 font-semibold text-sm">{cls.subject}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{cls.teacher}</td>
                      <td className="px-6 py-4 text-sm font-medium">{cls.day}</td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 text-blue-500" />{cls.time}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{cls.duration}</td>
                      <td className="px-6 py-4">
                        <Badge variant="secondary" className="text-xs">{cls.level}</Badge>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Users className="h-3.5 w-3.5 text-muted-foreground" />
                          <span className={cls.seatsAvailable < 5 ? "text-red-500 font-bold" : "text-green-600 font-medium"}>
                            {cls.seatsAvailable} left
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
