import { renderToString } from 'react-dom/server'
const path = require('path')
const postcss = require(path.join(process.cwd() , '../postcss'))
const postcssTailwindcss = require(path.join(process.cwd() , '../tailwindcss'))
const postcssPresetEnv = require(path.join(process.cwd() , '../postcss-preset-env'))

export const setRenderUniversal = async (locals, app) => {
  const { htmlData } = locals

  const postcssPluginConfig = postcss([
    postcssTailwindcss(),
    postcssPresetEnv()
  ])

  const processCss = async (style: any) => {
    const processedStyles = await postcssPluginConfig.process(style)
    console.log('🤫 Dante ➤ processCss ➤ processedStyles', processedStyles)

    return processedStyles.css
  }
  const tywin = await processCss('')

  const renderString = renderToString(app)

  console.log('🤫 Dante ➤ processCss ➤ processCss', processCss)

  const tywinStylesheets = `<style id="jss-server-side">${tywin}</style>`

  return {
    prevHtml: htmlData.replace('<head>', `<head>${tywinStylesheets}`),
    renderString
  }
}
