import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import OurServices from './components/OurServices'
import Nav from './components/Nav';
import Footer from './components/Footer';
import WhyChooseUs from './components/WhyChooseUs';
import RecentWork from './components/RecentWork';
import TestimonialSection from './components/TestimonialSection ';
import ContactSection from './components/ContactSection';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import DesignBranding from './components/DesignBranding';
import SocialMediaMarketing from './components/SocialMediaMarketing';
import AISolutions from './components/AISolutions';
import ConsultingCustom from './components/ConsultingCustom';
import WebAppDevelopment from './components/WebAppDevelopment';
import AppDevelopment from './components/AppDevelopment';
function App() {
  

  return (
    <>
       
       <Router>
       <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<OurServices />} />
        <Route path="/About" element={<WhyChooseUs />} />
        <Route path="/Projects" element={<RecentWork />} />
        <Route path="/Testimonials" element={<TestimonialSection />} />
        <Route path="/Contact" element={<ContactSection />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/design-branding" element={<DesignBranding />} />
        <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />
        <Route path="/ai-solutions" element={<AISolutions />} />
        <Route path="/consulting-custom" element={<ConsultingCustom />} />
        <Route path="/web-app-development" element={<WebAppDevelopment />} />
        <Route path="/app-development" element={<AppDevelopment />} />
      </Routes>
      <Footer />
    </Router>
      
    </>
  )
}

export default App
