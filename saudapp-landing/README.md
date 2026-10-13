# SaudApp · Landing page

React 18 + Vite + Tailwind CSS + Framer Motion + Lucide React. Todo o conteúdo está em português do Brasil.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/ pronto para deploy (Vercel, Netlify, Cloudflare Pages…)
```

## Antes de publicar

Edite `src/lib/config.js`:

- `WA_NUMBER`: número do WhatsApp (só dígitos, com 55).
- `CHECKOUT`: links de checkout do Asaas por plano. Se vazio, o botão "Assinar" abre o WhatsApp com a mensagem do plano, das vidas e do valor.
- `PLANOS`: preço do titular e de cada dependente.

Textos de serviços, prazos, passos e FAQ ficam em `src/lib/content.js`.

## Estrutura

| Arquivo | Seção |
| --- | --- |
| `components/Navbar.jsx` | Navbar fixa com blur, indicador de hover e barra de progresso do scroll |
| `components/Hero.jsx` | Contador animado, mockup do app com tilt 3D e cartões flutuantes |
| `components/PainSolution.jsx` | Sequência com scroll sticky: custo da saúde → solução SaudApp |
| `components/Services.jsx` | Grade de serviços com spotlight que segue o mouse |
| `components/Pricing.jsx` | Seletor de vidas, alternância mensal/anual e preços animados |
| `components/HowItWorks.jsx` | Três passos com linha desenhada pelo scroll |
| `components/Deadlines.jsx` | Tabela de prazos com barras de tempo |
| `components/Faq.jsx` | Acordeão acessível |
| `components/Support.jsx` | Bloco de atendimento |
| `components/StickyBar.jsx` | Barra de conversão fixa no mobile |

## Design system

- Tokens de cor em `src/index.css` (variáveis RGB), com modo escuro automático via `prefers-color-scheme`.
- Movimento em `src/lib/motion.js`: mola padrão `stiffness: 100, damping: 20`.
- `MotionConfig reducedMotion="user"` respeita a preferência de movimento reduzido do sistema.
- Logo: wordmark provisório em `components/ui.jsx` (`Logo`); troque pelo arquivo oficial quando quiser.
