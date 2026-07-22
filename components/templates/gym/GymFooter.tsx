import { Dumbbell } from "lucide-react";
import type { GymConfig } from "@/types";
import { BrandLogo } from "@/components/templates/BrandLogo";
import { SocialLinks } from "@/components/shared/SocialLinks";

export function GymFooter({ config }: { config: GymConfig }) {
  return (
    <footer className="bg-zinc-950 py-12 text-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2 font-extrabold text-xl">
              <BrandLogo src={config.logo} alt={config.name} size={24} className="h-6 w-6 rounded object-contain" fallback={<Dumbbell className="h-5 w-5 text-orange-500" />} />
              {config.name}
            </div>
            <p className="text-sm text-white/50 max-w-xs">{config.tagline}</p>
            <SocialLinks links={config.socialLinks} className="mt-4 flex items-center gap-3" linkClassName="text-white/50 hover:text-orange-400 transition-colors" />
          </div>
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/70">Quick Links</p>
            <ul className="space-y-2 text-sm text-white/60">
              {["About", "Membership", "Trainers", "Classes", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-orange-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/70">Contact</p>
            <div className="space-y-2 text-sm text-white/60">
              <p>{config.phone}</p>
              <p>{config.email}</p>
              <p>{config.address}</p>
              <p>{config.city}</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/20 pt-8 text-center text-xs text-white/60">
          © {new Date().getFullYear()} {config.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
