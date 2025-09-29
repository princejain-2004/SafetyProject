import React from 'react';

// Flood Guardian Badge Component using inline SVG
export function FloodBadge({ size = 48, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <circle cx="12" cy="12" r="10" fill="#60A5FA"/>
      <path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" fill="#BFDBFE"/>
      <path d="M6 18C6 18 8 16 12 16C16 16 18 18 18 18" stroke="#1D4ED8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9 22H15" stroke="#1D4ED8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
}
