/* eslint-disable no-restricted-syntax */
const { join } = require('path')

console.log('Processing el taiwins for', process.env.NODE_ENV)

const contentFiles = join(__dirname, './src/**/*.tsx')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      contentFiles
    ]
  },
  darkMode: 'media', // or 'media' or 'class'
  theme   : {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
