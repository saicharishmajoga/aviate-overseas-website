import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import AviateLogo from './AviateLogo';
import { COMPANY_INFO } from '../data/consultancyData';

export default function Footer() {
  const [modalType, setModalType] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ position: 'relative', backgroundColor: '#FDF8F6', paddingTop: '0' }}>
      
      {/* Smooth Wide Curved Top Boundary (Right Curve Reaching Map Container) */}
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden', lineHeight: 0, zIndex: 2, marginTop: '-4.5rem', marginBottom: '-1px' }}>
        <svg
          viewBox="0 0 1440 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '175px', display: 'block' }}
        >
          <path
            d="M0,140 C180,140 360,60 520,60 C680,60 780,110 880,110 C1080,110 1280,20 1440,0 L1440,200 L0,200 Z"
            fill="#061021"
          />
        </svg>
      </div>

      {/* Main Dark Navy Footer Container */}
      <div style={{
        backgroundColor: '#061021',
        color: '#CBD5E1',
        paddingTop: '3rem',
        paddingBottom: '3rem',
        position: 'relative',
        zIndex: 1
      }}>
        <div className="container">
          
          {/* 5-Column Information Architecture (Matching Image 2 Content & Layout) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1.25fr',
            gap: '2.5rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }} className="footer-grid">

            {/* Column 1: Brand Info & Social Icons */}
            <div>
              <a href="#hero" style={{ display: 'inline-block', marginBottom: '1.25rem' }}>
                <AviateLogo theme="light" size="medium" />
              </a>
              <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {COMPANY_INFO.tagline}
                <br />
                Visakhapatnam's premier overseas education consultancy empowering students to achieve international academic excellence.
              </p>
              
              {/* Social Icons */}
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {/* Instagram */}
                <a href="#" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }} aria-label="Instagram">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                {/* Facebook */}
                <a href="#" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }} aria-label="Facebook">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.714 5H18V0h-3.808C10.592 0 9 1.582 9 4.615V8z"/></svg>
                </a>
                {/* LinkedIn */}
                <a href="#" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }} aria-label="LinkedIn">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                </a>
                {/* YouTube */}
                <a href="#" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }} aria-label="YouTube">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                </a>
              </div>
            </div>

            {/* Column 2: Study Abroad */}
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.25rem' }}>
                Study Abroad
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.9rem' }}>
                <li><a href="#programs">BE / B.Tech Abroad</a></li>
                <li><a href="#programs">Masters (MS / MBA)</a></li>
                <li><a href="#programs">MBBS Abroad (Timor Leste) 🇹🇱</a></li>
                <li><a href="#programs">Public German Engineering</a></li>
                <li><a href="#programs">US STEM OPT Programs</a></li>
              </ul>
            </div>

            {/* Column 3: Top Destinations */}
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.25rem' }}>
                Top Destinations
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.9rem' }}>
                <li><a href="#countries">Study in USA 🇺🇸</a></li>
                <li><a href="#countries">Study in UK 🇬🇧</a></li>
                <li><a href="#countries">Study in Canada 🇨🇦</a></li>
                <li><a href="#countries">Study in Australia 🇦🇺</a></li>
                <li><a href="#countries">Study in Germany 🇩🇪</a></li>
                <li><a href="#countries">Study in Timor Leste 🇹🇱</a></li>
              </ul>
            </div>

            {/* Column 4: Company & 3C */}
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.25rem' }}>
                Company & 3C
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.9rem' }}>
                <li><a href="#about-us">About Aviate</a></li>
                <li><a href="#3c-model">Aviate 3C Model</a></li>
                <li><a href="#why-us">Why Choose Us</a></li>
                <li><a href="#universities">Partner Universities</a></li>
                <li><a href="#contact">Contact Visakhapatnam</a></li>
              </ul>
            </div>

            {/* Column 5: Visakhapatnam Centre */}
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.25rem' }}>
                Visakhapatnam Centre
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem', color: '#94A3B8' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <MapPin size={16} color="#F58220" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{COMPANY_INFO.address}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={16} color="#F58220" />
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} style={{ color: '#FFFFFF', fontWeight: 600 }}>{COMPANY_INFO.phone}</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mail size={16} color="#F58220" />
                  <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: '#FFFFFF' }}>{COMPANY_INFO.email}</a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Copyright Bar */}
          <div style={{
            padding: '1.75rem 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.85rem',
            color: '#64748B'
          }}>
            <div>
              © 2026 <strong>Aviate Overseas Education</strong>. All Rights Reserved. Designed with excellence for students.
            </div>

            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
              <button onClick={() => setModalType('privacy')} className="footer-link-btn">
                Privacy Policy
              </button>
              <span>•</span>
              <button onClick={() => setModalType('terms')} className="footer-link-btn">
                Terms & Conditions
              </button>
              <span>•</span>
              <button onClick={() => setModalType('disclaimer')} className="footer-link-btn">
                Disclaimer
              </button>

              <button
                onClick={scrollToTop}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#F58220',
                  border: 'none',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: '1rem',
                  cursor: 'pointer'
                }}
                title="Back to top"
              >
                <ArrowUp size={18} />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Policy Modal Dialog */}
      {modalType && (
        <div className="modal-overlay" onClick={() => setModalType(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 style={{ fontSize: '1.5rem', color: '#0B1930', marginBottom: '1rem' }}>
              {modalType === 'privacy' && 'Privacy Policy'}
              {modalType === 'terms' && 'Terms & Conditions'}
              {modalType === 'disclaimer' && 'Legal Disclaimer'}
            </h3>
            <div style={{ color: '#475569', fontSize: '0.925rem', lineHeight: 1.6, maxHeight: '60vh', overflowY: 'auto' }}>
              {modalType === 'privacy' && (
                <p>Aviate Overseas Education values student privacy. Any personal information collected is strictly used to provide counselling and admission services.</p>
              )}
              {modalType === 'terms' && (
                <p>By accessing Aviate services, you agree to our terms. Program information and fee structures are sourced from official foreign university guidelines.</p>
              )}
              {modalType === 'disclaimer' && (
                <p>Aviate Overseas Education provides university application and visa preparation assistance. Admission decisions are solely at the discretion of foreign universities and consulates.</p>
              )}
            </div>
            <button onClick={() => setModalType(null)} className="btn btn-navy" style={{ marginTop: '1.5rem', width: '100%' }}>
              Close
            </button>
          </div>
        </div>
      )}

      <style>{`
        .footer-grid a, .footer-link-btn {
          color: #94A3B8 !important;
          transition: color 0.2s ease;
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 0.9rem;
          font-family: inherit;
        }
        .footer-grid a:hover, .footer-grid a:active, .footer-grid a:focus,
        .footer-link-btn:hover, .footer-link-btn:active, .footer-link-btn:focus {
          color: #F58220 !important;
        }
        @media (max-width: 992px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 576px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
