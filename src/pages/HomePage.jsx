import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Award, Globe, Building2, Quote, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import ProgramsSection from '../components/ProgramsSection';
import WhyChooseUs from '../components/WhyChooseUs';
import DestinationsSection from '../components/DestinationsSection';
import UniversitiesSection from '../components/UniversitiesSection';
import LeadFormSection from '../components/LeadFormSection';
import { SUCCESS_STORIES_DATA } from '../data/consultancyData';

export default function HomePage({ onOpenCounselling, onSelectCountry }) {
  return (
    <div className="home-page">
      {/* Hero Banner */}
      <Hero onOpenCounselling={onOpenCounselling} />

      {/* Trust Stats Strip */}
      <StatsBar />

      {/* Programs Overview */}
      <div style={{ position: 'relative' }}>
        <ProgramsSection
          onOpenCounselling={onOpenCounselling}
          onSelectCountry={(countryName) => onOpenCounselling('', countryName)}
        />
        <div style={{ textAlign: 'center', backgroundColor: '#F4F7FB', paddingBottom: '3.5rem' }}>
          <Link to="/programs" className="btn btn-navy btn-lg">
            Explore All Degree Programs <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Why Choose Us & 3C Model Overview */}
      <WhyChooseUs onOpenCounselling={onOpenCounselling} />

      {/* Destinations Preview */}
      <div style={{ position: 'relative' }}>
        <DestinationsSection
          onSelectCountry={onSelectCountry}
          onOpenCounselling={onOpenCounselling}
        />
        <div style={{ textAlign: 'center', backgroundColor: '#F7FAF5', paddingBottom: '3.5rem' }}>
          <Link to="/countries" className="btn btn-orange btn-lg">
            View All 15+ Study Destinations <Globe size={18} />
          </Link>
        </div>
      </div>

      {/* Universities Preview */}
      <UniversitiesSection onOpenCounselling={onOpenCounselling} />

      {/* Success Stories Preview Section */}
      <section className="section-padding" style={{ backgroundColor: '#F3E8DA' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Sparkles size={14} /> Proven Student Track Record
            </span>
            <h2 className="section-title">
              Success Stories That Inspire Us
            </h2>
            <p className="section-subtitle">
              Every student's journey is different. Here's how we've helped students turn their overseas education goals into reality.
            </p>
          </div>

          {/* Featured Cards Preview Grid */}
          <div className="grid-3" style={{ gap: '2rem', marginBottom: '3rem' }}>
            {SUCCESS_STORIES_DATA.slice(0, 3).map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '2rem 1.5rem',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 10px 30px rgba(11, 25, 48, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                  <span className="badge badge-orange" style={{ fontSize: '0.78rem' }}>
                    🏆 {item.achievement}
                  </span>
                </div>

                <p style={{ color: '#334155', fontSize: '0.95rem', lineHeight: 1.6, fontStyle: 'italic', flex: 1, marginBottom: '1.5rem' }}>
                  "{item.quote}"
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid #F1F5F9' }}>
                  <img
                    src={item.avatar}
                    alt={item.studentName}
                    style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <h4 style={{ fontSize: '1.05rem', color: '#0B1930', fontWeight: 700 }}>
                      {item.studentName}
                    </h4>
                    <div style={{ fontSize: '0.825rem', color: '#64748B' }}>
                      {item.course} • <strong>{item.country} {item.flag}</strong>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/our-success-stories" className="btn btn-orange btn-lg">
              Read Our Success Stories <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Lead Form CTA */}
      <LeadFormSection />
    </div>
  );
}
