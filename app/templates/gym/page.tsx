import type { Metadata } from "next";
import { gymConfig } from "@/config/gym";
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

export const metadata: Metadata = genMeta(gymConfig.seo, "/templates/gym");

export default function GymTemplatePage() {
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
