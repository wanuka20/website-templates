import { cn } from "@/lib/utils";
import { AnimatedSection } from "./AnimatedSection";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = true,
  className,
  titleClassName,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", "mb-12 md:mb-16", className)}>
      {eyebrow && (
        <AnimatedSection delay={0}>
          <span
            className={cn(
              "mb-3 inline-block text-sm font-semibold uppercase tracking-widest",
              light ? "text-white/70" : "text-primary"
            )}
          >
            {eyebrow}
          </span>
        </AnimatedSection>
      )}
      <AnimatedSection delay={0.1}>
        <h2
          className={cn(
            "text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl",
            light ? "text-white" : "text-foreground",
            titleClassName
          )}
        >
          {title}
        </h2>
      </AnimatedSection>
      {description && (
        <AnimatedSection delay={0.2}>
          <p
            className={cn(
              "mt-4 text-lg",
              light ? "text-white/70" : "text-muted-foreground",
              centered && "mx-auto max-w-2xl"
            )}
          >
            {description}
          </p>
        </AnimatedSection>
      )}
    </div>
  );
}
