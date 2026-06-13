"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Award, Users } from "lucide-react";
import type { SalonConfig } from "@/types";

export function SalonHero({ config }: { config: SalonConfig }) {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={config.heroImage} alt="Salon hero" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
      </div>

      <div className="relative container mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge className="mb-6 border-rose-400/40 bg-rose-500/20 text-rose-300">
              ✨ Award-Winning Beauty Studio
            </Badge>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 text-5xl font-black leading-none tracking-tight text-white sm:text-6xl" style={{ whiteSpace: "pre-line" }}>
            {config.heroTitle}
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-10 text-lg text-white/80 leading-relaxed">
            {config.heroSubtitle}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="xl" className="gap-2 bg-rose-500 font-bold hover:bg-rose-600 shadow-lg shadow-rose-500/30">
              <a href="#contact">{config.heroCtaText} <ArrowRight className="h-5 w-5" /></a>
            </Button>
            <Button asChild size="xl" variant="outline" className="border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20">
              <a href="#services">Explore Services</a>
            </Button>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="mt-14 grid grid-cols-3 gap-6 border-t border-white/20 pt-8">
            {[
              { icon: Star, value: "500+", label: "Happy Brides" },
              { icon: Award, value: "15 Yrs", label: "Experience" },
              { icon: Users, value: "4.9★", label: "Google Rating" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label}>
                <Icon className="mb-1 h-4 w-4 text-rose-400" />
                <div className="text-2xl font-black text-white">{value}</div>
                <div className="text-xs text-white/60">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
