"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";
import type { GymConfig } from "@/types";

export function GymGallery({ config }: { config: GymConfig }) {
  const categories = ["All", ...Array.from(new Set(config.galleryImages.map((i) => i.category).filter(Boolean)))];
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? config.galleryImages : config.galleryImages.filter((i) => i.category === active);
  return <section id="gallery" className="section-padding bg-[#101010] template-section"><div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-10 flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><span className="text-[11px] font-bold uppercase tracking-[0.22em] text-red-500">The facility</span><h2 className="mt-4 text-5xl font-black uppercase leading-[0.84] tracking-[-0.065em] text-white sm:text-6xl">Built for <span className="text-red-600">more.</span></h2></div><div className="flex flex-wrap gap-x-5 gap-y-3 md:justify-end">{categories.map((category) => <button key={category} onClick={() => setActive(category as string)} className={cn("border-b pb-1 text-[11px] font-bold uppercase tracking-[0.15em] transition-colors focus-visible:outline-red-500", active === category ? "border-red-600 text-red-500" : "border-transparent text-zinc-400 hover:text-white")}>{category}</button>)}</div></div><AnimatedSection><div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:grid-rows-[230px_230px]">{filtered.map((image, index) => <figure key={image.id} className={cn("group relative aspect-[4/3] overflow-hidden border border-white/10 md:aspect-auto", index === 0 ? "col-span-2 row-span-2" : index === 3 ? "md:col-span-2" : "")}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 767px) 50vw, (max-width: 1023px) 50vw, 25vw" className="object-cover grayscale-[0.2] transition duration-500 group-hover:scale-105 group-hover:grayscale-0" /><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />{image.category && <figcaption className="absolute bottom-3 left-3 border border-red-500/70 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white opacity-0 transition-opacity group-hover:opacity-100">{image.category}</figcaption>}</figure>)}</div></AnimatedSection></div></section>;
}
