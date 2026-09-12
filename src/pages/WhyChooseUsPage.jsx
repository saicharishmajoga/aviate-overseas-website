import React from 'react';
import WhyChooseUs from '../components/WhyChooseUs';
import JourneyProcess from '../components/JourneyProcess';
import LeadFormSection from '../components/LeadFormSection';
import { Award, ShieldCheck, Heart } from 'lucide-react';

export default function WhyChooseUsPage({ onOpenCounselling }) {
  return (
    <div className="why-choose-us-page">
      {/* Page Header */}
      <section style={{ backgroundColor: '#0B1930', color: '#FFFFFF', padding: '4rem 0 3rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <span className="section-tag section-tag-navy" style={{ marginBottom: '1rem' }}>
            <Award size={16} /> Why Choose Aviate
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
            Empowering Your International Success
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1.1rem', lineHeight: 1.65 }}>
            From your very first consultation in Visakhapatnam to settling into your campus dormitory, experience 100% transparent, expert guidance at every single milestone.
          </p>
        </div>
      </section>

      {/* Why Choose Us & Features */}
      <WhyChooseUs onOpenCounselling={onOpenCounselling} />

      {/* 9-Step Student Journey Pathway */}
      <JourneyProcess onOpenCounselling={onOpenCounselling} />

      {/* Lead Form */}
      <LeadFormSection />
    </div>
  );
}
