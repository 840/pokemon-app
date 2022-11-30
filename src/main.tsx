import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import PokemonNavbar from './components/PokemonNavbar'
import App from './pages/App'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Logo from './assets/pokeball.svg'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <HelmetProvider>
            <BrowserRouter basename={import.meta.env.BASE_URL}>
                <Helmet link={[{ 'rel': 'icon', 'type': 'image/svg+xml', 'href': Logo }]} />
                <PokemonNavbar />
                <App />
            </BrowserRouter>
        </HelmetProvider>
    </React.StrictMode>
)
