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
import type { GymConfig } from "@/types";

export function EditorialGymTemplate({ config }: { config: GymConfig }) {
  return (
    <div className="gym-template flex min-h-screen flex-col bg-[#080808] text-white">
      <GymNavbar config={config} />
      <main>
        <GymHero config={config} />
        <GymAbout config={config} />
        <GymMembership config={config} />
        <GymTrainers config={config} />
        <GymSchedule config={config} />
        <GymTestimonials config={config} />
        <GymGallery config={config} />
        <GymContact config={config} />
      </main>
      <GymFooter config={config} />
      <WhatsAppButton config={config.whatsapp} />
    </div>
  );
}
