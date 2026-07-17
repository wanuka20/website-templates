"use client";

import { useEffect, useState } from "react";

/** Updates at most once per animation frame while the page is scrolling. */
export function useScrolled(threshold: number) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frameId: number | undefined;

    const update = () => {
      const nextValue = window.scrollY > threshold;
      setScrolled((currentValue) =>
        currentValue === nextValue ? currentValue : nextValue,
      );
    };

    const onScroll = () => {
      if (frameId !== undefined) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = undefined;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameId !== undefined) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [threshold]);

  return scrolled;
}
