"use client";

import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Clock, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GymConfig } from "@/types";

const levelColors = {
  Beginner: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  Intermediate: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  Advanced: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  "All Levels": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
};

export function GymSchedule({ config }: { config: GymConfig }) {
  return (
    <section id="classes" className="section-padding bg-muted/40 template-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Class Schedule"
          title="Weekly Class Timetable"
          description="Book your spot in advance — classes fill up fast. All levels welcome."
        />

        <AnimatedSection>
          <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Class
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Day
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Time
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Duration
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Instructor
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Level
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Spots
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {config.classes.map((cls, index) => (
                    <tr
                      key={cls.id}
                      className={cn(
                        "transition-colors hover:bg-muted/30",
                        index % 2 === 0 ? "" : "bg-muted/10"
                      )}
                    >
                      <td className="px-6 py-4 font-semibold text-sm">
                        {cls.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {cls.day}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 text-orange-500" />
                          {cls.time}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {cls.duration}
                      </td>
                      <td className="px-6 py-4 text-sm">{cls.instructor}</td>
                      <td className="px-6 py-4">
                        <span
                          className={cn(
                            "inline-block rounded-full px-2.5 py-0.5 text-xs font-medium",
                            levelColors[cls.level]
                          )}
                        >
                          {cls.level}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Users className="h-3.5 w-3.5 text-muted-foreground" />
                          <span className={cls.spots < 5 ? "text-red-500 font-semibold" : ""}>
                            {cls.spots} left
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

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Contact us to book your spot or join as a member for priority booking.
          </p>
        </div>
      </div>
    </section>
  );
}
