import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { SERVICOS } from "../lib/content";
import { fadeUp, inView, springSnappy, stagger } from "../lib/motion";
import { Container, Prazo, SectionHead, cx } from "./ui";

function ServiceCard({ s, wide }) {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const spot = useMotionTemplate`radial-gradient(240px circle at ${x}px ${y}px, rgb(var(--brand) / 0.12), transparent 70%)`;
  const Icon = s.icon;

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={springSnappy}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - r.left);
        y.set(e.clientY - r.top);
      }}
      onMouseLeave={() => { x.set(-200); y.set(-200); }}
      className={cx(
        "group relative flex min-w-0 flex-col gap-3 overflow-hidden rounded-3xl border border-line bg-surface p-6 transition-[border-color,box-shadow] duration-300 hover:border-brand/30 hover:shadow-glow",
        wide && "sm:col-span-2"
      )}
    >
      <motion.div style={{ background: spot }} className="pointer-events-none absolute inset-0" />
      <div className="relative flex items-start justify-between gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-2xl border border-brand/10 bg-brand-soft text-brand transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
          <Icon className="h-6 w-6" strokeWidth={1.8} />
        </span>
        <Prazo tipo={s.tipo}>{s.prazo}</Prazo>
      </div>
      <h3 className="relative mt-2 text-lg font-bold">{s.titulo}</h3>
      <p className="relative text-[15px] leading-relaxed text-muted">{s.desc}</p>
    </motion.article>
  );
}

export default function Services() {
  return (
    <section id="servicos" className="relative border-y border-line bg-surface-2/60 py-24 sm:py-32">
      <Container>
        <SectionHead
          eyebrow="Nossos serviços"
          title="Assistências para o cuidado do dia a dia"
          lead="Cada plano reúne um conjunto delas. O prazo de início de cada serviço aparece no card e na tabela de prazos."
        />
        <motion.div
          {...inView}
          variants={stagger(0.06)}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICOS.map((s, i) => (
            <ServiceCard key={s.titulo} s={s} wide={i < 2 || i > 5} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
