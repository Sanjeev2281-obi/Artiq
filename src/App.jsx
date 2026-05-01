import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './component/Nav'
import Home from './pages/Main'
import WorkshopBooking from './pages/WorkshopBooking'
import Workspace from './pages/Workspace'
import Events from './pages/Events'
import Products from './pages/Products'
import ScrollToTop from './component/ScrollToTop'
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Workshop" element={<WorkshopBooking />}/>
        <Route path="/Workspace" element={<Workspace />}/>
        <Route path="/Events" element={<Events />}/>
        <Route path="/products" element={<Products />}/>
      </Routes>
     
    </BrowserRouter>
  )
}

export default App