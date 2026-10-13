import { motion } from "framer-motion";
import { HeartPulse } from "lucide-react";
import { fadeUp, inView, spring, springSnappy, stagger } from "../lib/motion";

const cx = (...c) => c.filter(Boolean).join(" ");

export function Logo({ className = "" }) {
  return (
    <span className={cx("inline-flex items-center gap-2 font-display text-[19px] font-bold tracking-display", className)}>
      <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-brand text-white shadow-glow">
        <HeartPulse className="h-[18px] w-[18px]" strokeWidth={2.4} />
      </span>
      <span>Saud<span className="text-brand">App</span></span>
    </span>
  );
}

const variants = {
  cta: "bg-cta text-cta-ink shadow-[0_8px_24px_-8px_rgb(var(--cta)/0.7)] hover:shadow-[0_12px_32px_-8px_rgb(var(--cta)/0.85)]",
  brand: "bg-brand text-white shadow-glow",
  ghost: "border border-line bg-surface/60 text-ink backdrop-blur hover:border-brand/40",
  outline: "border-2 border-brand/80 text-brand hover:bg-brand-soft",
};

export function Button({ as = "a", variant = "cta", className = "", children, ...props }) {
  const Comp = motion[as];
  return (
    <Comp
      whileHover={{ y: -2, scale: 1.015 }}
      whileTap={{ scale: 0.97 }}
      transition={springSnappy}
      className={cx(
        "inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-xl px-6 text-[15px] font-bold transition-[box-shadow,border-color,background-color] duration-300",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

export function Eyebrow({ children, className = "" }) {
  return (
    <span className={cx("inline-flex items-center gap-2 rounded-full border border-brand/15 bg-brand-soft/70 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-brand", className)}>
      <span className="h-1.5 w-1.5 rounded-full bg-cta" />
      {children}
    </span>
  );
}

export function SectionHead({ eyebrow, title, lead, center = false }) {
  return (
    <motion.div {...inView} variants={stagger(0.08)} className={cx("max-w-2xl", center && "mx-auto text-center")}>
      <motion.div variants={fadeUp}><Eyebrow>{eyebrow}</Eyebrow></motion.div>
      <motion.h2 variants={fadeUp} className="mt-4 text-[clamp(30px,4.6vw,48px)] font-bold leading-[1.05]">
        {title}
      </motion.h2>
      {lead && (
        <motion.p variants={fadeUp} className={cx("mt-4 text-[17px] leading-relaxed text-muted", center && "mx-auto")}>
          {lead}
        </motion.p>
      )}
    </motion.div>
  );
}

export function Prazo({ tipo, children, className = "" }) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-bold",
        tipo === "now" ? "bg-good text-good-ink" : "bg-warn text-warn-ink",
        className
      )}
    >
      <span className={cx("h-1.5 w-1.5 rounded-full", tipo === "now" ? "bg-good-ink animate-pulse" : "bg-warn-ink")} />
      {children}
    </span>
  );
}

export function Container({ className = "", children }) {
  return <div className={cx("mx-auto w-full max-w-6xl px-4 sm:px-6", className)}>{children}</div>;
}

export function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ ...spring, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export { cx };
