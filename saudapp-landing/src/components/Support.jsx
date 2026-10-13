import { motion } from "framer-motion";
import { ArrowRight, Clock, CreditCard, Mail, MessageCircle, Phone } from "lucide-react";
import { CONTATO, waLink } from "../lib/config";
import { fadeUp, inView, stagger } from "../lib/motion";
import { Button, Container, Eyebrow } from "./ui";

export default function Support() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <motion.div
          {...inView}
          variants={stagger(0.08)}
          className="relative overflow-hidden rounded-[36px] bg-[#120f2a] px-6 py-14 text-white sm:px-12 lg:px-16 lg:py-20"
        >
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.07]" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-cta/30 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-[#5A4BD6]/50 blur-[110px]" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <motion.div variants={fadeUp}>
                <Eyebrow className="!border-white/15 !bg-white/10 !text-white">Atendimento</Eyebrow>
              </motion.div>
              <motion.h2 variants={fadeUp} className="mt-4 text-[clamp(30px,4.6vw,52px)] font-bold leading-[1.05]">
                Uma pessoa de verdade para ajudar você
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 max-w-[46ch] text-[17px] leading-relaxed text-white/70">
                Dúvida antes de assinar ou precisa acionar um serviço? Fale com a gente.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={waLink("Olá! Tenho uma dúvida sobre a SaudApp.")} target="_blank" rel="noopener">
                  <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
                </Button>
                <Button href="#planos" variant="ghost" className="!border-white/20 !bg-white/5 !text-white hover:!border-white/40">
                  Ver planos <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
            </div>

            <motion.ul variants={stagger(0.08)} className="grid gap-3">
              {[
                { icon: Phone, l: "Telefone gratuito", v: CONTATO.telefone, href: `tel:${CONTATO.telefone.replace(/\D/g, "")}` },
                { icon: Mail, l: "E-mail", v: CONTATO.email, href: `mailto:${CONTATO.email}` },
                { icon: Clock, l: "Telemedicina", v: "24 horas, todos os dias" },
                { icon: CreditCard, l: "Pagamento", v: "PIX ou cartão de crédito" },
              ].map(({ icon: Icon, l, v, href }) => {
                const Tag = href ? "a" : "div";
                return (
                  <motion.li key={l} variants={fadeUp}>
                    <Tag
                      href={href}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur transition-colors hover:border-white/25 hover:bg-white/[0.07]"
                    >
                      <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-white/10 text-cta">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs text-white/60">{l}</span>
                        <span className="tabular block truncate font-display text-[17px] font-bold">{v}</span>
                      </span>
                    </Tag>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
