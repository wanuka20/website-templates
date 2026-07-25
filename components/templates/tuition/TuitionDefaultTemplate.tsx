import { TuitionNavbar } from "@/components/templates/tuition/TuitionNavbar";
import { TuitionHero } from "@/components/templates/tuition/TuitionHero";
import { TuitionSubjects } from "@/components/templates/tuition/TuitionSubjects";
import { TuitionTeachers } from "@/components/templates/tuition/TuitionTeachers";
import { TuitionResults } from "@/components/templates/tuition/TuitionResults";
import { TuitionTestimonials } from "@/components/templates/tuition/TuitionTestimonials";
import { TuitionSchedule } from "@/components/templates/tuition/TuitionSchedule";
import { TuitionContact } from "@/components/templates/tuition/TuitionContact";
import { TuitionFooter } from "@/components/templates/tuition/TuitionFooter";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import type { TuitionConfig } from "@/types";

export function TuitionDefaultTemplate({ config }: { config: TuitionConfig }) {
  return <div className="flex min-h-screen flex-col"><TuitionNavbar config={config} /><main><TuitionHero config={config} /><TuitionSubjects config={config} /><TuitionTeachers config={config} /><TuitionResults config={config} /><TuitionTestimonials config={config} /><TuitionSchedule config={config} /><TuitionContact config={config} /></main><TuitionFooter config={config} /><WhatsAppButton config={config.whatsapp} /></div>;
}
