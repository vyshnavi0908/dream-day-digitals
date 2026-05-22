import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeader } from "./Showcase";

const reviews = [
  { name: "Vijay & Rashmika", role: "Wedding, Hyderabad", text: "Our wedding invitation website was beyond anything we imagined. Every guest was in awe. Pure magic." },
  { name: "Julie M.", role: "1st Birthday, Mumbai", text: "The most beautiful first birthday invite we have ever seen. The animations made it feel like a film teaser." },
  { name: "Dr. Pavan", role: "DP Associates", text: "Sleek, fast, premium. Our clients started taking us more seriously the moment we launched." },
  { name: "Harinya R.", role: "Wedding, Bangalore", text: "Cinematic, elegant, deeply personal. Worth every rupee — and so much more." },
];

export function Testimonials() {
  return (
    <section className="section-luxury overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeader
          eyebrow="KIND WORDS"
          title={<>Stories from <em className="italic text-gradient-gold">cherished</em> clients.</>}
        />

        <div className="mt-12 grid gap-5 sm:mt-16 md:mt-20 md:grid-cols-2 md:gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl glass-strong p-7 sm:p-9 md:p-10"
            >
              <Quote className="absolute right-8 top-8 h-12 w-12 text-gold/15" />
              <p className="font-serif text-xl italic leading-relaxed text-ivory/85 md:text-2xl">
                "{r.text}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gradient-to-br from-gold/20 to-transparent font-serif text-gold">
                  {r.name[0]}
                </div>
                <div>
                  <p className="font-display text-[10px] tracking-[0.18em] text-ivory sm:text-xs sm:tracking-[0.2em]">
                    {r.name.toUpperCase()}
                  </p>
                  <p className="mt-1 text-xs text-ivory/50">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
