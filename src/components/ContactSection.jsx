import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ExternalLink, Globe } from 'lucide-react';
import { COMPANY_INFO } from '../data/consultancyData';

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Let's Start Your Journey
          </h2>
          <p className="section-subtitle">
            Visit our office or get in touch with our team for personalized study abroad counseling.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.25fr',
          gap: '2.5rem',
          alignItems: 'stretch'
        }} className="contact-grid">

          {/* Left Column: Corporate Info Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            {/* Phone Card */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '1.5rem',
              border: '1px solid #E2E8F0',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1.25rem'
            }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FFF7ED', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F58220', flexShrink: 0 }}>
                <Phone size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                  Direct Helpline
                </div>
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B1930' }}>
                  {COMPANY_INFO.phone}
                </a>
                <div style={{ fontSize: '0.825rem', color: '#475569', marginTop: '0.2rem' }}>
                  Speak directly with senior counsellors
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div style={{
              background: '#F0FDF4',
              borderRadius: '16px',
              padding: '1.5rem',
              border: '1px solid #BBF7D0',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1.25rem'
            }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#DCFCE7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16A34A', flexShrink: 0 }}>
                <MessageSquare size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: '#166534', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                  WhatsApp Counsellor
                </div>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '1.15rem', fontWeight: 800, color: '#14532D', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                >
                  Chat with our counsellor <ExternalLink size={15} />
                </a>
                <div style={{ fontSize: '0.825rem', color: '#166534', marginTop: '0.2rem' }}>
                  Instant response & document checklist
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '1.5rem',
              border: '1px solid #E2E8F0',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1.25rem'
            }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563EB', flexShrink: 0 }}>
                <Mail size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                  Official Email
                </div>
                <a href={`mailto:${COMPANY_INFO.email}`} style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0B1930' }}>
                  {COMPANY_INFO.email}
                </a>
                <div style={{ fontSize: '0.825rem', color: '#475569', marginTop: '0.2rem' }}>
                  Send transcripts & application queries
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '1.5rem',
              border: '1px solid #E2E8F0',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1.25rem'
            }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FFF7ED', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F58220', flexShrink: 0 }}>
                <MapPin size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                  Office Address
                </div>
                <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0B1930', lineHeight: 1.5 }}>
                  {COMPANY_INFO.address}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.825rem', color: '#F58220', fontWeight: 600, marginTop: '0.5rem' }}>
                  <Clock size={14} /> {COMPANY_INFO.workingHours}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps & Office Location Embed */}
          <div style={{
            backgroundColor: '#0B1930',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 15px 35px rgba(11, 25, 48, 0.12)',
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid #E2E8F0'
          }}>
            <div style={{ padding: '1.5rem 1.75rem', background: '#0B1930', color: '#FFFFFF' }}>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Globe size={18} color="#F58220" /> Aviate Visakhapatnam Centre
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '0.875rem' }}>
                Located at Seethammadara near NRI Hospital & Abhaya Anjaneya Swamy Arch
              </p>
            </div>

            <div style={{ flex: 1, minHeight: '340px', width: '100%', position: 'relative' }}>
              <iframe
                title="Aviate Overseas Education Visakhapatnam Location"
                src={COMPANY_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block', minHeight: '340px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
