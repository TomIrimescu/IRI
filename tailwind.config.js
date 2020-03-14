const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        indigo: {
          lighter: '#b3bcf5',
          default: '#5c6ac4',
          dark: '#202e78',
        },
        blue: {
          lighter: '#3f51b5',
          default: '#303f9f',
          dark: '#1a237e',
        },
        red: {
          lighter: '#ec4079',
          default: '#e91e62',
          dark: '#62155e',
        }
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui')({
      layout: 'sidebar'
    })
  ]
}
