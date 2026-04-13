import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark:   "#36213E",
          purple: "#554971",
          slate:  "#63768D",
          cyan:   "#8AC6D0",
          light:  "#B8F3FF",
        },
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body:    ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
