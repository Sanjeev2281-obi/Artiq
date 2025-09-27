import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './component/Nav'
import Home from './pages/Main'
import About from './component/About'


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
       
        <Route path="/activities" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App