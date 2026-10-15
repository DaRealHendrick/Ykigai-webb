import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { AtSign, Menu, Phone, X } from "lucide-react";
import { INFO } from "../data";
import { EASE, Seal } from "./ui";
import { useOpenNow } from "../hooks/useOpenNow";

const LINKS = [
  { n: "01", label: "Filosofía", href: "#filosofia" },
  { n: "02", label: "La Carta", href: "#carta" },
  { n: "03", label: "El Espacio", href: "#espacio" },
  { n: "04", label: "Opiniones", href: "#opiniones" },
  { n: "05", label: "Visítanos", href: "#visitanos" },
];

export default function Navbar({ onReserve }: { onReserve: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const status = useOpenNow();
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[60] transition-all duration-500 ${
          scrolled
            ? "border-b border-bone/10 bg-ink/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-5 sm:px-8 md:h-20 lg:px-12">
          <a href="#inicio" className="group flex items-center gap-3">
            <Seal char="生" className="h-8 w-8 text-base transition-transform duration-500 group-hover:rotate-[8deg]" />
            <span className="leading-none">
              <span className="block font-display text-lg font-medium tracking-[0.12em] text-bone">
                YKIGAI
              </span>
              <span className="mt-1 hidden text-[9px] uppercase tracking-[0.35em] text-sand sm:block">
                Sushi Bar · Punta Cana
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-[11px] font-medium uppercase tracking-[0.28em] text-bone/70 transition-colors hover:text-bone"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-verm transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            <div
              className={`hidden items-center gap-2 rounded-full border px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] md:flex ${
                status.open
                  ? "border-jade/40 text-jade"
                  : "border-bone/15 text-sand"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  status.open ? "bg-jade animate-pulse-dot" : "bg-verm"
                }`}
              />
              {status.open ? "Abierto" : "Cerrado"}
            </div>

            <button
              onClick={onReserve}
              className="hidden items-center gap-2 bg-verm px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-bone transition-colors duration-300 hover:bg-verm-deep sm:flex"
            >
              <Phone className="h-3.5 w-3.5" />
              {INFO.phoneDisplay}
            </button>

            <button
              onClick={() => setOpen(true)}
              aria-label="Abrir menú"
              className="grid h-10 w-10 place-items-center border border-bone/15 text-bone transition-colors hover:border-verm hover:text-verm lg:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-verm"
          style={{ scaleX: scrollYProgress }}
        />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="fixed inset-0 z-[100] flex flex-col bg-ink"
          >
            <div className="flex h-16 items-center justify-between px-5 sm:px-8 md:h-20 lg:px-12">
              <span className="flex items-center gap-3">
                <Seal char="生" className="h-8 w-8 text-base" />
                <span className="font-display text-lg tracking-[0.12em]">YKIGAI</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
                className="grid h-10 w-10 place-items-center border border-bone/15 text-bone transition-colors hover:border-verm hover:text-verm"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-1 px-6 sm:px-12">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.7, ease: EASE }}
                  className="group flex items-baseline gap-5 border-b border-bone/10 py-4"
                >
                  <span className="font-jp text-xs text-verm">{l.n}</span>
                  <span className="font-display text-4xl font-light text-bone transition-all duration-300 group-hover:translate-x-2 group-hover:text-verm sm:text-5xl">
                    {l.label}
                  </span>
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="px-6 pb-8 sm:px-12"
            >
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  onReserve();
                }}
                className="flex w-full items-center justify-center gap-3 bg-verm px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-bone transition-colors hover:bg-verm-deep"
              >
                <Phone className="h-4 w-4" />
                Reservar · {INFO.phoneDisplay}
              </button>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-4 text-[10px] uppercase tracking-[0.28em] text-sand">
                <span>{INFO.hours}</span>
                <a href={INFO.igUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-bone/80 hover:text-verm">
                  <AtSign className="h-3.5 w-3.5" /> {INFO.ig}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
