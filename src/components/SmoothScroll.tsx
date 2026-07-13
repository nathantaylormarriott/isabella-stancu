import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

/** Subtle smooth scrolling — short duration, moderate lerp, no touch override. */
export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        duration: 0.85,
        lerp: 0.12,
        smoothWheel: true,
        syncTouch: false,
        touchMultiplier: 1.4,
        wheelMultiplier: 0.95,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
    >
      {children}
    </ReactLenis>
  );
}
