/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {},
      colors: {
        "bg-grey": "#151515",
      },
      borderRadius: {
        button: "4px",
      },
    },
  },
  plugins: [],
};
