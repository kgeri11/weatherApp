import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource/cinzel'
import '@fontsource/antonio'
import './i18n'
import './theme.scss'
import App from './App'

const rootDiv = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(rootDiv).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
