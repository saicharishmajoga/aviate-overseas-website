import React, { useState } from 'react';
import { Sparkles, Quote, Award, CheckCircle2, ShieldCheck, ArrowRight, Filter } from 'lucide-react';
import LeadFormSection from '../components/LeadFormSection';
import { SUCCESS_STORIES_DATA } from '../data/consultancyData';

export default function SuccessStoriesPage({ onOpenCounselling }) {
  const [filterCategory, setFilterCategory] = useState('all');

  const filteredStories = filterCategory === 'all'
    ? SUCCESS_STORIES_DATA
    : SUCCESS_STORIES_DATA.filter(s => s.country.toLowerCase().includes(filterCategory.toLowerCase()) || s.course.toLowerCase().includes(filterCategory.toLowerCase()));

  return (
    <div className="success-stories-page">
      {/* Hero Header */}
      <section style={{ backgroundColor: '#0B1930', color: '#FFFFFF', padding: '4rem 0 3.5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <span className="section-tag section-tag-navy" style={{ marginBottom: '1rem' }}>
            <Award size={16} /> Student Achievements
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
            Success Stories That Inspire Us
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1.1rem', lineHeight: 1.65 }}>
            Every student's journey is different. Here's how we've helped students turn their overseas education goals into reality.
          </p>
        </div>
      </section>

      {/* Main Success Stories Section */}
      <section className="section-padding" style={{ backgroundColor: '#F3E8DA' }}>
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
