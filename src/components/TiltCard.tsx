import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export function TiltCard({ children, className, intensity = 1 }: TiltCardProps) {
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
        "tilt-card group relative overflow-hidden rounded-2xl border border-border bg-card p-6",
        "shadow-[0_1px_2px_rgba(60,40,30,0.04),0_8px_24px_-12px_rgba(60,40,30,0.08)]",
        "hover:border-primary/30 hover:shadow-[0_2px_4px_rgba(60,40,30,0.04),0_20px_40px_-16px_rgba(201,107,74,0.18)]",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl",
        "before:bg-[radial-gradient(500px_circle_at_var(--mx,50%)_var(--my,50%),oklch(0.64_0.13_48/0.08),transparent_60%)]",
        "before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
        className,
      )}
    >
      <div className="relative">{children}</div>
    </div>
  );
}
