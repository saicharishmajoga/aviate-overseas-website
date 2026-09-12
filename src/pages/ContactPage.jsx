import React from 'react';
import Hero from '../components/Hero';
import ContactSection from '../components/ContactSection';
import LeadFormSection from '../components/LeadFormSection';
import { MapPin } from 'lucide-react';

export default function ContactPage({ onOpenCounselling }) {
  return (
    <div className="contact-page">
      {/* Reusable Hero Banner with Home Page Design */}
      <Hero
        badgeTag="Get In Touch"
        badgeIcon={MapPin}
        titlePrefix="Contact "
        titleHighlight="Visakhapatnam Centre"
        titleSuffix=""
        subtitle="Visit our office at Seethammadara or get in touch with senior counsellors for direct 1-on-1 profile evaluation."
        imageSrc="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=1000&q=80"
        imageAlt="Visit Aviate Visakhapatnam Office"
        bottomCurveColor="#F4F7FB"
        onOpenCounselling={onOpenCounselling}
      />

      {/* Main Contact Section */}
      <ContactSection />

      {/* Lead Form */}
      <LeadFormSection />
    </div>
  );
}
