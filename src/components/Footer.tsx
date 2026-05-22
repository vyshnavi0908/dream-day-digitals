import { Instagram, MessageCircle, Mail } from "lucide-react";
import logo from "@/assets/logo.png";
import { BrandTagline } from "./BrandTagline";

export function Footer() {
  return (
    <footer className="relative border-t border-gold/15 bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:gap-12 sm:px-6 sm:py-20 md:grid-cols-4 md:gap-12">
        <div className="md:col-span-2">
          <div className="flex items-start gap-4">
            <img src={logo} alt="Dream Day Digitals" className="h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14" />
            <div>
              <p className="font-serif text-xl text-ivory sm:text-2xl">
                Dream Day <span className="text-gold">Digitals</span>
              </p>
              <BrandTagline size="sm" variant="gold" className="mt-2" />
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ivory/55 sm:mt-6">
            A luxury digital studio crafting cinematic invitation websites,
            premium business showcases and editorial portfolios.
          </p>
        </div>

        <div>
          <p className="font-display text-[10px] tracking-[0.3em] text-gold">EXPLORE</p>
          <ul className="mt-5 space-y-2.5 text-sm text-ivory/70 sm:mt-6 sm:space-y-3">
            {[
              ["Work", "#showcase"],
              ["Services", "#services"],
              ["Pricing", "#pricing"],
              ["FAQ", "#faq"],
            ].map(([l, h]) => (
              <li key={l}>
                <a
                  href={h}
                  className="group inline-flex min-h-[44px] items-center gap-2 transition-colors hover:text-gold"
                >
                  <span className="h-px w-4 bg-gold/40 transition-all group-hover:w-8 group-hover:bg-gold" />
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-[10px] tracking-[0.3em] text-gold">CONNECT</p>
          <ul className="mt-5 space-y-3 text-sm text-ivory/70 sm:mt-6 sm:space-y-4">
            <li>
              <a
                href="https://wa.me/919966554231"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex min-h-[44px] items-center gap-3 transition-colors hover:text-gold"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-gold" />
                +91 99665 54231
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/dreamdaydigitals"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex min-h-[44px] items-center gap-3 transition-colors hover:text-gold"
              >
                <Instagram className="h-4 w-4 shrink-0 text-gold" />
                @dreamdaydigitals
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@dreamdaydigitals.com"
                className="group inline-flex min-h-[44px] items-center gap-3 transition-colors hover:text-gold"
              >
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                hello@dreamdaydigitals.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-center text-xs text-ivory/40 sm:px-6 sm:py-8 md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} Dream Day Digitals. All rights reserved.</p>
          <BrandTagline size="xs" variant="muted" className="max-w-xs text-center md:text-right" />
        </div>
      </div>
    </footer>
  );
}
