import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import ProgramsSection from './components/ProgramsSection';
import WhyChooseUs from './components/WhyChooseUs';
import JourneyProcess from './components/JourneyProcess';
import DestinationsSection from './components/DestinationsSection';
import CostCalculator from './components/CostCalculator';
import UniversitiesSection from './components/UniversitiesSection';
import Testimonials from './components/Testimonials';
import AboutSection from './components/AboutSection';
import LeadFormSection from './components/LeadFormSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CounsellingModal from './components/CounsellingModal';
import CountryModal from './components/CountryModal';

export default function App() {
  const [counsellingModalOpen, setCounsellingModalOpen] = useState(false);
  const [defaultProgram, setDefaultProgram] = useState('');
  const [defaultCountry, setDefaultCountry] = useState('');
  const [selectedCountryDetail, setSelectedCountryDetail] = useState(null);

  const handleOpenCounselling = (program = '', country = '') => {
    setDefaultProgram(program);
    setDefaultCountry(country);
    setCounsellingModalOpen(true);
  };

  const handleSelectCountry = (countryObj) => {
    setSelectedCountryDetail(countryObj);
  };

  return (
    <div className="aviate-app">
      {/* Header */}
      <Header onOpenCounselling={() => handleOpenCounselling()} />

      {/* Hero Banner */}
      <Hero onOpenCounselling={() => handleOpenCounselling()} />

      {/* Statistics Strip */}
      <StatsBar />

      {/* Programs Section */}
      <ProgramsSection
        onOpenCounselling={handleOpenCounselling}
        onSelectCountry={(countryName) => handleOpenCounselling('', countryName)}
      />

      {/* Why Choose Us & 3C Model */}
      <WhyChooseUs onOpenCounselling={() => handleOpenCounselling()} />

      {/* 9-Step Student Journey */}
      <JourneyProcess onOpenCounselling={() => handleOpenCounselling()} />

      {/* Study Destinations Grid */}
      <DestinationsSection
        onSelectCountry={handleSelectCountry}
        onOpenCounselling={() => handleOpenCounselling()}
      />

      {/* Budget & Cost Calculator */}
      <CostCalculator onOpenCounselling={handleOpenCounselling} />

      {/* Partner Universities */}
      <UniversitiesSection onOpenCounselling={() => handleOpenCounselling()} />

      {/* Real Student Testimonials */}
      <Testimonials />

      {/* About Aviate */}
      <AboutSection onOpenCounselling={() => handleOpenCounselling()} />

      {/* Embedded Counselling Lead Capture Form */}
      <LeadFormSection />

      {/* Contact Section & Map */}
      <ContactSection />

      {/* Footer */}
      <Footer onOpenCounselling={() => handleOpenCounselling()} />

      {/* Floating Widgets */}
      <FloatingWhatsApp />

      {/* Counselling Lead Modal */}
      <CounsellingModal
        isOpen={counsellingModalOpen}
        onClose={() => setCounsellingModalOpen(false)}
        defaultProgram={defaultProgram}
        defaultCountry={defaultCountry}
      />

      {/* Country Requirements Modal */}
      <CountryModal
        country={selectedCountryDetail}
        onClose={() => setSelectedCountryDetail(null)}
        onBookCounselling={(countryName) => handleOpenCounselling('', countryName)}
      />
    </div>
  );
}
