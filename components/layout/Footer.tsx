import Link from "next/link";
import { Layers, Facebook, Instagram, Twitter, Youtube, Linkedin, MessageCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Templates: [
    { label: "Gym", href: "/templates/gym" },
    { label: "Salon", href: "/templates/salon" },
    { label: "Restaurant", href: "/templates/restaurant" },
    { label: "Tuition Class", href: "/templates/tuition" },
    { label: "Real Estate", href: "/templates/realestate" },
  ],
  Company: [
    { label: "Home", href: "/" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
    { label: "Browse All", href: "/templates" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Layers className="h-4 w-4" />
              </div>
              <span>
                Website<span className="text-primary">Templates</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Professional, ready-made website templates for small businesses. Launch your online presence today.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* WhatsApp CTA */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
              Get In Touch
            </h3>
            <p className="text-sm text-muted-foreground">
              Need a custom template or have questions? Message us on WhatsApp.
            </p>
            <a
              href="https://wa.me/94771234567?text=Hi! I'm interested in a website template."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[#128C7E]"
            >
              <MessageCircle className="h-4 w-4 fill-white" />
              WhatsApp Us
            </a>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {year} WebsiteTemplates. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
