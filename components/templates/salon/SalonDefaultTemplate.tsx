import { SalonNavbar } from "@/components/templates/salon/SalonNavbar";
import { SalonHero } from "@/components/templates/salon/SalonHero";
import { SalonServices } from "@/components/templates/salon/SalonServices";
import { SalonPricing } from "@/components/templates/salon/SalonPricing";
import { SalonStylists } from "@/components/templates/salon/SalonStylists";
import { SalonGallery } from "@/components/templates/salon/SalonGallery";
import { SalonReviews } from "@/components/templates/salon/SalonReviews";
import { SalonContact } from "@/components/templates/salon/SalonContact";
import { SalonFooter } from "@/components/templates/salon/SalonFooter";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { salonDefaultThemeColors } from "@/config/salon-design";
import type { SalonConfig } from "@/types";
import type { CSSProperties } from "react";
import styles from "./SalonDefaultTemplate.module.css";

export function SalonDefaultTemplate({ config }: { config: SalonConfig }) {
  return <div className={`${styles.root} flex min-h-screen flex-col`} style={{ "--salon-default-color-1": salonDefaultThemeColors.color1, "--salon-default-color-2": salonDefaultThemeColors.color2 } as CSSProperties}><SalonNavbar config={config} /><main><SalonHero config={config} /><SalonServices config={config} /><SalonPricing config={config} /><SalonStylists config={config} /><SalonGallery config={config} /><SalonReviews config={config} /><SalonContact config={config} /></main><SalonFooter config={config} /><WhatsAppButton config={config.whatsapp} /></div>;
}
