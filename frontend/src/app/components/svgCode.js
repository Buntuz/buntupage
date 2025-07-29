// app/components/svgCode.ts
export const svgCode = `
<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="800" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#0A192F" stopOpacity="1" />
      <stop offset="100%" stopColor="#1E293B" stopOpacity="1" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <rect width="1440" height="800" fill="url(#grad1)" />
  <g stroke="#FF8A3C" strokeWidth="1.5" opacity="0.3">
    <path d="M200,400 L400,200 L600,300 L800,150 L1000,250 L1200,100" filter="url(#glow)" />
    <path d="M200,500 L450,600 L700,450 L950,550 L1200,400" filter="url(#glow)" />
    <path d="M300,300 L500,400 L750,200 L1000,350" filter="url(#glow)" />
  </g>
  <g fill="#FF8A3C">
    <circle cx="200" cy="400" r="6" filter="url(#glow)" />
    <circle cx="400" cy="200" r="7" filter="url(#glow)" />
    <circle cx="600" cy="300" r="5" filter="url(#glow)" />
    <circle cx="800" cy="150" r="8" filter="url(#glow)" />
    <circle cx="1000" cy="250" r="6" filter="url(#glow)" />
    <circle cx="1200" cy="100" r="9" fill="#00D1B2" filter="url(#glow)" />
  </g>
  <g fill="#00D1B2" opacity="0.6">
    <circle cx="300" cy="100" r="2" />
    <circle cx="600" cy="100" r="1.5" />
    <circle cx="900" cy="80" r="2" />
    <circle cx="1100" cy="200" r="1" />
  </g>
  <g stroke="#FF8A3C" strokeWidth="0.5" opacity="0.05">
    <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
      <path d="M 50 0 L 0 0 0 50" />
    </pattern>
    <rect width="1440" height="800" fill="url(#grid)" />
  </g>
</svg>
`;