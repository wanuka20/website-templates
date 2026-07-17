import { BookOpen } from "lucide-react";
import type { TuitionConfig } from "@/types";
import { BrandLogo } from "@/components/templates/BrandLogo";
import { SocialLinks } from "@/components/shared/SocialLinks";

export function TuitionFooter({ config }: { config: TuitionConfig }) {
  return (
    <footer className="bg-blue-950 py-12 text-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2 font-bold text-xl">
              <BrandLogo src={config.logo} alt={config.name} size={24} className="h-6 w-6 object-contain" fallback={<BookOpen className="h-5 w-5 text-blue-300" />} />{config.name}
            </div>
            <p className="text-sm text-blue-200/60">{config.tagline}</p>
            <SocialLinks links={config.socialLinks} className="mt-4 flex gap-3" linkClassName="text-blue-200/50 hover:text-blue-300 transition-colors" />
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-200/40">Subjects</h4>
            <ul className="space-y-2 text-sm text-blue-200/60">
              {config.subjects.map((s) => (
                <li key={s.id}><a href="#subjects" className="hover:text-blue-300 transition-colors">{s.name}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-200/40">Contact</h4>
            <div className="space-y-2 text-sm text-blue-200/60">
              <p>{config.phone}</p>
              <p>{config.email}</p>
              <p>{config.address}, {config.city}</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-blue-900 pt-8 text-center text-xs text-blue-200/30">
          © {new Date().getFullYear()} {config.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
