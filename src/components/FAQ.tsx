import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "./Showcase";

const faqs = [
  { q: "How long does delivery take?", a: "Most invitation websites are delivered within 2-4 days. Business and portfolio sites typically take 7-14 days depending on scope." },
  { q: "Is the website mobile friendly?", a: "Absolutely. Every site we craft is mobile-first, tuned for every screen size with the same cinematic feel." },
  { q: "Can we share it on WhatsApp?", a: "Yes — we generate a beautiful share preview so your link looks premium the moment it lands in a chat." },
  { q: "Can custom music be added?", a: "Of course. We can integrate background music, voiceovers, or a custom score that fits your moment." },
  { q: "Can we use our own domain?", a: "Yes. We can connect any custom domain you own, or help you purchase one to match your event or brand." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section-luxury">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <SectionHeader
          eyebrow="QUESTIONS"
          title={<>Everything you wanted to <em className="italic text-gradient-gold">ask</em>.</>}
        />
        <div className="mt-16 space-y-4">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="overflow-hidden rounded-xl glass"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex min-h-[56px] w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:text-gold sm:gap-6 sm:p-7"
              >
                <span className="font-serif text-base text-ivory sm:text-lg md:text-xl">{f.q}</span>
                <motion.div
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="shrink-0 rounded-full border border-gold/40 p-2 text-gold"
                >
                  <Plus className="h-4 w-4" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="px-7 pb-7 text-base leading-relaxed text-ivory/65">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
