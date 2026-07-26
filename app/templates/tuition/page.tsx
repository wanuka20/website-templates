import type { Metadata } from "next";
import type { ComponentType } from "react";
import { getTuitionContent } from "@/lib/template-content";
import { generateMetadata as genMeta } from "@/lib/seo";
import { resolveTuitionDesign, type TuitionDesign } from "@/config/tuition-design";
import { TuitionDefaultTemplate } from "@/components/templates/tuition/TuitionDefaultTemplate";
import type { TuitionConfig } from "@/types";

const tuitionTemplates: Record<TuitionDesign, ComponentType<{ config: TuitionConfig }>> = {
  default: TuitionDefaultTemplate,
};

export async function generateMetadata(): Promise<Metadata> {
  const config = await getTuitionContent();

  return genMeta(config.seo, "/templates/tuition");
}

export default async function TuitionTemplatePage() {
  const tuitionConfig = await getTuitionContent();
  const TuitionTemplate =
    tuitionTemplates[resolveTuitionDesign(tuitionConfig.themeTemplate)];

  return <TuitionTemplate config={tuitionConfig} />;
}
