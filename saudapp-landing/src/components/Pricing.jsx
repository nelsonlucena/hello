import { useEffect } from "react";
import { AnimatePresence, animate, motion, useMotionValue, useTransform } from "framer-motion";
import { Check, Info, Minus, Plus, Sparkles, User } from "lucide-react";
import { CHECKOUT, MAX_VIDAS, PLANOS, brl, totalMes, waLink } from "../lib/config";
import { fadeUp, inView, spring, springSnappy, stagger } from "../lib/motion";
import { Button, Container, SectionHead, cx } from "./ui";

function AnimatedPrice({ value, cents }) {
  const mv = useMotionValue(value);
  useEffect(() => {
    const c = animate(mv, value, spring);
    return c.stop;
  }, [value, mv]);
  const int = useTransform(mv, (v) => Math.floor(v + 0.0001).toLocaleString("pt-BR"));
  const dec = useTransform(mv, (v) => "," + brl(v).split(",")[1]);
  return (
    <>
      <motion.span className="text-[52px] leading-none">{int}</motion.span>
      {cents && <motion.span className="text-xl">{dec}</motion.span>}
    </>
  );
}

function LivesPicker({ vidas, setVidas }) {
  const dep = vidas - 1;
  return (
    <motion.div
      variants={fadeUp}
      className="relative overflow-hidden rounded-3xl border border-line bg-surface p-6 shadow-soft sm:p-7"
    >
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand via-[#8b7cf6] to-cta" />
      <div className="flex flex-wrap items-center justify-between gap-5">
        <div>
          <p className="font-display text-lg font-bold tracking-display">Quantas pessoas você quer cuidar?</p>
          <p className="mt-1 text-sm text-muted">1 titular + até 5 dependentes.</p>
        </div>
        <div className="flex items-center rounded-2xl border border-line bg-surface-2 p-1">
          <StepBtn label="Remover uma vida" disabled={vidas <= 1} onClick={() => setVidas(Math.max(1, vidas - 1))}>
            <Minus className="h-5 w-5" />
          </StepBtn>
          <div className="relative w-20 overflow-hidden text-center" aria-live="polite">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={vidas}
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -18, opacity: 0 }}
                transition={springSnappy}
                className="tabular block font-display text-2xl font-extrabold"
              >
                {vidas}
              </motion.span>
            </AnimatePresence>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-muted">{vidas === 1 ? "vida" : "vidas"}</span>
          </div>
          <StepBtn label="Adicionar uma vida" disabled={vidas >= MAX_VIDAS} onClick={() => setVidas(Math.min(MAX_VIDAS, vidas + 1))}>
            <Plus className="h-5 w-5" />
          </StepBtn>
        </div>
      </div>

      <div className="mt-5 flex gap-2" aria-hidden="true">
        {Array.from({ length: MAX_VIDAS }).map((_, i) => {
          const on = i < vidas;
          return (
            <motion.span
              key={i}
              animate={{ scale: i === 0 ? 1.06 : on ? 1 : 0.86, opacity: on ? 1 : 0.35 }}
              transition={springSnappy}
              className={cx(
                "grid h-10 w-10 place-items-center rounded-full border transition-colors duration-300",
                i === 0 ? "border-brand bg-brand text-white" : on ? "border-brand/30 bg-brand-soft text-brand" : "border-line bg-surface-2 text-muted"
              )}
            >
              <User className="h-5 w-5" strokeWidth={1.8} />
            </motion.span>
          );
        })}
      </div>

      <AnimatePresence initial={false}>
        {dep > 0 && (
          <motion.p
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 16 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={spring}
            className="flex gap-2 overflow-hidden rounded-xl bg-good px-4 py-3 text-[13px] font-medium text-good-ink"
          >
            <Info className="mt-0.5 h-4 w-4 flex-none" />
            Residencial, funeral e PET atendem o mesmo núcleo familiar: mesma casa e o mesmo animal cadastrado.
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function StepBtn({ children, label, ...props }) {
  return (
    <motion.button
      type="button"
      aria-label={label}
      whileTap={{ scale: 0.88 }}
      whileHover={{ scale: 1.06 }}
      transition={springSnappy}
      className="grid h-12 w-12 place-items-center rounded-xl text-brand hover:bg-surface disabled:pointer-events-none disabled:opacity-30"
      {...props}
    >
      {children}
    </motion.button>
  );
}

function BillingToggle({ anual, setAnual }) {
  const opts = [
    { v: false, label: "Mensal" },
    { v: true, label: "Anual", extra: "pague 10, leve 12" },
  ];
  return (
    <motion.div variants={fadeUp} role="group" aria-label="Período de cobrança" className="inline-flex rounded-full border border-line bg-surface p-1 shadow-soft">
      {opts.map((o) => (
        <button
          key={o.label}
          type="button"
          aria-pressed={anual === o.v}
          onClick={() => setAnual(o.v)}
          className={cx("relative rounded-full px-5 py-2.5 text-sm font-bold transition-colors", anual === o.v ? "text-white" : "text-muted hover:text-ink")}
        >
          {anual === o.v && <motion.span layoutId="billing-pill" transition={spring} className="absolute inset-0 rounded-full bg-brand" />}
          <span className="relative flex items-center gap-2">
            {o.label}
            {o.extra && (
              <span className={cx("rounded-full px-2 py-0.5 text-[11px]", anual === o.v ? "bg-white/20" : "bg-good text-good-ink")}>{o.extra}</span>
            )}
          </span>
        </button>
      ))}
    </motion.div>
  );
}

function PlanCard({ plano, vidas, anual }) {
  const dep = vidas - 1;
  const mes = totalMes(plano, vidas);
  const valor = anual ? mes * 10 : mes;
  const hot = plano.destaque;

  const assinar = (e) => {
    const href =
      CHECKOUT[plano.id] ||
      waLink(`Olá! Quero assinar o plano ${plano.nome} para ${vidas} ${vidas === 1 ? "vida" : "vidas"} (${anual ? "anual" : "mensal"}, R$ ${brl(valor)}).`);
    e.currentTarget.href = href;
  };

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: hot ? -10 : -6 }}
      transition={springSnappy}
      className={cx(
        "relative flex min-w-0 flex-col gap-5 rounded-[28px] p-7",
        hot
          ? "border-2 border-brand bg-surface shadow-[0_30px_80px_-30px_rgb(var(--brand)/0.55)]"
          : "border border-line bg-surface"
      )}
    >
      {hot && (
        <span className="absolute -top-3.5 left-7 inline-flex items-center gap-1.5 rounded-full bg-cta px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-cta-ink shadow-soft">
            <Sparkles className="h-3.5 w-3.5" /> Recomendado
          </span>
      )}

      <div>
        <h3 className="text-2xl font-bold">{plano.nome}</h3>
        <p className="mt-1 text-sm text-muted">{plano.resumo}</p>
      </div>

      <div>
        <div className="tabular flex items-baseline gap-0.5 font-display font-extrabold tracking-display">
          <span className="mr-1 text-lg">R$</span>
          <span className={cx("contents", hot && "[&>span]:text-brand")}>
            <AnimatedPrice value={valor} cents={!anual} />
          </span>
          <span className="ml-1.5 font-sans text-sm font-medium tracking-normal text-muted">{anual ? "/ano" : "/mês"}</span>
        </div>
        <span className="mt-3 inline-block rounded-full bg-cta/15 px-3 py-1 text-xs font-bold text-good-ink">
          {anual ? "12 meses pelo preço de 10" : `≈ R$ ${brl(mes / 30)} por dia`}
        </span>
      </div>

      <div className="min-h-[58px] border-t border-dashed border-line pt-4 text-[13px] leading-relaxed text-muted">
        Titular: <b className="text-ink">R$ {brl(plano.titular)}</b>/mês
        <AnimatePresence initial={false} mode="wait">
          {dep > 0 ? (
            <motion.span key={dep} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={spring} className="block">
              {dep} dependente{dep > 1 ? "s" : ""}: {dep} × R$ {brl(plano.dep)} = <b className="text-ink">R$ {brl(dep * plano.dep)}</b>
              <br />Total: <b className="text-ink">R$ {brl(mes)}/mês</b>
            </motion.span>
          ) : (
            <motion.span key="ind" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="block">
              Plano individual
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <ul className="grid flex-1 content-start gap-3 border-t border-line pt-5">
        {plano.herda && <li className="text-sm font-bold">{plano.herda}</li>}
        {plano.itens.map((it) => (
          <li key={it} className="flex items-start gap-3 text-[15px]">
            <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-cta/20 text-good-ink">
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            {it}
          </li>
        ))}
      </ul>

      <Button
        href="#"
        target="_blank"
        rel="noopener"
        onClick={assinar}
        variant={hot ? "cta" : "outline"}
        className="w-full"
      >
        Assinar {plano.nome}
      </Button>
    </motion.article>
  );
}

export default function Pricing({ vidas, setVidas, anual, setAnual }) {
  return (
    <section id="planos" className="relative overflow-x-clip py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-40 -z-10 h-[480px] w-[780px] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]" />
      <Container>
        <SectionHead
          center
          eyebrow="Planos"
          title="Escolha quantas pessoas quer cuidar"
          lead="Defina o número de vidas e veja o valor de cada plano na hora. Pague por PIX ou cartão e cancele quando quiser."
        />

        <motion.div {...inView} variants={stagger(0.1)} className="mx-auto mt-12 grid max-w-3xl justify-items-center gap-6">
          <div className="w-full"><LivesPicker vidas={vidas} setVidas={setVidas} /></div>
          <BillingToggle anual={anual} setAnual={setAnual} />
        </motion.div>

        <motion.div
          {...inView}
          variants={stagger(0.1)}
          className="mx-auto mt-14 grid max-w-md items-stretch gap-6 lg:max-w-none lg:grid-cols-3"
        >
          {PLANOS.map((p) => (
            <PlanCard key={p.id} plano={p} vidas={vidas} anual={anual} />
          ))}
        </motion.div>

        <p className="mt-8 text-center text-[13px] text-muted">
          Cada assistência segue o prazo de início indicado na tabela de prazos. Valores por mês; no anual, 12 meses pelo
          preço de 10.
        </p>
      </Container>
    </section>
  );
}
