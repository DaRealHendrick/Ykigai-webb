import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import { ArrowUpRight, AtSign, Phone } from "lucide-react";
import { DISHES, INFO, MORE_DISHES } from "../data";
import { CONTAINER, EASE, Reveal, SectionTag } from "./ui";

export default function MenuSection({ onReserve }: { onReserve: () => void }) {
  const [active, setActive] = useState<number | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 30, mass: 0.7 });
  const sy = useSpring(y, { stiffness: 250, damping: 30, mass: 0.7 });

  const move = (e: React.MouseEvent) => {
    const r = wrapRef.current?.getBoundingClientRect();
    if (!r) return;
    x.set(e.clientX - r.left - 160);
    y.set(e.clientY - r.top - 220);
  };

  return (
    <section id="carta" className="relative overflow-hidden bg-ink py-24 md:py-36">
      <span
        aria-hidden
        className="write-vertical pointer-events-none absolute right-6 top-24 hidden select-none font-jp text-xl tracking-[0.5em] text-bone/10 lg:block"
      >
        お品書き — la carta
      </span>

      <div className={CONTAINER}>
        <SectionTag index="02" label="La Carta" />

        <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <h2 className="font-display text-[clamp(2.7rem,5.6vw,5.4rem)] font-light leading-[1.02] tracking-[-0.02em] text-bone">
              Favoritos <em className="font-medium italic text-verm">de la casa</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm leading-relaxed text-sand">
              Precios en pesos dominicanos. Recorre la lista y deja que el
              antojo decida.
            </p>
          </Reveal>
        </div>

        {/* Lista interactiva */}
        <Reveal delay={0.1} y={60}>
          <div
            ref={wrapRef}
            onMouseMove={move}
            onMouseLeave={() => setActive(null)}
            className="relative mt-14"
          >
            {/* Imagen flotante (desktop) */}
            <motion.div
              style={{ left: sx, top: sy }}
              animate={{
                opacity: active !== null ? 1 : 0,
                scale: active !== null ? 1 : 0.85,
              }}
              transition={{ duration: 0.4, ease: EASE }}
              className="pointer-events-none absolute z-30 hidden h-[420px] w-[320px] lg:block"
            >
              <div className="relative h-full w-full rotate-[-3deg] overflow-hidden border border-bone/20 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)]">
                <AnimatePresence mode="popLayout">
                  {active !== null && (
                    <motion.img
                      key={active}
                      src={DISHES[active].img}
                      alt={DISHES[active].name}
                      initial={{ opacity: 0, scale: 1.15 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.5, ease: EASE }}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}
                </AnimatePresence>
                <div className="absolute bottom-0 left-0 bg-verm px-3 py-1.5 font-jp text-xs text-bone">
                  {active !== null ? DISHES[active].jp : ""}
                </div>
              </div>
            </motion.div>

            <div className="relative z-10 border-t border-bone/10">
              {DISHES.map((d, i) => (
                <div
                  key={d.name}
                  data-hover
                  onMouseEnter={() => setActive(i)}
                  className="group relative overflow-hidden border-b border-bone/10"
                >
                  <span className="absolute inset-0 translate-y-full bg-soot transition-transform duration-500 ease-out group-hover:translate-y-0" />
                  <div className="relative z-10 flex items-center gap-4 px-1 py-5 transition-all duration-500 group-hover:px-4 md:gap-8 md:py-7">
                    <span className="font-jp text-xs text-verm md:text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <img
                      src={d.img}
                      alt={d.name}
                      loading="lazy"
                      className="h-16 w-16 shrink-0 object-cover md:h-20 md:w-20 lg:hidden"
                    />

                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-2xl font-light text-bone transition-colors duration-300 group-hover:text-verm md:text-5xl">
                        {d.name}
                        {d.tag && (
                          <span className="ml-3 hidden align-middle rounded-full border border-verm/50 px-2.5 py-1 text-[9px] font-sans uppercase tracking-[0.25em] text-verm md:inline-block">
                            {d.tag}
                          </span>
                        )}
                      </h3>
                      <p className="mt-1 block font-jp text-xs text-sand lg:hidden">
                        {d.desc}
                      </p>
                    </div>

                    <p className="hidden w-64 shrink-0 text-sm leading-relaxed text-sand lg:block">
                      {d.desc}
                    </p>

                    <span className="hidden shrink-0 font-display text-xl text-bone/90 sm:block md:text-2xl">
                      {d.price}
                    </span>

                    <ArrowUpRight className="hidden h-6 w-6 shrink-0 -translate-x-2 text-verm opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Más de la barra */}
        <Reveal delay={0.08}>
          <div className="mt-14">
            <p className="flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-sand">
              <span className="h-px w-8 bg-verm" />
              También sale de la barra
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {MORE_DISHES.map((d) => (
                <span
                  key={d}
                  data-hover
                  className="border border-bone/15 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-bone/70 transition-all duration-300 hover:border-verm hover:text-bone"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* CTA carta */}
        <Reveal delay={0.08}>
          <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-bone/10 pt-8 sm:flex-row sm:items-center">
            <p className="max-w-sm text-sm leading-relaxed text-sand">
              ¿Antojo de algo más? La carta completa —sushi lunch, baos,
              postres y coctelería— la encuentras en nuestro Instagram.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={INFO.igUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 border border-bone/25 px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-bone transition-colors duration-300 hover:border-verm hover:text-verm"
              >
                <AtSign className="h-4 w-4" />
                Menú completo
              </a>
              <button
                type="button"
                onClick={onReserve}
                className="flex items-center gap-2.5 bg-verm px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-bone transition-colors duration-300 hover:bg-verm-deep"
              >
                <Phone className="h-4 w-4" />
                Pedir {INFO.phoneDisplay}
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
