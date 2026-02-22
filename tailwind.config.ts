import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // 🔥 WAJIB untuk toggle
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;