import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import ShowcaseSection from './components/ShowcaseSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ShowreelModal from './components/ShowreelModal';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Viral Short-Form Editing');

  // Smooth scroll or modal trigger
  const handleOpenContact = (serviceName = 'Viral Short-Form Editing') => {
    setSelectedService(serviceName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsContactModalOpen(true);
    }
  };

  const handleOpenShowreel = () => {
    setIsShowreelOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0D0F14] text-[#C7CCD6] relative selection:bg-[#00A3FF] selection:text-black">
      {/* Background Ambient Lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[550px] h-[550px] bg-[#0066FF]/12 rounded-full blur-[140px] animate-float"></div>
        <div className="absolute top-1/2 -right-40 w-[550px] h-[550px] bg-[#00A3FF]/10 rounded-full blur-[140px] animate-float delay-1000"></div>
        <div className="absolute -bottom-40 left-1/3 w-[550px] h-[550px] bg-[#0066FF]/10 rounded-full blur-[140px] animate-float delay-2000"></div>
      </div>

      {/* Navigation Header */}
      <Navbar
        onOpenContact={() => handleOpenContact('Custom Ingestion Order')}
        onOpenShowreel={handleOpenShowreel}
      />

      <main className="relative z-10">
        {/* 1. Minimalistic & Attractive Hero Section */}
        <Hero
          onOpenContact={() => handleOpenContact('New Project')}
          onOpenShowreel={handleOpenShowreel}
        />

        {/* 2. Focused Video Editing Services Section (Short-Form, YouTube, Ads) */}
        <ServicesSection
          onSelectServiceForBooking={(service) => handleOpenContact(service)}
        />

        {/* 3. Large-Format Auto-Playing Instagram Showcase */}
        <ShowcaseSection />

        {/* 4. Client Transformations & Reviews */}
        <TestimonialsSection />

        {/* 5. Small & Compact FAQ */}
        <FAQSection />

        {/* 6. Clean Booking / Contact Section */}
        <ContactSection
          prefilledService={selectedService}
        />
      </main>

      {/* 7. Compact Footer */}
      <Footer />

      {/* Interactive Showreel Modal */}
      <ShowreelModal
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
        onBookNow={(title) => handleOpenContact(`Sample: ${title}`)}
      />

      {/* Optional Contact Modal */}
      {isContactModalOpen && (
        <ContactSection
          isModal={true}
          prefilledService={selectedService}
          onClose={() => setIsContactModalOpen(false)}
        />
      )}
    </div>
  );
}
