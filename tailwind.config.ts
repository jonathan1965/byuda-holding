import { Poppins } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-maven_pro)"],
        roboto: ["var(--font-roboto)"],
        poppins: ["var(--font-poppins)"],
        inter: ["var(--font-inter)"],
      },
      colors: {
        "dark-red": {
          "200": "#FFF3F5",
          "500": "#ff3146",
          "600": "#f01229",
          "700": "#cb0a1e",
          "800": "#a70d1d",
          DEFAULT: "#911320",
          "950": "#4c030b",
        },
      },
      objectPosition: {
        "left": "12% 1000%"
      }
    },
  },
  plugins: [],
};
export default config;
