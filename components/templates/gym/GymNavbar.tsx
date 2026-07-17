"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { cn } from "@/lib/utils";
import { useScrolled } from "@/hooks/useScrolled";
import { BrandLogo } from "@/components/templates/BrandLogo";
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
  const scrolled = useScrolled(50);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 shadow-sm dark:bg-black/95"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className={cn(
            "flex items-center gap-2 font-extrabold text-xl",
            scrolled ? "text-foreground dark:text-white" : "text-white"
          )}
        >
          <BrandLogo
            src={config.logo}
            alt={config.name}
            size={32}
            className="h-8 w-8 rounded-lg object-contain"
            fallback={
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500">
                <Dumbbell className="h-4 w-4 text-white" />
              </div>
            }
          />
          {config.name}
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-orange-400",
                scrolled ? "text-foreground/80 dark:text-white/80" : "text-white/80"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle
            className={cn(
              scrolled
                ? "text-foreground hover:bg-black/5 hover:text-foreground dark:text-white dark:hover:bg-white/10 dark:hover:text-white"
                : "text-white hover:bg-white/10 hover:text-white"
            )}
          />
          <Button
            asChild
            size="sm"
            className="hidden bg-orange-500 text-white hover:bg-orange-600 md:flex"
          >
            <a href="#membership">Join Now</a>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn("md:hidden", scrolled ? "text-foreground dark:text-white" : "text-white")}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-black text-white">
              <div className="mb-8 flex items-center gap-2 font-extrabold text-xl">
                <BrandLogo src={config.logo} alt={config.name} size={20} className="h-5 w-5 rounded object-contain" fallback={<Dumbbell className="h-5 w-5 text-orange-500" />} />
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
