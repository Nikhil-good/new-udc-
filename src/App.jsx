import { useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import BitrixShowcase from "./components/BitrixShowcase";
import FeatureSlider from "./components/FeatureSlider";
import Technology from "./components/Technology";
import Pricing from "./components/Pricing";
import Bitrix24CRM from './pages/Bitrix24CRM';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonial from './components/Testimonial';
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import IndustryVertical from "./components/IndustryVertical";
import Contact from "./pages/ContactUs";
import DepartmentSection from "./components/DepartmentSection";
import BitrixPopupForm from './components/BitrixPopupForm';
import { Button } from "react-bootstrap"; // import this


function App() {
  const [showAuth, setShowAuth] = useState(false);
  const popupFormRef = useRef(); // Add this ref

  return (
    <BrowserRouter>
      <div className="font-sans">
        <Navbar
  onAuthOpen={() => setShowAuth(true)}
  onOpenForm={() => popupFormRef.current.open("Navbar")}
/>

        <Routes>
          <Route
            path="/"
            element={
              <>

              
                <Hero onPopupOpen={() => popupFormRef.current.open()} />


                {/* ✅ Add your trigger button wherever you want */}
            

               <BitrixShowcase onOpenForm={(label) => popupFormRef.current.open(label)} />
                <FeatureSlider />
                <Technology />
                <IndustryVertical />
                <DepartmentSection  onPopupOpen={() => popupFormRef.current.open()}/>
                <Testimonial />
                <WhyChooseUs onPopupOpen={() => popupFormRef.current.open()} />
              </>
            }
          />

          <Route path="/bitrix24crm" element={<Bitrix24CRM />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/services" element={<Services onPopupOpen={() => popupFormRef.current.open()} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      

        {/* ✅ Add this once in the root App so it's available globally */}
        <BitrixPopupForm ref={popupFormRef} />

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
