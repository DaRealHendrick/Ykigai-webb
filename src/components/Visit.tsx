import { ArrowUpRight, AtSign, Clock, MapPin, Phone } from "lucide-react";
import { INFO } from "../data";
import { CONTAINER, Reveal } from "./ui";
import { useOpenNow } from "../hooks/useOpenNow";

function Cell({
  icon: Icon,
  title,
  children,
  delay,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <Reveal delay={delay} className="border-t border-bone/30">
      <div className="flex flex-col gap-6 px-1 py-9 md:px-8 md:py-11">
        <div className="flex items-center gap-3">
          <Icon className="h-5 w-5" strokeWidth={1.25} />
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.35em]">{title}</h3>
        </div>
        {children}
      </div>
    </Reveal>
  );
}

export default function Visit({ onReserve }: { onReserve: () => void }) {
  const status = useOpenNow();

  return (
    <section id="visitanos" className="relative overflow-hidden bg-verm py-24 text-bone md:py-36">
      <span
        aria-hidden
        className="write-vertical pointer-events-none absolute -right-4 top-16 select-none font-jp text-[9rem] font-bold leading-none text-bone/15 md:text-[13rem]"
      >
        来店
      </span>

      <div className={CONTAINER}>
        <Reveal y={20}>
          <div className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.4em] text-bone/75">
            <span className="font-jp text-sm tracking-normal">05</span>
            <span className="h-px w-12 bg-bone/40" />
            <span>Visítanos</span>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-8 max-w-4xl font-display text-[clamp(3rem,7.5vw,7.5rem)] font-light leading-[0.95] tracking-[-0.02em]">
            Siéntate en <em className="font-medium italic">la barra</em>.
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-bone/85 md:text-base">
            El comedor es íntimo y las mesas vuelan, sobre todo viernes y
            sábado. Llama, reserva y deja lo demás en manos de la familia
            Nakamura.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-10 border-b border-bone/30 md:grid-cols-3">
          <Cell icon={Clock} title="Horario" delay={0.05}>
            <div className="space-y-2.5 font-display text-xl md:text-2xl">
              <p className="flex items-baseline justify-between gap-6">
                <span className="text-bone/70">Lun – Sáb</span>
                <span>12:30 – 10:00 p.m.</span>
              </p>
              <p className="flex items-baseline justify-between gap-6">
                <span className="text-bone/70">Domingo</span>
                <span>Cerrado</span>
              </p>
            </div>
            <p className="mt-4 flex items-center gap-2 border border-bone/35 px-3.5 py-2 text-[10px] uppercase tracking-[0.25em]">
              <span
                className={`h-2 w-2 rounded-full ${
                  status.open ? "bg-jade animate-pulse-dot" : "bg-ink/60"
                }`}
              />
              {status.long}
            </p>
          </Cell>

          <Cell icon={MapPin} title="Encuéntranos" delay={0.12}>
            <p className="font-display text-xl leading-snug md:text-2xl">
              {INFO.addressShort}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-bone/75">{INFO.reference}</p>
            <a
              href={INFO.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] underline decoration-bone/40 underline-offset-4 transition-colors hover:decoration-bone"
            >
              Cómo llegar
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Cell>

          <Cell icon={Phone} title="Reserva & delivery" delay={0.19}>
            <button
              type="button"
              onClick={onReserve}
              className="text-left font-display text-2xl leading-tight underline decoration-bone/30 underline-offset-8 transition-colors hover:decoration-bone md:text-3xl"
            >
              {INFO.phoneDisplay}
            </button>
            <p className="mt-3 text-sm leading-relaxed text-bone/75">
              También pedidos para llevar. {INFO.price} {INFO.priceNote}.
            </p>
            <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-bone/60">
              Permanencia media · 30 min – 1.5 h
            </p>
          </Cell>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onReserve}
              className="flex items-center gap-3 bg-ink px-8 py-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-bone transition-transform duration-300 hover:scale-[1.03]"
            >
              <Phone className="h-4 w-4" />
              Llamar ahora
            </button>
            <a
              href={INFO.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 border border-bone/50 px-8 py-5 text-[11px] font-semibold uppercase tracking-[0.25em] transition-colors duration-300 hover:bg-bone hover:text-verm"
            >
              <MapPin className="h-4 w-4" />
              Abrir en Maps
            </a>
            <a
              href={INFO.igUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 px-3 py-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-bone/85 transition-colors hover:text-ink"
            >
              <AtSign className="h-4 w-4" />
              ykigaisushi
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
