import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './home'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    )
}

export default App
