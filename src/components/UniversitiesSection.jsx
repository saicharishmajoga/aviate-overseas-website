import React, { useState } from 'react';
import { Building2, Search, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PARTNER_UNIVERSITIES } from '../data/consultancyData';

export default function UniversitiesSection({ onOpenCounselling }) {
  const [filterText, setFilterText] = useState('');
  const [activeUniIdx, setActiveUniIdx] = useState(null);

  const filteredUnis = PARTNER_UNIVERSITIES.filter(u =>
    u.name.toLowerCase().includes(filterText.toLowerCase()) ||
    u.country.toLowerCase().includes(filterText.toLowerCase()) ||
    u.type.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <section id="universities" className="section-padding" style={{ backgroundColor: '#EAF2E2', paddingBottom: 0 }}>
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Our Global University Network
          </h2>
          <p className="section-subtitle">
            Connect with leading universities and institutions across the world's most sought-after study destinations.
          </p>
        </div>

        {/* Search Bar */}
        <div style={{ maxWidth: '500px', margin: '0 auto 2.5rem auto', position: 'relative' }}>
          <Search size={18} color="#94A3B8" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder="Search university or country..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1rem 0.75rem 2.8rem',
              borderRadius: '10px',
              border: '1px solid #CBD5E1',
              fontSize: '0.95rem',
              outline: 'none',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}
          />
        </div>

        {/* Universities Grid */}
        <div className="grid-4" style={{ gap: '1.5rem', marginBottom: '3rem' }}>
          {filteredUnis.map((uni, idx) => {
            const isSelected = activeUniIdx === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveUniIdx(idx)}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '14px',
                  padding: '1.5rem',
                  border: isSelected ? '2px solid #F58220' : '1px solid #E2E8F0',
                  boxShadow: isSelected ? '0 12px 30px rgba(245, 130, 32, 0.25)' : '0 4px 12px rgba(11, 25, 48, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                className={`uni-card ${isSelected ? 'uni-card-active' : ''}`}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '10px',
                      background: isSelected ? '#F58220' : '#0B1930',
                      color: '#FFFFFF',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      padding: '0.2rem',
                      transition: 'all 0.3s ease'
                    }}>
                      {uni.logoText.slice(0, 5)}
                    </div>
                    <span className="badge badge-orange" style={{ fontSize: '0.7rem' }}>
                      {uni.type}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.05rem', color: '#0B1930', fontWeight: 700, lineHeight: 1.3, marginBottom: '0.4rem' }}>
                    {uni.name}
                  </h3>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.825rem',
                  color: '#64748B',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid #F1F5F9',
                  marginTop: '1rem'
                }}>
                  <span>📍 {uni.country}</span>
                  <CheckCircle2 size={15} color="#16A34A" />
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Universities CTA */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => onOpenCounselling()}
            className="btn btn-navy btn-lg"
          >
            View Universities & Check Eligibility <ArrowRight size={18} />
          </button>
        </div>

      </div>

      {/* Seamless Color Blend into Testimonials section */}
      <div style={{
        width: '100%',
        height: '110px',
        background: 'linear-gradient(180deg, #EAF2E2 0%, #F3E8DA 100%)',
        marginTop: '3.5rem'
      }} />

      <style>{`
        .uni-card:hover, .uni-card-active {
          transform: translateY(-5px) !important;
          box-shadow: 0 14px 32px rgba(245, 130, 32, 0.25) !important;
          border-color: #F58220 !important;
          border-width: 2px !important;
        }
      `}</style>
    </section>
  );
}
