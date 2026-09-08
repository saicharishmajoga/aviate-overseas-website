import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, PhoneCall, Sparkles, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/consultancyData';

export default function LeadFormSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    program: 'BE / B.Tech',
    country: 'USA',
    intakeYear: '2026'
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
      setError('Please complete all required fields (Full Name, Phone Number, Email Address).');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact-form" className="section-padding" style={{ backgroundColor: '#FDF8F6' }}>
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

          {/* Glow Graphic Accent */}
          <div style={{
            position: 'absolute',
            bottom: '-20%',
            right: '-10%',
            width: '450px',
            height: '450px',
            background: 'radial-gradient(circle, rgba(245,130,32,0.25) 0%, rgba(11,25,48,0) 70%)',
            pointerEvents: 'none'
          }} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '3.5rem', alignItems: 'center' }} className="form-grid">

            {/* Left Content */}
            <div>
              <span className="section-tag section-tag-navy" style={{ marginBottom: '1rem' }}>
                <Sparkles size={15} /> 100% Free Advisory Session
              </span>
              <h2 style={{ fontSize: '2.5rem', color: '#FFFFFF', fontWeight: 800, lineHeight: 1.2, marginBottom: '1.25rem' }}>
                Ready to Start Your Study Abroad Journey?
              </h2>
              <p style={{ color: '#CBD5E1', fontSize: '1.05rem', lineHeight: 1.65, marginBottom: '2rem' }}>
                Speak with our experienced counsellors and get personalized guidance based on your goals, budget and preferred destination.
              </p>

              {/* Trust Bullet List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: '#E2E8F0' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(245,130,32,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F58220' }}>
                    <CheckCircle2 size={16} />
                  </div>
                  <span>Direct 1-on-1 profile evaluation with Pavan Sir & team</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: '#E2E8F0' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(245,130,32,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F58220' }}>
                    <CheckCircle2 size={16} />
                  </div>
                  <span>Complete breakdown of fees, scholarships, & living expenses</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: '#E2E8F0' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(245,130,32,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F58220' }}>
                    <CheckCircle2 size={16} />
                  </div>
                  <span>99.2% Visa approval record with 9-month advance prep</span>
                </div>
              </div>

              {/* Contact Direct Strip */}
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
                  <div style={{ fontSize: '0.8rem', color: '#94A3B8', textTransform: 'uppercase' }}>Prefer calling directly?</div>
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
                  <h3 style={{ fontSize: '1.6rem', color: '#0B1930', marginBottom: '0.5rem' }}>
                    Thank You, {formData.fullName}!
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                    Your counselling request has been registered. An Aviate senior counsellor in Visakhapatnam will reach out to you on <strong>{formData.phone}</strong> shortly.
                  </p>
                  
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20Aviate,%20I%20just%20filled%20the%20enquiry%20form%20for%20${encodeURIComponent(formData.program)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{ width: '100%' }}
                  >
                    <MessageSquare size={18} /> Connect Instantly on WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                  <h3 style={{ fontSize: '1.35rem', color: '#0B1930', fontWeight: 800, marginBottom: '0.25rem' }}>
                    Get Free Counselling
                  </h3>

                  {error && (
                    <div style={{ background: '#FEF2F2', color: '#991B1B', padding: '0.65rem', borderRadius: '8px', fontSize: '0.85rem' }}>
                      {error}
                    </div>
                  )}

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

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1E293B', marginBottom: '0.3rem' }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
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
                        placeholder="Enter your email address"
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
                        <option value="BE / B.Tech">BE / B.Tech</option>
                        <option value="MS / Masters">MS</option>
                        <option value="MBA">MBA</option>
                        <option value="MBBS Abroad">MBBS</option>
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
                        <option value="Ireland">Ireland</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Timor Leste (NEW)">Timor Leste (NEW MBBS)</option>
                        <option value="Russia">Russia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-orange btn-lg"
                    style={{ width: '100%', marginTop: '0.5rem' }}
                    disabled={loading}
                  >
                    {loading ? 'Registering...' : (
                      <>
                        <Send size={18} /> Get Free Counselling
                      </>
                    )}
                  </button>

                  <p style={{ textAlign: 'center', fontSize: '0.78rem', color: '#64748B', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem', marginTop: '0.2rem' }}>
                    <ShieldCheck size={14} color="#16A34A" /> Your information is safe with us and will only be used to contact you regarding your enquiry.
                  </p>

                </form>
              )}
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .form-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .form-card-box { padding: 2.5rem 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
