import {
  Stethoscope, Pill, HeartHandshake, UsersRound, House, Salad, PawPrint, Flower2,
  ClipboardCheck, CreditCard, Smartphone,
} from "lucide-react";

// prazo: "now" = início imediato; "wait" = possui prazo de início
export const SERVICOS = [
  { icon: Stethoscope, titulo: "Telemedicina", desc: "Médico online via telemedicina 24h por dia, sem sair de casa.", prazo: "Imediato", tipo: "now" },
  { icon: Pill, titulo: "Desconto em farmácias", desc: "Rede com mais de 27 mil farmácias em todo o Brasil.", prazo: "Imediato", tipo: "now" },
  { icon: HeartHandshake, titulo: "Orientação psicológica", desc: "Apoio de profissionais para os momentos difíceis.", prazo: "3 dias úteis", tipo: "wait" },
  { icon: UsersRound, titulo: "Rede de especialistas", desc: "Descontos em consultas com especialistas da rede.", prazo: "Consulte o regulamento", tipo: "wait" },
  { icon: House, titulo: "Assistência residencial", desc: "Apoio para imprevistos em casa, como chaveiro e encanador.", prazo: "5 dias corridos", tipo: "wait" },
  { icon: Salad, titulo: "Orientação nutricional", desc: "Orientação alimentar personalizada para a sua rotina.", prazo: "7 dias corridos", tipo: "wait" },
  { icon: PawPrint, titulo: "Assistência PET", desc: "Cuidado e orientação para o seu animal de estimação.", prazo: "7 dias corridos", tipo: "wait" },
  { icon: Flower2, titulo: "Assistência funeral", desc: "Suporte à família em um momento delicado.", prazo: "30 dias corridos", tipo: "wait" },
];

export const PRAZOS = [
  { nome: "Telemedicina", prazo: "Imediato", dias: 0 },
  { nome: "Desconto em farmácias", prazo: "Imediato", dias: 0 },
  { nome: "Orientação psicológica", prazo: "3 dias úteis", dias: 3 },
  { nome: "Assistência residencial", prazo: "5 dias corridos", dias: 5 },
  { nome: "Orientação nutricional", prazo: "7 dias corridos", dias: 7 },
  { nome: "Assistência PET", prazo: "7 dias corridos", dias: 7 },
  { nome: "Assistência funeral", prazo: "30 dias corridos", dias: 30 },
];

export const PASSOS = [
  { icon: ClipboardCheck, titulo: "Escolha o plano", desc: "Defina quantas pessoas e qual plano, no valor mensal ou anual." },
  { icon: CreditCard, titulo: "Pague por PIX ou cartão", desc: "Pagamento seguro. A confirmação chega no seu WhatsApp." },
  { icon: Smartphone, titulo: "Comece a usar", desc: "Telemedicina e desconto em farmácias começam logo após a confirmação. As demais seguem a tabela de prazos." },
];

export const FAQ = [
  { q: "O que é a SaudApp?", a: "Uma plataforma de assistências e benefícios de saúde e bem-estar por assinatura. Não é plano de saúde: você contrata serviços como telemedicina, desconto em farmácias e apoio psicológico, sem rede credenciada de hospitais." },
  { q: "Quando posso começar a usar?", a: "A telemedicina e o desconto em farmácias ficam disponíveis logo após a confirmação do pagamento. Outras assistências têm prazo de início, de 3 a 30 dias, conforme a tabela de prazos e o regulamento." },
  { q: "Como funcionam os dependentes?", a: "Você escolhe o número de vidas no seletor. O titular paga o valor do plano e cada dependente paga o valor adicional mostrado no detalhamento. Residencial, funeral e PET atendem o mesmo núcleo familiar." },
  { q: "Como cancelo?", a: "A qualquer momento, sem multa, pelo nosso atendimento. Você também tem direito de arrependimento de 7 dias após a contratação, com devolução do valor pago." },
  { q: "Quais são as formas de pagamento?", a: "PIX ou cartão de crédito. Não trabalhamos com boleto." },
  { q: "Como falo com vocês?", a: "Pelo WhatsApp, pelo e-mail suporte@saudapp.com.br ou pelo telefone 0800 565 8666." },
];

export const NAV = [
  { href: "#solucao", label: "Por que SaudApp" },
  { href: "#servicos", label: "Serviços" },
  { href: "#planos", label: "Planos" },
  { href: "#prazos", label: "Prazos" },
  { href: "#faq", label: "Dúvidas" },
];
