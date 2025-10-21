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
        "abu-abu": "var(--abu-abu)",
        "baby-blue": "var(--baby-blue)",
        black: "var(--black)",
        colorsbrown: "var(--colorsbrown)",
        "grey-100": "var(--grey-100)",
        "hijau-muda": "var(--hijau-muda)",
        "hijau-paling-muda": "var(--hijau-paling-muda)",
        "hijau-tua": "var(--hijau-tua)",
        "main-background": "var(--main-background)",
        putih: "var(--putih)",
        white: "var(--white)",
      },
      fontFamily: {
        "poppins-bold-24": "var(--poppins-bold-24-font-family)",
        "poppins-medium-14": "var(--poppins-medium-14-font-family)",
        "poppins-reguler-12": "var(--poppins-reguler-12-font-family)",
        "poppins-semibold-14": "var(--poppins-semibold-14-font-family)",
        "poppins-semibold-16": "var(--poppins-semibold-16-font-family)",
      },
    },
  },
  plugins: [],
};
export default config;