import React from 'react';
import Hero from '../components/Hero';
import DestinationsSection from '../components/DestinationsSection';
import CostCalculator from '../components/CostCalculator';
import LeadFormSection from '../components/LeadFormSection';
import { Globe } from 'lucide-react';

export default function CountriesPage({ onSelectCountry, onOpenCounselling }) {
  return (
    <div className="countries-page">
      {/* Reusable Hero Banner with Home Page Design */}
      <Hero
        badgeTag="Global Education Destinations"
        badgeIcon={Globe}
        titlePrefix="Explore Top "
        titleHighlight="Study Abroad Countries"
        titleSuffix=""
        subtitle="From high-salary STEM careers in the USA to tuition-free public German universities and WHO-recognized English medium MBBS in Timor Leste."
        imageSrc="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80"
        imageAlt="Explore World Study Destinations"
        bottomCurveColor="#F7FAF5"
        onOpenCounselling={onOpenCounselling}
      />

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
