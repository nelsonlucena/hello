// Preencha: número do WhatsApp (só dígitos, com 55) e links de checkout do Asaas por plano.
export const WA_NUMBER = "5511999999999";
export const CHECKOUT = { cuidar: "", protege: "", premium: "" };

export const CONTATO = {
  telefone: "0800 565 8666",
  email: "suporte@saudapp.com.br",
  razao: "SaudApp Tecnologia da Informação LTDA",
  cnpj: "40.180.278/0001-02",
};

export const AVISO_LEGAL =
  "Não é plano de saúde, é assistência. A maioria das assistências ativa em até 1 dia; algumas possuem carência. Consulte o regulamento em saudapp.com.br.";

export const MAX_VIDAS = 6;

// Preço do titular e de cada dependente, por mês.
export const PLANOS = [
  {
    id: "cuidar",
    nome: "Cuidar",
    titular: 11.9,
    dep: 9.9,
    resumo: "O essencial para começar a se cuidar.",
    itens: ["Telemedicina 24h por dia", "Desconto em farmácias", "Orientação psicológica", "Assistência funeral"],
  },
  {
    id: "protege",
    nome: "Protege",
    titular: 19.9,
    dep: 9.9,
    destaque: true,
    resumo: "Saúde e casa protegidas no mesmo plano.",
    herda: "Tudo do Cuidar, mais:",
    itens: ["Assistência residencial", "Rede de especialistas"],
  },
  {
    id: "premium",
    nome: "Premium",
    titular: 25.9,
    dep: 14.9,
    resumo: "Cuidado completo, incluindo o seu pet.",
    herda: "Tudo do Protege, mais:",
    itens: ["Assistência PET", "Orientação nutricional"],
  },
];

export const brl = (v) => v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
export const totalMes = (plano, vidas) => plano.titular + (vidas - 1) * plano.dep;
export const waLink = (msg) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
