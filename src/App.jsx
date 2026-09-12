import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CounsellingModal from './components/CounsellingModal';
import CountryModal from './components/CountryModal';

import HomePage from './pages/HomePage';
import ProgramsPage from './pages/ProgramsPage';
import CountriesPage from './pages/CountriesPage';
import UniversitiesPage from './pages/UniversitiesPage';
import WhyChooseUsPage from './pages/WhyChooseUsPage';
import ThreeCModelPage from './pages/ThreeCModelPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

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
    <Router>
      <ScrollToTop />
      <div className="aviate-app">
        {/* Consistent Header Across All Pages */}
        <Header onOpenCounselling={() => handleOpenCounselling()} />

        {/* Dynamic Route Pages */}
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenCounselling={handleOpenCounselling}
                onSelectCountry={handleSelectCountry}
              />
            }
          />
          <Route
            path="/programs"
            element={
              <ProgramsPage
                onOpenCounselling={handleOpenCounselling}
                onSelectCountry={handleSelectCountry}
              />
            }
          />
          <Route
            path="/countries"
            element={
              <CountriesPage
                onSelectCountry={handleSelectCountry}
                onOpenCounselling={handleOpenCounselling}
              />
            }
          />
          <Route
            path="/universities"
            element={
              <UniversitiesPage onOpenCounselling={handleOpenCounselling} />
            }
          />
          <Route
            path="/why-choose-us"
            element={
              <WhyChooseUsPage onOpenCounselling={handleOpenCounselling} />
            }
          />
          <Route
            path="/3c-model"
            element={
              <ThreeCModelPage onOpenCounselling={handleOpenCounselling} />
            }
          />
          <Route
            path="/our-success-stories"
            element={
              <SuccessStoriesPage onOpenCounselling={handleOpenCounselling} />
            }
          />
          <Route
            path="/about"
            element={
              <AboutPage onOpenCounselling={handleOpenCounselling} />
            }
          />
          <Route
            path="/contact"
            element={
              <ContactPage onOpenCounselling={handleOpenCounselling} />
            }
          />
        </Routes>

        {/* Consistent Footer Across All Pages */}
        <Footer />

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
    </Router>
  );
}
