/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {},
      colors: {
        "bg-grey": "#151515",
        "footer-light": "#D6D6D6",
        "footer-dark": "#1D1D1D",
      },
      borderRadius: {
        button: "4px",
      },
    },
  },
  plugins: [],
};
