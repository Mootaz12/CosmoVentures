/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#CFE4EF",
        orange: "#FBAD72",
        bgClr: "#222222",
        grey: "#D9D9D9",
        green: "#00FF7F",
        darkBlue: "#001B3A",
      },
      fontFamily: { poppins: ["Poppins"], Orbitron: ["Orbitron"] },
    },
  },
  plugins: [],
};
