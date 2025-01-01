import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: 'rgba(247, 247, 247, 1)',
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlack: "F7F7F7"
      },
    },
  },
  plugins: [],
};
export default config;
