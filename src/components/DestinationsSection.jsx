import React, { useState } from 'react';
import { Globe, Search, ArrowRight, Sparkles, Filter, ExternalLink } from 'lucide-react';
import { DESTINATIONS_DATA } from '../data/consultancyData';

export default function DestinationsSection({ onSelectCountry, onOpenCounselling, featuredOnly = false }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const filteredCountries = DESTINATIONS_DATA.filter((country) => {
    const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          country.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          country.popularPrograms.some(p => p.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = filterCategory === 'all'
      ? true
      : filterCategory === 'mbbs'
        ? country.category.includes('MBBS')
        : country.category.includes('Engineering') || country.category.includes('Masters');

    return matchesSearch && matchesCategory;
  });

  if (featuredOnly) {
    return (
      <section id="countries" className="section-padding" style={{ backgroundColor: '#F7FAF5' }}>
        <div className="container">
          {/* Special Timor Leste Alert Banner */}
          <div style={{
            background: 'linear-gradient(135deg, #0B1930, #1E3A5F)',
            borderRadius: '16px',
            padding: '1.5rem 2rem',
            color: '#FFFFFF',
            marginBottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            border: '2px solid #F58220',
            boxShadow: '0 12px 28px rgba(245, 130, 32, 0.2)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <span style={{ fontSize: '3rem' }}>🇹🇱</span>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <h3 style={{ color: '#FFFFFF', fontSize: '1.35rem', fontWeight: 800 }}>
                    Featured New Destination: Timor Leste
                  </h3>
                  <span className="badge badge-new" style={{ fontSize: '0.75rem' }}>
                    NEW FOR MBBS
                  </span>
                </div>
                <p style={{ color: '#CBD5E1', fontSize: '0.9rem', marginTop: '0.2rem' }}>
                  Ultra-affordable NMC & WHO approved 6-Year English medium MBBS degree. Low living expense & zero capitation fees!
                </p>
              </div>
            </div>
            <button
              onClick={() => onSelectCountry(DESTINATIONS_DATA.find(c => c.id === 'timor-leste'))}
              className="btn btn-orange btn-sm"
            >
              View Timor Leste Details <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="countries" className="section-padding" style={{ backgroundColor: '#F7FAF5' }}>
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">
            Top Study Abroad Destinations
          </h2>
          <p className="section-subtitle">
            Explore world-class higher education destinations with top university rankings and high post-study work opportunities.
          </p>
        </div>

        {/* Special Timor Leste Alert Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #0B1930, #1E3A5F)',
          borderRadius: '16px',
          padding: '1.5rem 2rem',
          color: '#FFFFFF',
          marginBottom: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          border: '2px solid #F58220',
          boxShadow: '0 12px 28px rgba(245, 130, 32, 0.2)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <span style={{ fontSize: '3rem' }}>🇹🇱</span>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.35rem', fontWeight: 800 }}>
                  Featured New Destination: Timor Leste
                </h3>
                <span className="badge badge-new" style={{ fontSize: '0.75rem' }}>
                  NEW FOR MBBS
                </span>
              </div>
              <p style={{ color: '#CBD5E1', fontSize: '0.9rem', marginTop: '0.2rem' }}>
                Ultra-affordable NMC & WHO approved 6-Year English medium MBBS degree. Low living expense & zero capitation fees!
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectCountry(DESTINATIONS_DATA.find(c => c.id === 'timor-leste'))}
            className="btn btn-orange btn-sm"
          >
            View Timor Leste Details <ArrowRight size={15} />
          </button>
        </div>

        {/* Filter Controls */}
        <div style={{
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '2.5rem',
          flexWrap: 'wrap'
        }}>
          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setFilterCategory('all')}
              className={`btn btn-sm ${filterCategory === 'all' ? 'btn-navy' : 'btn-outline-white'}`}
              style={{
                color: filterCategory === 'all' ? '#FFFFFF' : '#475569',
                backgroundColor: filterCategory === 'all' ? '#0B1930' : '#FFFFFF',
                border: filterCategory === 'all' ? 'none' : '1px solid #CBD5E1'
              }}
            >
              All Countries ({DESTINATIONS_DATA.length})
            </button>
            <button
              onClick={() => setFilterCategory('mbbs')}
              className={`btn btn-sm ${filterCategory === 'mbbs' ? 'btn-orange' : 'btn-outline-white'}`}
              style={{
                color: filterCategory === 'mbbs' ? '#FFFFFF' : '#475569',
                backgroundColor: filterCategory === 'mbbs' ? '#F58220' : '#FFFFFF',
                border: filterCategory === 'mbbs' ? 'none' : '1px solid #CBD5E1'
              }}
            >
              🩺 MBBS Abroad Hubs
            </button>
            <button
              onClick={() => setFilterCategory('eng_masters')}
              className={`btn btn-sm ${filterCategory === 'eng_masters' ? 'btn-navy' : 'btn-outline-white'}`}
              style={{
                color: filterCategory === 'eng_masters' ? '#FFFFFF' : '#475569',
                backgroundColor: filterCategory === 'eng_masters' ? '#0B1930' : '#FFFFFF',
                border: filterCategory === 'eng_masters' ? 'none' : '1px solid #CBD5E1'
              }}
            >
              🎓 Engineering & Masters Hubs
            </button>
          </div>

          {/* Search Box */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '280px' }} className="search-box-wrap">
            <Search size={16} color="#94A3B8" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Search country or course..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.6rem 1rem 0.6rem 2.6rem',
                borderRadius: '8px',
                border: '1px solid #CBD5E1',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
          </div>
        </div>

        {/* Country Grid */}
        <div className="grid-3" style={{ gap: '1.75rem' }}>
          {filteredCountries.map((country) => (
            <div
              key={country.id}
              onClick={() => onSelectCountry(country)}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '1.75rem 1.5rem',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 14px rgba(11, 25, 48, 0.04)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
              className="country-card"
            >
              {/* Card Top Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <span style={{ fontSize: '2.5rem', lineHeight: 1 }}>{country.flag}</span>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', color: '#0B1930', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      {country.name}
                    </h3>
                    <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>
                      {country.category}
                    </span>
                  </div>
                </div>

                {country.isNew && (
                  <span className="badge badge-new" style={{ fontSize: '0.65rem' }}>NEW</span>
                )}
              </div>

              {/* Description */}
              <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.5, marginBottom: '1.25rem', flex: 1 }}>
                {country.description}
              </p>

              {/* Details Pill Strip */}
              <div style={{
                background: '#F8FAFC',
                padding: '0.65rem 0.85rem',
                borderRadius: '8px',
                marginBottom: '1.25rem',
                border: '1px solid #E2E8F0',
                display: 'flex',
                justify: 'space-between',
                fontSize: '0.8rem'
              }}>
                <span style={{ color: '#64748B' }}>Avg Cost:</span>
                <strong style={{ color: '#0B1930' }}>{country.avgCost}</strong>
              </div>

              {/* Action Link */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justify: 'space-between',
                color: '#F58220',
                fontWeight: 700,
                fontSize: '0.875rem',
                paddingTop: '0.75rem',
                borderTop: '1px solid #F1F5F9'
              }}>
                <span>Explore Requirements</span>
                <ArrowRight size={16} />
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Explorer CTA */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <button
            onClick={() => onOpenCounselling()}
            className="btn btn-navy btn-lg"
          >
            Explore All Countries with a Counsellor <Globe size={18} />
          </button>
        </div>

      </div>

      <style>{`
        .country-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 35px rgba(245, 130, 32, 0.25) !important;
          border-color: #F58220 !important;
          border-width: 2px !important;
        }
      `}</style>
    </section>
  );
}
