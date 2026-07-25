"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { StarRating } from "@/components/shared/StarRating";
import { Quote } from "lucide-react";
import { getInitials } from "@/lib/utils";
import type { GymConfig } from "@/types";

export function GymTestimonials({ config }: { config: GymConfig }) {
  return <section id="testimonials" className="section-padding bg-[#151010] template-section"><div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-12 border-l-2 border-red-600 pl-5"><span className="text-[11px] font-bold uppercase tracking-[0.22em] text-red-500">Success stories</span><h2 className="mt-4 text-5xl font-black uppercase leading-[0.85] tracking-[-0.065em] text-white sm:text-6xl">Real results.<br /><span className="text-red-600">Real people.</span></h2><p className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-400">Hear from the members who transformed their lives at {config.name}.</p></div><StaggerContainer className="grid gap-4 md:grid-cols-3">{config.testimonials.map((testimonial) => <StaggerItem key={testimonial.id}><figure className="flex h-full flex-col border border-white/15 bg-[#0d0d0d] p-7"><Quote className="mb-5 h-8 w-8 text-red-600" /><blockquote className="flex-1 text-sm leading-relaxed text-zinc-300">“{testimonial.content}”</blockquote><figcaption className="mt-7 flex items-center gap-3 border-t border-white/10 pt-5"><Avatar className="h-10 w-10"><AvatarImage src={testimonial.avatar} alt={testimonial.name} /><AvatarFallback className="bg-red-600 text-white">{getInitials(testimonial.name)}</AvatarFallback></Avatar><div><div className="font-bold text-white">{testimonial.name}</div><div className="text-xs text-zinc-500">{testimonial.role}</div><StarRating rating={testimonial.rating} size="sm" className="mt-1 text-red-500" /></div></figcaption></figure></StaggerItem>)}</StaggerContainer></div></section>;
}
