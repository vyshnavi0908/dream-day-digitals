import { motion } from "framer-motion";
import { Heart, Cake, Briefcase, Camera } from "lucide-react";
import { SectionHeader } from "./Showcase";

const services = [
  {
    icon: Heart,
    title: "Wedding Invitations",
    desc: "Cinematic wedding sites with countdowns, galleries, RSVP and your love story — beautifully told.",
    features: ["Custom Design", "RSVP & Guestbook", "Music & Animation"],
  },
  {
    icon: Cake,
    title: "Birthday Invitations",
    desc: "Personal, shareable birthday invites with elegant motion, photo galleries and WhatsApp-ready links.",
    features: ["Themes for All Ages", "Photo Gallery", "One-Tap Share"],
  },
  {
    icon: Briefcase,
    title: "Business Websites",
    desc: "Premium showcase sites for restaurants, dentals, hospitals, shops — fast, SEO-ready, conversion focused.",
    features: ["Modern & Responsive", "SEO Friendly", "Easy to Manage"],
  },
  {
    icon: Camera,
    title: "Portfolio Websites",
    desc: "Editorial portfolios that elevate your craft — photography, design, and creative studios.",
    features: ["Bento Gallery", "Case Studies", "Cinematic Motion"],
  },
];

export function Services() {
  return (
    <section id="services" className="section-luxury">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-full max-w-[800px] -translate-x-1/2 radial-gold opacity-20" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeader
          eyebrow="WHAT WE CRAFT"
          title={<>A full suite of <em className="italic text-gradient-gold">premium</em> digital experiences.</>}
        />

        <div className="mt-12 grid gap-5 sm:mt-16 md:mt-20 md:grid-cols-2 md:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl glass p-7 transition-all duration-500 sm:p-9 md:p-10 md:hover:-translate-y-2"
            >
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gold/10 blur-3xl transition-opacity duration-700 group-hover:bg-gold/20" />

              <div className="relative">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent transition-all group-hover:border-gold group-hover:shadow-gold">
                  <s.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="font-serif text-3xl text-ivory">{s.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-ivory/60">{s.desc}</p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {s.features.map((f) => (
                    <span
                      key={f}
                      className="rounded-full border border-gold/20 px-4 py-1.5 font-display text-[10px] tracking-[0.2em] text-ivory/70"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-2xl border border-gold/0 transition-all duration-500 group-hover:border-gold/40" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
