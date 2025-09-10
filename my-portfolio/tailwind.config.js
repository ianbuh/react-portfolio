/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#232b33",
        "secondary-dark": "#2a343d",
        "accent-teal": "#00c8d7",
      },
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"], // Example font, you can change it
      },
    },
  },
  plugins: [],
};
