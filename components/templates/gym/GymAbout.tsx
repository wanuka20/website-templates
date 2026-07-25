"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import type { GymConfig } from "@/types";

export function GymAbout({ config }: { config: GymConfig }) {
  return (
    <section id="about" className="section-padding bg-[#101010] template-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <AnimatedSection direction="left">
            <div className="relative h-[430px] border border-white/10 sm:h-[560px]">
              <Image src={config.aboutImage} alt="Gym interior" fill sizes="(max-width: 1023px) 100vw, 55vw" className="object-cover grayscale-[0.3]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute -bottom-px -right-px bg-red-600 px-5 py-4 text-white sm:px-7 sm:py-5"><div className="text-3xl font-black tracking-[-0.06em] sm:text-4xl">10+</div><div className="text-[10px] font-bold uppercase tracking-[0.16em]">Years of Excellence</div></div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-red-500">About {config.name}</span>
            <h2 className="mt-5 max-w-xl text-5xl font-black uppercase leading-[0.86] tracking-[-0.065em] text-white sm:text-6xl">More than a gym. <span className="text-red-600">A lifestyle.</span></h2>
            <p className="mt-7 max-w-xl leading-relaxed text-zinc-300">{config.description}</p>
            <p className="mt-4 max-w-xl leading-relaxed text-zinc-400">Founded with a single mission — to make world-class fitness accessible to everyone in {config.city}. Whether you&apos;re a first-timer or a seasoned athlete, we have everything you need to reach your goals.</p>
            <div className="mt-9 grid max-w-xl grid-cols-1 gap-x-7 gap-y-3 sm:grid-cols-2">
              {config.amenities.map((amenity) => <div key={amenity} className="flex items-center gap-3 border-t border-white/10 py-3 text-sm text-zinc-200"><Check className="h-4 w-4 shrink-0 text-red-500" />{amenity}</div>)}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
