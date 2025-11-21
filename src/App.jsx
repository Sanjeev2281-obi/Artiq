import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './component/Nav'
import Home from './pages/Main'
import About from './component/About'
import WorkshopBooking from './pages/WorkShopBooking'

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