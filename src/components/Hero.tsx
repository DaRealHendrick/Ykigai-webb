import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { ArrowDown, CircleDollarSign, Star } from "lucide-react";
import { INFO } from "../data";
import { EASE, Seal, Stars } from "./ui";
import { useOpenNow } from "../hooks/useOpenNow";

const parent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const rise: Variants = {
  hidden: { y: "112%", rotate: 2.5 },
  show: { y: "0%", rotate: 0, transition: { duration: 1.15, ease: EASE } },
};

const fade: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
};

function StatChip({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-verm">{icon}</span>
      <span className="leading-tight">
        <span className="block text-sm font-medium text-bone">{value}</span>
        <span className="mt-0.5 block text-[10px] uppercase tracking-[0.25em] text-sand">
          {label}
        </span>
      </span>
    </div>
  );
}

export default function Hero({
  ready,
  onReserve,
}: {
  ready: boolean;
  onReserve: () => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const status = useOpenNow();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.16]);
  const ghostY = useTransform(scrollYProgress, [0, 1], ["0%", "130%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section id="inicio" ref={ref} className="relative flex min-h-svh flex-col overflow-hidden">
      {/* Fondo */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Omakase de la casa en Ykigai Sushi Bar"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/25 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-transparent to-ink/45" />
      </motion.div>

      {/* Kanji fantasma */}
      <motion.span
        aria-hidden
        style={{ y: ghostY }}
        className="pointer-events-none absolute -left-8 bottom-[-6vw] z-0 select-none font-jp text-[40vw] font-bold leading-none text-bone/[0.045] md:text-[30vw]"
      >
        鮨
      </motion.span>

      {/* Kanji vertical */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 1.4, duration: 1.2 }}
        className="write-vertical absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 select-none items-center gap-6 font-jp text-xl tracking-[0.55em] text-bone/45 md:flex lg:right-10 lg:text-2xl"
      >
        生きがい
        <span className="h-16 w-px bg-bone/25" />
        <span className="text-sm tracking-[0.4em] text-bone/30">日本とペルーの味</span>
      </motion.div>

      {/* Contenido */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 mx-auto flex w-full max-w-[1680px] flex-1 flex-col justify-end px-5 pb-8 pt-28 sm:px-8 md:pt-32 lg:px-12"
      >
        <motion.div variants={parent} initial="hidden" animate={ready ? "show" : "hidden"}>
          <motion.div
            variants={fade}
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-medium uppercase tracking-[0.4em] text-sand"
          >
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-verm" />
              Punta Cana · Bávaro · RD
            </span>
            <span className="hidden h-px w-10 bg-bone/25 sm:block" />
            <span className="text-bone/60">Cocina japonesa · latina</span>
          </motion.div>

          <h1 className="mt-6 font-display font-medium leading-[0.82] tracking-[-0.03em] text-bone">
            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span variants={rise} className="block text-[clamp(4.4rem,17vw,15.5rem)]">
                YKIGAI
              </motion.span>
            </span>
            <span className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-3 overflow-hidden pb-2">
              <motion.span
                variants={rise}
                className="text-outline block text-[clamp(1.5rem,4.6vw,3.9rem)] font-light uppercase tracking-[0.42em]"
              >
                Sushi Bar
              </motion.span>
            </span>
          </h1>

          <div className="mt-8 flex flex-col gap-8 md:mt-10 md:flex-row md:items-end md:justify-between">
            <motion.p variants={fade} className="max-w-md text-sm leading-relaxed text-sand md:text-base">
              Un bar íntimo a manos del chef{" "}
              <span className="text-bone">Luis Nakamura</span>: rollos artesanales,
              ramen de doce horas y el ceviche nikkei más celebrado del Este.
            </motion.p>

            <motion.div variants={fade} className="flex items-center gap-5">
              <button
                type="button"
                onClick={onReserve}
                className="group flex items-center gap-3 bg-verm px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-bone transition-colors duration-300 hover:bg-verm-deep"
              >
                Reservar mesa
                <ArrowDown className="h-4 w-4 -rotate-90 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <a
                href="#carta"
                className="group hidden items-center gap-3 border border-bone/25 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-bone transition-colors duration-300 hover:border-verm hover:text-verm sm:flex"
              >
                La carta
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Barra de datos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ delay: 1.1, duration: 1 }}
          className="mt-12 grid grid-cols-2 gap-x-4 gap-y-6 border-t border-bone/15 pt-6 md:grid-cols-4 lg:mt-16"
        >
          <StatChip
            icon={<Star className="h-4 w-4" fill="currentColor" strokeWidth={0} />}
            label="Google · 249 reseñas"
            value={
              <span className="flex items-center gap-2">
                4.6 <Stars value={4.6} size="h-3 w-3" />
              </span>
            }
          />
          <StatChip
            icon={<CircleDollarSign className="h-4 w-4" strokeWidth={1.5} />}
            label={INFO.priceNote}
            value={INFO.price}
          />
          <StatChip
            icon={
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  status.open ? "bg-jade animate-pulse-dot" : "bg-verm"
                }`}
              />
            }
            label={status.open ? "Hoy · hasta 10:00 p.m." : "Lun–Sáb · 12:30–10:00 p.m."}
            value={status.open ? "Abierto ahora" : "Cerrado ahora"}
          />
          <div className="hidden items-center justify-end gap-3 md:flex">
            <span className="text-[10px] uppercase tracking-[0.35em] text-sand">Desliza</span>
            <ArrowDown className="h-4 w-4 animate-nudge text-verm" />
            <Seal char="下" className="h-7 w-7 text-xs" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
