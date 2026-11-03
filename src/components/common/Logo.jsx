import React from 'react';
import { Link } from 'react-router-dom';

export const Logo = ({ 
  variant = 'dark', 
  size = 'md', 
  showTagline = true, 
  asLink = true,
  className = '' 
}) => {
  // Color tokens based on variant
  const cupColor = variant === 'light' ? '#FAF6F0' : '#231713';
  const accentColor = '#C68B59'; // Warm caramel
  const wheatColor = variant === 'light' ? '#94A68C' : '#5B6B52'; // Muted sage
  const textColor = variant === 'light' ? 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]' : 'text-espresso-800';
  const subtextColor = variant === 'light' ? 'text-cream-100 font-bold tracking-wider drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]' : 'text-espresso-600/90';

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl'
  };

  const content = (
    <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
      {/* Handcrafted Emblem SVG: Ceramic Cup & Intertwined Wheat Sheaves */}
      <div className={`relative shrink-0 ${iconSizes[size]} transition-transform duration-300 group-hover:scale-105`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Wheat stalk - left branch */}
          <path
            d="M32 72 C28 54 30 38 42 22"
            stroke={wheatColor}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Left wheat grains */}
          <ellipse cx="38" cy="26" rx="2.4" ry="5.5" transform="rotate(35 38 26)" fill={wheatColor} />
          <ellipse cx="32" cy="36" rx="2.4" ry="5.5" transform="rotate(28 32 36)" fill={wheatColor} />
          <ellipse cx="28" cy="48" rx="2.4" ry="5.5" transform="rotate(18 28 48)" fill={wheatColor} />
          <ellipse cx="27" cy="60" rx="2.4" ry="5.5" transform="rotate(8 27 60)" fill={wheatColor} />

          {/* Wheat stalk - right branch */}
          <path
            d="M68 72 C72 54 70 38 58 22"
            stroke={wheatColor}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Right wheat grains */}
          <ellipse cx="62" cy="26" rx="2.4" ry="5.5" transform="rotate(-35 62 26)" fill={wheatColor} />
          <ellipse cx="68" cy="36" rx="2.4" ry="5.5" transform="rotate(-28 68 36)" fill={wheatColor} />
          <ellipse cx="72" cy="48" rx="2.4" ry="5.5" transform="rotate(-18 72 48)" fill={wheatColor} />
          <ellipse cx="73" cy="60" rx="2.4" ry="5.5" transform="rotate(-8 73 60)" fill={wheatColor} />

          {/* Saucer */}
          <path
            d="M26 78 C36 84 64 84 74 78"
            stroke={accentColor}
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* Coffee Cup Body */}
          <path
            d="M30 46 C30 68 70 68 70 46 L30 46 Z"
            fill={cupColor}
            stroke={accentColor}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Cup Rim highlight */}
          <ellipse cx="50" cy="46" rx="20" ry="3.5" stroke={accentColor} strokeWidth="2.2" fill="none" />

          {/* Cup Handle */}
          <path
            d="M70 50 C79 50 82 55 82 60 C82 65 77 69 69 69"
            stroke={accentColor}
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="none"
          />

          {/* Rising Steam Swirls */}
          <path
            d="M44 38 C42 34 46 30 44 26 C42 22 46 18 44 14"
            stroke={accentColor}
            strokeWidth="2"
            strokeLinecap="round"
            className="opacity-80"
          />
          <path
            d="M50 37 C48 31 53 27 51 21 C49 16 53 12 51 8"
            stroke={accentColor}
            strokeWidth="2.2"
            strokeLinecap="round"
            className="opacity-95"
          />
          <path
            d="M56 38 C54 34 58 30 56 26 C54 22 58 18 56 14"
            stroke={accentColor}
            strokeWidth="2"
            strokeLinecap="round"
            className="opacity-80"
          />
        </svg>
      </div>

      {/* Typography Wordmark */}
      <div className="flex flex-col text-left">
        <span
          className={`font-serif font-bold tracking-tight leading-none ${titleSizes[size]} ${textColor} transition-colors duration-200 group-hover:text-caramel-400`}
        >
          Jeff's Roast <span className="text-caramel-400 font-serif italic font-normal">&amp;</span> Rise
        </span>
        {showTagline && (
          <span
            className={`font-sans tracking-widest-editorial text-[9px] sm:text-[10px] uppercase font-semibold mt-1 ${subtextColor}`}
          >
            Roastery &amp; Sourdough Hearth
          </span>
        )}
      </div>
    </div>
  );

  if (asLink) {
    return (
      <Link to="/" className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-caramel-400 rounded-lg">
        {content}
      </Link>
    );
  }

  return content;
};
export default Logo;

