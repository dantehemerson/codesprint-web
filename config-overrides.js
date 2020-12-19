const { override, addWebpackAlias, addPostcssPlugins } = require('customize-cra')
const tailwindcss = require('tailwindcss')
const { join } = require('path')

const taiwinConfig = join(__dirname, './tailwind.config.js')

module.exports = override(
  addWebpackAlias({ 'react-dom': '@hot-loader/react-dom' }),
  addPostcssPlugins([
    tailwindcss(taiwinConfig)
  ])
)
