import { motion } from "motion/react";
import { ArrowUpRight, Quote } from "lucide-react";
import { INFO, RATING_BARS, REVIEWS_ROW_A, REVIEWS_ROW_B, type Review } from "../data";
import { CONTAINER, EASE, Reveal, SectionTag, Stars } from "./ui";

function ReviewCard({ r }: { r: Review }) {
  return (
    <article
      data-hover
      className="group flex w-[320px] shrink-0 flex-col justify-between gap-6 border border-bone/10 bg-coal p-6 transition-colors duration-500 hover:border-verm/50 sm:w-[400px] md:p-7"
    >
      <div>
        <div className="flex items-center justify-between">
          <Stars value={5} size="h-3.5 w-3.5" />
          <span className="text-[9px] uppercase tracking-[0.3em] text-sand">Google</span>
        </div>
        <Quote
          className="mt-5 h-5 w-5 -scale-x-100 text-verm/70"
          fill="currentColor"
          strokeWidth={0}
        />
        <p className="mt-3 font-display text-lg font-light leading-snug text-bone/90">
          “{r.text}”
        </p>
      </div>
      <footer>
        <p className="text-sm font-medium text-bone">{r.name}</p>
        <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-sand">{r.meta}</p>
      </footer>
    </article>
  );
}

function MarqueeRow({ items, reverse = false }: { items: Review[]; reverse?: boolean }) {
  const row = [...items, ...items];
  return (
    <div className="edge-fade overflow-hidden">
      <div
        className={`pause-on-hover flex w-max gap-5 pr-5 md:gap-6 md:pr-6 ${
          reverse ? "animate-marquee-rev" : "animate-marquee-slow"
        }`}
      >
        {row.map((r, i) => (
          <ReviewCard key={`${r.name}-${i}`} r={r} />
        ))}
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="opiniones" className="relative overflow-hidden bg-ink py-24 md:py-36">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 top-10 select-none font-jp text-[22vw] font-bold leading-none text-bone/[0.03]"
      >
        声
      </span>

      <div className={CONTAINER}>
        <SectionTag index="04" label="Opiniones" />

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="font-display text-[clamp(2.7rem,5.6vw,5.4rem)] font-light leading-[1.02] tracking-[-0.02em] text-bone">
                Lo que dice <em className="font-medium italic text-verm">la mesa</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 flex items-end gap-5">
                <span className="font-display text-8xl font-light leading-none text-bone md:text-9xl">
                  4.6
                </span>
                <div className="pb-2">
                  <Stars value={4.6} size="h-4 w-4" />
                  <p className="mt-2 text-[11px] uppercase tracking-[0.28em] text-sand">
                    249 reseñas en Google
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <a
                href={INFO.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-3 border border-bone/25 px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-bone transition-colors duration-300 hover:border-verm hover:text-verm"
              >
                Leer todas las reseñas
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Reveal>
          </div>

          <div className="flex flex-col justify-center gap-4 lg:col-span-7 lg:pl-10">
            {RATING_BARS.map(([stars, pct], i) => (
              <Reveal key={stars} delay={i * 0.06} y={18}>
                <div className="flex items-center gap-4">
                  <span className="w-8 font-jp text-sm text-sand">{stars} 星</span>
                  <div className="h-[3px] flex-1 bg-bone/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 1.2, delay: 0.2 + i * 0.08, ease: EASE }}
                      className="h-full bg-verm"
                    />
                  </div>
                  <span className="w-10 text-right text-xs text-sand">{pct}%</span>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.35} y={18}>
              <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-sand/70">
                Sabor · ceviche · atención y miso, los más mencionados
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Marquees de reseñas */}
      <Reveal y={60}>
        <div className="mt-16 space-y-5 md:mt-20 md:space-y-6">
          <MarqueeRow items={REVIEWS_ROW_A} />
          <MarqueeRow items={REVIEWS_ROW_B} reverse />
        </div>
      </Reveal>
    </section>
  );
}
