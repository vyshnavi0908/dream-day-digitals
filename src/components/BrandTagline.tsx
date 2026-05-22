import { cn } from "@/lib/utils";
import { BRAND_TAGLINE } from "@/lib/brand";

type BrandTaglineProps = {
  className?: string;
  size?: "xs" | "sm" | "md";
  variant?: "default" | "gold" | "muted";
};

const sizeClasses = {
  xs: "text-[8px] tracking-[0.28em] sm:text-[9px] sm:tracking-[0.32em]",
  sm: "text-[9px] tracking-[0.32em] sm:text-[10px] sm:tracking-[0.36em]",
  md: "text-[10px] tracking-[0.36em] sm:text-[11px] sm:tracking-[0.4em]",
};

const variantClasses = {
  default: "text-ivory/55",
  gold: "text-gold/75",
  muted: "text-ivory/40",
};

export function BrandTagline({
  className,
  size = "sm",
  variant = "default",
}: BrandTaglineProps) {
  return (
    <p
      className={cn(
        "font-display uppercase",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
    >
      {BRAND_TAGLINE}
    </p>
  );
}
