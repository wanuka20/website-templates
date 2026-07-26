import type { Metadata } from "next";
import type { ComponentType } from "react";
import { getGymContent } from "@/lib/gym-content";
import { generateMetadata as genMeta } from "@/lib/seo";
import { resolveGymDesign, type GymDesign } from "@/config/gym-design";
import { ClassicGymTemplate } from "@/components/templates/gym/ClassicGymTemplate";
import { EditorialGymTemplate } from "@/components/templates/gym/EditorialGymTemplate";
import type { GymConfig } from "@/types";

const gymTemplates: Record<GymDesign, ComponentType<{ config: GymConfig }>> = {
  editorial: EditorialGymTemplate,
  classic: ClassicGymTemplate,
};

export async function generateMetadata(): Promise<Metadata> {
  const config = await getGymContent();

  return genMeta(config.seo, "/templates/gym");
}

export default async function GymTemplatePage() {
  const gymConfig = await getGymContent();
  const GymTemplate = gymTemplates[resolveGymDesign(gymConfig.themeTemplate)];

  return <GymTemplate config={gymConfig} />;
}
