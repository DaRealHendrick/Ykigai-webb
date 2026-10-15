import { useEffect, useState } from "react";

export type OpenState = { open: boolean; short: string; long: string };

const OPEN_MIN = 12 * 60 + 30; // 12:30 p.m.
const CLOSE_MIN = 22 * 60; // 10:00 p.m.

function compute(): OpenState {
  try {
    const now = new Date(
      new Date().toLocaleString("en-US", { timeZone: "America/Santo_Domingo" }),
    );
    const day = now.getDay(); // 0 = domingo
    const mins = now.getHours() * 60 + now.getMinutes();
    const workday = day !== 0;

    if (workday && mins >= OPEN_MIN && mins < CLOSE_MIN) {
      return {
        open: true,
        short: "Abierto ahora",
        long: "Abierto ahora · cierra 10:00 p.m.",
      };
    }
    if (day === 0) {
      return {
        open: false,
        short: "Cerrado",
        long: "Cerrado · abre el lunes 12:30 p.m.",
      };
    }
    if (mins < OPEN_MIN) {
      return {
        open: false,
        short: "Cerrado",
        long: "Cerrado · abre hoy 12:30 p.m.",
      };
    }
    return {
      open: false,
      short: "Cerrado",
      long:
        day === 6
          ? "Cerrado · abre el lunes 12:30 p.m."
          : "Cerrado · abre mañana 12:30 p.m.",
    };
  } catch {
    return { open: false, short: "Lun–Sáb", long: "Lun–Sáb · 12:30–10:00 p.m." };
  }
}

export function useOpenNow(): OpenState {
  const [state, setState] = useState<OpenState>(compute);
  useEffect(() => {
    const id = setInterval(() => setState(compute()), 60_000);
    return () => clearInterval(id);
  }, []);
  return state;
}
