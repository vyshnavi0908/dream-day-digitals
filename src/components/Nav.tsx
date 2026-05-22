import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { BrandTagline } from "./BrandTagline";

const links = [
  { label: "Work", href: "#showcase" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 100], ["rgba(5,5,5,0)", "rgba(5,5,5,0.82)"]);
  const border = useTransform(scrollY, [0, 100], ["rgba(212,175,55,0)", "rgba(212,175,55,0.12)"]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <motion.header
        style={{ background: bg, borderColor: border }}
        className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
      >
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-5 sm:h-20 sm:px-6">
          <a href="#top" className="group flex min-w-0 items-center gap-2.5 sm:gap-3">
            <img
              src={logo}
              alt="Dream Day Digitals"
              className="h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10"
            />
            <div className="min-w-0 leading-tight">
              <span className="block truncate font-display text-[10px] tracking-[0.22em] text-ivory sm:text-xs sm:tracking-[0.28em]">
                DREAM DAY <span className="text-gold">DIGITALS</span>
              </span>
              <BrandTagline
                size="xs"
                variant="muted"
                className="mt-0.5 truncate opacity-60 sm:opacity-70"
              />
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex lg:gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative font-sans text-sm tracking-wide text-ivory/70 transition-colors hover:text-gold"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href="https://wa.me/919966554231"
              target="_blank"
              rel="noreferrer"
              className="group relative hidden overflow-hidden rounded-full border border-gold/40 px-4 py-2 font-display text-[9px] tracking-[0.22em] text-gold transition-all hover:border-gold hover:shadow-gold sm:inline-flex sm:px-5 sm:py-2.5 sm:text-[10px] sm:tracking-[0.25em]"
            >
              <span className="relative z-10">BOOK NOW</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:border-gold hover:bg-gold/5 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl lg:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full flex-col items-center justify-center gap-2 px-8 pt-20"
            >
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.5 }}
                  className="font-serif text-3xl text-ivory transition-colors hover:text-gold sm:text-4xl"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-10 text-center"
              >
                <BrandTagline size="md" variant="gold" />
              </motion.div>
              <motion.a
                href="https://wa.me/919966554231"
                target="_blank"
                rel="noreferrer"
                onClick={close}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-8 rounded-full border border-gold/50 px-8 py-3.5 font-display text-[10px] tracking-[0.3em] text-gold"
              >
                BOOK NOW
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
