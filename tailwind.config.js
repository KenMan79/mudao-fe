const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      green:{
        100:'#EF785C'
      },
      blue:{
         100:'#A657E7',
         200:'rgb(31,38,44)',
         300:"#2ABDD2",
         400:'#6A1C9A'
      },
      black: colors.black,
      white: colors.white,
      gray: {
        100:'#CCCCCC',
        200:"#62666A",
        300:'#151515',
        400:"#222323",
        500:"#4E4F45",
        600: "#F2F2F2",
        700:'#CA68A3',
        800:"#988C90",
        900:"#F0F0F0"
      },
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
     extend: {
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'poppins': ['Poppins'],
        'eczar': ['Eczar'],
        'robotoMono': ['Mono'],
       },
       fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
         'base': '1rem',
         'lg': '1.125rem',
         'xl': '1.25rem',
         '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
         '5xl': '3rem',
         '6xl': '4rem',
        '7xl': '5rem',
       },
       backgroundImage: theme => ({
        'mountains': "url('/src/assets/bg.svg')",
       }),
       backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
       '100': '100%',
       '16': '4rem',
      }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }
