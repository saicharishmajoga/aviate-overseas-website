import React, { useState } from 'react';
import { Calculator, DollarSign, Clock, Award, ShieldCheck, ArrowRight } from 'lucide-react';
import { DESTINATIONS_DATA } from '../data/consultancyData';

export default function CostCalculator({ onOpenCounselling }) {
  const [selectedDegree, setSelectedDegree] = useState('MBBS');
  const [selectedCountry, setSelectedCountry] = useState('Timor Leste');

  // Filter country choices based on degree
  const availableCountries = selectedDegree === 'MBBS'
    ? DESTINATIONS_DATA.filter(c => c.category.includes('MBBS'))
    : DESTINATIONS_DATA.filter(c => c.category.includes('Engineering') || c.category.includes('Masters'));

  const activeCountryData = DESTINATIONS_DATA.find(c => c.name.toLowerCase() === selectedCountry.toLowerCase()) || availableCountries[0];

  return (
    <section className="section-padding" style={{ backgroundColor: '#F7FAF5', paddingBottom: 0 }}>
      <div className="container">
        
        <div style={{
          background: 'linear-gradient(135deg, #F8FAFC, #F0F5FA)',
          borderRadius: '24px',
          padding: '3.5rem 3rem',
          border: '1px solid #CBD5E1',
          boxShadow: '0 15px 35px rgba(11, 25, 48, 0.05)'
        }} className="calc-box">

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }} className="calc-grid">
            
            {/* Left Column: Controls */}
            <div>
              <span className="section-tag">
                <Calculator size={15} /> Instant Fee Estimator
              </span>
              <h2 style={{ fontSize: '2.1rem', color: '#0B1930', fontWeight: 800, marginBottom: '1rem' }}>
                Study Abroad Budget Calculator
              </h2>
              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                Estimate your annual tuition, living expenses, and post-study work visa rights in 2 simple clicks.
              </p>

              {/* Select Degree */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#0B1930', marginBottom: '0.5rem' }}>
                  1. Select Degree Program:
                </label>
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  {['MBBS', 'Undergraduate Abroad', 'MS / Masters', 'MBA'].map((deg) => (
                    <button
                      key={deg}
                      onClick={() => {
                        setSelectedDegree(deg);
                        if (deg === 'MBBS') setSelectedCountry('Timor Leste');
                        else setSelectedCountry('USA');
                      }}
                      className="btn btn-sm"
                      style={{
                        backgroundColor: selectedDegree === deg ? '#0B1930' : '#FFFFFF',
                        color: selectedDegree === deg ? '#FFFFFF' : '#475569',
                        border: selectedDegree === deg ? 'none' : '1px solid #CBD5E1'
                      }}
                    >
                      {deg}
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Country */}
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#0B1930', marginBottom: '0.5rem' }}>
                  2. Choose Destination Country:
                </label>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '10px',
                    border: '1.5px solid #0B1930',
                    fontSize: '1rem',
                    fontWeight: 600,
                    backgroundColor: '#FFFFFF',
                    color: '#0B1930',
                    outline: 'none'
                  }}
                >
                  {availableCountries.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.flag} {c.name} {c.isNew ? '(NEW MBBS Hub!)' : ''}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#64748B' }}>
                <ShieldCheck size={16} color="#16A34A" /> Aviate zero-commission policy: 100% transparent figures.
              </div>
            </div>

            {/* Right Column: Estimated Output Card */}
            {activeCountryData && (
              <div style={{
                background: '#0B1930',
                color: '#FFFFFF',
                borderRadius: '20px',
                padding: '2.5rem 2rem',
                boxShadow: '0 20px 40px rgba(11, 25, 48, 0.25)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                position: 'relative'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.12)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '2.5rem' }}>{activeCountryData.flag}</span>
                    <div>
                      <div style={{ fontSize: '1.4rem', fontWeight: 800 }}>{activeCountryData.name}</div>
                      <div style={{ fontSize: '0.8rem', color: '#F58220', fontWeight: 700 }}>{selectedDegree} ESTIMATE</div>
                    </div>
                  </div>
                  {activeCountryData.isNew && (
                    <span className="badge badge-new">FEATURED</span>
                  )}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                  <div style={{ background: 'rgba(255,255,255,0.06)', padding: '1rem', borderRadius: '12px' }}>
                    <div style={{ fontSize: '0.8rem', color: '#94A3B8', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                      Estimated Tuition Fee Range
                    </div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#F58220' }}>
                      {activeCountryData.avgCost}
                    </div>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.06)', padding: '1rem', borderRadius: '12px' }}>
                    <div style={{ fontSize: '0.8rem', color: '#94A3B8', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                      Post-Study Work Permit / Clinical Exposure
                    </div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF' }}>
                      {activeCountryData.workPermit}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenCounselling(selectedDegree, activeCountryData.name)}
                  className="btn btn-orange"
                  style={{ width: '100%', padding: '0.95rem' }}
                >
                  Get Exact Cost Breakdown for {activeCountryData.name} <ArrowRight size={18} />
                </button>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Seamless Color Blend into UniversitiesSection */}
      <div style={{
        width: '100%',
        height: '110px',
        background: 'linear-gradient(180deg, #F7FAF5 0%, #EAF2E2 100%)',
        marginTop: '3.5rem'
      }} />

      <style>{`
        @media (max-width: 992px) {
          .calc-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .calc-box { padding: 2rem 1.5rem !important; }
        }
        @media (max-width: 576px) {
          .calc-box { padding: 1.5rem 1rem !important; border-radius: 16px !important; }
        }
      `}</style>
    </section>
  );
}
