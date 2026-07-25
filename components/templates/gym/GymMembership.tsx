"use client";

import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";
import { displayNumber } from "@/lib/content-placeholders";
import type { GymConfig } from "@/types";

function resolvePlanLink(value?: string) {
  const candidate = value?.trim();
  if (!candidate) return "#contact";
  if (candidate.startsWith("#")) return candidate;
  try { const url = new URL(candidate); return url.protocol === "https:" || url.protocol === "http:" ? url.toString() : "#contact"; } catch { return "#contact"; }
}

export function GymMembership({ config }: { config: GymConfig }) {
  return (
    <section id="membership" className="section-padding bg-[#080808] template-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-6 border-l-2 border-red-600 pl-5 md:grid-cols-2 md:items-end md:pl-7"><div><span className="text-[11px] font-bold uppercase tracking-[0.22em] text-red-500">Membership plans</span><h2 className="mt-4 text-5xl font-black uppercase leading-[0.85] tracking-[-0.065em] text-white sm:text-6xl">Choose your <span className="text-red-600">path.</span></h2></div><p className="max-w-md text-sm leading-relaxed text-zinc-400 md:justify-self-end">Flexible plans designed for every fitness goal and budget. No contracts — cancel anytime.</p></div>
        <StaggerContainer className="grid gap-4 md:grid-cols-3">
          {config.membership.map((plan) => {
            const planLink = resolvePlanLink(plan.link);
            const linkIsExternal = planLink.startsWith("https://") || planLink.startsWith("http://");
            return <StaggerItem key={plan.id}><div className={cn("relative flex min-h-full flex-col border p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8", plan.highlighted ? "border-red-600 bg-[#1a0b0b]" : "border-white/15 bg-[#111]")}>
              {plan.badge && <span className="absolute right-0 top-0 bg-red-600 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.15em] text-white">{plan.badge}</span>}
              <h3 className="text-2xl font-black uppercase tracking-[-0.04em] text-white">{plan.name}</h3><p className="mt-3 min-h-11 text-sm leading-relaxed text-zinc-400">{plan.description}</p>
              <div className="my-7 border-y border-white/10 py-5"><div className="flex items-end gap-2"><span className="pb-1 text-xs font-bold text-zinc-500">{plan.currency}</span><span className="text-5xl font-black tracking-[-0.07em] text-white">{displayNumber(plan.price)}</span></div><span className="text-xs text-zinc-500">per {plan.period}</span></div>
              <ul className="mb-8 flex-1 space-y-3">{plan.features.map((feature) => <li key={feature} className="flex items-start gap-2 text-sm text-zinc-300"><Check className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />{feature}</li>)}</ul>
              <Button asChild size="lg" className={cn("w-full rounded-none font-bold uppercase tracking-[0.12em]", plan.highlighted ? "bg-red-600 text-white hover:bg-red-700" : "border border-white/30 bg-transparent text-white hover:border-red-600 hover:bg-red-600")}><a href={planLink} target={linkIsExternal ? "_blank" : undefined} rel={linkIsExternal ? "noopener noreferrer" : undefined}>Get Started {plan.highlighted && <Zap className="ml-1.5 h-4 w-4" />}</a></Button>
            </div></StaggerItem>;
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
