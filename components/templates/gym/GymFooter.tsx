import { Dumbbell, Facebook, Instagram, Youtube } from "lucide-react";
import type { GymConfig } from "@/types";

export function GymFooter({ config }: { config: GymConfig }) {
  return (
    <footer className="bg-zinc-950 py-12 text-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2 font-extrabold text-xl">
              <Dumbbell className="h-5 w-5 text-orange-500" />
              {config.name}
            </div>
            <p className="text-sm text-white/50 max-w-xs">{config.tagline}</p>
            <div className="mt-4 flex items-center gap-3">
              {config.socialLinks.facebook && (
                <a href={config.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-orange-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              {config.socialLinks.instagram && (
                <a href={config.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-orange-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {config.socialLinks.youtube && (
                <a href={config.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-orange-400 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">Quick Links</h4>
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
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">Contact</h4>
            <div className="space-y-2 text-sm text-white/60">
              <p>{config.phone}</p>
              <p>{config.email}</p>
              <p>{config.address}</p>
              <p>{config.city}</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 text-center text-xs text-white/30">
          © {new Date().getFullYear()} {config.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
