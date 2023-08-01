/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {},
      colors: {
        "bg-grey": "#151515",
        coloryellow: "#faeb6a",
        colorblue: "#6afae0",
        colororange: "#f96e42",
        colorviolet: "#6a70fa",
        colororg2: "#ff9a24",
        colorred: "#ff7171",
      },
      borderRadius: {
        button: "4px",
      },
    },
  },
  plugins: [],
};
