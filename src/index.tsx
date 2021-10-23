import 'inter-ui'
import React, { StrictMode } from 'react'

import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'

import './i18n'
import App from './pages/App'

function Updaters() {
  return (
      <>

      </>
    )
}

ReactDOM.render(
  <StrictMode>
      <Updaters />
        <HashRouter>
          <App />
      </HashRouter>
  </StrictMode>,
  document.getElementById('root')
)