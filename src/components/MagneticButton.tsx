import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useRef, useEffect, useState } from "react";

export function MagneticButton({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });
  const [magnetic, setMagnetic] = useState(false);

  useEffect(() => {
    setMagnetic(matchMedia("(pointer: fine)").matches);
  }, []);

  const onMove = (e: React.MouseEvent) => {
    if (!magnetic) return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - (r.left + r.width / 2)) * 0.28);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.28);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-[oklch(0.85_0.12_85)] via-[oklch(0.78_0.13_82)] to-[oklch(0.7_0.14_75)] text-background shadow-gold hover:shadow-gold-lg"
      : "border border-gold/40 text-ivory hover:border-gold hover:text-gold";

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      data-magnetic
      className={`group relative inline-flex min-h-[48px] items-center justify-center overflow-hidden rounded-full px-7 py-3.5 font-display text-[10px] tracking-[0.28em] transition-all sm:min-h-0 sm:px-8 sm:py-4 sm:text-[11px] sm:tracking-[0.3em] ${styles} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {inner}
      </a>
    );
  }
  return <button onClick={onClick}>{inner}</button>;
}
