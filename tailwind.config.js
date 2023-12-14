/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/views/**/*.blade.php',
    './resources/js/component/**/*.{js,jsx}',
    './resources/js/app/**/*.{js,jsx}',
    './resources/css/**/*.css',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      fontSize: {
        14: '14px',
        12:'12px  '
      },
      zIndex:{
        '11':'11'
      },
      backgroundColor: {
        'main-bg': '#E7E7E7',
        'main-dark-bg': '#080B10',
        'secondary-dark-bg': '#1A1D24',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      width: {
        278:'278px',
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',

      },
      minHeight: {
        590: '590px',
      },

    }

  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ]
}
