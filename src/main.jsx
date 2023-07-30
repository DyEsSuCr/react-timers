import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'

import { TimerProvider } from './context/timerContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TimerProvider>
      <App />
    </TimerProvider>
  </React.StrictMode>
)
