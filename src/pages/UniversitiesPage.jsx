import React from 'react';
import Hero from '../components/Hero';
import UniversitiesSection from '../components/UniversitiesSection';
import LeadFormSection from '../components/LeadFormSection';
import { Building2 } from 'lucide-react';

export default function UniversitiesPage({ onOpenCounselling }) {
  return (
    <div className="universities-page">
      {/* Reusable Hero Banner with Home Page Design */}
      <Hero
        badgeTag="Accredited Institutions"
        badgeIcon={Building2}
        titlePrefix="Explore Our "
        titleHighlight="Partner Universities"
        titleSuffix=""
        subtitle="Direct admission tie-ups with 500+ top-tier universities, Russell Group, Go8, US Ivy League candidates, TU9 German institutes, and NMC/WHO approved medical universities."
        imageSrc="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80"
        imageAlt="Top University Campus"
        bottomCurveColor="#FAFAF8"
        onOpenCounselling={onOpenCounselling}
      />

      {/* Main Universities Section */}
      <UniversitiesSection onOpenCounselling={onOpenCounselling} />

      {/* Lead Form */}
      <LeadFormSection />
    </div>
  );
}
