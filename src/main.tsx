import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import PokemonNavbar from './components/PokemonNavbar'
import App from './pages/index'
import './root.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <PokemonNavbar />
            <App />
        </BrowserRouter>
  </React.StrictMode>
)