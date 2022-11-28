import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './home'
import { ReactElement } from 'react'
import Pokemon from './pokemon'

function App(): ReactElement {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pokemon/:id' element={<Pokemon />} />
        </Routes>
    )
}

export default App
