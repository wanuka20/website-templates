import { Scissors, Facebook, Instagram } from "lucide-react";
import type { SalonConfig } from "@/types";

export function SalonFooter({ config }: { config: SalonConfig }) {
  return (
    <footer className="bg-zinc-900 py-12 text-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2 font-bold text-xl">
              <Scissors className="h-5 w-5 text-rose-400" />
              {config.name}
            </div>
            <p className="text-sm text-white/50">{config.tagline}</p>
            <div className="mt-4 flex gap-3">
              {config.socialLinks.facebook && (
                <a href={config.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-rose-400 transition-colors"><Facebook className="h-5 w-5" /></a>
              )}
              {config.socialLinks.instagram && (
                <a href={config.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-rose-400 transition-colors"><Instagram className="h-5 w-5" /></a>
              )}
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">Services</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {config.serviceCategories.map((cat) => (
                <li key={cat}><a href="#services" className="hover:text-rose-400 transition-colors">{cat}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">Contact</h4>
            <div className="space-y-2 text-sm text-white/60">
              <p>{config.phone}</p>
              <p>{config.email}</p>
              <p>{config.address}, {config.city}</p>
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
