import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { BrandTagline } from "./BrandTagline";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background px-6"
        >
          <div className="absolute inset-0 radial-gold opacity-35" />
          <motion.img
            src={logo}
            alt="Dream Day Digitals"
            initial={{ scale: 0.88, opacity: 0, filter: "blur(8px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 h-28 w-28 object-contain drop-shadow-[0_0_40px_rgba(212,175,55,0.45)] sm:h-36 sm:w-36 md:h-40 md:w-40"
          />
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "min(220px, 60vw)", opacity: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mt-6 h-px bg-gradient-to-r from-transparent via-gold to-transparent sm:mt-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="relative z-10 mt-5 font-display text-[10px] tracking-[0.38em] text-gold/85 sm:mt-6"
          >
            DREAM DAY DIGITALS
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8 }}
            className="relative z-10 mt-3"
          >
            <BrandTagline size="sm" variant="gold" className="text-center" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
