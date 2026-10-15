import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Quote } from "lucide-react";
import { CONTAINER, Reveal, SectionTag, Seal } from "./ui";

const STATS: Array<[string, string]> = [
  ["4.6", "Puntuación en Google"],
  ["249", "Opiniones verificadas"],
  ["12 h", "De cocción del tonkotsu"],
  ["6 días", "Lun – Sáb · 12:30 – 10:00"],
];

export default function Philosophy() {
  const frameRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section id="filosofia" className="relative bg-bone py-24 text-ink md:py-36">
      <div className={CONTAINER}>
        <SectionTag index="01" label="La Filosofía" dark />

        <div className="mt-10 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="flex items-baseline gap-4 font-jp text-lg text-ink/50">
                <span className="text-3xl font-bold text-verm md:text-4xl">生きがい</span>
                <span className="text-[11px] uppercase tracking-[0.35em] text-ink/40">
                  ikigai · sustantivo
                </span>
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-6 font-display text-[clamp(2.7rem,5.6vw,5.4rem)] font-light leading-[1.02] tracking-[-0.02em]">
                La razón para{" "}
                <em className="font-medium italic text-verm">levantarse</em>{" "}
                cada mañana.
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-10 max-w-2xl space-y-6 text-base leading-relaxed text-ink/70 md:text-lg">
                <p>
                  Para el chef{" "}
                  <span className="font-medium text-ink">Luis Nakamura</span>{" "}
                  —fundador también del celebrado Nakamura de Cap Cana— ese motivo
                  es claro: cocinar. Junto a su familia da vida a una cocina
                  japonesa con acento latino, donde el pescado llega fresco cada
                  mañana, el caldo del ramen reposa doce horas y cada rollo sale
                  de la barra hecho a mano,{" "}
                  <span className="font-medium text-ink">
                    con más pescado que arroz
                  </span>
                  .
                </p>
                <p>
                  Gyozas que se doran al momento, anticuchos a la brasa y un
                  ceviche nikkei que los locales llaman, sin dudarlo, el mejor
                  de Bávaro. Así se escribe Ykigai: un plato a la vez.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <figure className="mt-12 flex max-w-xl gap-5 border-l-2 border-verm pl-6">
                <Quote className="h-6 w-6 shrink-0 -scale-x-100 text-verm" fill="currentColor" strokeWidth={0} />
                <div>
                  <blockquote className="font-display text-xl italic leading-snug text-ink/85 md:text-2xl">
                    “Este lugar es exquisito; cocina la familia completa. Se
                    nota que se cocina con el corazón.”
                  </blockquote>
                  <figcaption className="mt-3 text-[11px] uppercase tracking-[0.3em] text-ink/45">
                    Cesar Escalera · Reseña de Google
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.15} className="relative">
              <div
                ref={frameRef}
                className="relative ml-auto aspect-[3/4] w-full max-w-md overflow-hidden border border-ink/15 md:max-w-none"
              >
                <motion.img
                  src="/images/chef.jpg"
                  alt="El chef Luis Nakamura trabajando en la barra"
                  style={{ y: imgY }}
                  className="absolute left-0 top-[-10%] h-[120%] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                <figcaption className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-bone">
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.3em] text-bone/70">
                      Chef ejecutivo
                    </span>
                    <span className="mt-1 block font-display text-xl">
                      Luis Nakamura
                    </span>
                  </span>
                  <span className="font-jp text-2xl text-bone/70">職人</span>
                </figcaption>
              </div>
              <Seal char="心" className="absolute -left-4 -top-4 h-12 w-12 rotate-[-8deg] text-xl" />
            </Reveal>
          </div>
        </div>

        {/* Métricas */}
        <div className="mt-20 grid grid-cols-2 gap-px border border-ink/10 bg-ink/10 md:grid-cols-4">
          {STATS.map(([value, label], i) => (
            <Reveal key={label} delay={i * 0.07} className="bg-bone">
              <div className="flex flex-col gap-2 px-6 py-8 transition-colors duration-500 hover:bg-parchment">
                <span className="font-display text-4xl font-light md:text-5xl">{value}</span>
                <span className="text-[10px] uppercase tracking-[0.28em] text-ink/50">
                  {label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
