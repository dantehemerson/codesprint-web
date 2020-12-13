const { override, addWebpackAlias, addPostcssPlugins } = require('customize-cra')

module.exports = override(
  addWebpackAlias({ 'react-dom': '@hot-loader/react-dom' }),
  addPostcssPlugins([ require('tailwindcss') ])
)
