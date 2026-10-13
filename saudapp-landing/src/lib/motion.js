// Física de mola padrão do design system
export const spring = { type: "spring", stiffness: 100, damping: 20 };
export const springSnappy = { type: "spring", stiffness: 400, damping: 30 };

export const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: spring },
};

export const stagger = (gap = 0.08, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
});

export const inView = { initial: "hidden", whileInView: "show", viewport: { once: true, margin: "-80px" } };
