import React, { useState } from 'react';
import Hero from '../components/Hero';
import LeadFormSection from '../components/LeadFormSection';
import { SUCCESS_STORIES_DATA } from '../data/consultancyData';

export default function SuccessStoriesPage({ onOpenCounselling }) {
  const [filterCategory, setFilterCategory] = useState('all');

  const filteredStories = filterCategory === 'all'
    ? SUCCESS_STORIES_DATA
    : SUCCESS_STORIES_DATA.filter(s => s.country.toLowerCase().includes(filterCategory.toLowerCase()) || s.course.toLowerCase().includes(filterCategory.toLowerCase()));

  return (
    <div className="success-stories-page">
      {/* Reusable Hero Banner with Home Page Design */}
      <Hero
        badgeTag=""
        badgeIcon={null}
        titlePrefix="Success Stories That "
        titleHighlight="Inspire Us"
        titleSuffix=""
        subtitle="Every student's journey is different. Here's how we've helped students turn their overseas education goals into reality."
        imageSrc="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80"
        imageAlt="Happy Graduated Overseas Students with Aviate"
        bottomCurveColor="#F4F7FB"
        onOpenCounselling={onOpenCounselling}
      />

      {/* Main Success Stories Section on Light Blue (#F4F7FB) */}
      <section className="section-padding" style={{ backgroundColor: '#F4F7FB', paddingBottom: 0 }}>
        <div className="container">
          
          {/* Quick Filter Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            {['all', 'USA', 'UK', 'Australia', 'Germany', 'Canada', 'Timor Leste'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`btn btn-sm ${filterCategory === cat ? 'btn-orange' : 'btn-outline-white'}`}
                style={{
                  color: filterCategory === cat ? '#FFFFFF' : '#475569',
                  backgroundColor: filterCategory === cat ? '#F58220' : '#FFFFFF',
                  border: filterCategory === cat ? 'none' : '1px solid #CBD5E1',
                  textTransform: 'capitalize'
                }}
              >
                {cat === 'all' ? 'All Stories' : cat}
              </button>
            ))}
          </div>

          {/* Success Story Cards Grid */}
          <div className="grid-3" style={{ gap: '2rem' }}>
            {filteredStories.map((story) => (
              <div
                key={story.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '2.25rem 1.75rem',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 12px 35px rgba(11, 25, 48, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'all 0.3s ease'
                }}
                className="story-card"
              >
                {/* Achievement Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <span className="badge badge-orange" style={{ fontSize: '0.8rem', padding: '0.35rem 0.85rem' }}>
                    🏆 {story.achievement}
                  </span>
                  <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>{story.flag}</span>
                </div>

                {/* Card Title */}
                <h3 style={{ fontSize: '1.2rem', color: '#0B1930', fontWeight: 700, lineHeight: 1.3, marginBottom: '0.85rem' }}>
                  {story.title}
                </h3>

                {/* Quote Narrative */}
                <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: 1.6, fontStyle: 'italic', flex: 1, marginBottom: '1.5rem' }}>
                  "{story.quote}"
                </p>

                {/* Key Details Pill */}
                <div style={{ background: '#F8FAFC', borderRadius: '10px', padding: '0.75rem 1rem', marginBottom: '1.5rem', border: '1px solid #E2E8F0', fontSize: '0.825rem' }}>
                  <div style={{ color: '#64748B' }}>University: <strong style={{ color: '#0B1930' }}>{story.university}</strong></div>
                  <div style={{ color: '#F58220', fontWeight: 700, marginTop: '0.2rem' }}>✨ {story.scholarship}</div>
                </div>

                {/* Student Profile Footer */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid #F1F5F9' }}>
                  <img
                    src={story.avatar}
                    alt={story.studentName}
                    style={{ width: '52px', height: '52px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #F58220' }}
                  />
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: '#0B1930', fontWeight: 800 }}>
                      {story.studentName}
                    </h4>
                    <div style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 600 }}>
                      {story.course}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#F58220', fontWeight: 700 }}>
                      {story.country}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Seamless Color Blend from Light Blue (#F4F7FB) into Soft Blush Pink (#F8E4E1) */}
        <div style={{
          width: '100%',
          height: '140px',
          background: 'linear-gradient(180deg, #F4F7FB 0%, #F8E4E1 100%)',
          marginTop: '3.5rem'
        }} />

        <style>{`
          .story-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 20px 40px rgba(245, 130, 32, 0.18) !important;
            border-color: #F58220 !important;
          }
        `}</style>
      </section>

      {/* Lead Form */}
      <LeadFormSection />
    </div>
  );
}
