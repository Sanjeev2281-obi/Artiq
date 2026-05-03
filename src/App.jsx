// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Nav from './component/Nav'
// import Home from './pages/Main'
// import WorkshopBooking from './pages/WorkshopBooking'
// import Workspace from './pages/Workspace'
// import Events from './pages/Events'
// import Products from './pages/Products'
// import ScrollToTop from './component/ScrollToTop'
// import PrivacyPolicy from './pages/PrivacyPolicy'
// import TermsOfService from './pages/TermsOfUse'
// import { useContentProtection } from './hooks/useContentProtection'
// function App() {
//    useContentProtection();
//   return (
//     <BrowserRouter>
//       <Nav />
//       <ScrollToTop />
//       <Routes>
//         <Route path="/" element={<Home />}/>
//         <Route path="/Workshop" element={<WorkshopBooking />}/>
//         <Route path="/Workspace" element={<Workspace />}/>
//         <Route path="/Events" element={<Events />}/>
//         <Route path="/products" element={<Products />}/>
//         <Route path="/privacy-policy" element={<PrivacyPolicy />}/>
//         <Route path="/terms-of-service" element={<TermsOfService />}/>
//       </Routes>
     
//     </BrowserRouter>
//   )
// }

// export default App
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './component/Nav'
import Home from './pages/Main'
import WorkshopBooking from './pages/WorkshopBooking'
import Workspace from './pages/Workspace'
import Events from './pages/Events'
import Products from './pages/Products'
import ScrollToTop from './component/ScrollToTop'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfUse'
import { useContentProtection } from './hooks/useContentProtection'

// ── NEW LUXURY COMPONENTS ──
import CustomCursor from './component/CustomCursor'
import PageLoader from './component/PageLoader'
import PageTransition from './component/PageTransition'

function App() {
  useContentProtection();

  return (
    <BrowserRouter>
      {/* Cursor — rendered once globally, works on all pages */}
      <CustomCursor />

      {/* Loader — shows only on first visit this session */}
      <PageLoader />

      <Nav />
      <ScrollToTop />

      {/* PageTransition wraps Routes so every route change animates */}
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Workshop" element={<WorkshopBooking />} />
          <Route path="/Workspace" element={<Workspace />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/products" element={<Products />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </PageTransition>
    </BrowserRouter>
  )
}

export default App