import React from 'react';

interface Props {
  className?: string;
  variant?: 'subtle' | 'gold' | 'blue' | 'light';
}

export const EthiopicPattern: React.FC<Props> = ({ className = '', variant = 'subtle' }) => {
  const strokeColor =
    variant === 'gold'
      ? '#D97706'
      : variant === 'blue'
      ? '#134074'
      : variant === 'light'
      ? 'rgba(255, 255, 255, 0.25)'
      : 'rgba(11, 37, 69, 0.12)';

  return (
    <div className={`pointer-events-none overflow-hidden ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-60"
      >
        <pattern id="ethiopic-lattice" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          {/* Abstract Ethiopian Geometrical Cross & Lattice Motif */}
          <path d="M40 0 L80 40 L40 80 L0 40 Z" fill="none" stroke={strokeColor} strokeWidth="1" />
          <path d="M40 10 L70 40 L40 70 L10 40 Z" fill="none" stroke={strokeColor} strokeWidth="0.7" strokeDasharray="2 2" />
          <circle cx="40" cy="40" r="6" fill="none" stroke={strokeColor} strokeWidth="1" />
          <circle cx="40" cy="40" r="2" fill={strokeColor} />
          
          {/* Corner accents */}
          <path d="M0 0 L15 0 M0 0 L0 15" stroke={strokeColor} strokeWidth="1.5" />
          <path d="M80 0 L65 0 M80 0 L80 15" stroke={strokeColor} strokeWidth="1.5" />
          <path d="M0 80 L15 80 M0 80 L0 65" stroke={strokeColor} strokeWidth="1.5" />
          <path d="M80 80 L65 80 M80 80 L80 65" stroke={strokeColor} strokeWidth="1.5" />

          {/* Connectors */}
          <line x1="40" y1="0" x2="40" y2="10" stroke={strokeColor} strokeWidth="1" />
          <line x1="40" y1="70" x2="40" y2="80" stroke={strokeColor} strokeWidth="1" />
          <line x1="0" y1="40" x2="10" y2="40" stroke={strokeColor} strokeWidth="1" />
          <line x1="70" y1="40" x2="80" y2="40" stroke={strokeColor} strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#ethiopic-lattice)" />
      </svg>
    </div>
  );
};
