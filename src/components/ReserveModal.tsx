import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Copy, MessageCircle, Phone, X } from "lucide-react";
import { INFO } from "../data";
import { EASE, Seal } from "./ui";
import { useOpenNow } from "../hooks/useOpenNow";

const WA_URL = "https://wa.me/18494459606";

export default function ReserveModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const status = useOpenNow();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) {
      setCopied(false);
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText("+18494459606");
    } catch {
      const ta = document.createElement("textarea");
      ta.value = "+18494459606";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-[250] flex items-end justify-center sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-label="Reservar mesa"
        >
          <motion.button
            aria-label="Cerrar"
            onClick={onClose}
            className="absolute inset-0 h-full w-full bg-ink/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          />

          <motion.div
            initial={{ opacity: 0, y: 70, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 44, scale: 0.98 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="relative z-10 w-full max-w-lg overflow-hidden border border-bone/15 bg-coal p-7 shadow-[0_40px_120px_rgba(0,0,0,0.6)] sm:m-6 md:p-9"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -right-8 -top-10 select-none font-jp text-[9rem] font-bold leading-none text-bone/[0.04]"
            >
              席
            </span>

            <div className="relative flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <Seal char="生" className="h-9 w-9 text-base" />
                <span className="leading-none">
                  <span className="block font-display text-lg tracking-[0.12em]">
                    YKIGAI
                  </span>
                  <span className="mt-1 block text-[9px] uppercase tracking-[0.35em] text-sand">
                    Reservas & pedidos
                  </span>
                </span>
              </div>
              <button
                onClick={onClose}
                aria-label="Cerrar"
                className="grid h-10 w-10 shrink-0 place-items-center border border-bone/15 text-bone/80 transition-colors hover:border-verm hover:text-verm"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <h3 className="relative mt-7 font-display text-3xl font-light text-bone md:text-4xl">
              Reserva <em className="font-medium italic text-verm">tu mesa</em>
            </h3>
            <p className="relative mt-3 text-sm leading-relaxed text-sand">
              Somos un comedor íntimo: confirma tu mesa o tu pedido para llevar
              con una llamada rápida a la barra.
            </p>

            <p className="relative mt-6 border-y border-bone/10 py-5 text-center font-display text-3xl tracking-[0.03em] text-bone md:text-4xl">
              {INFO.phoneDisplay}
            </p>

            <a
              href={INFO.phoneHref}
              className="relative mt-6 flex w-full items-center justify-center gap-3 bg-verm px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-bone transition-colors duration-300 hover:bg-verm-deep"
            >
              <Phone className="h-4 w-4" />
              Llamar al restaurante
            </a>

            <div className="relative mt-3 grid grid-cols-2 gap-3">
              <button
                onClick={copyNumber}
                className="flex items-center justify-center gap-2.5 border border-bone/20 px-4 py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-bone/85 transition-colors duration-300 hover:border-verm hover:text-verm"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-jade" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                {copied ? "Copiado" : "Copiar número"}
              </button>
              <a
                href={WA_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2.5 border border-bone/20 px-4 py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-bone/85 transition-colors duration-300 hover:border-verm hover:text-verm"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>

            <p className="relative mt-6 flex items-center justify-center gap-2.5 text-center text-[10px] uppercase tracking-[0.25em] text-sand">
              <span
                className={`h-2 w-2 shrink-0 rounded-full ${
                  status.open ? "bg-jade animate-pulse-dot" : "bg-verm"
                }`}
              />
              {status.long}
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
