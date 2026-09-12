import React from 'react';
import Hero from '../components/Hero';
import UniversitiesSection from '../components/UniversitiesSection';
import LeadFormSection from '../components/LeadFormSection';

export default function UniversitiesPage({ onOpenCounselling }) {
  return (
    <div className="universities-page">
      {/* Reusable Hero Banner with Home Page Design */}
      <Hero
        badgeTag=""
        badgeIcon={null}
        titlePrefix="Explore Our "
        titleHighlight="Partner Universities"
        titleSuffix=""
        subtitle="Direct admission tie-ups with 500+ top-tier universities, Russell Group, Go8, US Ivy League candidates, TU9 German institutes, and NMC/WHO approved medical universities."
        imageSrc="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80"
        imageAlt="Top University Campus"
        bottomCurveColor="#EAF2E2"
        onOpenCounselling={onOpenCounselling}
      />

      {/* Main Universities Section with Smooth Color Blend into LeadFormSection (#F8E4E1) */}
      <UniversitiesSection
        onOpenCounselling={onOpenCounselling}
        bottomBlendColor="#F8E4E1"
      />

      {/* Lead Form */}
      <LeadFormSection />
    </div>
  );
}
