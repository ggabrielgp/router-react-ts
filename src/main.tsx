import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* StrictMode sacarlo, porque hay veces que lo que hace es:
      levantar un componente,
      lo vuelve a levantar y trata de usar el estado anterior.
      buena practica es dejarlo, porque en prod no sucede */}
    <App />
  </React.StrictMode>,
)
