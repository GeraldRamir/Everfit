import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        everfit: {
          wine: "#6B1515",
          "wine-dark": "#4A0E0E",
          orange: "#E63946",
          cream: "#F5EFE6",
          "cream-dark": "#EDE4D8",
          charcoal: "#1A1A1A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, rgba(26,26,26,0.85) 0%, rgba(107,21,21,0.75) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
