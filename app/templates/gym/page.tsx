import type { Metadata } from "next";
import { getGymContent } from "@/lib/gym-content";
import { generateMetadata as genMeta } from "@/lib/seo";
import { GymNavbar } from "@/components/templates/gym/GymNavbar";
import { GymHero } from "@/components/templates/gym/GymHero";
import { GymAbout } from "@/components/templates/gym/GymAbout";
import { GymMembership } from "@/components/templates/gym/GymMembership";
import { GymTrainers } from "@/components/templates/gym/GymTrainers";
import { GymSchedule } from "@/components/templates/gym/GymSchedule";
import { GymTestimonials } from "@/components/templates/gym/GymTestimonials";
import { GymGallery } from "@/components/templates/gym/GymGallery";
import { GymContact } from "@/components/templates/gym/GymContact";
import { GymFooter } from "@/components/templates/gym/GymFooter";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const config = await getGymContent();

  return genMeta(config.seo, "/templates/gym");
}

export default async function GymTemplatePage() {
  const gymConfig = await getGymContent();

  return (
    <div className="flex min-h-screen flex-col">
      <GymNavbar config={gymConfig} />
      <main>
        <GymHero config={gymConfig} />
        <GymAbout config={gymConfig} />
        <GymMembership config={gymConfig} />
        <GymTrainers config={gymConfig} />
        <GymSchedule config={gymConfig} />
        <GymTestimonials config={gymConfig} />
        <GymGallery config={gymConfig} />
        <GymContact config={gymConfig} />
      </main>
      <GymFooter config={gymConfig} />
      <WhatsAppButton config={gymConfig.whatsapp} />
    </div>
  );
}
