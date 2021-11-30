module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#AA2B1D",
        secondary: {
          100: "#9A9483",
          200: "#AAA492",
        },
      },
      fontFamily: {
        body: ["Nunito"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};