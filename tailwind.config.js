/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    
    extend: {},
    container: {
        screens: {
          sm: '540px',
          md: '720px',
          lg: '960px',
          xl: '1140px',
          '2xl': '1320px',
        }
    },
    colors: {
      'textCol': '#1d2019'
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

