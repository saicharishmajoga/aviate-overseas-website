import React from 'react';
import Hero from '../components/Hero';
import ProgramsSection from '../components/ProgramsSection';
import LeadFormSection from '../components/LeadFormSection';
import { GraduationCap } from 'lucide-react';

export default function ProgramsPage({ onOpenCounselling, onSelectCountry }) {
  return (
    <div className="programs-page">
      {/* Reusable Hero Banner with Home Page Design */}
      <Hero
        badgeTag="International Academic Pathways"
        badgeIcon={GraduationCap}
        titlePrefix="Study Programs & "
        titleHighlight="Degrees Abroad"
        titleSuffix=""
        subtitle="Explore world-class academic degree paths curated for high global career employability, tuition scholarship opportunities, and post-study work rights."
        imageSrc="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80"
        imageAlt="Students Graduating & Studying Abroad"
        bottomCurveColor="#F4F7FB"
        onOpenCounselling={onOpenCounselling}
      />

      {/* Main Programs Component */}
      <ProgramsSection
        onOpenCounselling={onOpenCounselling}
        onSelectCountry={(countryName) => onOpenCounselling('', countryName)}
      />

      {/* Counselling Lead Form */}
      <LeadFormSection />
    </div>
  );
}
