import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: ["class"],
  theme: {
    container: { center: true, padding: "1rem", screens: { "2xl": "1280px" } },
    extend: {
      fontFamily: { cairo: ["var(--font-cairo)"] },
      colors: {
        brand: { 50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a" },
        maroon:{ 50:"#f8ecee",100:"#eed2d7",200:"#dfacb5",300:"#cf8693",400:"#bf6071",500:"#a83a4f",600:"#8d2f41",700:"#732633",800:"#591d27",900:"#3f141a" }
      },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.06)" },
      borderRadius: { xl: "1rem", "2xl": "1.25rem" }
    },
  },
  plugins: [],
};
export default config;
