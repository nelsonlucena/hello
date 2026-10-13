import { useEffect, useRef } from "react";
import {
  animate, motion, useInView, useMotionValue, useScroll, useSpring, useTransform,
} from "framer-motion";
import { ArrowRight, BadgeCheck, Pill, ShieldCheck, Stethoscope, Video } from "lucide-react";
import { AVISO_LEGAL } from "../lib/config";
import { fadeUp, spring, stagger } from "../lib/motion";
import { Button, Container, Prazo } from "./ui";

function CountUp({ to, prefix = "", suffix = "", className = "" }) {
  const ref = useRef(null);
  const seen = useInView(ref, { once: true });
  const val = useMotionValue(0);
  const text = useTransform(val, (v) => prefix + Math.round(v).toLocaleString("pt-BR") + suffix);

  useEffect(() => {
    if (!seen) return;
    const ctrl = animate(val, to, { type: "spring", stiffness: 100, damping: 20, restDelta: 0.5 });
    return ctrl.stop;
  }, [seen, to, val]);

  return <motion.span ref={ref} className={className}>{text}</motion.span>;
}

const BENEFICIOS = [
  { icon: Video, nome: "Telemedicina 24h", prazo: "Imediato", tipo: "now" },
  { icon: Pill, nome: "Desconto em farmácias", prazo: "Imediato", tipo: "now" },
  { nome: "Orientação psicológica", prazo: "3 dias úteis", tipo: "wait" },
  { nome: "Assistência residencial", prazo: "5 dias", tipo: "wait" },
  { nome: "Rede de especialistas", prazo: "Regulamento", tipo: "wait" },
];

function Phone() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), spring);
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), spring);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      className="relative mx-auto w-full max-w-[380px] [perspective:1200px]"
      aria-label="Exemplo de como os benefícios aparecem no app"
    >
      {/* brilho atrás do aparelho */}
      <div className="absolute inset-8 -z-10 rounded-full bg-gradient-to-tr from-brand/40 via-brand/10 to-cta/40 blur-3xl" />

      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="relative mx-auto w-[min(310px,100%)] rounded-[42px] border border-white/10 bg-[#0f0d1f] p-3 shadow-[0_40px_80px_-24px_rgb(var(--brand)/0.55)]"
      >
        <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
        <div className="overflow-hidden rounded-[32px] bg-surface px-4 pb-5 pt-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-medium text-muted">Olá, Mariana 👋</p>
              <h3 className="text-base font-bold">Seus benefícios</h3>
            </div>
            <span className="rounded-full bg-brand-soft px-2 py-1 text-[10px] font-bold text-brand">Protege</span>
          </div>

          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 flex w-full items-center gap-3 rounded-2xl bg-gradient-to-br from-brand to-[#7b6cf0] p-3.5 text-left text-white"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/15">
              <Stethoscope className="h-5 w-5" />
            </span>
            <span className="flex-1">
              <span className="block text-[13px] font-bold">Falar com um médico</span>
              <span className="block text-[11px] text-white/75">Tempo médio de espera: 8 min</span>
            </span>
            <ArrowRight className="h-4 w-4" />
          </motion.button>

          <motion.ul initial="hidden" animate="show" variants={stagger(0.09, 0.7)} className="mt-3 grid gap-2">
            {BENEFICIOS.map((b) => (
              <motion.li
                key={b.nome}
                variants={fadeUp}
                className="flex items-center justify-between gap-2 rounded-xl bg-surface-2 px-3 py-2.5 text-[12.5px] font-medium"
              >
                <span className="truncate">{b.nome}</span>
                <Prazo tipo={b.tipo} className="!px-2 !py-0.5 !text-[10.5px]">{b.prazo}</Prazo>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>

      <FloatChip className="-bottom-6 -left-1 sm:-left-8" delay={1.1} y={[0, -8, 0]}>
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-cta text-cta-ink"><BadgeCheck className="h-5 w-5" /></span>
        <span><b className="block font-display text-[13px]">Consulta concluída</b><span className="text-muted">Receita enviada no app</span></span>
      </FloatChip>
      <FloatChip className="-right-1 -top-6 sm:-right-10" delay={1.3} y={[0, 8, 0]}>
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-soft text-brand"><Pill className="h-5 w-5" /></span>
        <span><b className="block font-display text-[13px]">Economia de R$ 38</b><span className="text-muted">na farmácia hoje</span></span>
      </FloatChip>
    </div>
  );
}

function FloatChip({ children, className, delay, y }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ ...spring, delay }}
      className={`absolute z-20 ${className}`}
    >
      <motion.div
        animate={{ y }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center gap-3 rounded-2xl border border-line/80 bg-surface/80 p-2.5 pr-4 text-xs leading-tight shadow-soft backdrop-blur-xl"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yPhone = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="inicio" className="relative -mt-16 overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-36">
      {/* fundo: grade sutil + brilhos */}
      <div className="bg-grid mask-fade-b pointer-events-none absolute inset-0 -z-10 opacity-70" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] -z-10 h-[520px] w-[520px] rounded-full bg-cta/20 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-[420px] w-[420px] rounded-full bg-brand/20 blur-[120px]" />

      <Container className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <motion.div initial="hidden" animate="show" variants={stagger(0.09, 0.1)} style={{ opacity: fade }}>
          <motion.a
            variants={fadeUp}
            href="#servicos"
            className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 py-1 pl-1 pr-3 text-[13px] font-medium text-muted shadow-soft backdrop-blur transition-colors hover:border-brand/30"
          >
            <span className="rounded-full bg-brand px-2 py-0.5 text-[11px] font-bold text-white">Novo</span>
            Saúde e bem-estar para toda a família
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </motion.a>

          <motion.p variants={fadeUp} className="mt-7 font-display text-[clamp(56px,10vw,104px)] font-extrabold leading-none tracking-[-0.05em]">
            <CountUp to={50000} prefix="+" className="tabular bg-gradient-to-br from-brand to-[#9b8cff] bg-clip-text text-transparent" />
          </motion.p>
          <motion.h1 variants={fadeUp} className="mt-3 max-w-[18ch] text-[clamp(30px,4.4vw,52px)] font-bold leading-[1.05]">
            famílias cuidadas a partir de{" "}
            <span className="relative whitespace-nowrap text-brand">
              R$ 0,40 por dia
              <svg viewBox="0 0 220 12" aria-hidden="true" className="absolute -bottom-2 left-0 w-full text-cta">
                <motion.path
                  d="M2 8 C 60 2, 140 2, 218 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ ...spring, delay: 0.9 }}
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-[48ch] text-lg leading-relaxed text-muted">
            Médico online via telemedicina 24h por dia, desconto em farmácias, apoio psicológico e assistências para o
            dia a dia, direto no celular.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#planos">
              Ver planos <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#servicos" variant="ghost">Conhecer os serviços</Button>
          </motion.div>

          <motion.dl variants={fadeUp} className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-line pt-6">
            {[
              { v: <CountUp to={27000} suffix="+" />, l: "farmácias parceiras" },
              { v: <CountUp to={27} />, l: "estados atendidos" },
              { v: "24h", l: "telemedicina" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="sr-only">{s.l}</dt>
                <dd className="tabular font-display text-2xl font-bold tracking-display">{s.v}</dd>
                <dd className="mt-0.5 text-[13px] text-muted">{s.l}</dd>
              </div>
            ))}
          </motion.dl>

          <motion.p variants={fadeUp} className="mt-6 flex max-w-[62ch] gap-2 text-[12.5px] leading-relaxed text-muted">
            <ShieldCheck className="mt-0.5 h-4 w-4 flex-none text-brand" />
            {AVISO_LEGAL}
          </motion.p>
        </motion.div>

        <motion.div style={{ y: yPhone }}>
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ ...spring, delay: 0.35 }}
          >
            <Phone />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
