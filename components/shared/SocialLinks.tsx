import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import type { SocialLinks as SocialLinksConfig } from "@/types";

type SocialLinksProps = {
  links: SocialLinksConfig;
  className?: string;
  iconClassName?: string;
  linkClassName?: string;
};

const socialNetworks = [
  { key: "facebook", label: "Facebook", Icon: Facebook },
  { key: "instagram", label: "Instagram", Icon: Instagram },
  { key: "twitter", label: "X (Twitter)", Icon: Twitter },
  { key: "youtube", label: "YouTube", Icon: Youtube },
  { key: "linkedin", label: "LinkedIn", Icon: Linkedin },
] as const;

export function SocialLinks({
  links,
  className = "flex items-center gap-3",
  iconClassName = "h-5 w-5",
  linkClassName,
}: SocialLinksProps) {
  const visibleLinks = socialNetworks.filter(({ key }) => Boolean(links[key]));

  if (!visibleLinks.length) {
    return null;
  }

  return (
    <div className={className}>
      {visibleLinks.map(({ key, label, Icon }) => (
        <a
          key={key}
          href={links[key]}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={linkClassName ?? "transition-colors"}
        >
          <Icon className={iconClassName} />
        </a>
      ))}
    </div>
  );
}
