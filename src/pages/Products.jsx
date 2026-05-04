// import React, { useState } from 'react';
// import { ChevronDown, ShoppingBag, User, Search, Menu, Grid, List, X } from 'lucide-react';
// import Footer from '../component/Footer';
// import mount1 from '../assets/Mount1.png';
// import mount2 from '../assets/Mount2.png';
// import leaf1 from '../assets/leaf1.png';
// import leaf2 from '../assets/leaf2.png';
// import leaf3 from '../assets/leaf3.png';
// import leaf4 from '../assets/leaf4.png';
// import leaf5 from '../assets/leaf5.png';
// import potterystrinks from '../assets/potterystrinks.png';
// import potterywhole from '../assets/potterywhole.png';
// import potterychair from '../assets/potterychair.png';
// import potteryfly from '../assets/potteryfly.png';
// import panel1 from '../assets/panel1.png';
// import panel2 from '../assets/panel2.png';
// import panel3 from '../assets/panel3.png';
// import peek1 from '../assets/peek1.png';
// import peek2 from '../assets/peek2.png';
// import peek3 from '../assets/peek3.png';
// import popup from '../assets/popup.png';
// import { NavLink } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { Phone, MapPin } from 'lucide-react';
// // --- Updated Product Data with Images Array ---
// const products = [
//   {
//     id: 1,
//     name: 'Ethereal Cascade',
//     // Now an array of multiple views for the gallery
//     images: [
//       mount2, // Main View
//       mount1, // Angled View
//         // Detail View
//     ],
//     description: 'The Ethereal Flow wall light is a masterpiece of organic design. Its fluid, wave-like form is finished in a deep black texture that contrasts beautifully with the soft, warm glow of its internal LED system.',
//     details: 'Dimensions: 45cm x 50cm. Integrated 2700K warm-white LED strips. Hardwired installation.',
//     materials: 'Hand-sculpted composite shell, matte carbon-black finish. Light-diffusing acrylic interior.',
//     commitment: 'Handcrafted to order. 2-year warranty on electronic components.'
//   },
//   {
//     id: 2,
//     name: 'Terra Sculpta Forms',
//     images: [
//       potterychair, // Leaf Main View
//          // Leaf Alt 2
//     ],
//     description: 'Part of our 2026 Spring Collection, Botanical Radiance draws inspiration from the delicate veins of tropical flora.',
//     details: 'Dimensions: 60cm x 30cm. Adjustable brightness controller included.',
//     materials: 'Sustainable eco-polymer resin, silk-white architectural finish.',
//     commitment: 'Proceeds support reforestation projects. 100% recyclable packaging.'
//   },
//   {
//     id: 3,
//     name: 'ALuminous Petal Relief',
//     images: [
//         leaf1,
//         leaf2,
//         leaf3,
//         leaf4,
//       leaf5, // geode main placeholder
//        // geode alt placeholder
//     ],
//     description: 'Abstract Horizon explores the intersection of raw geology and modern luxury. The rugged shell splits to reveal a luminous core.',
//     details: 'Weight: 4.5kg. Compatible with most smart home dimming systems.',
//     materials: 'High-density mineral composite, volcanic sand texturing.',
//     commitment: 'Hand-finished in our carbon-neutral studio. VOC-free coatings.'
//   },
//   {
//     id: 4,
//     name: 'Ivory Silhouette ',
//     images: [
//       potterystrinks, // geode main placeholder
//        // geode alt placeholder
//     ],
//     description: 'Abstract Horizon explores the intersection of raw geology and modern luxury. The rugged shell splits to reveal a luminous core.',
//     details: 'Weight: 4.5kg. Compatible with most smart home dimming systems.',
//     materials: 'High-density mineral composite, volcanic sand texturing.',
//     commitment: 'Hand-finished in our carbon-neutral studio. VOC-free coatings.'
//   },
//   {
//     id: 5,
//     name: 'Monochrome Harmony',
//     images: [
//       potterywhole, // geode main placeholder
//        // geode alt placeholder
//     ],
//     description: 'Abstract Horizon explores the intersection of raw geology and modern luxury. The rugged shell splits to reveal a luminous core.',
//     details: 'Weight: 4.5kg. Compatible with most smart home dimming systems.',
//     materials: 'High-density mineral composite, volcanic sand texturing.',
//     commitment: 'Hand-finished in our carbon-neutral studio. VOC-free coatings.'
//   },
//   {
//     id: 6,
//     name: 'Velour Drift',
//     images: [
//       panel1, // geode main placeholder
//       panel2 // geode alt placeholder // geode alt placeholder
//     ],
//     description: 'Abstract Horizon explores the intersection of raw geology and modern luxury. The rugged shell splits to reveal a luminous core.',
//     details: 'Weight: 4.5kg. Compatible with most smart home dimming systems.',
//     materials: 'High-density mineral composite, volcanic sand texturing.',
//     commitment: 'Hand-finished in our carbon-neutral studio. VOC-free coatings.'
//   },
//   {
//     id: 7,
//     name: 'Obsidian Drape',
//     images: [
//       peek1, // geode main placeholder
//       peek2, // geode alt placeholder
//       peek3  // geode alt placeholder
//     ],
//     description: 'Abstract Horizon explores the intersection of raw geology and modern luxury. The rugged shell splits to reveal a luminous core.',
//     details: 'Weight: 4.5kg. Compatible with most smart home dimming systems.',
//     materials: 'High-density mineral composite, volcanic sand texturing.',
//     commitment: 'Hand-finished in our carbon-neutral studio. VOC-free coatings.'
//   }
// ];

// export default function Products() {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   // State to track which gallery image is currently selected
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Function to select product and reset image gallery index
//   const selectProduct = (product) => {
//     setSelectedProduct(product);
//     setCurrentImageIndex(0); // always start on the first image
//   }
//   const navi=useNavigate();

//   // --- Product Detail View with Image Gallery ---
//   if (selectedProduct) {
//     return (
//       <div className="min-h-screen bg-white font-sans text-gray-900 mt-17">
//         <header className="flex justify-between items-center px-8 py-6 border-b border-gray-100">
          
          
//           <h1 className="sm:tracking-[0.1rem] text-3xl font-[outfit] md:tracking-[0.2rem] uppercase cursor-pointer" onClick={() => setSelectedProduct(null)}>
//             Product Details
//           </h1>
//           <button 
//             onClick={() => setSelectedProduct(null)} 
//             className="flex items-center gap-2 text-sm uppercase tracking-widest font-medium hover:text-gray-500 transition-colors"
//           >
//             <X size={35} strokeWidth={1.5} />
//           </button>
         
//         </header>

//         <main className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
//           {/* Left Side: Product Image GALLERY */}
//           <div className="w-full flex flex-col gap-6">
//             {/* Main Image Display */}
//             <div  className="w-full max-w-[480px] mx-auto md:mx-0 relative aspect-[3/4] overflow-hidden bg-gray-50">
//                 <img 
//                 src={selectedProduct.images[currentImageIndex]} 
//                 alt={`${selectedProduct.name} main view`} 
//                 className="w-full h-full object-cover shadow-sm transition-opacity duration-300"
//                 />
//             </div>

//             {/* Thumbnail Row - exactly as refernce image */}
//             <div className="flex gap-4 overflow-x-auto">
//                 {selectedProduct.images.map((image, index) => (
//                     <button 
//                         key={index}
//                         onClick={() => setCurrentImageIndex(index)}
//                         // Conditional border based on selection, like reference image
//                         className={`w-20 aspect-square overflow-hidden border-2 transition-colors ${
//                             currentImageIndex === index 
//                             ? 'border-black' // Active border
//                             : 'border-transparent hover:border-gray-300' // Inactive border/hover
//                         }`}
//                     >
//                         <img 
//                             src={image} 
//                             alt={`${selectedProduct.name} thumbnail ${index + 1}`} 
//                             className="w-full h-full object-cover"
//                         />
//                     </button>
//                 ))}
//             </div>
//           </div>

//           {/* Right Side: Product Details */}
//           <div className="space-y-10">
//             <section>
//               <h2 className="text-xs font-bold uppercase tracking-widest mb-6">Product Description</h2>
//               <p className="text-sm leading-relaxed text-gray-700 max-w-md">
//                 {selectedProduct.description}
//               </p>
//             </section>

//             <div className="border-t border-gray-200">
//               <div className="py-6 border-b border-gray-200">
//                 <details className="group cursor-pointer">
//                   <summary className="list-none flex justify-between items-center text-sm font-medium uppercase tracking-wider">
//                     Product Details
//                     <ChevronDown size={16} className="text-gray-400 group-open:rotate-180 transition-transform" />
//                   </summary>
//                   <p className="mt-4 text-sm text-gray-600 leading-relaxed">
//                     {selectedProduct.details}
//                   </p>
//                 </details>
//               </div>

//               <div className="py-6 border-b border-gray-200">
//                 <details className="group cursor-pointer">
//                   <summary className="list-none flex justify-between items-center text-sm font-medium uppercase tracking-wider">
//                     Materials & Care
//                     <ChevronDown size={16} className="text-gray-400 group-open:rotate-180 transition-transform" />
//                   </summary>
//                   <p className="mt-4 text-sm text-gray-600 leading-relaxed">
//                     {selectedProduct.materials}
//                   </p>
//                 </details>
//               </div>

//               <div className="py-6 border-b border-gray-200">
//                 <details className="group cursor-pointer">
//                   <summary className="list-none flex justify-between items-center text-sm font-medium uppercase tracking-wider">
//                     Our Commitment
//                     <ChevronDown size={16} className="text-gray-400 group-open:rotate-180 transition-transform" />
//                   </summary>
//                   <p className="mt-4 text-sm text-gray-600 leading-relaxed">
//                     {selectedProduct.commitment}
//                   </p>
//                 </details>
//               </div>
//              <div className="space-y-4 pt-4 text-xs font-medium uppercase tracking-widest mt-5">

//   <a
//   href="tel:+916369692363"
//   className="flex items-center gap-2 border-b border-black w-fit pb-1 cursor-pointer"
// >
//   <Phone size={14} strokeWidth={1.5} className="shrink-0" />
//   <span>Order by Phone</span>
// </a>

//   <div className="flex items-center gap-2 cursor-pointer border-b border-black w-fit pb-1" onClick={()=>navi('/workspace')}>
//     <MapPin size={14} strokeWidth={1.5} className="shrink-0" />
//     <span>View WorkSpace</span>
//   </div>

// </div>
//             <div className="pt-8 text-[10px] uppercase leading-loose tracking-widest text-gray-600 border-t border-gray-100">
//               <p className="font-bold text-black mb-1">+ ARTIQ Services</p>
//               <p>Complimentary Shipping & Collect in Store, Complimentary Exchanges & Returns, Secure Payments and Signature Packaging</p>
//             </div>
//             </div>

//             <div className="pt-8 text-[10px] uppercase leading-loose tracking-widest text-gray-600 border-t border-gray-100">
//               <p className="font-bold text-black mb-1">+ ARTIQ Services</p>
//               <p>Complimentary Shipping, Exchanges, Secure Payments and Signature Packaging</p>
//             </div>
//           </div>
//         </main>
//         <div><Footer/></div>
//       </div>
      
//     );
//   }

//   // --- Shop Grid View ---
//   return (
//     <div className="bg-white min-h-screen mt-20">
//       <NavLink to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
//         <img src={popup} alt="Logo" className="fixed top-2 left-2 w-26 h-25 rounded-full z-50" draggable={false} />
//       </NavLink>
//       <div className="px-10 py-8 flex justify-between items-center border-b border-gray-100">
//         <h1 className="text-4xl font-light tracking-tight text-gray-800">Collections</h1>
    
//         <div className="text-xs uppercase tracking-widest text-gray-400"onClick={()=>navi('/')}>
//           Home <span className="mx-2 text-[10px]">▶</span> <span className="text-gray-900">Home page</span>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-8">
//         {/* <div className="border border-gray-200 p-4 mb-12 flex justify-between items-center">
//           <div className="relative">
//             <select className="appearance-none bg-transparent border border-gray-300 px-6 py-2 pr-10 text-xs uppercase tracking-widest outline-none">
//               <option>Sort By:</option>
//             </select>
//             <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
//           </div>
//           <div className="flex border border-gray-200">
//             <button className="p-2 bg-black text-white"><Grid size={18}/></button>
//             <button className="p-2 text-gray-400 border-l border-gray-200"><List size={18}/></button>
//           </div>
//         </div> */}

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
//           {products.map((product) => (
//             <div 
//               key={product.id} 
//               className="group cursor-pointer"
//               onClick={() => selectProduct(product)} // Functional logic here
//             >
//               <div className="relative w-full max-w-[290px] mx-auto overflow-hidden aspect-[3/4] bg-gray-50 shadow-sm">
//                 <img 
//                   // Display the first image in the array as the grid thumbnail
//                   src={product.images[0]} 
//                   alt={product.name}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//                 <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
//                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md "><Search size={14}/></div>
//                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md"><ShoppingBag size={14}/></div>
//                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">♡</div>
//                 </div>
//               </div>
//               <div className="mt-6 text-center ">
//                 <h3 className="text-lg font-medium tracking-wide text-gray-900">{product.name}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div><Footer/></div>
      
//     </div>
//   );
// }
import React, { useState } from 'react';
import { ChevronDown, ShoppingBag, User, Search, Menu, Grid, List, X } from 'lucide-react';
import Footer from '../component/Footer';
import mount1 from '../assets/Mount1.webp';
import mount2 from '../assets/Mount2.webp';
import leaf1 from '../assets/leaf1.webp';
import leaf2 from '../assets/leaf2.webp';
import leaf3 from '../assets/leaf3.webp';
import leaf4 from '../assets/leaf4.webp';
import leaf5 from '../assets/leaf5.webp';
import potterystrinks from '../assets/potterystrinks.webp';
import potterywhole from '../assets/potterywhole.webp';
import potterychair from '../assets/potterychair.webp';
import potteryfly from '../assets/potteryfly.webp';
import panel1 from '../assets/panel1.webp';
import panel2 from '../assets/panel2.webp';
import panel3 from '../assets/panel3.webp';
import peek1 from '../assets/peek1.webp';
import peek2 from '../assets/peek2.webp';
import peek3 from '../assets/peek3.webp';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
// ... keep all your image imports exactly as-is ...
// ... keep your products array exactly as-is ...
const products = [
  {
    id: 1,
    name: 'Ethereal Cascade',
    // Now an array of multiple views for the gallery
    images: [
      mount2, // Main View
      mount1, // Angled View
        // Detail View
    ],
    description: 'The Ethereal Flow wall light is a masterpiece of organic design. Its fluid, wave-like form is finished in a deep black texture that contrasts beautifully with the soft, warm glow of its internal LED system.',
    details: 'Dimensions: 45cm x 50cm. Integrated 2700K warm-white LED strips. Hardwired installation.',
    materials: 'Hand-sculpted composite shell, matte carbon-black finish. Light-diffusing acrylic interior.',
    commitment: 'Handcrafted to order. 2-year warranty on electronic components.'
  },
  {
    id: 2,
    name: 'Terra Sculpta Forms',
    images: [
      potterychair, // Leaf Main View
         // Leaf Alt 2
    ],
    description: 'Part of our 2026 Spring Collection, Botanical Radiance draws inspiration from the delicate veins of tropical flora.',
    details: 'Dimensions: 60cm x 30cm. Adjustable brightness controller included.',
    materials: 'Sustainable eco-polymer resin, silk-white architectural finish.',
    commitment: 'Proceeds support reforestation projects. 100% recyclable packaging.'
  },
  {
    id: 3,
    name: 'ALuminous Petal Relief',
    images: [
        leaf1,
        leaf2,
        leaf3,
        leaf4,
      leaf5, // geode main placeholder
       // geode alt placeholder
    ],
    description: 'Abstract Horizon explores the intersection of raw geology and modern luxury. The rugged shell splits to reveal a luminous core.',
    details: 'Weight: 4.5kg. Compatible with most smart home dimming systems.',
    materials: 'High-density mineral composite, volcanic sand texturing.',
    commitment: 'Hand-finished in our carbon-neutral studio. VOC-free coatings.'
  },
  {
    id: 4,
    name: 'Ivory Silhouette ',
    images: [
      potterystrinks, // geode main placeholder
       // geode alt placeholder
    ],
    description: 'Abstract Horizon explores the intersection of raw geology and modern luxury. The rugged shell splits to reveal a luminous core.',
    details: 'Weight: 4.5kg. Compatible with most smart home dimming systems.',
    materials: 'High-density mineral composite, volcanic sand texturing.',
    commitment: 'Hand-finished in our carbon-neutral studio. VOC-free coatings.'
  },
  {
    id: 5,
    name: 'Monochrome Harmony',
    images: [
      potterywhole, // geode main placeholder
       // geode alt placeholder
    ],
    description: 'Abstract Horizon explores the intersection of raw geology and modern luxury. The rugged shell splits to reveal a luminous core.',
    details: 'Weight: 4.5kg. Compatible with most smart home dimming systems.',
    materials: 'High-density mineral composite, volcanic sand texturing.',
    commitment: 'Hand-finished in our carbon-neutral studio. VOC-free coatings.'
  },
  {
    id: 6,
    name: 'Velour Drift',
    images: [
      panel1, // geode main placeholder
      panel2 // geode alt placeholder // geode alt placeholder
    ],
    description: 'Abstract Horizon explores the intersection of raw geology and modern luxury. The rugged shell splits to reveal a luminous core.',
    details: 'Weight: 4.5kg. Compatible with most smart home dimming systems.',
    materials: 'High-density mineral composite, volcanic sand texturing.',
    commitment: 'Hand-finished in our carbon-neutral studio. VOC-free coatings.'
  },
  {
    id: 7,
    name: 'Obsidian Drape',
    images: [
      peek1, // geode main placeholder
      peek2, // geode alt placeholder
      peek3  // geode alt placeholder
    ],
    description: 'Abstract Horizon explores the intersection of raw geology and modern luxury. The rugged shell splits to reveal a luminous core.',
    details: 'Weight: 4.5kg. Compatible with most smart home dimming systems.',
    materials: 'High-density mineral composite, volcanic sand texturing.',
    commitment: 'Hand-finished in our carbon-neutral studio. VOC-free coatings.'
  }
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const selectProduct = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ─── DETAIL VIEW ───────────────────────────────────────────
  if (selectedProduct) {
    return (
      <div className="min-h-screen bg-white font-[Outfit] text-gray-900 mt-22">

        <header className="flex justify-between items-center px-8 py-6 border-b border-gray-100">
          {/* Show actual product name in header */}
          <h1 className="text-sm uppercase tracking-[0.2em] font-medium text-gray-400">
            Collections &nbsp;/&nbsp;
            <span className="text-gray-900">{selectedProduct.name}</span>
          </h1>
          <button
            onClick={() => setSelectedProduct(null)}
            className="flex items-center gap-2 text-sm uppercase tracking-widest font-medium hover:text-gray-400 transition-colors"
          >
            <X size={22} strokeWidth={1.5} />
          </button>
        </header>

        <main className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left — Image Gallery */}
          <div className="flex flex-col gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-[480px] mx-auto md:mx-0 aspect-[3/4] overflow-hidden bg-gray-50"
              >
                <img
                  src={selectedProduct.images[currentImageIndex]}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Thumbnails — only show if more than 1 image */}
            {selectedProduct.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto">
                {selectedProduct.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-20 aspect-square overflow-hidden border-2 flex-shrink-0 transition-colors ${
                      currentImageIndex === index
                        ? 'border-black'
                        : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <img src={image} alt={`view ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right — Details */}
          <div className="space-y-10">

            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                {selectedProduct.name}
              </h2>
              <p className="text-sm leading-relaxed text-gray-600 max-w-md">
                {selectedProduct.description}
              </p>
            </section>

            {/* Accordions */}
            <div className="border-t border-gray-100">
              {[
                { label: 'Product Details', content: selectedProduct.details },
                { label: 'Materials & Care', content: selectedProduct.materials },
                { label: 'Our Commitment',  content: selectedProduct.commitment },
              ].map(({ label, content }) => (
                <div key={label} className="py-5 border-b border-gray-100">
                  <details className="group cursor-pointer">
                    <summary className="list-none flex justify-between items-center text-xs font-semibold uppercase tracking-widest text-gray-800">
                      {label}
                      <ChevronDown size={14} className="text-gray-400 group-open:rotate-180 transition-transform duration-300" />
                    </summary>
                    <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                      {content}
                    </p>
                  </details>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="space-y-4 text-xs font-medium uppercase tracking-widest">
              
                <a href="tel:+916369692363"
                className="flex items-center gap-2 border-b border-black w-fit pb-1 hover:opacity-50 transition-opacity"
              >
                <Phone size={13} strokeWidth={1.5} />
                <span>Order by Phone</span>
              </a>
              <button
                onClick={() => navigate('/workspace')}
                className="flex items-center gap-2 border-b border-black w-fit pb-1 hover:opacity-50 transition-opacity"
              >
                <MapPin size={13} strokeWidth={1.5} />
                <span>View Workspace</span>
              </button>
            </div>

            {/* Services note — only ONCE */}
            <div className="pt-6 border-t border-gray-100 text-[10px] uppercase leading-loose tracking-widest text-gray-500">
              <p className="font-semibold text-gray-900 mb-1">+ Artiq Services</p>
              <p>Complimentary Shipping & Collect in Store · Complimentary Exchanges & Returns · Secure Payments · Signature Packaging</p>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    );
  }

  // ─── GRID VIEW ─────────────────────────────────────────────
  return (
    <div className="bg-white min-h-screen mt-20 font-[Outfit]">

      

      {/* Page header */}
      <div className="px-10 py-8 flex justify-between items-center border-b border-gray-100">
        <h1 className="text-4xl font-light tracking-tight text-gray-800">Collections</h1>
        <button
          onClick={() => navigate('/')}
          className="text-xs uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors"
        >
          Home <span className="mx-2 text-[10px]">▶</span>
          <span className="text-gray-900">Collections</span>
        </button>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group cursor-pointer"
              onClick={() => selectProduct(product)}
            >
              <div className="relative w-full max-w-[290px] mx-auto overflow-hidden aspect-[3/4] bg-gray-50">
                {/* <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
               /> */}
               <img
  src={product.images[0]}
  srcSet={`
    ${product.images[0]} 800w,
    ${product.images[0]} 1200w
  `}
  sizes="(max-width: 768px) 90vw, 300px"
  loading="lazy"
  className="w-full h-full object-cover"
/>
                {/* Hover icons */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md"><Search size={14}/></div>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md"><ShoppingBag size={14}/></div>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md text-gray-500 text-sm">♡</div>
                </div>
              </div>

              {/* Name + subtle category tag */}
              <div className="mt-5 text-center space-y-1">
                <h3 className="text-base font-medium tracking-wide text-gray-900">{product.name}</h3>
                <p className="text-[10px] uppercase tracking-widest text-gray-400">Handcrafted</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}