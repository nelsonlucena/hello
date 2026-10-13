import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Check, Pill, Receipt, Stethoscope, TrendingDown, Wrench, X } from "lucide-react";
import { spring } from "../lib/motion";
import { Container, Eyebrow } from "./ui";

const CUSTOS = [
  { icon: Stethoscope, item: "Consulta particular", valor: "R$ 250" },
  { icon: Pill, item: "Remédios do mês", valor: "R$ 180" },
  { icon: Wrench, item: "Imprevisto em casa", valor: "R$ 320" },
];

const GANHOS = [
  "Telemedicina 24h incluída",
  "Desconto em mais de 27 mil farmácias",
  "Apoio psicológico e assistências",
  "Mensalidade fixa, cancele quando quiser",
];

/**
 * Sequência com scroll sticky: o painel fica preso enquanto a rolagem
 * faz a transição do "custo da saúde" para a "solução SaudApp".
 */
export default function PainSolution() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const p = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  const dorOpacity = useTransform(p, [0, 0.4, 0.5], [1, 1, 0]);
  const dorY = useTransform(p, [0.35, 0.5], [0, -40]);
  const solOpacity = useTransform(p, [0.5, 0.6], [0, 1]);
  const solY = useTransform(p, [0.5, 0.65], [40, 0]);
  const total = useTransform(p, [0, 0.45], [0, 750]);
  const totalTxt = useTransform(total, (v) => `R$ ${Math.round(v).toLocaleString("pt-BR")}`);
  const barra = useTransform(p, [0, 1], ["0%", "100%"]);

  return (
    <section id="solucao" ref={ref} className="relative lg:h-[260vh]">
      <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center">
        <Container className="py-20 lg:py-0">
          <div className="relative overflow-hidden rounded-[32px] border border-line bg-surface p-6 shadow-soft sm:p-10 lg:p-14">
            <motion.div style={{ opacity: dorOpacity }} className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-bad-ink/15 blur-3xl" />
            <motion.div style={{ opacity: solOpacity }} className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cta/25 blur-3xl" />

            {/* barra de progresso da sequência */}
            <div className="absolute inset-x-0 top-0 hidden h-1 bg-surface-2 lg:block">
              <motion.div style={{ width: barra }} className="h-full bg-gradient-to-r from-bad-ink via-brand to-cta" />
            </div>

            {/* Desktop: as duas etapas sobrepostas e trocadas pelo scroll */}
            <div className="relative hidden min-h-[440px] lg:block">
              <motion.div style={{ opacity: dorOpacity, y: dorY }} className="absolute inset-0">
                <Dor totalTxt={totalTxt} />
              </motion.div>
              <motion.div style={{ opacity: solOpacity, y: solY }} className="absolute inset-0">
                <Solucao />
              </motion.div>
            </div>

            {/* Mobile: empilhado, com animações de entrada */}
            <div className="grid gap-16 lg:hidden">
              <Dor />
              <Solucao />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

function Dor({ totalTxt }) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <div>
        <Eyebrow className="!border-bad-ink/20 !bg-bad !text-bad-ink">O custo da saúde</Eyebrow>
        <h2 className="mt-4 text-[clamp(28px,4vw,46px)] font-bold leading-[1.05]">
          Cuidar da família está <span className="text-bad-ink">pesando no bolso?</span>
        </h2>
        <p className="mt-4 max-w-[46ch] text-[17px] leading-relaxed text-muted">
          Consulta particular, remédio e imprevisto em casa somam rápido. Sem um benefício de saúde pelo trabalho,
          qualquer susto vira dor de cabeça no orçamento.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={spring}
        className="rounded-3xl border border-line bg-bg p-5"
      >
        <div className="flex items-center gap-2 text-sm font-bold text-muted">
          <Receipt className="h-4 w-4" /> Um mês com imprevistos
        </div>
        <ul className="mt-4 grid gap-2">
          {CUSTOS.map(({ icon: Icon, item, valor }) => (
            <li key={item} className="flex items-center gap-3 rounded-2xl bg-surface px-4 py-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-bad text-bad-ink"><Icon className="h-4 w-4" /></span>
              <span className="flex-1 text-[15px] font-medium">{item}</span>
              <span className="tabular font-display font-bold">{valor}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center justify-between border-t border-dashed border-line px-1 pt-4">
          <span className="text-sm font-bold text-muted">Total</span>
          <motion.span className="tabular font-display text-3xl font-extrabold tracking-display text-bad-ink">
            {totalTxt ?? "R$ 750"}
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
}

function Solucao() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <div>
        <Eyebrow className="!border-good-ink/20 !bg-good !text-good-ink">A solução SaudApp</Eyebrow>
        <h2 className="mt-4 text-[clamp(28px,4vw,46px)] font-bold leading-[1.05]">
          Cuidado de verdade, com <span className="text-brand">mensalidade que cabe</span>
        </h2>
        <p className="mt-4 max-w-[46ch] text-[17px] leading-relaxed text-muted">
          Telemedicina 24h, desconto em farmácias, apoio psicológico e assistências residenciais em um único plano por
          assinatura, a partir de R$ 11,90 por mês.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={spring}
        className="rounded-3xl border border-brand/20 bg-brand-soft/50 p-5 shadow-glow"
      >
        <div className="flex items-center gap-2 text-sm font-bold text-brand">
          <TrendingDown className="h-4 w-4" /> Com a SaudApp
        </div>
        <ul className="mt-4 grid gap-2">
          {GANHOS.map((g) => (
            <li key={g} className="flex items-center gap-3 rounded-2xl bg-surface px-4 py-3 text-[15px] font-medium">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-cta text-cta-ink"><Check className="h-3.5 w-3.5" strokeWidth={3} /></span>
              {g}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center justify-between border-t border-dashed border-brand/25 px-1 pt-4">
          <span className="flex items-center gap-1.5 text-sm font-bold text-muted">
            <X className="h-4 w-4 text-bad-ink" /> Sem surpresas
          </span>
          <span className="tabular font-display text-3xl font-extrabold tracking-display text-brand">
            R$ 11,90<span className="text-base font-medium text-muted">/mês</span>
          </span>
        </div>
      </motion.div>
    </div>
  );
}
