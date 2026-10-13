import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQ } from "../lib/content";
import { fadeUp, inView, spring, stagger } from "../lib/motion";
import { Container, SectionHead, cx } from "./ui";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="border-y border-line bg-surface-2/60 py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHead eyebrow="Dúvidas" title="Perguntas frequentes" lead="Não encontrou o que procurava? Fale com a gente pelo WhatsApp." />
        <motion.div {...inView} variants={stagger(0.06)} className="grid gap-3">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                variants={fadeUp}
                className={cx(
                  "overflow-hidden rounded-2xl border bg-surface transition-[border-color,box-shadow] duration-300",
                  isOpen ? "border-brand/30 shadow-glow" : "border-line hover:border-brand/20"
                )}
              >
                <h3 className="font-sans text-base tracking-normal">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-bold"
                  >
                    {item.q}
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={spring}
                      className={cx("grid h-8 w-8 flex-none place-items-center rounded-full transition-colors", isOpen ? "bg-brand text-white" : "bg-brand-soft text-brand")}
                    >
                      <Plus className="h-4 w-4" />
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={spring}
                    >
                      <p className="px-5 pb-5 text-[15px] leading-relaxed text-muted">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
