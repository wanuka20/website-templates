"use client";

import Image from "next/image";
import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import type { GymConfig } from "@/types";

export function GymTrainers({ config }: { config: GymConfig }) {
  return (
    <section id="trainers" className="section-padding bg-[#080808] template-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"><h2 className="text-6xl font-black uppercase leading-[0.78] tracking-[-0.08em] text-white sm:text-7xl lg:text-8xl">Elite<br /><span className="text-red-600">coaches.</span></h2><div className="max-w-md lg:justify-self-end"><span className="text-[11px] font-bold uppercase tracking-[0.22em] text-red-500">Our trainers</span><p className="mt-4 text-sm leading-relaxed text-zinc-400">Our certified trainers bring expertise, passion, and personalised attention to every client session.</p><Button asChild className="mt-6 rounded-none bg-red-600 font-bold uppercase tracking-[0.12em] hover:bg-red-700"><a href="#membership">Join Now</a></Button></div></div>
        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{config.trainers.map((trainer) => <StaggerItem key={trainer.id}><article className="group h-full overflow-hidden border border-white/15 bg-[#111]"><div className="relative h-80 overflow-hidden"><Image src={trainer.image} alt={trainer.name} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw" className="object-cover object-top grayscale-[0.2] transition duration-500 group-hover:scale-105 group-hover:grayscale-0" /><div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent" /><span className="absolute bottom-4 left-4 border border-red-500/70 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">{trainer.experience} experience</span></div><div className="border-t border-white/10 p-5"><h3 className="text-xl font-black uppercase tracking-[-0.04em] text-white">{trainer.name}</h3><p className="mt-1 text-xs font-bold uppercase tracking-wider text-red-500">{trainer.specialization}</p><p className="mt-4 text-sm leading-relaxed text-zinc-400">{trainer.bio}</p><div className="mt-5 space-y-2 border-t border-white/10 pt-4">{trainer.certifications.map((cert) => <div key={cert} className="flex items-center gap-2 text-xs text-zinc-400"><Award className="h-3 w-3 shrink-0 text-red-500" />{cert}</div>)}</div></div></article></StaggerItem>)}</StaggerContainer>
      </div>
    </section>
  );
}
