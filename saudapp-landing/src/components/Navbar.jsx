import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV } from "../lib/content";
import { spring } from "../lib/motion";
import { Button, Container, Logo, cx } from "./ui";

export default function Navbar() {
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(null);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 12));

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={spring}
      className={cx(
        "sticky top-0 z-50 border-b transition-[background-color,border-color] duration-500",
        scrolled ? "border-line/80 bg-surface/70 backdrop-blur-xl backdrop-saturate-150" : "border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center gap-6">
        <a href="#inicio" aria-label="SaudApp, início">
          <Logo />
        </a>

        <nav aria-label="Principal" className="ml-auto hidden md:block" onMouseLeave={() => setHover(null)}>
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.href} className="relative">
                <a
                  href={item.href}
                  onMouseEnter={() => setHover(item.href)}
                  className="relative z-10 block rounded-lg px-3 py-2 text-[14.5px] font-medium text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
                {hover === item.href && (
                  <motion.span layoutId="nav-hover" transition={spring} className="absolute inset-0 rounded-lg bg-surface-2" />
                )}
              </li>
            ))}
          </ul>
        </nav>

        <Button href="#planos" className="ml-auto hidden min-h-[40px] px-5 text-sm sm:inline-flex md:ml-0">
          Começar agora
        </Button>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="ml-auto grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface/70 backdrop-blur sm:ml-0 md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "x" : "m"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={spring}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.span>
          </AnimatePresence>
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Menu móvel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={spring}
            className="overflow-hidden border-t border-line bg-surface/95 backdrop-blur-xl md:hidden"
          >
            <Container className="grid gap-1 py-4">
              {NAV.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: -12, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ ...spring, delay: i * 0.04 }}
                  className="rounded-xl px-3 py-3 text-base font-medium hover:bg-surface-2"
                >
                  {item.label}
                </motion.a>
              ))}
              <Button href="#planos" onClick={() => setOpen(false)} className="mt-2 w-full">
                Começar agora
              </Button>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>

      <motion.div style={{ scaleX: progress }} className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-brand to-cta" />
    </motion.header>
  );
}
