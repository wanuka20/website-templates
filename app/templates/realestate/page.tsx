import type { Metadata } from "next";
import type { ComponentType } from "react";
import { getRealEstateContent } from "@/lib/template-content";
import { generateMetadata as genMeta } from "@/lib/seo";
import { realEstateDesign, type RealEstateDesign } from "@/config/realestate-design";
import { RealEstateDefaultTemplate } from "@/components/templates/realestate/RealEstateDefaultTemplate";
import type { RealEstateConfig } from "@/types";

const realEstateTemplates: Record<RealEstateDesign, ComponentType<{ config: RealEstateConfig }>> = {
  default: RealEstateDefaultTemplate,
};

export async function generateMetadata(): Promise<Metadata> {
  const config = await getRealEstateContent();

  return genMeta(config.seo, "/templates/realestate");
}

export default async function RealEstateTemplatePage() {
  const realestateConfig = await getRealEstateContent();
  const RealEstateTemplate = realEstateTemplates[realEstateDesign];

  return <RealEstateTemplate config={realestateConfig} />;
}
