import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './component/Nav'
import Home from './pages/Main'
import WorkshopBooking from './pages/WorkshopBooking'
import Workspace from './pages/Workspace'
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Workshop" element={<WorkshopBooking />}/>
        <Route path="/Workspace" element={<Workspace />}/>
      </Routes>
     
    </BrowserRouter>
  )
}

export default App