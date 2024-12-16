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
      boxShadow: {
        'special': ' 0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        'main-background': "#e9f2ff", //bg from md and above
        'dark-background': "#3e3e3e", //dark mode
        'primary': "#7da6e3", //text
        'primary-light': "#7da6e3c1", //text
        'main-box': "#fff", //BoxContainer
        'dark-box': "#3e3e3e", //BoxContainer
        //e5b030 658ecc 545456 e9f2ff
        //  dark:bg-[#050863]
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
