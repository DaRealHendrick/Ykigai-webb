import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Armchair, Flame, Martini, ShoppingBag } from "lucide-react";
import { CONTAINER, Reveal, SectionTag } from "./ui";
import { useOpenNow } from "../hooks/useOpenNow";

const FEATURES = [
  { icon: Flame, title: "Brasa & wok", text: "Anticuchos y chaufa al fuego, frente a tus ojos." },
  { icon: Martini, title: "Buena coctelería", text: "Sours, sake y cerveza japonesa siempre fría." },
  { icon: ShoppingBag, title: "Para llevar & delivery", text: "Pide al (849) 445-9606 y recoge sin esperar." },
  { icon: Armchair, title: "Comedor acogedor", text: "Pocas mesas, mucha calma. Reserva con tiempo." },
];

export default function Atmosfera() {
  const imgRef = useRef<HTMLDivElement>(null);
  const status = useOpenNow();
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-4.5%", "4.5%"]);

  return (
    <section id="espacio" className="bg-bone py-24 text-ink md:py-36">
      <div className={CONTAINER}>
        <SectionTag index="03" label="El Espacio" dark />

        <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <h2 className="max-w-2xl font-display text-[clamp(2.7rem,5.6vw,5.4rem)] font-light leading-[1.02] tracking-[-0.02em]">
              Pequeño por fuera,{" "}
              <em className="font-medium italic text-verm">enorme</em> en la mesa.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm leading-relaxed text-ink/60 md:text-base">
              En el GV Center · Jardín Plaza, a la entrada del Residencial
              Costa Cana y a pasos de Coco Bongo. Siéntate en la barra y mira
              al chef trabajar la pieza.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Imagen full-bleed con parallax */}
      <Reveal y={70} className="mt-14">
        <div ref={imgRef} className="relative h-[68vh] overflow-hidden md:h-[82vh]">
          <motion.img
            src="/images/interior.jpg"
            alt="Interior acogedor de Ykigai Sushi Bar"
            style={{ y }}
            className="absolute left-0 top-[-12%] h-[124%] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/10" />

          {/* Tarjeta de horario */}
          <div className="absolute bottom-6 left-5 sm:left-8 md:bottom-10 lg:left-12">
            <div className="border border-bone/20 bg-ink/85 p-6 text-bone backdrop-blur-sm md:p-8">
              <p className="flex items-center gap-2.5 text-[10px] uppercase tracking-[0.3em]">
                <span
                  className={`h-2 w-2 rounded-full ${
                    status.open ? "bg-jade animate-pulse-dot" : "bg-verm"
                  }`}
                />
                {status.long}
              </p>
              <div className="mt-4 space-y-2 font-display text-lg md:text-xl">
                <p className="flex items-baseline justify-between gap-10">
                  <span className="text-bone/60">Lun – Sáb</span>
                  <span>12:30 – 10:00 p.m.</span>
                </p>
                <p className="flex items-baseline justify-between gap-10">
                  <span className="text-bone/60">Domingo</span>
                  <span className="text-verm">Cerrado</span>
                </p>
              </div>
            </div>
          </div>

          <span
            aria-hidden
            className="write-vertical absolute right-6 top-8 hidden font-jp text-lg tracking-[0.5em] text-bone/60 md:block"
          >
            居酒屋 — el bar de la casa
          </span>
        </div>
      </Reveal>

      {/* Sellos de la casa */}
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 border-b border-l border-r border-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06} className="border-t border-ink/10">
              <div
                data-hover
                className="group flex h-full flex-col gap-5 px-7 py-9 transition-colors duration-500 hover:bg-ink"
              >
                <f.icon
                  className="h-6 w-6 text-verm transition-transform duration-500 group-hover:-translate-y-1"
                  strokeWidth={1.25}
                />
                <div>
                  <h3 className="font-display text-xl transition-colors group-hover:text-bone">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/55 transition-colors group-hover:text-bone/60">
                    {f.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
