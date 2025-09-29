import React from 'react';

// Fire Fighter Badge Component using inline SVG
export function FireBadge({ size = 48, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <circle cx="12" cy="12" r="10" fill="#F87171"/>
      <path d="M10.5 13C10.5 13 12 10 12 10C12 10 13.5 13 13.5 13C13.5 14.3807 12.3807 15.5 11 15.5C9.61929 15.5 8.5 14.3807 8.5 13C8.5 11.6193 9.61929 10.5 11 10.5C12.3807 10.5 13.5 11.6193 13.5 13Z" fill="#FBBF24"/>
      <path d="M12 18V22" stroke="#EF4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9 19L15 19" stroke="#EF4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
}

// Example usage:
// <FireBadge size={64} className="mx-auto" />
