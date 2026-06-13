"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, UtensilsCrossed } from "lucide-react";
import type { RestaurantConfig } from "@/types";

export function RestaurantHero({ config }: { config: RestaurantConfig }) {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={config.heroImage} alt="Restaurant" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      </div>
      <div className="relative container mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge className="mb-6 border-amber-400/40 bg-amber-500/20 text-amber-300">
              🌶️ {config.cuisine}
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
            <Button asChild size="xl" className="gap-2 bg-amber-500 font-bold hover:bg-amber-600 shadow-lg shadow-amber-500/30">
              <a href="#contact">{config.heroCtaText} <ArrowRight className="h-5 w-5" /></a>
            </Button>
            <Button asChild size="xl" variant="outline" className="border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20">
              <a href="#menu"><UtensilsCrossed className="mr-2 h-5 w-5" />View Menu</a>
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="mt-14 grid grid-cols-3 gap-6 border-t border-white/20 pt-8">
            {[
              { value: "4.9★", label: "Google Rating" },
              { value: "50+", label: "Dishes" },
              { value: "8 Yrs", label: "Established" },
            ].map(({ value, label }) => (
              <div key={label}>
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
