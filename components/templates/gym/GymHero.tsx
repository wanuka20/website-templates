"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Users, Star, Award } from "lucide-react";
import type { GymConfig } from "@/types";

export function GymHero({ config }: { config: GymConfig }) {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={config.heroImage}
          alt="Gym hero"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="relative container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-orange-500/20 text-orange-400 border-orange-500/40">
              🔥 Join 1,200+ Members
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 text-5xl font-black leading-none tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ whiteSpace: "pre-line" }}
          >
            {config.heroTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-10 text-lg text-white/80 leading-relaxed max-w-xl"
          >
            {config.heroSubtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button
              asChild
              size="xl"
              className="gap-2 bg-orange-500 text-white font-bold hover:bg-orange-600 shadow-lg shadow-orange-500/30"
            >
              <a href="#membership">
                {config.heroCtaText}
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="gap-2 border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20"
            >
              <a href="#classes">
                <Play className="h-5 w-5 fill-white" />
                View Schedule
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 grid grid-cols-3 gap-6 border-t border-white/20 pt-8"
          >
            {[
              { icon: Users, value: "1,200+", label: "Active Members" },
              { icon: Award, value: "15+", label: "Expert Trainers" },
              { icon: Star, value: "4.9★", label: "Member Rating" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label}>
                <Icon className="mb-1 h-5 w-5 text-orange-400" />
                <div className="text-2xl font-extrabold text-white">{value}</div>
                <div className="text-xs text-white/60">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
