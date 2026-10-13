import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { PASSOS } from "../lib/content";
import { fadeUp, inView, springSnappy, stagger } from "../lib/motion";
import { Container, SectionHead } from "./ui";

export default function HowItWorks() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const line = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  return (
    <section className="border-y border-line bg-surface-2/60 py-24 sm:py-32">
      <Container>
        <SectionHead eyebrow="Como funciona" title="Três passos, tudo pelo celular" />
        <motion.ol ref={ref} {...inView} variants={stagger(0.12)} className="relative mt-14 grid gap-5 md:grid-cols-3">
          {/* linha que se desenha conforme o scroll (desktop) */}
          <div className="absolute left-12 right-12 top-[52px] hidden h-px bg-line md:block">
            <motion.div style={{ scaleX: line }} className="h-full origin-left bg-gradient-to-r from-brand to-cta" />
          </div>
          {PASSOS.map(({ icon: Icon, titulo, desc }, i) => (
            <motion.li
              key={titulo}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={springSnappy}
              className="relative rounded-3xl border border-line bg-surface p-6 transition-shadow hover:shadow-glow"
            >
              <div className="flex items-center gap-3">
                <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-brand text-white shadow-glow">
                  <Icon className="h-6 w-6" />
                  <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full border-2 border-surface bg-cta font-display text-xs font-bold text-cta-ink">
                    {i + 1}
                  </span>
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold">{titulo}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{desc}</p>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}
