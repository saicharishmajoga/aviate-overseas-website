import React from 'react';
import { X, CheckCircle, GraduationCap, DollarSign, Clock, Building2, Globe, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/consultancyData';

export default function CountryModal({ country, onClose, onBookCounselling }) {
  if (!country) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '750px' }} onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: '#F1F5F9',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#475569'
          }}
          aria-label="Close Modal"
        >
          <X size={20} />
        </button>

        {/* Country Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1.25rem', borderBottom: '1px solid #E2E8F0' }}>
          <span style={{ fontSize: '3.5rem', lineHeight: 1 }}>{country.flag}</span>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <h3 style={{ fontSize: '2rem', color: '#0B1930' }}>Study in {country.name}</h3>
              {country.isNew && (
                <span className="badge badge-new" style={{ fontSize: '0.8rem', padding: '0.3rem 0.75rem' }}>
                  <Sparkles size={13} /> NEW DESTINATION
                </span>
              )}
            </div>
            <p style={{ color: '#64748B', fontSize: '0.95rem' }}>{country.category} Destination • Aviate Preferred Partner</p>
          </div>
        </div>

        {country.isNew && (
          <div style={{
            background: 'linear-gradient(135deg, #FFF7ED, #FFEDD5)',
            border: '1.5px solid #F97316',
            borderRadius: '12px',
            padding: '1.25rem',
            marginBottom: '1.5rem'
          }}>
            <h4 style={{ color: '#C2410C', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem', fontSize: '1.1rem' }}>
              <Sparkles size={18} /> Exclusive Announcement: Timor Leste MBBS Program
            </h4>
            <p style={{ color: '#7C2D12', fontSize: '0.92rem', lineHeight: 1.5 }}>
              Timor Leste is now an official featured destination for Indian medical aspirants! Offering 100% English medium curriculum, NMC & WHO compliance, direct hospital clinical exposure, and total tuition costs starting at just ₹3.5 Lakhs/year.
            </p>
          </div>
        )}

        {/* Overview Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.75rem' }}>
          <div style={{ background: '#F8FAFC', padding: '1rem', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
            <div style={{ color: '#F58220', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <DollarSign size={14} /> Tuition Fee
            </div>
            <div style={{ fontWeight: 700, color: '#0B1930', fontSize: '1rem' }}>{country.avgCost}</div>
          </div>
          <div style={{ background: '#F8FAFC', padding: '1rem', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
            <div style={{ color: '#F58220', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Clock size={14} /> Work Rights
            </div>
            <div style={{ fontWeight: 700, color: '#0B1930', fontSize: '1rem' }}>{country.workPermit}</div>
          </div>
          <div style={{ background: '#F8FAFC', padding: '1rem', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
            <div style={{ color: '#F58220', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Globe size={14} /> Category
            </div>
            <div style={{ fontWeight: 700, color: '#0B1930', fontSize: '1rem' }}>{country.category}</div>
          </div>
        </div>

        {/* Key Highlights */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ fontSize: '1.1rem', color: '#0B1930', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckCircle size={18} color="#F58220" /> Key Benefits for Students
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
            {country.highlights.map((h, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem', color: '#334155' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#F58220' }}></div>
                {h}
              </div>
            ))}
          </div>
        </div>

        {/* Top Universities */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '1.1rem', color: '#0B1930', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Building2 size={18} color="#0B1930" /> Featured Partner Universities in {country.name}
          </h4>
          <ul style={{ paddingLeft: '1.2rem', color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>
            {country.topUnis.map((uni, idx) => (
              <li key={idx} style={{ marginBottom: '0.3rem' }}>
                <strong>{uni}</strong>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid #E2E8F0' }}>
          <button
            onClick={() => {
              onClose();
              onBookCounselling(country.name);
            }}
            className="btn btn-orange"
            style={{ flex: 1 }}
          >
            Apply / Get Free Guidance for {country.name}
          </button>
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20Aviate,%20I%20want%20to%20know%20more%20about%20studying%20in%20${encodeURIComponent(country.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            WhatsApp Inquiry
          </a>
        </div>
      </div>
    </div>
  );
}
