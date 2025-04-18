import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "news-box-break-point": '1170px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'special': ' 0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        'main-background': "#e9f2ff", //bg from md and above
        'dark-background': "#111827", //dark mode
        'primary': "#7da6e3", //text for light mode
        'primary-light': "#7da6e3c1", //text lighter 
        'primary-dark': "#E5E7EB", //text for dark mode
        'main-box': "#fff", //BoxContainer
        'dark-box': "#111827", //BoxContainer
        'dark': "ffffff4d", // border
        // ---not used--- 'light-text': "#1A365D"
      },
      height: {
        'main-layout': "calc(100vh - 160px)",
        'main-layout-bigger-screens': "calc(100vh - 96px)",
      }
    },
  },
  plugins: [],
};
export default config;
