import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { loadableReady } from '@loadable/component'
import './styles/index.css'

import App from './App'

if(module.hot) module.hot.accept()

try {
  const isDark = localStorage.getItem('dark') === 'true'
  if(isDark) {
    document.documentElement.classList.add('theme-dark')
  }
} catch {}

const render = (Component: React.FC<Record<string, unknown>>, type: 'render' | 'hydrate' = 'render') => {
  ReactDOM[type](
    <AppContainer key={Math.random()}>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

if(process.env.NODE_ENV === 'production')
  loadableReady(() => {
    render(App, 'hydrate')
  })
else render(App)

// Webpack Hot Module Replacement API
if(module.hot)
  module.hot.accept('./App', () => {
    render(require('./App').default)
  })
