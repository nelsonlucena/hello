import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { PLANOS, brl, totalMes } from "../lib/config";
import { spring } from "../lib/motion";
import { Button } from "./ui";

// Barra fixa de conversão no mobile; aparece depois do hero.
export default function StickyBar({ vidas }) {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setShow(y > 520));
  const protege = PLANOS.find((p) => p.id === "protege");

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={spring}
          className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-3 border-t border-line bg-surface/85 px-4 pb-[calc(12px+env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl md:hidden"
        >
          <div className="text-xs leading-tight text-muted">
            Protege · {vidas} {vidas === 1 ? "vida" : "vidas"}
            <b className="tabular block font-display text-lg font-extrabold text-ink">R$ {brl(totalMes(protege, vidas))}/mês</b>
          </div>
          <Button href="#planos" className="ml-auto min-h-[44px]">Assinar</Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
