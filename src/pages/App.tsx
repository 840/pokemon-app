import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './home'
import { ReactElement } from 'react'
import Pokemon from './pokemon'
import Quiz from './quiz'

function App(): ReactElement {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pokemon/:name' element={<Pokemon />} />
            <Route path='/quiz' element={<Quiz />} />
        </Routes>
    )
}

export default App
