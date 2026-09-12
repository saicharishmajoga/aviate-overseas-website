import React from 'react';
import AboutSection from '../components/AboutSection';
import LeadFormSection from '../components/LeadFormSection';
import { Target, Compass, Heart } from 'lucide-react';

export default function AboutPage({ onOpenCounselling }) {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section style={{ backgroundColor: '#0B1930', color: '#FFFFFF', padding: '4rem 0 3rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <span className="section-tag section-tag-navy" style={{ marginBottom: '1rem' }}>
            <Heart size={16} /> Our Legacy & Values
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
            About Aviate Overseas Education
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1.1rem', lineHeight: 1.65 }}>
            Empowering students from Visakhapatnam and across India to achieve their international academic dreams with integrity, transparent guidance, and zero hidden costs.
          </p>
        </div>
      </section>

      {/* Main About Component */}
      <AboutSection onOpenCounselling={onOpenCounselling} />

      {/* Lead Form */}
      <LeadFormSection />
    </div>
  );
}
