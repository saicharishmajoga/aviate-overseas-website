import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, MessageSquare, ChevronDown, ArrowRight } from 'lucide-react';
import AviateLogo from './AviateLogo';
import { COMPANY_INFO } from '../data/consultancyData';

export default function Header({ onOpenCounselling }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', hasDropdown: false },
    { name: 'Programs', href: '#programs', hasDropdown: true },
    { name: 'Countries', href: '#countries', hasDropdown: true },
    { name: 'Why Choose Us', href: '#why-us', hasDropdown: false },
    { name: '3C Model', href: '#3c-model', hasDropdown: false },
    { name: 'Universities', href: '#universities', hasDropdown: false },
    { name: 'About', href: '#about-us', hasDropdown: false },
    { name: 'Contact', href: '#contact', hasDropdown: false }
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div style={{
        backgroundColor: '#061021',
        color: '#CBD5E1',
        fontSize: '0.825rem',
        padding: '0.45rem 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <a href={`tel:${COMPANY_INFO.phoneRaw}`} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#E2E8F0' }}>
              <Phone size={13} color="#F58220" /> {COMPANY_INFO.phone}
            </a>
            <span style={{ opacity: 0.3 }}>|</span>
            <a href={`mailto:${COMPANY_INFO.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#E2E8F0' }}>
              {COMPANY_INFO.email}
            </a>
            <span style={{ opacity: 0.3 }}>|</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#94A3B8' }}>
              📍 Visakhapatnam, Andhra Pradesh
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span className="badge" style={{ background: 'rgba(245, 130, 32, 0.15)', color: '#F58220', border: '1px solid rgba(245, 130, 32, 0.3)' }}>
              🔥 Timor Leste MBBS Open
            </span>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#25D366', fontWeight: 600 }}
            >
              <MessageSquare size={13} /> WhatsApp Direct
            </a>
          </div>
        </div>
      </div>

      {/* Eduo-Inspired Navbar */}
      <header style={{
        position: 'sticky',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 900,
        backgroundColor: 'rgba(11, 25, 48, 0.96)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: isScrolled ? '0.75rem 0' : '1.1rem 0',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Brand Logo */}
          <a href="#hero" style={{ display: 'flex', alignItems: 'center' }}>
            <AviateLogo theme="light" size={isScrolled ? 'small' : 'medium'} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.6rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  color: '#E2E8F0',
                  fontSize: '0.925rem',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#F58220'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#E2E8F0'}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Eduo-Style Pill CTA Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            
            {/* WhatsApp Pill */}
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20Aviate,%20I%20want%20to%20know%20about%20study%20abroad%20programs`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{
                borderRadius: '9999px',
                padding: '0.55rem 1.1rem',
                fontSize: '0.875rem'
              }}
              title="Chat on WhatsApp"
            >
              <MessageSquare size={16} />
              <span className="hide-mobile">WhatsApp</span>
            </a>

            {/* Eduo Rounded Pill Free Counselling Button */}
            <button
              onClick={() => onOpenCounselling()}
              className="btn"
              style={{
                backgroundColor: '#FFFFFF',
                color: '#0B1930',
                borderRadius: '9999px',
                padding: '0.65rem 1.5rem',
                fontSize: '0.925rem',
                fontWeight: 700,
                boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F58220';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.color = '#0B1930';
              }}
            >
              Free Counselling
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#FFFFFF',
                padding: '0.4rem',
                display: 'none'
              }}
              className="mobile-toggle"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '110px',
          left: 0,
          width: '100%',
          backgroundColor: '#0B1930',
          borderBottom: '2px solid #F58220',
          padding: '1.5rem',
          zIndex: 899,
          boxShadow: '0 20px 30px rgba(0,0,0,0.5)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: '#FFFFFF',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  padding: '0.5rem 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                {link.name}
              </a>
            ))}
            <div style={{ marginTop: '0.5rem' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCounselling();
                }}
                className="btn btn-orange"
                style={{ width: '100%', borderRadius: '9999px' }}
              >
                Book Free Counselling
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 992px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
          .hide-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
