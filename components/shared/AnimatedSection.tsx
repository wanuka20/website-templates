"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none";

function useElementInView(once: boolean, amount: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        if (!once) setIsVisible(false);
        return;
      }

      setIsVisible(true);
      if (once) observer.unobserve(element);
    }, { threshold: amount });

    observer.observe(element);
    return () => observer.disconnect();
  }, [amount, once]);

  return { ref, isVisible };
}

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  once?: boolean;
  amount?: number;
}

export function AnimatedSection({ children, className, delay = 0, direction = "up", once = true, amount = 0.15 }: AnimatedSectionProps) {
  const { ref, isVisible } = useElementInView(once, amount);

  return (
    <div ref={ref} className={cn("reveal", `reveal-${direction}`, isVisible ? "reveal-visible" : "reveal-hidden", className)} style={{ "--reveal-delay": `${delay}s` } as CSSProperties}>
      {children}
    </div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
  amount?: number;
}

export function StaggerContainer({ children, className, staggerDelay = 0.1, once = true, amount = 0.1 }: StaggerContainerProps) {
  const { ref, isVisible } = useElementInView(once, amount);

  return (
    <div ref={ref} className={cn("stagger-container", isVisible ? "stagger-visible" : "stagger-hidden", className)} style={{ "--stagger-delay": `${staggerDelay}s` } as CSSProperties}>
      {children}
    </div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string; direction?: Direction }) {
  return <div className={cn("stagger-item", className)}>{children}</div>;
}
