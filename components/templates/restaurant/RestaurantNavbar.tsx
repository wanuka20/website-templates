"use client";

import { useState, useEffect } from "react";
import { Menu, X, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { cn } from "@/lib/utils";
import type { RestaurantConfig } from "@/types";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function RestaurantNavbar({ config }: { config: RestaurantConfig }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className={cn("fixed top-0 z-50 w-full transition-all duration-300",
      scrolled ? "bg-white/95 shadow-sm backdrop-blur dark:bg-zinc-900/95" : "bg-transparent")}>
      <nav className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className={cn("flex items-center gap-2 font-bold text-xl", scrolled ? "text-foreground" : "text-white")}>
          <UtensilsCrossed className="h-5 w-5 text-amber-500" />
          {config.name}
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={cn("px-3 py-2 text-sm font-medium transition-colors hover:text-amber-500", scrolled ? "text-foreground/70" : "text-white/80")}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden bg-amber-500 text-white hover:bg-amber-600 md:flex">
            <a href="#contact">Reserve Table</a>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn("md:hidden", !scrolled && "text-white")}>
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="mb-8 flex items-center gap-2 font-bold text-lg">
                <UtensilsCrossed className="h-5 w-5 text-amber-500" />{config.name}
              </div>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={() => setOpen(false)}
                    className="rounded-md px-4 py-3 text-sm hover:bg-muted hover:text-amber-500 transition-colors">{link.label}</a>
                ))}
                <Button className="mt-4 bg-amber-500 hover:bg-amber-600" onClick={() => setOpen(false)}>Reserve a Table</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
