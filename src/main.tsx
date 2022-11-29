import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import PokemonNavbar from './components/PokemonNavbar'
import App from './pages/App'
import { Helmet } from 'react-helmet'
import Logo from './assets/pokeball.svg'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Helmet link={[{'rel': 'icon', 'type': 'image/svg+xml', 'href': Logo}]} />
            <PokemonNavbar />
            <App />
        </BrowserRouter>
  </React.StrictMode>
)
