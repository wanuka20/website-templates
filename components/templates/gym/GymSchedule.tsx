"use client";

import { Clock, Users } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";
import { isMissingNumber } from "@/lib/content-placeholders";
import type { GymConfig } from "@/types";

export function GymSchedule({ config }: { config: GymConfig }) {
  return (
    <section id="classes" className="section-padding bg-[#101010] template-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-7 md:grid-cols-[0.8fr_1.2fr] md:items-end"><div><span className="text-[11px] font-bold uppercase tracking-[0.22em] text-red-500">Weekly programs</span><p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">Book your spot in advance — classes fill up fast. All levels welcome.</p></div><h2 className="text-5xl font-black uppercase leading-[0.82] tracking-[-0.07em] text-white sm:text-6xl md:text-right">Train hard.<br /><span className="text-red-600">Move better.</span></h2></div>
        <AnimatedSection><div className="overflow-hidden border border-white/15 bg-[#0a0a0a]"><div className="overflow-x-auto"><table className="w-full min-w-[780px]"><thead><tr className="border-b border-white/15 bg-white/[0.03]">{["Program", "Day", "Time", "Duration", "Coach", "Level", "Spots"].map((heading) => <th key={heading} className="px-5 py-4 text-left text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">{heading}</th>)}</tr></thead><tbody className="divide-y divide-white/10">{config.classes.map((cls, index) => <tr key={cls.id} className={cn("transition-colors hover:bg-red-600/[0.06]", index % 2 ? "bg-white/[0.015]" : "")}><td className="px-5 py-5 text-sm font-bold uppercase tracking-wide text-white">{cls.name}</td><td className="px-5 py-5 text-sm text-zinc-300">{cls.day}</td><td className="px-5 py-5 text-sm text-white"><span className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-red-500" />{cls.time}</span></td><td className="px-5 py-5 text-sm text-zinc-400">{cls.duration}</td><td className="px-5 py-5 text-sm text-zinc-300">{cls.instructor}</td><td className="px-5 py-5"><span className="border border-zinc-600 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-300">{cls.level}</span></td><td className="px-5 py-5 text-sm text-zinc-300"><span className="flex items-center gap-2"><Users className="h-3.5 w-3.5 text-zinc-500" /><span className={cls.spots < 5 ? "font-bold text-red-500" : ""}>{isMissingNumber(cls.spots) ? "[Missing number]" : `${cls.spots} left`}</span></span></td></tr>)}</tbody></table></div></div></AnimatedSection>
      </div>
    </section>
  );
}
