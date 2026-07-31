import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import InicioPage from './Pages/InicioPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<InicioPage />}/>
    </Routes>
  )
}

export default App
