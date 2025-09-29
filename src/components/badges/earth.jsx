import React from 'react';

// Quake Conqueror Badge Component using inline SVG
export function EarthquakeBadge({ size = 48, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <circle cx="12" cy="12" r="10" fill="#FBBF24"/>
      <path d="M7 12H9L11 9L13 15L15 12H17" stroke="#92400E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 4V6M12 18V20M4 12H6M18 12H20" stroke="#92400E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
}
