import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, Star, Award } from "lucide-react";
import type { GymConfig } from "@/types";

export function GymHero({ config }: { config: GymConfig }) {
  const titleWords = config.heroTitle.split(/(\s+)/);
  const lastWord = [...titleWords].reverse().find((word) => word.trim());

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-end overflow-hidden bg-[#080808] pt-20 lg:items-center"
    >
      <div className="absolute inset-0">
        <Image
          src={config.heroImage}
          alt="Gym hero"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center] grayscale-[0.15] lg:object-[72%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/85 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/30" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-red-600/70" />
      </div>

      <div className="relative container mx-auto max-w-7xl px-4 pb-8 pt-20 sm:px-6 sm:pb-12 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <div className="hero-reveal hero-reveal-from-left">
            <span className="mb-7 inline-flex border border-red-600/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-red-400">
              {config.tagline}
            </span>
          </div>

          <h1 className="hero-reveal hero-delay-1 mb-5 max-w-3xl text-5xl font-black uppercase leading-[0.83] tracking-[-0.075em] text-white sm:text-7xl lg:text-7xl xl:text-8xl">
            {titleWords.map((word, index) =>
              word === lastWord ? <span key={index} className="text-red-600">{word}</span> : word,
            )}
          </h1>

          <p className="hero-reveal hero-delay-2 mb-7 max-w-lg text-sm leading-relaxed text-zinc-300 sm:text-base">
            {config.heroSubtitle}
          </p>

          <div className="hero-reveal hero-delay-3 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="xl" className="h-14 gap-2 rounded-none bg-red-600 px-7 font-bold uppercase tracking-[0.12em] text-white hover:bg-red-700">
              <a href="#membership">
                {config.heroCtaText}
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="xl" variant="outline" className="h-14 gap-2 rounded-none border-zinc-500 bg-black/20 px-7 font-bold uppercase tracking-[0.12em] text-white hover:border-white hover:bg-white hover:text-black">
              <a href="#classes">
                <Play className="h-5 w-5 fill-current" />
                View Schedule
              </a>
            </Button>
          </div>

          <div className="hero-reveal hero-delay-4 mt-9 grid max-w-xl grid-cols-3 gap-4 border-t border-white/20 pt-5 sm:mt-12 sm:gap-7">
            {[
              { icon: Users, value: "1,200+", label: "Active Members" },
              { icon: Award, value: "15+", label: "Expert Trainers" },
              { icon: Star, value: "4.9★", label: "Member Rating" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label}>
                <Icon className="mb-1 h-4 w-4 text-red-500" />
                <div className="text-2xl font-black tracking-tight text-white sm:text-3xl">{value}</div>
                <div className="text-[10px] font-medium uppercase tracking-wider text-zinc-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
