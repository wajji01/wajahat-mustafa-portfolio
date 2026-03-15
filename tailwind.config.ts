import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lime:     "#CAFF33",
        ink:      "#0A0A0A",
        "ink-2":  "#111111",
        "ink-3":  "#1A1A1A",
        "ink-4":  "#242424",
        muted:    "#555555",
        ghost:    "#888888",
        offwhite: "#F0EDE6",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;