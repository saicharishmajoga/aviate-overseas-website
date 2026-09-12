import React from 'react';
import { ArrowRight, MessageSquare, PhoneCall, CheckCircle2, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/consultancyData';

export default function Hero({
  badgeTag = "100% Transparent Overseas Education Consultancy",
  badgeIcon: BadgeIcon = Sparkles,
  titlePrefix = "We Are Bringing ",
  titleHighlight = "Overseas Education",
  titleSuffix = " Within Everyone's Reach",
  subtitle = COMPANY_INFO.heroSubtitle,
  imageSrc = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80",
  imageAlt = "International Students Studying Abroad with Aviate",
  bottomCurveColor = "#F4F7FB",
  onOpenCounselling
}) {
  return (
    <section id="hero" style={{
      position: 'relative',
      backgroundColor: '#0B1930',
      color: '#FFFFFF',
      paddingTop: '3.5rem',
      paddingBottom: '11.5rem',
      overflow: 'hidden'
    }}>
      <style>{`
        @media (max-width: 992px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; text-align: center; }
          .hero-title { font-size: clamp(1.85rem, 6vw, 2.6rem) !important; }
          .hero-grid > div { margin: 0 auto; width: 100%; }
          .hero-ctas { justify-content: center; }
          .hero-trust-bar { justify-content: center; }
          .hero-img-box { height: 340px !important; border-radius: 24px !important; }
        }
        @media (max-width: 576px) {
          #hero { padding-top: 2rem !important; padding-bottom: 6rem !important; }
          .hero-ctas { flex-direction: column; width: 100%; }
          .hero-ctas .btn { width: 100%; }
          .hero-curve-svg { height: 90px !important; }
          .hero-img-box { height: 270px !important; }
        }
      `}</style>

      {/* Background Graphic Elements & Soft Glows */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '0',
        width: '100%',
        maxWidth: '550px',
        height: '550px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245, 130, 32, 0.15) 0%, rgba(11, 25, 48, 0) 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '5%',
        left: '0',
        width: '100%',
        maxWidth: '480px',
        height: '480px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(30, 58, 138, 0.4) 0%, rgba(11, 25, 48, 0) 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 0.85fr',
          gap: '3.5rem',
          alignItems: 'center'
        }} className="hero-grid">

          {/* Left Column: Copy & Actions */}
          <div>
            {/* Optional Top Tag Badge */}
            {badgeTag && (
              <span className="section-tag section-tag-navy" style={{ marginBottom: '1.25rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                {BadgeIcon && <BadgeIcon size={16} />} {badgeTag}
              </span>
            )}

            {/* Main Headline */}
            <h1 style={{
              fontSize: '3.15rem',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.18,
              letterSpacing: '-0.03em',
              marginBottom: '1.25rem'
            }} className="hero-title">
              {titlePrefix}
              {titleHighlight && (
                <span style={{
                  background: 'linear-gradient(135deg, #FF8C2B, #F58220)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  {titleHighlight}
                </span>
              )}
              {titleSuffix}
            </h1>

            {/* Supporting Paragraph */}
            <p style={{
              fontSize: '1.125rem',
              color: '#CBD5E1',
              lineHeight: 1.65,
              marginBottom: '2rem',
              maxWidth: '620px'
            }}>
              {subtitle}
            </p>

            {/* CTAs Group */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }} className="hero-ctas">
              <button
                onClick={() => onOpenCounselling && onOpenCounselling()}
                className="btn btn-orange btn-lg"
              >
                Start Your Journey <ArrowRight size={18} />
              </button>

              <button
                onClick={() => onOpenCounselling && onOpenCounselling()}
                className="btn btn-outline-white btn-lg"
              >
                <PhoneCall size={18} /> Talk to a Counsellor
              </button>

              {/* Hero WhatsApp Button */}
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20Aviate%20Team,%20I%20want%20to%20start%20my%20study%20abroad%20journey!`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <MessageSquare size={20} /> WhatsApp Us
              </a>
            </div>

            {/* Trust Message Bar inside Hero */}
            <div style={{
              padding: '1rem 1.25rem',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              flexWrap: 'wrap'
            }} className="hero-trust-bar">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: '#E2E8F0' }}>
                <CheckCircle2 size={15} color="#F58220" /> Personalized Guidance
              </div>
              <span style={{ opacity: 0.3 }} className="hide-mobile">•</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: '#E2E8F0' }}>
                <CheckCircle2 size={15} color="#F58220" /> University Selection
              </div>
              <span style={{ opacity: 0.3 }} className="hide-mobile">•</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: '#E2E8F0' }}>
                <CheckCircle2 size={15} color="#F58220" /> Application Support
              </div>
              <span style={{ opacity: 0.3 }} className="hide-mobile">•</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: '#E2E8F0' }}>
                <CheckCircle2 size={15} color="#F58220" /> Visa Assistance
              </div>
            </div>
          </div>

          {/* Right Column: Visual Student Photo */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', width: '100%' }}>

            {/* Main Rounded Image Container */}
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '460px',
              height: '520px',
              borderRadius: '30px 120px 30px 30px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              border: '4px solid rgba(255, 255, 255, 0.12)'
            }} className="hero-img-box">
              <img
                src={imageSrc}
                alt={imageAlt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(180deg, rgba(11, 25, 48, 0.1) 0%, rgba(11, 25, 48, 0.6) 100%)'
              }} />
            </div>

          </div>

        </div>
      </div>

      {/* Broad, Smooth Bottom Curve */}
      <div style={{
        position: 'absolute',
        bottom: '-2px',
        left: 0,
        width: '100%',
        overflow: 'hidden',
        lineHeight: 0,
        zIndex: 1,
        pointerEvents: 'none'
      }}>
        <svg
          viewBox="0 0 1440 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '200px', display: 'block' }}
          className="hero-curve-svg"
        >
          <path
            d="M0,110 C160,110 280,55 400,55 C550,55 650,140 750,140 C900,140 1080,25 1440,20 L1440,260 L0,260 Z"
            fill={bottomCurveColor}
          />
        </svg>
      </div>
    </section>
  );
}
