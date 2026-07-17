import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Home, TrendingUp, Award } from "lucide-react";
import type { RealEstateConfig } from "@/types";

export function RealEstateHero({ config }: { config: RealEstateConfig }) {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image src={config.heroImage} alt="Real estate" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />
      </div>
      <div className="relative container mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <div className="hero-reveal hero-reveal-from-top">
            <Badge className="mb-6 border-emerald-400/40 bg-emerald-500/20 text-emerald-300">
              🏆 {config.city}&apos;s Most Trusted Agent
            </Badge>
          </div>
          <h1 className="hero-reveal hero-delay-1 mb-6 text-5xl font-black leading-none tracking-tight text-white sm:text-6xl" style={{ whiteSpace: "pre-line" }}>
            {config.heroTitle}
          </h1>
          <p className="hero-reveal hero-delay-2 mb-10 text-lg text-white/80 leading-relaxed">{config.heroSubtitle}</p>
          <div className="hero-reveal hero-delay-3 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="xl" className="gap-2 bg-emerald-600 font-bold hover:bg-emerald-700 shadow-lg shadow-emerald-500/30">
              <a href="#properties">{config.heroCtaText} <ArrowRight className="h-5 w-5" /></a>
            </Button>
            <Button asChild size="xl" variant="outline" className="border-white/30 bg-white/15 text-white hover:bg-white/25">
              <a href="#contact">Free Consultation</a>
            </Button>
          </div>
          <div className="hero-reveal hero-delay-4 mt-14 grid grid-cols-3 gap-6 border-t border-white/20 pt-8">
            {[
              { icon: Home, value: config.agent.clientsServed, label: "Clients Served" },
              { icon: TrendingUp, value: config.agent.totalSales, label: "Total Sales" },
              { icon: Award, value: config.agent.experience, label: "Experience" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label}>
                <Icon className="mb-1 h-4 w-4 text-emerald-400" />
                <div className="text-2xl font-black text-white">{value}</div>
                <div className="text-xs text-white/60">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
