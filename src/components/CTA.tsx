import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";
import { Particles } from "./Particles";

export function CTA() {
  return (
    <section className="section-luxury relative overflow-hidden py-24 sm:py-32 md:py-40">
      <Particles density={40} />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(700px,90vh)] w-full max-w-[1100px] -translate-x-1/2 -translate-y-1/2 radial-gold opacity-35" />

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-[10px] tracking-[0.4em] text-gold"
        >
          — LET'S BEGIN —
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 font-serif text-3xl leading-[1.08] text-ivory sm:mt-6 sm:text-5xl sm:leading-[1.05] md:text-7xl lg:text-8xl"
        >
          Let's turn your dream <br />
          into a <em className="italic text-gradient-gold">digital experience</em>.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-ivory/60"
        >
          Luxury digital invitations and showcase websites crafted to impress —
          and to be remembered.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-10 flex w-full max-w-md flex-col items-stretch gap-3 sm:mt-12 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4"
        >
          <MagneticButton href="https://wa.me/919966554231">
            Start on WhatsApp
          </MagneticButton>
          <MagneticButton href="https://instagram.com/dreamdaydigitals" variant="ghost">
            See More on Instagram
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
