import { motion } from "framer-motion";
import { Sparkles, Smartphone, Zap, Search, Headphones, MessageCircle, Palette, Shield } from "lucide-react";
import { SectionHeader } from "./Showcase";

const items = [
  { icon: Sparkles, title: "Premium Designs", desc: "Unique & eye-catching" },
  { icon: Smartphone, title: "Mobile Responsive", desc: "Perfect on all devices" },
  { icon: Zap, title: "Fast Loading", desc: "Speed that impresses" },
  { icon: Search, title: "SEO Friendly", desc: "Rank higher, go further" },
  { icon: Headphones, title: "24/7 Support", desc: "We're always here" },
  { icon: MessageCircle, title: "WhatsApp Ready", desc: "Share with one tap" },
  { icon: Palette, title: "Custom Design", desc: "Made just for you" },
  { icon: Shield, title: "Secure & Reliable", desc: "Your data, our priority" },
];

export function WhyUs() {
  return (
    <section className="section-luxury">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeader
          eyebrow="WHY CHOOSE US"
          title={<>The details that make a <em className="italic text-gradient-gold">difference</em>.</>}
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-4 md:mt-20 md:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-xl glass p-4 transition-all duration-500 sm:p-6 md:hover:-translate-y-1 md:hover:shadow-gold"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/0 opacity-0 transition-opacity duration-500 group-hover:from-gold/5 group-hover:opacity-100" />
              <it.icon className="relative h-7 w-7 text-gold transition-transform duration-500 group-hover:scale-110" />
              <h4 className="relative mt-3 font-serif text-base text-ivory sm:mt-4 sm:text-lg">{it.title}</h4>
              <p className="relative mt-1 text-[11px] text-ivory/50 sm:text-xs">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
