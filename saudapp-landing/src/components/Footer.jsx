import { AVISO_LEGAL, CONTATO } from "../lib/config";
import { Container, Logo } from "./ui";

const LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#planos", label: "Planos" },
  { href: "#prazos", label: "Prazos" },
  { href: "#faq", label: "Dúvidas" },
  { href: "https://saudapp.com.br/termos", label: "Termos de Uso" },
  { href: "https://saudapp.com.br/privacidade", label: "Privacidade" },
  { href: "https://saudapp.com.br/regulamento", label: "Regulamento" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface pb-28 pt-14 text-sm text-muted md:pb-12">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Logo className="text-ink" />
          <nav aria-label="Rodapé" className="flex flex-wrap gap-x-6 gap-y-3">
            {LINKS.map((l) => (
              <a key={l.label} href={l.href} className="transition-colors hover:text-ink">{l.label}</a>
            ))}
          </nav>
        </div>
        <div className="mt-10 grid max-w-[90ch] gap-2 border-t border-line pt-8 text-[13px] leading-relaxed">
          <p className="font-medium text-ink">{AVISO_LEGAL}</p>
          <p>
            {CONTATO.razao} · CNPJ {CONTATO.cnpj} · {CONTATO.email} · {CONTATO.telefone}
          </p>
          <p>© {new Date().getFullYear()} SaudApp. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}
