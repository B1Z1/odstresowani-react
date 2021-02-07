module.exports = {
  prefix: "ob-",
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './shared/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: '#272727',
        primary: '#0052C3',
        secondary: '#B9B9B9',
        'gray-100': '#B9B9B9',
        'gray-200': '#DFE0DE'
      },
      fontFamily: {
        sans: ['Value', 'sans-serif'],
        serif: ['Sanchez', 'serif']
      }
    },
    fill: {
      primary: '#0052C3',
      secondary: '#B9B9B9'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
