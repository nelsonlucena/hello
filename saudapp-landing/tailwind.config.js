/** @type {import('tailwindcss').Config} */
const tok = (v) => `rgb(var(--${v}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: tok("bg"),
        surface: tok("surface"),
        "surface-2": tok("surface-2"),
        ink: tok("ink"),
        muted: tok("muted"),
        line: tok("line"),
        brand: tok("brand"),
        "brand-soft": tok("brand-soft"),
        cta: tok("cta"),
        "cta-ink": tok("cta-ink"),
        good: tok("good"),
        "good-ink": tok("good-ink"),
        warn: tok("warn"),
        "warn-ink": tok("warn-ink"),
        bad: tok("bad"),
        "bad-ink": tok("bad-ink"),
      },
      fontFamily: {
        display: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["'DM Sans'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: { display: "-0.035em" },
      boxShadow: {
        glow: "0 0 0 1px rgb(var(--brand) / 0.12), 0 20px 60px -20px rgb(var(--brand) / 0.35)",
        soft: "0 1px 2px rgb(0 0 0 / 0.04), 0 12px 32px -12px rgb(0 0 0 / 0.12)",
      },
    },
  },
  plugins: [],
};
