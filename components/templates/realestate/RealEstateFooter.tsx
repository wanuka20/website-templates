import { Home, Facebook, Instagram, Linkedin } from "lucide-react";
import type { RealEstateConfig } from "@/types";

export function RealEstateFooter({ config }: { config: RealEstateConfig }) {
  return (
    <footer className="bg-emerald-950 py-12 text-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2 font-bold text-xl">
              <Home className="h-5 w-5 text-emerald-400" />{config.name}
            </div>
            <p className="text-sm text-white/50">{config.tagline}</p>
            <div className="mt-4 flex gap-3">
              {config.socialLinks.facebook && (
                <a href={config.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-emerald-400 transition-colors"><Facebook className="h-5 w-5" /></a>
              )}
              {config.socialLinks.instagram && (
                <a href={config.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-emerald-400 transition-colors"><Instagram className="h-5 w-5" /></a>
              )}
              {config.socialLinks.linkedin && (
                <a href={config.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-emerald-400 transition-colors"><Linkedin className="h-5 w-5" /></a>
              )}
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">Services</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {config.services.map((s) => (
                <li key={s.id}><a href="#services" className="hover:text-emerald-400 transition-colors">{s.name}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">Contact</h4>
            <div className="space-y-2 text-sm text-white/60">
              <p>{config.agent.name}</p>
              <p>{config.agent.phone}</p>
              <p>{config.agent.email}</p>
              <p>{config.address}, {config.city}</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-emerald-900 pt-8 text-center text-xs text-white/30">
          © {new Date().getFullYear()} {config.name}. All rights reserved. Licensed Realtor.
        </div>
      </div>
    </footer>
  );
}
