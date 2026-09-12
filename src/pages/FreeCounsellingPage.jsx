import React, { useState } from 'react';
import Hero from '../components/Hero';
import {
  ShieldCheck,
  GraduationCap,
  Landmark,
  CheckCircle2,
  Send,
  MessageSquare,
  PhoneCall,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/consultancyData';

export default function FreeCounsellingPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    program: 'Undergraduate Abroad',
    country: 'USA',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setError('Please fill in all required fields (Full Name, Phone Number, and Email Address).');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 650);
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('counselling-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      id: 'visa',
      title: 'Free Visa Guidance',
      desc: 'Get expert guidance on visa requirements, documentation and the overall visa application process for your chosen study destination.',
      icon: ShieldCheck,
      badge: '99.2% Visa Approval Rate'
    },
    {
      id: 'admission',
      title: 'Free Admission Guidance',
      desc: 'Get personalized assistance in choosing suitable courses and universities, understanding admission requirements and preparing your application.',
      icon: GraduationCap,
      badge: '500+ Partner Universities'
    },
    {
      id: 'loan',
      title: 'Free Education Loan Guidance',
      desc: 'Understand available education loan options, eligibility requirements and documentation needed to help finance your overseas education.',
      icon: Landmark,
      badge: 'Transparent Financial Planning'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Submit Your Enquiry',
      desc: 'Fill in your basic details and tell us about your study-abroad goals.'
    },
    {
      number: '02',
      title: 'Speak With Our Counsellor',
      desc: 'Our counsellor will connect with you and understand your academic goals, budget and preferences.'
    },
    {
      number: '03',
      title: 'Get Personalized Guidance',
      desc: 'Receive guidance on suitable programs, universities, countries, admission, visa and education financing.'
    },
    {
      number: '04',
      title: 'Plan Your Next Step',
      desc: 'Move forward with a clear and personalized study-abroad plan.'
    }
  ];

  return (
    <div className="free-counselling-page">
      {/* 1. HERO SECTION */}
      <Hero
        badgeTag=""
        badgeIcon={null}
        titlePrefix="Start Your Overseas Education Journey With "
        titleHighlight="Free Expert Guidance"
        titleSuffix=""
        subtitle="Get personalized guidance from our overseas education experts and take the first step towards finding the right course, university and destination for your future."
        imageSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
        imageAlt="Free Study Abroad Counselling Session at Aviate"
        bottomCurveColor="#F4F7FB"
        onOpenCounselling={scrollToForm}
      />

      {/* 2. SERVICES INCLUDED SECTION on Light Blue (#F4F7FB) */}
      <section className="section-padding" style={{ backgroundColor: '#F4F7FB' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              What You Get With Our Free Counselling
            </h2>
            <p className="section-subtitle">
              We provide end-to-end guidance to help students and parents make confident, informed decisions for international education.
            </p>
          </div>

          <div className="grid-3" style={{ gap: '2rem' }}>
            {services.map((s) => {
              const IconComp = s.icon;
              return (
                <div
                  key={s.id}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '20px',
                    padding: '2.5rem 2rem',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 10px 30px rgba(11, 25, 48, 0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  className="service-card"
                >
                  {/* Top Badge */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <span className="badge badge-orange" style={{ fontSize: '0.78rem', padding: '0.3rem 0.75rem' }}>
                      {s.badge}
                    </span>
                  </div>

                  {/* Icon Box */}
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #0B1930, #1E3A8A)',
                    color: '#F58220',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    boxShadow: '0 8px 20px rgba(11, 25, 48, 0.15)'
                  }}>
                    <IconComp size={30} />
                  </div>

                  {/* Heading */}
                  <h3 style={{ fontSize: '1.35rem', color: '#0B1930', fontWeight: 800, marginBottom: '0.85rem', lineHeight: 1.25 }}>
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.65, flex: 1, marginBottom: '1.5rem' }}>
                    {s.desc}
                  </p>

                  {/* Bottom Accent Strip */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: '#F58220',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid #F1F5F9'
                  }}>
                    <span>Included in Free Session</span> <ArrowRight size={16} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <style>{`
          .service-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(11, 25, 48, 0.12) !important;
            border-color: #F58220 !important;
          }
        `}</style>
      </section>

      {/* 3. HOW OUR FREE COUNSELLING WORKS on Light Blue (#F4F7FB) */}
      <section className="section-padding" style={{ backgroundColor: '#F4F7FB', paddingBottom: 0 }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              How It Works
            </h2>
            <p className="section-subtitle">
              Four simple steps to get clear, personalized guidance for your overseas education goals.
            </p>
          </div>

          <div className="grid-4" style={{ gap: '1.5rem' }}>
            {steps.map((st, idx) => (
              <div
                key={st.number}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '2rem 1.5rem',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.03)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Step Number Tag */}
                <div style={{
                  fontSize: '1.75rem',
                  fontWeight: 900,
                  color: '#F58220',
                  letterSpacing: '-0.02em',
                  marginBottom: '1rem',
                  display: 'inline-block'
                }}>
                  {st.number}
                </div>

                <h3 style={{ fontSize: '1.15rem', color: '#0B1930', fontWeight: 800, marginBottom: '0.65rem' }}>
                  {st.title}
                </h3>

                <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.6, flex: 1 }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Seamless Color Blend from Light Blue (#F4F7FB) into Soft Blush Pink (#F8E4E1) before Counselling Form */}
        <div style={{
          width: '100%',
          height: '140px',
          background: 'linear-gradient(180deg, #F4F7FB 0%, #F8E4E1 100%)',
          marginTop: '3.5rem'
        }} />
      </section>

      {/* 4. COUNSELLING FORM SECTION on Soft Blush Pink (#F8E4E1) */}
      <section id="counselling-form" className="section-padding" style={{ backgroundColor: '#F8E4E1' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #0B1930, #162A45)',
            borderRadius: '28px',
            padding: '4rem 3rem',
            color: '#FFFFFF',
            boxShadow: '0 25px 50px -12px rgba(11, 25, 48, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            position: 'relative',
            overflow: 'hidden'
          }} className="form-card-box">

            {/* Subtle Glow Accent */}
            <div style={{
              position: 'absolute',
              bottom: '-20%',
              right: '-10%',
              width: '450px',
              height: '450px',
              background: 'radial-gradient(circle, rgba(245,130,32,0.25) 0%, rgba(11,25,48,0) 70%)',
              pointerEvents: 'none'
            }} />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: '3.5rem', alignItems: 'center' }} className="form-grid">

              {/* Left Content Column */}
              <div>
                <h2 style={{ fontSize: '2.5rem', color: '#FFFFFF', fontWeight: 800, lineHeight: 1.2, marginBottom: '1.25rem' }}>
                  Book Your Free Counselling Session
                </h2>
                <p style={{ color: '#CBD5E1', fontSize: '1.05rem', lineHeight: 1.65, marginBottom: '2rem' }}>
                  Fill out your details to schedule a dedicated 1-on-1 advisory session with senior counsellors at Aviate Overseas Education Visakhapatnam.
                </p>

                {/* Trust Points */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: '#E2E8F0' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(245,130,32,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F58220', flexShrink: 0 }}>
                      <CheckCircle2 size={16} />
                    </div>
                    <span>Zero hidden fees or registration charges</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: '#E2E8F0' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(245,130,32,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F58220', flexShrink: 0 }}>
                      <CheckCircle2 size={16} />
                    </div>
                    <span>Course, university & country shortlist tailored to your budget</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: '#E2E8F0' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(245,130,32,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F58220', flexShrink: 0 }}>
                      <CheckCircle2 size={16} />
                    </div>
                    <span>Step-by-step loan eligibility & visa approval roadmap</span>
                  </div>
                </div>

                {/* Direct Phone Bar */}
                <div style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  padding: '1.25rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <PhoneCall size={28} color="#F58220" />
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#94A3B8', textTransform: 'uppercase' }}>Prefer to call us right now?</div>
                    <a href={`tel:${COMPANY_INFO.phoneRaw}`} style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF' }}>
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

              </div>

              {/* Right Form Card */}
              <div style={{
                backgroundColor: '#FFFFFF',
                color: '#0B1930',
                borderRadius: '20px',
                padding: '2.5rem 2rem',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
              }}>
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                    <div style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: '#DCFCE7',
                      color: '#16A34A',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.25rem auto'
                    }}>
                      <CheckCircle2 size={38} />
                    </div>
                    <h3 style={{ fontSize: '1.6rem', color: '#0B1930', marginBottom: '0.5rem', fontWeight: 800 }}>
                      Session Booked Successfully!
                    </h3>
                    <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                      Thank you, <strong>{formData.fullName}</strong>. An Aviate senior counsellor in Visakhapatnam will connect with you on <strong>{formData.phone}</strong> shortly to discuss your <strong>{formData.program}</strong> options.
                    </p>

                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20Aviate,%20I%20just%20booked%20a%20Free%20Counselling%20session%20for%20${encodeURIComponent(formData.program)}!`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                      style={{ width: '100%', borderRadius: '12px' }}
                    >
                      <MessageSquare size={18} /> Connect Instantly on WhatsApp
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                    <h3 style={{ fontSize: '1.35rem', color: '#0B1930', fontWeight: 800, marginBottom: '0.25rem' }}>
                      Book Free Counselling
                    </h3>

                    {error && (
                      <div style={{ background: '#FEF2F2', color: '#991B1B', padding: '0.65rem', borderRadius: '8px', fontSize: '0.85rem' }}>
                        {error}
                      </div>
                    )}

                    {/* Full Name */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1E293B', marginBottom: '0.3rem' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        style={{
                          width: '100%',
                          padding: '0.7rem 0.9rem',
                          borderRadius: '8px',
                          border: '1px solid #CBD5E1',
                          fontSize: '0.925rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    {/* Phone & Email */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1E293B', marginBottom: '0.3rem' }}>
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Enter phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          style={{
                            width: '100%',
                            padding: '0.7rem 0.9rem',
                            borderRadius: '8px',
                            border: '1px solid #CBD5E1',
                            fontSize: '0.925rem',
                            outline: 'none'
                          }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1E293B', marginBottom: '0.3rem' }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter email address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          style={{
                            width: '100%',
                            padding: '0.7rem 0.9rem',
                            borderRadius: '8px',
                            border: '1px solid #CBD5E1',
                            fontSize: '0.925rem',
                            outline: 'none'
                          }}
                        />
                      </div>
                    </div>

                    {/* Program & Country */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1E293B', marginBottom: '0.3rem' }}>
                          Program Interested In
                        </label>
                        <select
                          name="program"
                          value={formData.program}
                          onChange={handleChange}
                          style={{
                            width: '100%',
                            padding: '0.7rem 0.9rem',
                            borderRadius: '8px',
                            border: '1px solid #CBD5E1',
                            fontSize: '0.9rem',
                            backgroundColor: '#FFFFFF'
                          }}
                        >
                          <option value="Undergraduate Abroad">Undergraduate Abroad</option>
                          <option value="Masters (MS / MBA)">Masters (MS / MBA)</option>
                          <option value="MBBS Abroad">MBBS Abroad</option>
                          <option value="Not Sure Yet">Not Sure Yet</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1E293B', marginBottom: '0.3rem' }}>
                          Country Preference
                        </label>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          style={{
                            width: '100%',
                            padding: '0.7rem 0.9rem',
                            borderRadius: '8px',
                            border: '1px solid #CBD5E1',
                            fontSize: '0.9rem',
                            backgroundColor: '#FFFFFF'
                          }}
                        >
                          <option value="USA">USA</option>
                          <option value="UK">UK</option>
                          <option value="Canada">Canada</option>
                          <option value="Australia">Australia</option>
                          <option value="Germany">Germany</option>
                          <option value="Timor Leste">Timor Leste</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Optional Message Field */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1E293B', marginBottom: '0.3rem' }}>
                        Message / Questions (Optional)
                      </label>
                      <textarea
                        name="message"
                        placeholder="Tell us about your academic background or specific queries..."
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '0.7rem 0.9rem',
                          borderRadius: '8px',
                          border: '1px solid #CBD5E1',
                          fontSize: '0.9rem',
                          outline: 'none',
                          resize: 'vertical'
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-orange btn-lg"
                      style={{ width: '100%', marginTop: '0.3rem' }}
                      disabled={loading}
                    >
                      {loading ? 'Booking Session...' : (
                        <>
                          <Send size={18} /> Book Free Counselling
                        </>
                      )}
                    </button>

                    <p style={{ textAlign: 'center', fontSize: '0.78rem', color: '#64748B', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem', marginTop: '0.2rem' }}>
                      <ShieldCheck size={14} color="#16A34A" /> Your information is 100% confidential. No spam guaranteed.
                    </p>

                  </form>
                )}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. DEDICATED WHATSAPP CTA SECTION (Clean Light / Pink Shade background, blue background removed) */}
      <section className="section-padding" style={{ backgroundColor: '#F8E4E1', color: '#0B1930', textAlign: 'center', paddingTop: '2rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: '#DCFCE7',
            color: '#16A34A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem auto',
            boxShadow: '0 8px 20px rgba(22, 163, 74, 0.15)'
          }}>
            <MessageSquare size={32} />
          </div>

          <h2 style={{ fontSize: '2.25rem', color: '#0B1930', fontWeight: 800, marginBottom: '1rem' }}>
            Have Questions? Talk to Us on WhatsApp
          </h2>

          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.65, marginBottom: '2rem' }}>
            Get quick answers from our counselling team and learn more about your overseas education options.
          </p>

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20Aviate%20Team,%20I%20have%20questions%20about%20Free%20Counselling%20and%20study%20abroad%20options.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-lg"
            style={{ display: 'inline-flex', padding: '0.9rem 2.2rem', fontSize: '1.05rem', borderRadius: '9999px' }}
          >
            <MessageSquare size={22} /> Chat on WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
}
