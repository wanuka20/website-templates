import type { Metadata } from "next";
import { getTuitionContent } from "@/lib/template-content";
import { generateMetadata as genMeta } from "@/lib/seo";
import { TuitionNavbar } from "@/components/templates/tuition/TuitionNavbar";
import { TuitionHero } from "@/components/templates/tuition/TuitionHero";
import { TuitionSubjects } from "@/components/templates/tuition/TuitionSubjects";
import { TuitionTeachers } from "@/components/templates/tuition/TuitionTeachers";
import { TuitionResults } from "@/components/templates/tuition/TuitionResults";
import { TuitionSchedule } from "@/components/templates/tuition/TuitionSchedule";
import { TuitionContact } from "@/components/templates/tuition/TuitionContact";
import { TuitionFooter } from "@/components/templates/tuition/TuitionFooter";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const config = await getTuitionContent();

  return genMeta(config.seo, "/templates/tuition");
}

export default async function TuitionTemplatePage() {
  const tuitionConfig = await getTuitionContent();

  return (
    <div className="flex min-h-screen flex-col">
      <TuitionNavbar config={tuitionConfig} />
      <main>
        <TuitionHero config={tuitionConfig} />
        <TuitionSubjects config={tuitionConfig} />
        <TuitionTeachers config={tuitionConfig} />
        <TuitionResults config={tuitionConfig} />
        <TuitionSchedule config={tuitionConfig} />
        <TuitionContact config={tuitionConfig} />
      </main>
      <TuitionFooter config={tuitionConfig} />
      <WhatsAppButton config={tuitionConfig.whatsapp} />
    </div>
  );
}
