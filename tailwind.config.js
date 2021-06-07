module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      blue: {
        dark: "#161F6D",
        DEFAULT: "#00ABE1"
      },
      gray: {
        DEFAULT: "#F5F6F8"
      }
    },
    textColor: {
      'primary': "#fcfcfc",
      "blue": "#00ABE1"
    },
    borderRadius: {
      'none': '0',
     'sm': '0.125rem',
     DEFAULT: '0.25rem',
     
     'md': '0.375rem',
     'lg': '0.5rem',
     'full': '9999px',
     'large': '25px',
    }
  },
  variants: {
    extend: {},
  },
  
  plugins: [],
}
