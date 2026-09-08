import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/consultancyData';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div style={{
      position: 'fixed',
      bottom: '1.75rem',
      right: '1.75rem',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '0.5rem'
    }}>
      {/* Tooltip Box */}
      {showTooltip && (
        <div style={{
          background: '#0B1930',
          color: '#FFFFFF',
          padding: '0.65rem 1rem',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
          fontSize: '0.85rem',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          animation: 'bounceTooltip 3s infinite'
        }}>
          <span>Need help? <strong>Chat with us on WhatsApp</strong></span>
          <button
            onClick={() => setShowTooltip(false)}
            style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', padding: 0 }}
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20Aviate%20Overseas%20Education,%20I%20want%20to%20know%20about%20your%20study%20abroad%20programs!`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 25px rgba(37, 211, 102, 0.4)',
          transition: 'all 0.3s ease',
          position: 'relative'
        }}
        className="floating-wa-btn"
        title="Chat on WhatsApp"
      >
        <MessageSquare size={32} />

        {/* Pulse Notification Ring */}
        <span style={{
          position: 'absolute',
          top: '-2px',
          right: '-2px',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          backgroundColor: '#F58220',
          color: '#FFFFFF',
          fontSize: '0.7rem',
          fontWeight: 800,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid #FFFFFF'
        }}>
          1
        </span>
      </a>

      <style>{`
        .floating-wa-btn:hover {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 15px 35px rgba(37, 211, 102, 0.6) !important;
        }
        @keyframes bounceTooltip {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );
}
