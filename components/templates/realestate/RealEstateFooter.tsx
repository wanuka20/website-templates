import { Home } from "lucide-react";
import type { RealEstateConfig } from "@/types";
import { BrandLogo } from "@/components/templates/BrandLogo";
import { SocialLinks } from "@/components/shared/SocialLinks";

export function RealEstateFooter({ config }: { config: RealEstateConfig }) {
  return (
    <footer className="bg-emerald-950 py-12 text-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2 font-bold text-xl">
              <BrandLogo src={config.logo} alt={config.name} size={24} className="h-6 w-6 object-contain" fallback={<Home className="h-5 w-5 text-emerald-400" />} />{config.name}
            </div>
            <p className="text-sm text-white/50">{config.tagline}</p>
            <SocialLinks links={config.socialLinks} className="mt-4 flex gap-3" linkClassName="text-white/50 hover:text-emerald-400 transition-colors" />
          </div>
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/70">Services</p>
            <ul className="space-y-2 text-sm text-white/60">
              {config.services.map((s) => (
                <li key={s.id}><a href="#services" className="hover:text-emerald-400 transition-colors">{s.name}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/70">Contact</p>
            <div className="space-y-2 text-sm text-white/60">
              <p>{config.agent.name}</p>
              <p>{config.agent.phone}</p>
              <p>{config.agent.email}</p>
              <p>{config.address}, {config.city}</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-emerald-700 pt-8 text-center text-xs text-white/60">
          © {new Date().getFullYear()} {config.name}. All rights reserved. Licensed Realtor.
        </div>
      </div>
    </footer>
  );
}
