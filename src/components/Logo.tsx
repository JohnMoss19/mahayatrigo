import React from 'react';

export default function Logo({ className = "h-12 w-12", isScrolled = false }: { className?: string; isScrolled?: boolean }) {
  const color = isScrolled ? "#004d4d" : "#ffffff";
  const accent = "#ff8c00";
  const gold = "#d4af37";

  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="sunGradient" x1="50" y1="30" x2="50" y2="70" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff8c00" />
          <stop offset="100%" stopColor="#ffd700" />
        </linearGradient>
      </defs>

      {/* Sun Rays */}
      <g stroke={gold} strokeWidth="1.5" strokeLinecap="round">
        <line x1="50" y1="35" x2="50" y2="25" />
        <line x1="62" y1="38" x2="68" y2="30" />
        <line x1="72" y1="48" x2="82" y2="45" />
        <line x1="75" y1="62" x2="85" y2="65" />
        <line x1="38" y1="38" x2="32" y2="30" />
        <line x1="28" y1="48" x2="18" y2="45" />
        <line x1="25" y1="62" x2="15" y2="65" />
      </g>
      
      {/* Sun */}
      <circle cx="50" cy="55" r="22" fill="url(#sunGradient)" />
      
      {/* Trishul */}
      <path 
        d="M44 28C44 22 56 22 56 28M50 20V35M46 24V30M54 24V30" 
        stroke={gold} 
        strokeWidth="2" 
        strokeLinecap="round" 
      />
      
      {/* Swoosh / Trail */}
      <path 
        d="M25 75C25 85 60 85 85 65" 
        stroke={color} 
        strokeWidth="4" 
        strokeLinecap="round" 
        fill="none"
      />
      
      {/* Stylized M */}
      <path 
        d="M28 80V45L50 68L72 45V80" 
        stroke={color} 
        strokeWidth="8" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M28 80V45L50 68L72 45V80" 
        stroke="white" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        opacity="0.5"
      />
      
      {/* Airplane */}
      <g transform="translate(82, 62) rotate(-25)">
        <path 
          d="M0 0L12 -3L10 -8L12 -3L18 -3L12 0L12 5L8 0L0 0Z" 
          fill={color} 
        />
      </g>
    </svg>
  );
}
