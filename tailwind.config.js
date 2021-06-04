module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      blue: {
        dark: "#161F6D",
        DEFAULT: "#00ABE1"
      }
    },
    textColor: {
      'primary': "#fcfcfc"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
