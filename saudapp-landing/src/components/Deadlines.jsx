import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { PRAZOS } from "../lib/content";
import { fadeUp, inView, spring, stagger } from "../lib/motion";
import { Container, Prazo, Reveal, SectionHead } from "./ui";

const MAX = 30;

export default function Deadlines() {
  return (
    <section id="prazos" className="py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHead
            eyebrow="Prazos"
            title="Quando cada assistência começa"
            lead="Transparência antes de assinar: alguns serviços têm prazo de início, contado a partir da confirmação do pagamento."
          />
          <Reveal delay={0.2} className="mt-6 flex gap-3 rounded-2xl border border-warn-ink/20 bg-warn p-4 text-sm leading-relaxed text-warn-ink">
            <AlertTriangle className="mt-0.5 h-5 w-5 flex-none" />
            <p><b>Atenção:</b> os prazos contam a partir da confirmação do pagamento. Antes de contratar, confira o que você vai usar primeiro.</p>
          </Reveal>
        </div>

        <motion.div {...inView} variants={stagger(0.06)} className="overflow-hidden rounded-3xl border border-line bg-surface">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">Prazo de início de cada assistência</caption>
            <thead>
              <tr className="border-b border-line text-[11px] uppercase tracking-[0.1em] text-muted">
                <th scope="col" className="px-5 py-4 font-bold sm:px-6">Assistência</th>
                <th scope="col" className="hidden w-[38%] px-2 py-4 font-bold sm:table-cell">Linha do tempo</th>
                <th scope="col" className="px-5 py-4 text-right font-bold sm:px-6">Início</th>
              </tr>
            </thead>
            <tbody>
              {PRAZOS.map((p) => (
                <motion.tr key={p.nome} variants={fadeUp} className="border-b border-line transition-colors last:border-0 hover:bg-surface-2/70">
                  <td className="px-5 py-4 text-[15px] font-medium sm:px-6">{p.nome}</td>
                  <td className="hidden px-2 py-4 sm:table-cell" aria-hidden="true">
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: p.dias === 0 ? "6%" : `${Math.max(10, (p.dias / MAX) * 100)}%` }}
                        viewport={{ once: true }}
                        transition={{ ...spring, delay: 0.2 }}
                        className={p.dias === 0 ? "h-full rounded-full bg-cta" : "h-full rounded-full bg-warn-ink/60"}
                      />
                    </div>
                  </td>
                  <td className="px-5 py-4 text-right sm:px-6">
                    <Prazo tipo={p.dias === 0 ? "now" : "wait"}>{p.prazo}</Prazo>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </Container>
    </section>
  );
}
