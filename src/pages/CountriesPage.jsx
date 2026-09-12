import React from 'react';
import DestinationsSection from '../components/DestinationsSection';
import CostCalculator from '../components/CostCalculator';
import LeadFormSection from '../components/LeadFormSection';
import { Globe, Sparkles } from 'lucide-react';

export default function CountriesPage({ onSelectCountry, onOpenCounselling }) {
  return (
    <div className="countries-page">
      {/* Page Header */}
      <section style={{ backgroundColor: '#0B1930', color: '#FFFFFF', padding: '4rem 0 3rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <span className="section-tag section-tag-navy" style={{ marginBottom: '1rem' }}>
            <Globe size={16} /> Global Education Destinations
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
            Explore Top Study Abroad Countries
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1.1rem', lineHeight: 1.65 }}>
            From high-salary STEM careers in the USA to tuition-free public German universities and WHO-recognized English medium MBBS in Timor Leste.
          </p>
        </div>
      </section>

      {/* Destinations Grid & Search */}
      <DestinationsSection
        onSelectCountry={onSelectCountry}
        onOpenCounselling={onOpenCounselling}
      />

      {/* Budget & Cost Calculator */}
      <CostCalculator onOpenCounselling={onOpenCounselling} />

      {/* Lead Form */}
      <LeadFormSection />
    </div>
  );
}
