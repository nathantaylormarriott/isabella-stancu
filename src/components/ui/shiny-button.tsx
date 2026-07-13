"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const shimmerAnimation: HTMLMotionProps<"a"> = {
  initial: { "--x": "100%" } as React.CSSProperties & { "--x": string },
  animate: { "--x": "-100%" } as React.CSSProperties & { "--x": string },
  whileTap: { scale: 0.98 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
  },
};

const shimmerOverlayStyle = {
  background:
    "linear-gradient(-75deg, transparent calc(var(--x) + 0%), rgba(255,255,255,0.3) calc(var(--x) + 15%), rgba(255,255,255,0.3) calc(var(--x) + 22%), transparent calc(var(--x) + 45%))",
};

interface ShinyLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof HTMLMotionProps<"a">> {
  className?: string;
}

export const ShinyLink = React.forwardRef<HTMLAnchorElement, ShinyLinkProps>(({ className, children, ...props }, ref) => {
  return (
    <motion.a
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      {...shimmerAnimation}
      {...props}
    >
      <span className="relative z-[1] flex w-full items-center gap-4">{children}</span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 block rounded-[inherit]"
        style={shimmerOverlayStyle}
      />
    </motion.a>
  );
});

ShinyLink.displayName = "ShinyLink";
