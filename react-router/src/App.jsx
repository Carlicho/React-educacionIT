// App.js
import './App.css'
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Cabecera from './components/Cabecera'
import { useState } from 'react'
import Busqueda from './components/Busqueda'

// Componentes de página
import Listas from './components/Listas'
import TopRanked from './components/TopRanked'
import Biblioteca from './components/Biblioteca'

function App() {
  const [busqueda, setBusqueda] = useState('')

  return (

      <>
        <Cabecera titulo="Music Streaming" />
        <Busqueda />
        <nav>
          <ul className='nav bg-dark'>
            <li className='nav-item'><Link className='nav-link' to="/biblioteca">Biblioteca</Link></li>
            <li className='nav-item'><Link className='nav-link' to="/listas">Listas</Link></li>
            <li className='nav-item'><Link className='nav-link' to="/topranked">TopRanked</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path='biblioteca'  element={<Biblioteca/>}/>
          <Route path='Listas'  element={<Listas/>}/>
          <Route path='TopRanked'  element={<TopRanked/>}/>
        </Routes>

      </>

  )
}

export default App
