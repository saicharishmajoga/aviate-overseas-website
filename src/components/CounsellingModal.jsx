import React, { useState } from 'react';
import { X, CheckCircle, Send, PhoneCall, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/consultancyData';

export default function CounsellingModal({ isOpen, onClose, defaultProgram = '', defaultCountry = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    program: defaultProgram || 'BE / B.Tech',
    country: defaultCountry || 'USA',
    intakeYear: '2026',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setError('Please fill in all required fields (Name, Phone, Email).');
      return;
    }

    setLoading(true);
    // Simulate high-speed form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setError('');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={resetAndClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={resetAndClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: '#F1F5F9',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#475569'
          }}
          aria-label="Close Modal"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              background: '#DCFCE7',
              color: '#16A34A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto'
            }}>
              <CheckCircle size={44} />
            </div>

            <h3 style={{ fontSize: '1.75rem', marginBottom: '0.75rem', color: '#0B1930' }}>
              Counselling Request Received!
            </h3>
            <p style={{ color: '#475569', marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: 1.5 }}>
              Thank you, <strong>{formData.fullName}</strong>. Our senior education counsellor for Visakhapatnam will contact you shortly on <strong>{formData.phone}</strong>.
            </p>

            <div style={{
              background: '#F8FAFC',
              padding: '1.25rem',
              borderRadius: '12px',
              border: '1px solid #E2E8F0',
              marginBottom: '2rem',
              textAlign: 'left'
            }}>
              <p style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '0.5rem' }}><strong>Summary of your enquiry:</strong></p>
              <ul style={{ fontSize: '0.95rem', color: '#0F172A', paddingLeft: '1.2rem', lineHeight: 1.6 }}>
                <li>Program: {formData.program}</li>
                <li>Preferred Country: {formData.country}</li>
                <li>Target Intake: {formData.intakeYear}</li>
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20Aviate,%20I%20just%20submitted%20a%20counselling%20request%20for%20${encodeURIComponent(formData.program)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                Chat Instantly on WhatsApp
              </a>
              <button onClick={resetAndClose} className="btn btn-navy">
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '1.75rem' }}>
              <span className="section-tag">
                <PhoneCall size={14} /> 100% Free Consultation
              </span>
              <h3 style={{ fontSize: '1.75rem', color: '#0B1930', marginBottom: '0.5rem' }}>
                Book Your Free Study Abroad Session
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.95rem' }}>
                Get expert advice on admissions, scholarships, fees, and visas from Aviate counsellors.
              </p>
            </div>

            {error && (
              <div style={{
                background: '#FEF2F2',
                color: '#991B1B',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                marginBottom: '1.25rem',
                fontSize: '0.9rem',
                border: '1px solid #FCA5A5'
              }}>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#1E293B', marginBottom: '0.35rem' }}>
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
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#1E293B', marginBottom: '0.35rem' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 94405 80444"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#1E293B', marginBottom: '0.35rem' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#1E293B', marginBottom: '0.35rem' }}>
                    Program Interested In
                  </label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.95rem',
                      backgroundColor: '#FFFFFF'
                    }}
                  >
                    <option value="BE / B.Tech">Bachelor of Engineering (BE / B.Tech)</option>
                    <option value="Masters MS/MBA">Masters (MS / MBA)</option>
                    <option value="MBBS Abroad">MBBS Abroad (Timor Leste / Russia / Georgia)</option>
                    <option value="Not Sure Yet">Not Sure Yet</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#1E293B', marginBottom: '0.35rem' }}>
                    Preferred Country
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.95rem',
                      backgroundColor: '#FFFFFF'
                    }}
                  >
                    <option value="Timor Leste (NEW)">Timor Leste (NEW MBBS Hub)</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ireland">Ireland</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Russia">Russia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Philippines">Philippines</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#1E293B', marginBottom: '0.35rem' }}>
                  Target Intake
                </label>
                <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}>
                    <input type="radio" name="intakeYear" value="2026" checked={formData.intakeYear === '2026'} onChange={handleChange} /> 2026 Intake
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}>
                    <input type="radio" name="intakeYear" value="2027" checked={formData.intakeYear === '2027'} onChange={handleChange} /> 2027 Intake
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-orange"
                style={{ width: '100%', marginTop: '0.5rem', padding: '0.95rem' }}
                disabled={loading}
              >
                {loading ? 'Submitting Request...' : (
                  <>
                    <Send size={18} /> Request Free Counselling Now
                  </>
                )}
              </button>

              <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#64748B', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}>
                <ShieldCheck size={14} color="#16A34A" /> 100% Confidential. Zero spam. We never share your data.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
