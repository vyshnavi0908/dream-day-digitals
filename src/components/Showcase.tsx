import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import wedding from "@/assets/showcase-wedding.jpg";
import birthday from "@/assets/showcase-birthday.jpg";
import business from "@/assets/showcase-business.jpg";
import portfolio from "@/assets/showcase-portfolio.jpg";

const projects = [
  {
    title: "Vijay & Rashmika",
    category: "Wedding Invitation",
    image: wedding,
    href: "https://wedding-invitation-alpha-liard.vercel.app/",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Julie's 1st Birthday",
    category: "Birthday Invitation",
    image: birthday,
    href: "https://birthday-invitation-beryl.vercel.app/",
    span: "",
  },
  {
    title: "DP Associates",
    category: "Business Showcase",
    image: business,
    href: "https://dp-associates.sjvv09.workers.dev/",
    span: "",
  },
  {
    title: "Harinya & Rahul",
    category: "Wedding Story",
    image: portfolio,
    href: "https://rahul-harinya-wedding-invitation.vercel.app/",
    span: "md:col-span-2",
  },
];

function TiltCard({
  project,
  className = "",
}: {
  project: (typeof projects)[0];
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 22 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 22 });
  const [hover, setHover] = useState(false);
  const [tilt, setTilt] = useState(false);

  useEffect(() => {
    setTilt(matchMedia("(pointer: fine)").matches);
  }, []);

  const onMove = (e: React.MouseEvent) => {
    if (!tilt) return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <motion.a
      ref={ref}
      href={project.href}
      target="_blank"
      rel="noreferrer"
      onMouseMove={onMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); mx.set(0); my.set(0); }}
      style={tilt ? { rotateX: rx, rotateY: ry, transformPerspective: 1200 } : undefined}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 60 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-2xl glass-strong ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-transparent to-gold/0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:h-full">
        <motion.img
          src={project.image}
          alt={project.title}
          loading="lazy"
          animate={{ scale: hover ? 1.08 : 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <p className="font-display text-[10px] tracking-[0.35em] text-gold/80">{project.category}</p>
        <h3 className="mt-2 font-serif text-xl leading-[1.15] text-balance text-ivory sm:text-2xl md:text-[1.65rem] lg:text-3xl">
          {project.title}
        </h3>
        <motion.div
          initial={false}
          animate={{ opacity: hover ? 1 : 0, y: hover ? 0 : 10 }}
          className="mt-4 inline-flex items-center gap-2 text-xs tracking-wider text-gold"
        >
          VIEW LIVE <ExternalLink className="h-3.5 w-3.5" />
        </motion.div>
      </div>

      {/* Animated gold border */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl">
        <div className="absolute inset-0 rounded-2xl border border-gold/20 transition-all duration-500 group-hover:border-gold/60 group-hover:shadow-gold" />
      </div>
    </motion.a>
  );
}

export function Showcase() {
  return (
    <section id="showcase" className="section-luxury">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeader
          eyebrow="SELECTED WORK"
          title={<>Crafted with <em className="italic text-gradient-gold">obsession</em>.</>}
          sub="Each project is a love letter to detail — from the first frame to the final pixel."
        />

        <div className="mt-12 grid auto-rows-[240px] grid-cols-1 gap-5 sm:mt-16 sm:auto-rows-[260px] sm:gap-6 md:mt-20 md:grid-cols-3 md:auto-rows-[300px]">
          {projects.map((p, i) => (
            <TiltCard key={i} project={p} className={p.span} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow, title, sub, center = true,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-display text-[10px] tracking-[0.4em] text-gold"
      >
        — {eyebrow} —
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mt-5 font-serif text-3xl leading-[1.12] text-ivory sm:mt-6 sm:text-4xl sm:leading-[1.1] md:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 text-base text-ivory/60 md:text-lg"
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}
