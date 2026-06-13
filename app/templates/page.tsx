import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { whatsappConfig } from "@/config/whatsapp";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Copy } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Template Gallery — Browse All Business Templates",
  description:
    "Browse our collection of 5 professional business website templates. Preview before you buy.",
};

const templates = [
  {
    id: "gym",
    name: "IronPeak Fitness",
    category: "Gym & Fitness",
    description: "High-energy fitness template with membership plans, trainer profiles, class schedules, and an animated hero.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    previewUrl: "/templates/gym",
    sections: ["Hero", "About", "Membership", "Trainers", "Schedule", "Gallery", "Testimonials", "Contact"],
    accent: "from-orange-500 to-red-600",
  },
  {
    id: "salon",
    name: "Lumière Beauty Studio",
    category: "Beauty & Salon",
    description: "Luxury salon template with service categories, stylist profiles, before/after gallery, and pricing tables.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
    previewUrl: "/templates/salon",
    sections: ["Hero", "Services", "Pricing", "Stylists", "Gallery", "Reviews", "Contact"],
    accent: "from-pink-500 to-rose-600",
  },
  {
    id: "restaurant",
    name: "Spice Route Kitchen",
    category: "Restaurant & Dining",
    description: "Premium restaurant template with filterable menu, featured dishes, gallery, and reservation form.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    previewUrl: "/templates/restaurant",
    sections: ["Hero", "Menu", "Featured", "About", "Gallery", "Reviews", "Contact"],
    accent: "from-amber-500 to-orange-600",
  },
  {
    id: "tuition",
    name: "Apex Academy",
    category: "Education & Tuition",
    description: "Trustworthy tuition template with subjects, teacher profiles, student results, and class schedules.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    previewUrl: "/templates/tuition",
    sections: ["Hero", "Subjects", "Teachers", "Results", "Schedule", "Testimonials", "Contact"],
    accent: "from-blue-500 to-indigo-600",
  },
  {
    id: "realestate",
    name: "Keshan Realty",
    category: "Real Estate",
    description: "Modern real estate agent template with property listings, agent bio, services, and inquiry form.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    previewUrl: "/templates/realestate",
    sections: ["Hero", "Properties", "Agent", "Services", "Testimonials", "Contact"],
    accent: "from-emerald-500 to-teal-600",
  },
];

export default function TemplatesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Header */}
        <div className="bg-gradient-to-br from-slate-900 to-blue-950 py-16 text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="outline" className="mb-4 border-blue-400/40 bg-blue-500/10 text-blue-300">
              Template Gallery
            </Badge>
            <h1 className="text-4xl font-black sm:text-5xl">5 Ready-Made Templates</h1>
            <p className="mt-4 text-white/70 max-w-xl mx-auto">
              Each template is production-ready with full source code, CMS config files, SEO, and WhatsApp integration.
            </p>
          </div>
        </div>

        {/* Template grid */}
        <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            {templates.map((template) => (
              <div key={template.id} className="overflow-hidden rounded-2xl border bg-card shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${template.accent} opacity-80`} />
                  <img src={template.image} alt={template.name}
                    className="h-full w-full object-cover mix-blend-overlay" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <Badge variant="outline" className="w-fit border-white/30 bg-black/20 text-white backdrop-blur mb-2">
                      {template.category}
                    </Badge>
                    <h2 className="text-2xl font-black text-white">{template.name}</h2>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{template.description}</p>

                  <div className="mb-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Included Sections</p>
                    <div className="flex flex-wrap gap-1.5">
                      {template.sections.map((section) => (
                        <Badge key={section} variant="secondary" className="text-xs">{section}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button asChild className="flex-1 gap-1.5">
                      <Link href={template.previewUrl}>
                        <ExternalLink className="h-4 w-4" />
                        Preview Template
                      </Link>
                    </Button>
                    <Button variant="outline" className="flex-1 gap-1.5" asChild>
                      <Link href="/contact">
                        <Copy className="h-4 w-4" />
                        Get This Template
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton config={whatsappConfig} />
    </div>
  );
}
