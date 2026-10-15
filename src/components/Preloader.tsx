import { useEffect } from "react";
import { motion, type Variants } from "motion/react";
import { EASE, Seal } from "./ui";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.3 } },
};

const rise: Variants = {
  hidden: { y: "115%", rotate: 3 },
  show: { y: "0%", rotate: 0, transition: { duration: 0.9, ease: EASE } },
};

const fade: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export default function Preloader({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2400);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-ink"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center gap-7"
      >
        <motion.div variants={fade}>
          <Seal char="生" className="h-14 w-14 text-2xl" />
        </motion.div>
        <div className="flex overflow-hidden pb-1 font-display text-6xl font-medium tracking-[0.05em] text-bone md:text-8xl">
          {"YKIGAI".split("").map((c, i) => (
            <motion.span key={i} variants={rise} className="inline-block">
              {c}
            </motion.span>
          ))}
        </div>
        <motion.p
          variants={fade}
          className="text-[10px] uppercase tracking-[0.55em] text-sand"
        >
          Sushi Bar · Punta Cana
        </motion.p>
      </motion.div>

      <div className="absolute bottom-12 h-px w-44 overflow-hidden bg-bone/10">
        <motion.div
          className="h-full w-full origin-left bg-verm"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2.1, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}
