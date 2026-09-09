import React from 'react';
import { Award, DollarSign, FileCheck, ShieldCheck, Heart, Eye, Compass, TrendingUp, Check, Layers } from 'lucide-react';
import { AVIATE_3C_MODEL, CORE_VALUES } from '../data/consultancyData';

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
    <section id="why-us" className="section-padding" style={{ backgroundColor: '#F7EEDC' }}>
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
        <div className="grid-4" style={{ marginBottom: '4rem' }}>
          {mainFeatures.map((feat, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#F8FAFC',
                borderRadius: '16px',
                padding: '2rem 1.5rem',
                border: '1px solid #E2E8F0',
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
                background: '#FFFFFF',
                boxShadow: '0 8px 16px rgba(11, 25, 48, 0.06)',
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

        {/* Aviate 3C Model Highlight Box */}
        <div id="3c-model" style={{
          background: 'linear-gradient(135deg, #0B1930, #162A45)',
          borderRadius: '24px',
          padding: '3.5rem 3rem',
          color: '#FFFFFF',
          boxShadow: '0 25px 50px -12px rgba(11, 25, 48, 0.3)',
          position: 'relative',
          overflow: 'hidden'
        }} className="model-3c-box">
          {/* Subtle Background Glow */}
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '350px',
            height: '350px',
            background: 'radial-gradient(circle, rgba(245,130,32,0.2) 0%, rgba(11,25,48,0) 70%)',
            pointerEvents: 'none'
          }} />

          <div style={{ textAlignment: 'center', maxWidth: '750px', margin: '0 auto 3rem auto', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2.2rem', color: '#FFFFFF', fontWeight: 800, marginBottom: '0.75rem' }} className="model-3c-title">
              The Aviate <span style={{ color: '#F58220' }}>3C Model</span>
            </h3>
            <p style={{ color: '#CBD5E1', fontSize: '1.05rem', lineHeight: 1.6 }}>
              {AVIATE_3C_MODEL.description}
            </p>
          </div>

          <div className="grid-3" style={{ gap: '2rem' }}>
            {AVIATE_3C_MODEL.pillars.map((pillar, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '16px',
                  padding: '2rem 1.5rem',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease'
                }}
                className="three-c-card"
              >
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: '#F58220',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  fontSize: '1rem',
                  marginBottom: '1rem'
                }}>
                  {pillar.code}
                </div>
                <h4 style={{ fontSize: '1.3rem', color: '#FFFFFF', fontWeight: 700, marginBottom: '0.2rem' }}>
                  {pillar.name}
                </h4>
                <div style={{ fontSize: '0.825rem', color: '#F58220', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  {pillar.subtitle}
                </div>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button
              onClick={() => onOpenCounselling()}
              className="btn btn-orange btn-lg"
              style={{ width: '100%' }}
            >
              Get Matched via 3C Model Now
            </button>
          </div>
        </div>

      </div>

      <style>{`
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(11, 25, 48, 0.08) !important;
          border-color: #CBD5E1 !important;
        }
        .three-c-card:hover {
          background: rgba(255, 255, 255, 0.1) !important;
          transform: translateY(-4px);
        }
        @media (max-width: 768px) {
          .model-3c-box {
            padding: 2rem 1.25rem !important;
            border-radius: 18px !important;
          }
          .model-3c-title {
            font-size: clamp(1.5rem, 5vw, 2rem) !important;
          }
        }
      `}</style>
    </section>
  );
}
