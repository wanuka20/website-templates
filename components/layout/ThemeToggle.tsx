"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { isDark, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <span
        className={cn(
          "inline-flex h-10 w-10 items-center justify-center",
          className
        )}
        aria-hidden="true"
      >
        <Sun className="h-5 w-5" />
      </span>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={className}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="h-5 w-5 transition-transform duration-200 rotate-0 scale-100" />
      ) : (
        <Moon className="h-5 w-5 transition-transform duration-200 rotate-0 scale-100" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
