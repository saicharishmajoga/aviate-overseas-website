import React from 'react';
import { Star, Quote, ShieldCheck, HeartHandshake } from 'lucide-react';
import { REAL_TESTIMONIALS } from '../data/consultancyData';

export default function Testimonials() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#FCFBF9' }}>
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            What Our Students Say About Aviate
          </h2>
          <p className="section-subtitle">
            Real experiences from students who fulfilled their dream of studying abroad with our guidance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid-2" style={{ gap: '2rem' }}>
          {REAL_TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#F8FAFC',
                borderRadius: '20px',
                padding: '2.25rem 2rem',
                border: '1px solid #E2E8F0',
                boxShadow: '0 8px 20px rgba(11, 25, 48, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                position: 'relative'
              }}
              className="testimonial-card"
            >
              {/* Quote Icon Background */}
              <Quote size={48} color="#F58220" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', opacity: 0.15 }} />

              <div>
                {/* Stars */}
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#F58220" color="#F58220" />
                  ))}
                </div>

                {/* Quote Text */}
                <p style={{ fontSize: '1rem', color: '#1E293B', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '1.75rem' }}>
                  "{item.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid #E2E8F0'
              }}>
                <img
                  src={item.avatar}
                  alt={item.author}
                  style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0B1930' }}>
                    {item.author}
                  </div>
                  <div style={{ fontSize: '0.825rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <ShieldCheck size={14} color="#16A34A" /> {item.course} • <strong>{item.country}</strong>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(11, 25, 48, 0.08) !important;
          border-color: #CBD5E1 !important;
        }
      `}</style>
    </section>
  );
}
