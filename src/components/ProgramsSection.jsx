import React, { useState } from 'react';
import { GraduationCap, ArrowRight, CheckCircle, Sparkles, DollarSign, Building, Globe } from 'lucide-react';
import { PROGRAMS_DATA } from '../data/consultancyData';

export default function ProgramsSection({ onOpenCounselling, onSelectCountry }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredPrograms = activeTab === 'all'
    ? PROGRAMS_DATA
    : PROGRAMS_DATA.filter(p => p.id === activeTab);

  return (
    <section id="programs" className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">
            Choose Your Study Abroad Path
          </h2>
          <p className="section-subtitle">
            Explore international education opportunities tailored to your academic and career goals.
          </p>
        </div>

        {/* Tab Filters */}
        <div style={{
          display: 'flex',
          justify: 'center',
          gap: '0.75rem',
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={() => setActiveTab('all')}
            className={`btn ${activeTab === 'all' ? 'btn-orange' : 'btn-outline-white'}`}
            style={{
              color: activeTab === 'all' ? '#FFFFFF' : '#475569',
              border: activeTab === 'all' ? 'none' : '1px solid #CBD5E1',
              backgroundColor: activeTab === 'all' ? '#F58220' : '#FFFFFF',
              boxShadow: activeTab === 'all' ? '0 8px 20px rgba(245, 130, 32, 0.35)' : 'none'
            }}
          >
            All Programs
          </button>
          {PROGRAMS_DATA.map((prog) => (
            <button
              key={prog.id}
              onClick={() => setActiveTab(prog.id)}
              className="btn"
              style={{
                color: activeTab === prog.id ? '#FFFFFF' : '#475569',
                backgroundColor: activeTab === prog.id ? '#F58220' : '#FFFFFF',
                border: activeTab === prog.id ? 'none' : '1px solid #CBD5E1',
                boxShadow: activeTab === prog.id ? '0 8px 20px rgba(245, 130, 32, 0.35)' : 'none'
              }}
            >
              {prog.shortTitle}
            </button>
          ))}
        </div>

        {/* Program Cards Grid */}
        <div className="grid-3" style={{ gap: '2rem' }}>
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 12px 35px rgba(245, 130, 32, 0.15)',
                border: '2px solid #F58220',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
              className="program-card"
            >
              {/* Card Image Header */}
              <div style={{ position: 'relative', height: '210px', overflow: 'hidden' }}>
                <img
                  src={program.bgImage}
                  alt={program.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(180deg, rgba(11, 25, 48, 0.2) 0%, rgba(11, 25, 48, 0.85) 100%)'
                }} />

                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  right: '1rem',
                  display: 'flex',
                  justify: 'space-between',
                  alignItems: 'center'
                }}>
                  <span className="badge" style={{
                    backgroundColor: '#F58220',
                    color: '#FFFFFF'
                  }}>
                    {program.badge}
                  </span>
                  <span className="badge" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#FFFFFF', backdropFilter: 'blur(4px)' }}>
                    {program.category}
                  </span>
                </div>

                <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', right: '1.25rem' }}>
                  <h3 style={{ color: '#FFFFFF', fontSize: '1.35rem', fontWeight: 700, lineHeight: 1.3 }}>
                    {program.title}
                  </h3>
                </div>
              </div>

              {/* Special Highlight */}
              {program.specialHighlight && (
                <div style={{
                  background: 'linear-gradient(135deg, #FFF7ED, #FFEDD5)',
                  padding: '0.85rem 1.25rem',
                  fontSize: '0.85rem',
                  color: '#C2410C',
                  fontWeight: 600,
                  borderBottom: '1px solid #FED7AA',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <Sparkles size={16} color="#F58220" />
                  {program.specialHighlight}
                </div>
              )}

              {/* Card Body */}
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                {/* Fee Range Badge */}
                <div style={{
                  background: '#FFF7ED',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'space-between',
                  border: '1px solid #FFEDD5'
                }}>
                  <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>
                    Tuition Fee Range
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#F58220' }}>
                    {program.feeRange}
                  </div>
                </div>

                {/* Popular Countries List */}
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0B1930', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Globe size={15} color="#F58220" /> Popular Destinations:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {program.popularCountries.map((c, i) => (
                      <span
                        key={i}
                        onClick={() => onSelectCountry && onSelectCountry(c)}
                        style={{
                          fontSize: '0.78rem',
                          background: c.includes('Timor') ? '#FEF2F2' : '#F1F5F9',
                          color: c.includes('Timor') ? '#991B1B' : '#334155',
                          fontWeight: 600,
                          padding: '0.25rem 0.6rem',
                          borderRadius: '6px',
                          border: c.includes('Timor') ? '1px solid #FCA5A5' : '1px solid #E2E8F0',
                          cursor: 'pointer'
                        }}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Top Universities */}
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0B1930', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Building size={15} color="#F58220" /> Top Universities:
                  </div>
                  <ul style={{ paddingLeft: '1.1rem', fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}>
                    {program.topUniversities.slice(0, 3).map((uni, idx) => (
                      <li key={idx} style={{ marginBottom: '0.25rem' }}>{uni}</li>
                    ))}
                  </ul>
                </div>

                {/* Key Highlights */}
                <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '1rem', marginTop: 'auto' }}>
                  {program.highlights.map((h, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', fontSize: '0.83rem', color: '#334155', marginBottom: '0.35rem' }}>
                      <CheckCircle size={14} color="#16A34A" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onOpenCounselling(program.title)}
                  className="btn btn-orange"
                  style={{ width: '100%', marginTop: '0.5rem' }}
                >
                  Explore {program.shortTitle} <ArrowRight size={16} />
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .program-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(11, 25, 48, 0.12) !important;
        }
      `}</style>
    </section>
  );
}
