import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export function TiltCard({ children, className, intensity = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${(-y * intensity).toFixed(2)}deg) rotateY(${(x * intensity).toFixed(2)}deg) translateZ(0)`;
    el.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--my", `${(y + 0.5) * 100}%`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(
        "tilt-card group relative rounded-2xl border border-border/60 bg-card/70 p-6 backdrop-blur-xl",
        "shadow-[0_20px_60px_-30px_rgba(0,0,0,0.7)]",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl",
        "before:bg-[radial-gradient(400px_circle_at_var(--mx,50%)_var(--my,50%),oklch(0.82_0.13_82/0.14),transparent_60%)]",
        "before:opacity-0 before:transition-opacity before:duration-500 group-hover:before:opacity-100 hover:before:opacity-100",
        className,
      )}
    >
      <div className="tilt-inner relative">{children}</div>
    </div>
  );
}
