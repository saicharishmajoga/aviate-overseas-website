import React from 'react';
import ContactSection from '../components/ContactSection';
import LeadFormSection from '../components/LeadFormSection';
import { Phone, Mail, MapPin, MessageSquare, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/consultancyData';

export default function ContactPage({ onOpenCounselling }) {
  return (
    <div className="contact-page">
      {/* Page Header */}
      <section style={{ backgroundColor: '#0B1930', color: '#FFFFFF', padding: '4rem 0 3rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <span className="section-tag section-tag-navy" style={{ marginBottom: '1rem' }}>
            <MapPin size={16} /> Get In Touch
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
            Contact Visakhapatnam Centre
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1.1rem', lineHeight: 1.65 }}>
            Visit our office at Seethammadara or get in touch with senior counsellors for direct 1-on-1 profile evaluation.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <ContactSection />

      {/* Lead Form */}
      <LeadFormSection />
    </div>
  );
}
