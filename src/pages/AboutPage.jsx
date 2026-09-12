import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import LeadFormSection from '../components/LeadFormSection';

export default function AboutPage({ onOpenCounselling }) {
  return (
    <div className="about-page">
      {/* Reusable Hero Banner with Home Page Design */}
      <Hero
        badgeTag=""
        badgeIcon={null}
        titlePrefix="About Aviate "
        titleHighlight="Overseas Education"
        titleSuffix=""
        subtitle="Empowering students from Visakhapatnam and across India to achieve their international academic dreams with integrity, transparent guidance, and zero hidden costs."
        imageSrc="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80"
        imageAlt="Aviate Education Advisory Team"
        bottomCurveColor="#F4F7FB"
        onOpenCounselling={onOpenCounselling}
      />

      {/* Main About Component */}
      <AboutSection onOpenCounselling={onOpenCounselling} />

      {/* Lead Form */}
      <LeadFormSection />
    </div>
  );
}
