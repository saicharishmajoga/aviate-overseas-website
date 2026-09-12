import React from 'react';
import { Award, DollarSign, FileCheck, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs({ onOpenCounselling }) {
  const mainFeatures = [
    {
      title: "Global Recognition",
      description: "We help students identify globally recognized, WHO, NMC, and ABET-accredited universities that issue internationally valued degrees.",
      icon: <Award size={28} color="#F58220" />
    },
    {
      title: "Affordable Tuition",
      description: "Discover quality education options matching your budget. We assist in securing merit bursaries, fee waivers, and low-cost study options.",
      icon: <DollarSign size={28} color="#F58220" />
    },
    {
      title: "Easy Admission Process",
      description: "End-to-end application management, SOP/LOR editing, transcripts attestation, and direct liaison with foreign university admission boards.",
      icon: <FileCheck size={28} color="#F58220" />
    },
    {
      title: "Visa Support",
      description: "Dedicated visa experts providing 9-month advance interview preparation, financial proofing, and mock visa interview drills.",
      icon: <ShieldCheck size={28} color="#F58220" />
    }
  ];

  return (
    <section id="why-us" className="section-padding" style={{ backgroundColor: '#F4F7FB', paddingBottom: '1rem' }}>
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Why Choose Us?
          </h2>
          <p className="section-subtitle">
            From your first counselling session to your first day on campus, we're with you at every step.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid-4">
          {mainFeatures.map((feat, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '2rem 1.5rem',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 14px rgba(11, 25, 48, 0.04)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}
              className="feature-card"
            >
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '14px',
                background: '#FFF7ED',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {feat.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#0B1930', fontWeight: 700 }}>
                {feat.title}
              </h3>
              <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.6 }}>
                {feat.description}
              </p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(11, 25, 48, 0.08) !important;
          border-color: #F58220 !important;
        }
      `}</style>
    </section>
  );
}
