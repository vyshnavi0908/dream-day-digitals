import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeader } from "./Showcase";
import { MagneticButton } from "./MagneticButton";

const tiers = [
  {
    name: "Starter",
    price: "₹999",
    tag: "Birthday Invitations",
    features: ["Custom Invitation Design", "Themes for All Ages", "Music & Animation", "Share on WhatsApp", "Mobile Friendly"],
  },
  {
    name: "Premium",
    price: "₹1,499",
    tag: "Wedding Invitations",
    featured: true,
    features: ["Premium & Elegant Design", "Event Details & Timeline", "RSVP & Guest Management", "Photo Gallery & Countdown", "Google Map Integration", "Share on WhatsApp"],
  },
  {
    name: "Luxury",
    price: "₹2,499",
    tag: "Business Websites",
    features: ["Modern & Responsive Design", "SEO Friendly", "Fast & Secure", "Easy to Manage", "Custom Domain Ready", "Priority Support"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section-luxury overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(600px,80vh)] w-full max-w-[1000px] -translate-x-1/2 -translate-y-1/2 radial-gold opacity-15" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeader
          eyebrow="INVESTMENT"
          title={<>Luxury that's <em className="italic text-gradient-gold">surprisingly</em> attainable.</>}
          sub="All packages include premium design, mobile responsiveness, fast hosting and support."
        />

        <div className="mt-12 grid gap-5 sm:mt-16 md:mt-20 md:grid-cols-3 md:items-stretch md:gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative flex flex-col overflow-hidden rounded-3xl p-7 transition-all duration-700 sm:p-9 md:p-10 md:hover:-translate-y-2 ${
                t.featured
                  ? "border-gold-gradient bg-card shadow-gold-lg lg:scale-[1.03]"
                  : "glass"
              }`}
            >
              {t.featured && (
                <div className="absolute right-6 top-6 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 font-display text-[9px] tracking-[0.3em] text-gold">
                  MOST LOVED
                </div>
              )}
              <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              <p className="font-display text-[10px] tracking-[0.35em] text-gold/80">{t.tag}</p>
              <h3 className="mt-3 font-serif text-3xl text-ivory">{t.name}</h3>

              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-serif text-5xl text-gradient-gold sm:text-6xl">{t.price}</span>
                <span className="text-sm text-ivory/50">starting</span>
              </div>

              <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

              <ul className="space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-ivory/75">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex justify-center">
                <MagneticButton
                  href="https://wa.me/919966554231"
                  variant={t.featured ? "primary" : "ghost"}
                >
                  Get Started
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
