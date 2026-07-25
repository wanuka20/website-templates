import type { Metadata } from "next";
import type { ComponentType } from "react";
import { getSalonContent } from "@/lib/template-content";
import { generateMetadata as genMeta } from "@/lib/seo";
import { salonDesign, type SalonDesign } from "@/config/salon-design";
import { SalonDefaultTemplate } from "@/components/templates/salon/SalonDefaultTemplate";
import type { SalonConfig } from "@/types";

const salonTemplates: Record<SalonDesign, ComponentType<{ config: SalonConfig }>> = {
  default: SalonDefaultTemplate,
};

export async function generateMetadata(): Promise<Metadata> {
  const config = await getSalonContent();

  return genMeta(config.seo, "/templates/salon");
}

export default async function SalonTemplatePage() {
  const salonConfig = await getSalonContent();
  const SalonTemplate = salonTemplates[salonDesign];

  return <SalonTemplate config={salonConfig} />;
}
