"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { cn } from "@/lib/utils";
import type { GymConfig } from "@/types";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Membership", href: "#membership" },
  { label: "Trainers", href: "#trainers" },
  { label: "Classes", href: "#classes" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function GymNavbar({ config }: { config: GymConfig }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-black/90 shadow-md backdrop-blur"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="flex items-center gap-2 font-extrabold text-xl text-white">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500">
            <Dumbbell className="h-4 w-4 text-white" />
          </div>
          {config.name}
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:text-orange-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            asChild
            size="sm"
            className="hidden bg-orange-500 text-white hover:bg-orange-600 md:flex"
          >
            <a href="#membership">Join Now</a>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white md:hidden">
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-black text-white">
              <div className="mb-8 flex items-center gap-2 font-extrabold text-xl">
                <Dumbbell className="h-5 w-5 text-orange-500" />
                {config.name}
              </div>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-4 py-3 text-white/80 hover:bg-white/10 hover:text-orange-400 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <Button className="mt-4 bg-orange-500 hover:bg-orange-600" onClick={() => setOpen(false)}>
                  <a href="#membership">Join Now</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
