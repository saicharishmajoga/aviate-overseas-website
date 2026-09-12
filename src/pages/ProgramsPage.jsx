import React from 'react';
import ProgramsSection from '../components/ProgramsSection';
import LeadFormSection from '../components/LeadFormSection';
import { Sparkles, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function ProgramsPage({ onOpenCounselling, onSelectCountry }) {
  return (
    <div className="programs-page">
      {/* Page Hero Banner */}
      <section style={{ backgroundColor: '#0B1930', color: '#FFFFFF', padding: '4rem 0 3rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <span className="section-tag section-tag-navy" style={{ marginBottom: '1rem' }}>
            <GraduationCap size={16} /> International Academic Pathways
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
            Study Programs & Degrees Abroad
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1.1rem', lineHeight: 1.65 }}>
            Explore world-class academic degree paths curated for high global career employability, tuition scholarship opportunities, and post-study work rights.
          </p>
        </div>
      </section>

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
