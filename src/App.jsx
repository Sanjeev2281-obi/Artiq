
// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Nav from './component/Nav'
// import Home from './pages/Main'
// import WorkshopBooking from './pages/WorkshopBooking'
// import Workspace from './pages/Workspace'
// import { useState } from 'react'

// import Products from './pages/Products'
// import ScrollToTop from './component/ScrollToTop'
// import PrivacyPolicy from './pages/PrivacyPolicy'
// import TermsOfService from './pages/TermsOfUse'
// import { useContentProtection } from './hooks/useContentProtection'

// // ── NEW LUXURY COMPONENTS ──
// import CustomCursor from './component/CustomCursor'
// import PageLoader from './component/PageLoader'
// import PageTransition from './component/PageTransition'
// import AnimatedIntro from './component/Prototype';
// function App() {
//   useContentProtection();
// const [showSignature, setShowSignature] = useState(true);
//   return (
//     <BrowserRouter>
//       {/* Cursor — rendered once globally, works on all pages */}
//       <CustomCursor />
//         <AnimatedIntro setShowSignature={setShowSignature} />
//       {/* Loader — shows only on first visit this session */}
//       <PageLoader />

//       <Nav />
//       <ScrollToTop />

//        {!showSignature && (
//         <>
//           <PageLoader />
//           <Nav />
//           <ScrollToTop />

//           <PageTransition>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/Workshop" element={<WorkshopBooking />} />
//               <Route path="/Workspace" element={<Workspace />} />
//               <Route path="/products" element={<Products />} />
//               <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//               <Route path="/terms-of-service" element={<TermsOfService />} />
//             </Routes>
//           </PageTransition>
//         </>
//       )}
//     </BrowserRouter>
//   )
// }

// export default App
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './component/Nav';
import Home from './pages/Main';
import WorkshopBooking from './pages/WorkshopBooking';
import Workspace from './pages/Workspace';
import Products from './pages/Products';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfUse';

import ScrollToTop from './component/ScrollToTop';
import CustomCursor from './component/CustomCursor';
import PageLoader from './component/PageLoader';
import PageTransition from './component/PageTransition';
import AnimatedIntro from './component/AnimatedIntro'; // ✅ correct file

import { useContentProtection } from './hooks/useContentProtection';

function App() {
  useContentProtection();

  const [showSignature, setShowSignature] = useState(true);

  return (
    <BrowserRouter>
      {/* Global UI */}
      <CustomCursor />

      {/* Intro (always on top first) */}
      <AnimatedIntro setShowSignature={setShowSignature} />

      {/* Show rest ONLY after intro */}
      {!showSignature && (
        <>
          <PageLoader />
          <Nav />
          <ScrollToTop />

          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Workshop" element={<WorkshopBooking />} />
              <Route path="/Workspace" element={<Workspace />} />
              <Route path="/products" element={<Products />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
            </Routes>
          </PageTransition>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;