import React from 'react';
import UniversitiesSection from '../components/UniversitiesSection';
import LeadFormSection from '../components/LeadFormSection';
import { Building2, Award } from 'lucide-react';

export default function UniversitiesPage({ onOpenCounselling }) {
  return (
    <div className="universities-page">
      {/* Page Header */}
      <section style={{ backgroundColor: '#0B1930', color: '#FFFFFF', padding: '4rem 0 3rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <span className="section-tag section-tag-navy" style={{ marginBottom: '1rem' }}>
            <Building2 size={16} /> Accredited Institutions
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
            Explore Our Partner Universities
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1.1rem', lineHeight: 1.65 }}>
            Direct admission tie-ups with 500+ top-tier universities, Russell Group, Go8, US Ivy League candidates, TU9 German institutes, and NMC/WHO approved medical universities.
          </p>
        </div>
      </section>

      {/* Main Universities Section */}
      <UniversitiesSection onOpenCounselling={onOpenCounselling} />

      {/* Lead Form */}
      <LeadFormSection />
    </div>
  );
}
