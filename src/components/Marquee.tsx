import { motion } from "framer-motion";

const items = [
  "WEDDING INVITATIONS",
  "BIRTHDAY INVITATIONS",
  "BUSINESS SHOWCASE",
  "PORTFOLIO SITES",
  "RSVP & GALLERIES",
  "PREMIUM DESIGNS",
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-gold/15 bg-background/40 py-5 backdrop-blur-sm sm:py-6">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap motion-reduce:animate-none sm:gap-16">
        {[...items, ...items, ...items].map((t, i) => (
          <div key={i} className="flex items-center gap-16">
            <span className="font-display text-xs tracking-[0.35em] text-ivory/40 sm:text-sm sm:tracking-[0.4em]">{t}</span>
            <span className="text-gold">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
