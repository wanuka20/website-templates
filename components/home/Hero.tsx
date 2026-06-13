"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Star, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-24 pb-16">
      {/* Animated background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-purple-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="outline"
              className="mb-6 border-blue-400/40 bg-blue-500/10 px-4 py-1.5 text-blue-300 backdrop-blur"
            >
              <Sparkles className="mr-1.5 h-3.5 w-3.5" />
              5 Professional Templates — Ready to Launch
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Your Business
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Online in Days
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 max-w-2xl text-lg text-white/70 sm:text-xl"
          >
            Beautiful, responsive website templates for gyms, salons, restaurants, tuition centres, and real estate agents. Edit content in one file — go live immediately.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button asChild size="xl" className="gap-2 rounded-full font-semibold shadow-lg shadow-primary/30">
              <Link href="/templates">
                Browse Templates
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="rounded-full border-white/20 bg-white/5 text-white backdrop-blur hover:bg-white/10 hover:text-white"
            >
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:gap-8"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-sm text-white/60">5.0 rating</span>
            </div>
            <div className="hidden h-4 w-px bg-white/20 sm:block" />
            <div className="flex items-center gap-2 text-sm text-white/60">
              <Zap className="h-4 w-4 text-yellow-400" />
              Built with Next.js 15 + Tailwind CSS
            </div>
            <div className="hidden h-4 w-px bg-white/20 sm:block" />
            <p className="text-sm text-white/60">🚀 Deploy to Vercel in minutes</p>
          </motion.div>

          {/* Template preview cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 grid w-full max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
          >
            {[
              { name: "Gym", emoji: "💪", color: "from-orange-500 to-red-600" },
              { name: "Salon", emoji: "✂️", color: "from-pink-500 to-rose-600" },
              { name: "Restaurant", emoji: "🍽️", color: "from-amber-500 to-orange-600" },
              { name: "Tuition", emoji: "📚", color: "from-blue-500 to-indigo-600" },
              { name: "Real Estate", emoji: "🏠", color: "from-emerald-500 to-teal-600" },
            ].map((template, i) => (
              <motion.div
                key={template.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.08 }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <Link href={`/templates/${template.name.toLowerCase().replace(" ", "")}`}>
                  <div className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${template.color} p-4 text-white transition-shadow hover:shadow-xl`}>
                    <div className="text-3xl mb-2">{template.emoji}</div>
                    <div className="text-sm font-semibold">{template.name}</div>
                    <div className="mt-1 text-xs opacity-70">Template</div>
                    <div className="absolute -bottom-2 -right-2 h-16 w-16 rounded-full bg-white/10" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
