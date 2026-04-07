import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background-base)",
        "surface-1": "var(--color-background-surface-1)",
        "surface-2": "var(--color-background-surface-2)",
        "surface-3": "var(--color-background-surface-3)",
        "surface-4": "var(--color-background-surface-4)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-tertiary": "var(--color-text-tertiary)",
        "brand-purple-500": "var(--color-brand-purple-500)",
        "brand-purple-700": "var(--color-brand-purple-700)",
        "border-default": "var(--color-border-default)",
        "semantic-success": "var(--color-semantic-success)",
        "semantic-warning": "var(--color-semantic-warning)",
        "semantic-error": "var(--color-semantic-error)",
        "semantic-info": "var(--color-semantic-info)",
        amber: "#D4691E",
      },
      fontFamily: {
        heading: "var(--font-family-heading)",
        body: "var(--font-family-body)",
        mono: "var(--font-family-mono)",
      },
      boxShadow: {
        tokenSm: "var(--shadow-sm)",
        tokenMd: "var(--shadow-md)",
        tokenLg: "var(--shadow-lg)",
      },
      borderRadius: {
        tokenSm: "var(--radius-sm)",
        tokenMd: "var(--radius-md)",
        tokenLg: "var(--radius-lg)",
        tokenXl: "var(--radius-xl)",
      },
    },
  },
  plugins: [],
};

export default config;
