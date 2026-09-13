import React from 'react';

const Logo = ({ className = '', width = 220, height = 55 }) => {
  return (
    <div className={`inline-flex items-center cursor-pointer ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 250 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gradients matching website theme */}
        <defs>
          {/* Main Orange Gradient */}
          <linearGradient id="rocketBodyGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF5722" />
            <stop offset="100%" stopColor="#FFD54F" />
          </linearGradient>

          {/* Green Accent Gradient */}
          <linearGradient id="rocketFinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4CAF50" />
            <stop offset="100%" stopColor="#2E7D32" />
          </linearGradient>

          {/* Deep Brown Text Gradient */}
          <linearGradient id="textPrimaryColor" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5D4037" />
          </linearGradient>
        </defs>

        {/* Icon Section */}
        <g transform="translate(10, 5)">
          {/* Rocket Body */}
          <path
            d="M 25 15 L 35 15 C 38 15, 41 18, 41 21 L 41 33 C 41 36, 38 39, 35 39 L 25 39 L 19 27 Z"
            fill="url(#rocketBodyGradient)"
            transform="rotate(-45 28 27)"
          />
          {/* Rocket Wings (Green) */}
          <path d="M 12 37 L 18 31 L 18 43 Z" fill="url(#rocketFinGradient)" />
          <path d="M 28 21 L 34 15 L 34 27 Z" fill="url(#rocketFinGradient)" />

          {/* Connectivity Arc */}
          <path
            d="M 45 15 C 55 18, 55 36, 45 39"
            stroke="url(#textPrimaryColor)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Growth Trend Arrow */}
          <path
            d="M 10 45 L 20 35 L 30 40 L 45 25"
            stroke="url(#rocketFinGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="45" cy="25" r="3.5" fill="url(#rocketFinGradient)" />
        </g>

        {/* Typography Section */}
        <g transform="translate(70, 38)">
          <text
            fontFamily="'Segoe UI', Roboto, -apple-system, sans-serif"
            fontSize="28"
            fontWeight="800"
            letterSpacing="-0.5"
          >
            <tspan fill="url(#textPrimaryColor)">BD </tspan>
            <tspan fill="url(#rocketBodyGradient)">SMM</tspan>
          </text>
        </g>
      </svg>
    </div>
  );
};

export default Logo;