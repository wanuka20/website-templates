import { UtensilsCrossed } from "lucide-react";
import type { RestaurantConfig } from "@/types";
import { BrandLogo } from "@/components/templates/BrandLogo";
import { SocialLinks } from "@/components/shared/SocialLinks";

export function RestaurantFooter({ config }: { config: RestaurantConfig }) {
  return (
    <footer className="bg-zinc-950 py-12 text-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2 font-bold text-xl">
              <BrandLogo src={config.logo} alt={config.name} size={24} className="h-6 w-6 object-contain" fallback={<UtensilsCrossed className="h-5 w-5 text-amber-400" />} />{config.name}
            </div>
            <p className="text-sm text-white/50">{config.tagline}</p>
            <SocialLinks links={config.socialLinks} className="mt-4 flex gap-3" linkClassName="text-white/50 hover:text-amber-400 transition-colors" />
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">Menu</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {config.menuCategories.map((cat) => (
                <li key={cat}><a href="#menu" className="hover:text-amber-400 transition-colors">{cat}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">Visit Us</h4>
            <div className="space-y-2 text-sm text-white/60">
              <p>{config.address}, {config.city}</p>
              <p>{config.phone}</p>
              <p>{config.email}</p>
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
