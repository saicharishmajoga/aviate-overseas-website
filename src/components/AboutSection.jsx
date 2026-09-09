import React from 'react';
import { Target, Compass, Heart, Eye, TrendingUp, Award, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, CORE_VALUES } from '../data/consultancyData';

export default function AboutSection({ onOpenCounselling }) {
  return (
    <section id="about-us" className="section-padding" style={{ backgroundColor: '#F8E4E1' }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.1fr',
          gap: '3.5rem',
          alignItems: 'center'
        }} className="about-grid">

          {/* Left Column: Image Banner */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(11, 25, 48, 0.15)',
              border: '4px solid #FFFFFF'
            }}>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                alt="Aviate Overseas Team Consulting Students"
                style={{ width: '100%', height: '440px', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* Floating Motto Card */}
            <div style={{
              position: 'absolute',
              bottom: '-25px',
              right: '-20px',
              background: '#0B1930',
              color: '#FFFFFF',
              padding: '1.25rem 1.75rem',
              borderRadius: '16px',
              boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
              maxWidth: '320px',
              border: '2px solid #F58220'
            }} className="about-motto-card">
              <div style={{ fontSize: '0.8rem', color: '#F58220', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                Aviate Corporate Ethos
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 700, fontStyle: 'italic', lineHeight: 1.4 }}>
                "{COMPANY_INFO.tagline}"
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div>
            <h2 className="section-title">
              If You Have The Dream, <span style={{ color: '#F58220' }}>Aviate Has The Way</span>
            </h2>
            
            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              <strong>Aviate signifies the Beginning.</strong> Holding the ethos of the word at the soul of our organization, what began as a dream project in the previous decade is today helping students begin a career of their dreams every single day!
            </p>

            <p style={{ color: '#475569', fontSize: '0.975rem', lineHeight: 1.65, marginBottom: '2rem' }}>
              Aviate has garnered the dreams of thousands of students to choose the right career path. Through our unique value pyramid <strong>3C Model</strong>, we empower students to select the <strong>Right Course, Right College, and Right Country</strong> seamlessly.
            </p>

            {/* Vision & Mission Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '2rem' }} className="vision-mission-grid">
              <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: '14px', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                <div style={{ color: '#F58220', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Target size={16} /> Our Vision
                </div>
                <p style={{ color: '#0B1930', fontWeight: 700, fontSize: '0.95rem', lineHeight: 1.4 }}>
                  {COMPANY_INFO.vision}
                </p>
              </div>

              <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: '14px', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                <div style={{ color: '#F58220', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Compass size={16} /> Our Mission
                </div>
                <p style={{ color: '#0B1930', fontWeight: 700, fontSize: '0.95rem', lineHeight: 1.4 }}>
                  {COMPANY_INFO.mission}
                </p>
              </div>
            </div>

            <button
              onClick={() => onOpenCounselling()}
              className="btn btn-orange btn-lg"
              style={{ width: '100%' }}
            >
              Talk to Our Team in Visakhapatnam
            </button>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
        @media (max-width: 768px) {
          .about-motto-card {
            position: relative !important;
            right: 0 !important;
            bottom: 0 !important;
            margin-top: 1rem !important;
            max-width: 100% !important;
          }
          .vision-mission-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
