import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Particles } from "./Particles";
import { MagneticButton } from "./MagneticButton";
import { AmbientGlow } from "./AmbientGlow";
import { BrandTagline } from "./BrandTagline";
import heroBg from "@/assets/hero-bg.jpg";
import wedding from "@/assets/showcase-wedding.jpg";
import birthday from "@/assets/showcase-birthday.jpg";

const easeLuxury = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const mockupY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden"
    >
      {/* Background */}
      <motion.div style={{ scale }} className="absolute inset-0 will-change-transform">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover opacity-50"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      </motion.div>

      <Particles density={55} className="z-[2]" />
      <AmbientGlow />
      <div className="pointer-events-none absolute inset-0 z-[2] radial-gold opacity-25" />

      {/* Content + mockups — stacked layout prevents overlap */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col px-5 sm:px-6"
      >
        {/* Text & CTAs — dedicated zone */}
        <div className="flex flex-1 flex-col items-center justify-center pt-24 pb-8 text-center sm:pt-28 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2.2, ease: easeLuxury }}
            className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-gold/25 px-4 py-1.5 backdrop-blur-md sm:mb-6 sm:gap-3 sm:px-5 sm:py-2"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
            <span className="font-display text-[9px] tracking-[0.3em] text-gold/90 sm:text-[10px] sm:tracking-[0.35em]">
              LUXURY DIGITAL STUDIO
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.35 }}
            className="mb-4 sm:mb-5"
          >
            <BrandTagline size="sm" variant="gold" className="opacity-80" />
          </motion.div>

          <h1 className="max-w-[min(100%,42rem)] font-serif text-[2.35rem] leading-[1.08] tracking-tight text-ivory min-[400px]:text-5xl sm:max-w-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] xl:leading-[1.02]">
            {"Crafted Digitally.".split(" ").map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 2.4 + i * 0.12, ease: easeLuxury }}
                className="mr-[0.35em] inline-block last:mr-0"
              >
                {w}
              </motion.span>
            ))}
            <br className="hidden min-[400px]:block" />
            <span className="min-[400px]:hidden"> </span>
            <motion.span
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 2.75, ease: easeLuxury }}
              className="inline-block italic text-gradient-gold"
            >
              Remembered Forever.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 3.05 }}
            className="mt-6 max-w-xl px-1 text-sm leading-relaxed text-ivory/60 sm:mt-8 sm:max-w-2xl sm:text-base md:text-lg"
          >
            Premium invitation & showcase websites designed to turn moments into
            unforgettable digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 3.3 }}
            className="mt-8 flex w-full max-w-md flex-col items-stretch gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4"
          >
            <MagneticButton href="#showcase" className="w-full sm:w-auto">
              Explore Our Work
            </MagneticButton>
            <MagneticButton href="https://wa.me/919966554231" variant="ghost" className="w-full sm:w-auto">
              Book Your Website
            </MagneticButton>
          </motion.div>
        </div>

        {/* Desktop mockups — separate row, never overlaps headline */}
        <motion.div
          style={{ y: mockupY }}
          className="relative hidden min-h-[200px] shrink-0 pb-20 lg:block lg:min-h-[240px] xl:min-h-[280px] xl:pb-24"
        >
          <div className="relative mx-auto flex h-full max-w-4xl items-end justify-center">
            <motion.img
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ duration: 1.2, delay: 3.5, ease: easeLuxury }}
              src={wedding}
              alt="Vijay & Rashmika wedding invitation preview"
              loading="lazy"
              className="animate-float-slow relative z-10 w-[min(420px,42vw)] -rotate-6 rounded-2xl border border-gold/20 shadow-gold-lg will-change-transform"
            />
            <motion.img
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 0.95, y: 0 }}
              transition={{ duration: 1.2, delay: 3.7, ease: easeLuxury }}
              src={birthday}
              alt="Birthday invitation preview"
              loading="lazy"
              className="animate-float relative z-20 -ml-[min(140px,14vw)] w-[min(240px,24vw)] rotate-6 rounded-2xl border border-gold/20 shadow-gold-lg will-change-transform"
            />
          </div>
        </motion.div>

        {/* Mobile preview strip — compact, below fold of hero text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.6 }}
          className="relative mb-16 flex shrink-0 justify-center gap-4 pb-4 lg:hidden"
        >
          <img
            src={wedding}
            alt="Vijay & Rashmika wedding showcase"
            loading="lazy"
            className="w-[42%] max-w-[160px] -rotate-3 rounded-xl border border-gold/20 shadow-gold object-cover aspect-[4/5]"
          />
          <img
            src={birthday}
            alt="Julie's 1st birthday showcase"
            loading="lazy"
            className="w-[34%] max-w-[130px] translate-y-4 rotate-3 rounded-xl border border-gold/20 shadow-gold object-cover aspect-[4/5]"
          />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
          className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 sm:bottom-8"
        >
          <div
            className="flex h-9 w-5 items-start justify-center rounded-full border border-gold/35 p-1 sm:h-10 sm:w-6"
            aria-hidden
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1 rounded-full bg-gold"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
