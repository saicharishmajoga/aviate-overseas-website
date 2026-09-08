import React from 'react';
import { Award, Globe, Building2, BookOpen, Users, ShieldCheck } from 'lucide-react';
import { TRUST_STATS } from '../data/consultancyData';

export default function StatsBar() {
  const iconMap = {
    Award: <Award size={28} color="#F58220" />,
    Globe: <Globe size={28} color="#F58220" />,
    Building: <Building2 size={28} color="#F58220" />,
    BookOpen: <BookOpen size={28} color="#F58220" />,
    Users: <Users size={28} color="#F58220" />,
    ShieldCheck: <ShieldCheck size={28} color="#F58220" />
  };

  return (
    <section style={{
      position: 'relative',
      backgroundColor: '#F4F7FB',
      paddingTop: '3.5rem',
      paddingBottom: '2.5rem',
      zIndex: 10
    }}>
      <div className="container">
        <div style={{
          background: '#FFFFFF',
          borderRadius: '24px',
          padding: '2.25rem 2.75rem',
          boxShadow: '0 20px 45px -10px rgba(245, 130, 32, 0.25)',
          border: '2px solid #F58220',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem'
        }} className="stats-grid">
          {TRUST_STATS.slice(0, 4).map((stat, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                borderRight: idx < 3 ? '1px solid #FED7AA' : 'none',
                paddingRight: idx < 3 ? '1.5rem' : '0'
              }}
              className="stat-item"
            >
              <div style={{
                width: '58px',
                height: '58px',
                borderRadius: '16px',
                background: '#FFF7ED',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {iconMap[stat.icon]}
              </div>
              <div>
                <div style={{
                  fontSize: '2.25rem',
                  fontWeight: 800,
                  color: '#0B1930',
                  lineHeight: 1.1,
                  fontFamily: 'Poppins, sans-serif'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '0.9rem',
                  color: '#475569',
                  fontWeight: 600,
                  marginTop: '0.2rem'
                }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 1.5rem !important; }
          .stat-item { border-right: none !important; padding-right: 0 !important; }
        }
        @media (max-width: 576px) {
          .stats-grid { grid-template-columns: 1fr !important; padding: 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
