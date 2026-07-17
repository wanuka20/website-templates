"use client";

import { useState } from "react";
import { Menu, X, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { cn } from "@/lib/utils";
import { useScrolled } from "@/hooks/useScrolled";
import { BrandLogo } from "@/components/templates/BrandLogo";
import { isExternalBookingUrl, resolveBookingUrl } from "@/lib/booking-url";
import type { SalonConfig } from "@/types";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Stylists", href: "#stylists" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function SalonNavbar({ config }: { config: SalonConfig }) {
  const scrolled = useScrolled(50);
  const [open, setOpen] = useState(false);
  const bookingUrl = resolveBookingUrl(config.bookingUrl);
  const bookingIsExternal = isExternalBookingUrl(bookingUrl);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white/95 shadow-sm dark:bg-zinc-900/95" : "bg-transparent"
      )}
    >
      <nav className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className={cn("flex items-center gap-2 font-bold text-xl", scrolled ? "text-foreground" : "text-white")}>
          <BrandLogo src={config.logo} alt={config.name} size={24} className="h-6 w-6 object-contain" fallback={<Scissors className="h-5 w-5 text-rose-500" />} />
          {config.name}
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={cn("px-3 py-2 text-sm font-medium transition-colors hover:text-rose-500", scrolled ? "text-foreground/70" : "text-white/80")}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden bg-rose-500 text-white hover:bg-rose-600 md:flex">
            <a href={bookingUrl} target={bookingIsExternal ? "_blank" : undefined} rel={bookingIsExternal ? "noopener noreferrer" : undefined}>Book Now</a>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn("md:hidden", !scrolled && "text-white")}>
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="mb-8 flex items-center gap-2 font-bold text-lg">
                <BrandLogo src={config.logo} alt={config.name} size={20} className="h-5 w-5 object-contain" fallback={<Scissors className="h-5 w-5 text-rose-500" />} />
                {config.name}
              </div>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-md px-4 py-3 text-sm hover:bg-muted hover:text-rose-500 transition-colors">
                    {link.label}
                  </a>
                ))}
                <Button asChild className="mt-4 bg-rose-500 hover:bg-rose-600" onClick={() => setOpen(false)}>
                  <a href={bookingUrl} target={bookingIsExternal ? "_blank" : undefined} rel={bookingIsExternal ? "noopener noreferrer" : undefined}>Book Appointment</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
