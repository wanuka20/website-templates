"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, GraduationCap, Trophy, Users } from "lucide-react";
import type { TuitionConfig } from "@/types";

export function TuitionHero({ config }: { config: TuitionConfig }) {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={config.heroImage} alt="Academy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-blue-950/50" />
      </div>
      <div className="relative container mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge className="mb-6 border-blue-400/40 bg-blue-500/20 text-blue-200">
              🎓 {config.city}&apos;s Most Trusted Academy
            </Badge>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 text-5xl font-black leading-none tracking-tight text-white sm:text-6xl" style={{ whiteSpace: "pre-line" }}>
            {config.heroTitle}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-10 text-lg text-white/80 leading-relaxed">{config.heroSubtitle}</motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="xl" className="gap-2 bg-blue-600 font-bold hover:bg-blue-700 shadow-lg shadow-blue-500/30">
              <a href="#contact">{config.heroCtaText} <ArrowRight className="h-5 w-5" /></a>
            </Button>
            <Button asChild size="xl" variant="outline" className="border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20">
              <a href="#schedule">View Schedule</a>
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="mt-14 grid grid-cols-2 gap-4 border-t border-white/20 pt-8 sm:grid-cols-4">
            {config.achievements.map((a) => (
              <div key={a.id}>
                <div className="text-2xl font-black text-blue-300">{a.value}</div>
                <div className="text-xs text-white/60">{a.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
