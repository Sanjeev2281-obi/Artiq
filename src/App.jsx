import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Main'
import WorkshopBooking from './pages/WorkshopBooking'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Workshop" element={<WorkshopBooking />}/>
      </Routes>
     
    </BrowserRouter>
  )
}

export default App