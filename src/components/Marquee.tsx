import { Asterisk } from "lucide-react";

export default function Marquee({
  items,
  variant = "verm",
  reverse = false,
}: {
  items: string[];
  variant?: "verm" | "ghost";
  reverse?: boolean;
}) {
  const row = [...items, ...items];
  const band =
    variant === "verm"
      ? "bg-verm text-bone"
      : "border-y border-bone/10 bg-transparent text-sand";

  return (
    <div className={`edge-fade-x overflow-hidden py-4 md:py-5 ${band}`}>
      <div
        className={`flex w-max items-center whitespace-nowrap ${
          reverse ? "animate-marquee-rev" : "animate-marquee"
        }`}
      >
        {row.map((t, i) => (
          <span
            key={i}
            className={`flex items-center gap-6 pr-6 uppercase ${
              variant === "verm"
                ? "text-xs font-semibold tracking-[0.35em] md:text-sm"
                : "font-display text-2xl font-light italic tracking-[0.08em] md:text-4xl"
            }`}
          >
            {t}
            <Asterisk
              className={`h-4 w-4 shrink-0 ${
                variant === "verm" ? "text-bone/70" : "text-verm"
              }`}
              strokeWidth={1.5}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
