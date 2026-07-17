import Image from "next/image";
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
        <Image
          src={config.heroImage}
          alt="Gym hero"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="relative container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="hero-reveal hero-reveal-from-left">
            <Badge className="mb-6 bg-orange-500/20 text-orange-400 border-orange-500/40">
              🔥 Join 1,200+ Members
            </Badge>
          </div>

          <h1
            className="hero-reveal hero-delay-1 mb-6 text-5xl font-black leading-none tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ whiteSpace: "pre-line" }}
          >
            {config.heroTitle}
          </h1>

          <p
            className="hero-reveal hero-delay-2 mb-10 max-w-xl text-lg leading-relaxed text-white/80"
          >
            {config.heroSubtitle}
          </p>

          <div className="hero-reveal hero-delay-3 flex flex-col gap-4 sm:flex-row">
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
              className="gap-2 border-white/30 bg-white/15 text-white hover:bg-white/25"
            >
              <a href="#classes">
                <Play className="h-5 w-5 fill-white" />
                View Schedule
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="hero-reveal hero-delay-4 mt-16 grid grid-cols-3 gap-6 border-t border-white/20 pt-8">
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
          </div>
        </div>
      </div>
    </section>
  );
}
