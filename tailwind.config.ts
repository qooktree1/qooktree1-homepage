import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      main: {
        default: "#F0E7DB",
        100: "#F4EDE4",
        black: "rgb(32, 32, 35)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
