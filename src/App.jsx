import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import InicioPage from './Pages/InicioPage'
import CatalogoPage from './Pages/CatalogoPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<InicioPage />}/>
      <Route path="/catalogo" element={<CatalogoPage />}/>
    </Routes>
  )
}

export default App
