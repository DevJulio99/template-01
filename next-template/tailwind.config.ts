import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        green_10: "#50e590",
        blue_5: "#1cd8c9",
        blue_10: "#0796c6",
        black_10: "#25252c",
        gray_10: "#838386",
        gray_15: "#c2c2c3",
        white_10: "#ededed",
        gray_5: "#f2f3f9",
        transparent_black: "rgba(0, 0, 0, 0.4)",
        linear: "linear-gradient(60deg, #50e590, #0796c6)"
      }
    },
  },
  plugins: [],
};
export default config;
