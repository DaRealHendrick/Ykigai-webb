import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import Lenis from "lenis";
import Cursor from "./components/Cursor";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Philosophy from "./components/Philosophy";
import MenuSection from "./components/MenuSection";
import Atmosfera from "./components/Atmosfera";
import Reviews from "./components/Reviews";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import ReserveModal from "./components/ReserveModal";
import { MARQUEE_ITEMS } from "./data";

const FINAL_ITEMS = [
  "Reserva tu mesa",
  "(849) 445-9606",
  "@ykigaisushi",
  "El arte de Nakamura",
  "Japón + Perú",
  "Bávaro · Punta Cana",
];

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [reserveOpen, setReserveOpen] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenisRef.current = lenis;

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest?.(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;
      if (!anchor) return;
      const hash = anchor.getAttribute("href");
      if (!hash || hash.length < 2) return;
      const el = document.querySelector(hash);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -64, duration: 1.5 });
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;
    if (loaded && !reserveOpen) lenis.start();
    else lenis.stop();
  }, [loaded, reserveOpen]);

  return (
    <main className="relative min-h-screen overflow-x-clip bg-ink text-bone">
      <Cursor />

      <AnimatePresence mode="wait">
        {!loaded && <Preloader onDone={() => setLoaded(true)} />}
      </AnimatePresence>

      {/* Grano de película */}
      <div
        aria-hidden
        className="bg-grain pointer-events-none fixed inset-0 z-[95] opacity-[0.06] mix-blend-overlay"
      />

      <Navbar onReserve={() => setReserveOpen(true)} />
      <Hero ready={loaded} onReserve={() => setReserveOpen(true)} />

      {/* Banda inclinada */}
      <div className="relative z-20 -my-2 -rotate-[1.15deg] scale-[1.02] shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
        <Marquee items={MARQUEE_ITEMS} />
      </div>

      <Philosophy />
      <MenuSection onReserve={() => setReserveOpen(true)} />
      <Atmosfera />
      <Reviews />

      <Marquee items={FINAL_ITEMS} variant="ghost" reverse />

      <Visit onReserve={() => setReserveOpen(true)} />
      <Footer />

      <ReserveModal open={reserveOpen} onClose={() => setReserveOpen(false)} />
    </main>
  );
}
