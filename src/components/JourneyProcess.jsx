import React from 'react';
import { Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/consultancyData';

export default function JourneyProcess({ onOpenCounselling }) {
  return (
    <section className="section-padding bg-slate" style={{ borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Your Journey to Studying Abroad Starts Here
          </h2>
          <p className="section-subtitle">
            A seamless, stress-free 9-step pathway from your first consultation to setting foot on campus.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.75rem',
          position: 'relative'
        }} className="process-grid">
          {PROCESS_STEPS.map((stepItem, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '2rem 1.5rem',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 12px rgba(11, 25, 48, 0.03)',
                position: 'relative',
                transition: 'all 0.3s ease'
              }}
              className="process-card"
            >
              {/* Step Number Badge */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.25rem'
              }}>
                <span style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: '#F58220',
                  fontFamily: 'Poppins, sans-serif',
                  lineHeight: 1
                }}>
                  {stepItem.step}
                </span>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: '#F0F5FA',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0B1930'
                }}>
                  <CheckCircle2 size={18} color="#0B1930" />
                </div>
              </div>

              <h3 style={{ fontSize: '1.15rem', color: '#0B1930', fontWeight: 700, marginBottom: '0.6rem' }}>
                {stepItem.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.55 }}>
                {stepItem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Action Banner */}
        <div style={{
          marginTop: '3.5rem',
          textAlign: 'center',
          background: '#0B1930',
          padding: '2.5rem',
          borderRadius: '20px',
          color: '#FFFFFF',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div style={{ textAlign: 'left', maxWidth: '700px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.3rem' }}>
              Ready to take Step 01 today?
            </h3>
            <p style={{ color: '#CBD5E1', fontSize: '0.95rem' }}>
              Book your 100% free counselling session with Aviate experts in Visakhapatnam.
            </p>
          </div>
          <button
            onClick={() => onOpenCounselling()}
            className="btn btn-orange btn-lg"
          >
            Begin Step 01 <ArrowRight size={18} />
          </button>
        </div>

      </div>

      <style>{`
        .process-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(11, 25, 48, 0.08) !important;
          border-color: #F58220 !important;
        }
        @media (max-width: 992px) {
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
