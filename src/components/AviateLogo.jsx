import React from 'react';

/**
 * Aviate Overseas Education Official Brand Logo Component
 * Renders the exact uploaded official logo image asset for 100% visual perfection.
 */
export default function AviateLogo({ theme = 'light', size = 'medium', className = '' }) {
  const height = size === 'large' ? 58 : size === 'small' ? 38 : 48;

  return (
    <div className={`aviate-logo-wrapper ${className}`} style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}>
      <img
        src="/aviate-logo.jpg"
        alt="Aviate Overseas Education"
        style={{
          height: `${height}px`,
          width: 'auto',
          display: 'block',
          objectFit: 'contain',
          borderRadius: '4px',
          mixBlendMode: theme === 'dark' ? 'multiply' : 'normal'
        }}
      />
    </div>
  );
}
