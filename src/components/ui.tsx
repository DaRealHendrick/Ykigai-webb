import { motion } from "motion/react";
import { Star } from "lucide-react";
import type { ReactNode } from "react";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Reveal({
  children,
  delay = 0,
  y = 44,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 1, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTag({
  index,
  label,
  dark = false,
}: {
  index: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <Reveal y={20}>
      <div
        className={`flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.4em] ${
          dark ? "text-ink/55" : "text-sand"
        }`}
      >
        <span className="font-jp text-sm tracking-normal text-verm">{index}</span>
        <span className={`h-px w-12 ${dark ? "bg-ink/25" : "bg-bone/25"}`} />
        <span>{label}</span>
      </div>
    </Reveal>
  );
}

export function Stars({
  value = 5,
  size = "h-3.5 w-3.5",
  tone = "text-verm",
  empty = "text-bone/20",
}: {
  value?: number;
  size?: string;
  tone?: string;
  empty?: string;
}) {
  const pct = `${(value / 5) * 100}%`;
  return (
    <div className="relative inline-flex">
      <div className={`flex gap-[3px] ${empty}`}>
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} className={size} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: pct }}>
        <div className={`flex w-max gap-[3px] ${tone}`}>
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className={`${size} shrink-0`} fill="currentColor" strokeWidth={0} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Seal({ char = "生", className = "" }: { char?: string; className?: string }) {
  return (
    <span
      aria-hidden
      className={`grid place-items-center bg-verm font-jp text-bone shadow-[0_0_0_1px_rgba(236,228,211,0.25)_inset] ${className}`}
    >
      {char}
    </span>
  );
}

export const CONTAINER = "mx-auto w-full max-w-[1680px] px-5 sm:px-8 lg:px-12";
