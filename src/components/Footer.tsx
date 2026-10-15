import { ArrowUp, AtSign, MapPin, Phone } from "lucide-react";
import { INFO } from "../data";
import { CONTAINER, Reveal, Seal } from "./ui";

const NAV = [
  { label: "Filosofía", href: "#filosofia" },
  { label: "La Carta", href: "#carta" },
  { label: "El Espacio", href: "#espacio" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Visítanos", href: "#visitanos" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-bone/10 bg-ink">
      <div className={`${CONTAINER} grid gap-12 py-16 md:py-20 lg:grid-cols-[1.5fr_1fr_1.2fr_1fr]`}>
        <Reveal y={26}>
          <div>
            <a href="#inicio" className="flex items-center gap-3">
              <Seal char="生" className="h-10 w-10 text-lg" />
              <span className="leading-none">
                <span className="block font-display text-2xl font-medium tracking-[0.1em]">
                  YKIGAI
                </span>
                <span className="mt-1.5 block text-[9px] uppercase tracking-[0.35em] text-sand">
                  Sushi Bar · Est. en Bávaro
                </span>
              </span>
            </a>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-sand">
              Cocina japonesa · latina del chef Luis Nakamura. Rollos hechos a
              mano, ramen de doce horas y ceviche nikkei en el corazón de
              Punta Cana.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={INFO.igUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-11 w-11 place-items-center border border-bone/20 text-bone/80 transition-colors hover:border-verm hover:text-verm"
              >
                <AtSign className="h-4 w-4" />
              </a>
              <a
                href={INFO.phoneHref}
                aria-label="Llamar"
                className="grid h-11 w-11 place-items-center border border-bone/20 text-bone/80 transition-colors hover:border-verm hover:text-verm"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href={INFO.mapsUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Mapa"
                className="grid h-11 w-11 place-items-center border border-bone/20 text-bone/80 transition-colors hover:border-verm hover:text-verm"
              >
                <MapPin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal y={26} delay={0.08}>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.35em] text-sand">Explora</h4>
            <ul className="mt-5 space-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="font-display text-lg text-bone/80 transition-colors hover:text-verm"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal y={26} delay={0.14}>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.35em] text-sand">Contacto</h4>
            <address className="mt-5 space-y-4 text-sm not-italic leading-relaxed text-bone/70">
              <p>{INFO.address}</p>
              <p>
                <a href={INFO.phoneHref} className="text-bone transition-colors hover:text-verm">
                  {INFO.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={INFO.igUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-bone transition-colors hover:text-verm"
                >
                  {INFO.ig} · +4.4k seguidores
                </a>
              </p>
            </address>
          </div>
        </Reveal>

        <Reveal y={26} delay={0.2}>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.35em] text-sand">Horario</h4>
            <div className="mt-5 space-y-3 font-display text-lg text-bone/80">
              <p className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.3em] text-sand">Lun – Sáb</span>
                12:30 – 10:00 p.m.
              </p>
              <p className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.3em] text-sand">Domingo</span>
                <span className="text-verm">Cerrado</span>
              </p>
              <p className="pt-2 text-xs text-sand">No suele haber espera · 30 min – 1.5 h</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Palabra gigante */}
      <div aria-hidden className="select-none overflow-hidden">
        <Reveal y={90}>
          <p className="translate-y-[0.16em] text-center font-display text-[clamp(4.5rem,19vw,19rem)] font-medium leading-[0.8] tracking-[-0.02em] text-bone/[0.07]">
            YKIGAI
          </p>
        </Reveal>
      </div>

      <div className="border-t border-bone/10">
        <div className={`${CONTAINER} flex flex-wrap items-center justify-between gap-4 py-6`}>
          <p className="text-[10px] uppercase tracking-[0.3em] text-sand">
            © 2026 Ykigai Sushi Bar · Punta Cana, RD
          </p>
          <p className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-sand">
            <span className="font-jp text-xs tracking-[0.2em] text-verm">生きがい</span>
            encuentra tu razón
          </p>
          <a
            href="#inicio"
            aria-label="Volver arriba"
            className="group grid h-10 w-10 place-items-center border border-bone/20 text-bone/80 transition-colors hover:border-verm hover:text-verm"
          >
            <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
