import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const svgCode = `
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

export default function Home() {
  return (
    <div className={`min-h-screen bg-gray-950 text-white ${inter.className}`}>
      {/* Navigation */}
      <nav className="bg-gray-950 border-b border-orange-500 px-8 py-5 flex justify-between items-center sticky top-0 z-50 backdrop-blur-md">
        <h1 className="text-2xl font-bold text-orange-400 tracking-wide">Buntu<span className="text-cyan-400">AI</span></h1>
        <ul className="flex gap-8 text-sm font-medium">
          <li className="hover:text-orange-300 cursor-pointer transition-colors">Home</li>
          <li className="hover:text-cyan-300 cursor-pointer transition-colors">About</li>
          <li className="hover:text-orange-300 cursor-pointer transition-colors">Services</li>
          <li className="hover:text-cyan-300 cursor-pointer transition-colors">Contact</li>
        </ul>
      </nav>

      {/* Hero Banner */}
      <section 
        className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-transparent text-white text-center py-32 px-6 overflow-hidden"
      >
        {/* Decorative Circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-400 rounded-full opacity-20 animate-pulse delay-1000"></div>

        <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Empowering <span className="text-cyan-300">AI</span> & <span className="text-orange-300">Vision</span>
        </h2>
        <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto">
          Advanced Data Science, Computer Vision, and AI Solutions for the Future.
        </p>
        <button className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-orange-500/30 transform hover:scale-105 transition-all duration-300">
          Explore Our Services
        </button>
      </section>

      {/* Main Content */}
      {/* Hero Banner with Vector Background */}
<section 
  className="relative text-white text-center py-32 px-6 overflow-hidden"
  style={{
    backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(svgCode)}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black bg-opacity-40"></div>

  <div className="relative z-10">
    <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
      Building <span className="text-orange-300">AI</span> That <span className="text-cyan-300">Sees</span>, <span className="text-orange-300">Thinks</span>, and <span className="text-cyan-300">Acts</span>
    </h2>
    <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-4xl mx-auto">
      Specializing in <strong>Computer Vision</strong>, <strong>Data Intelligence</strong>, and <strong>AI Systems</strong> that power the future.
    </p>
    <button className="bg-gradient-to-r from-orange-500 via-orange-400 to-cyan-400 text-gray-900 font-bold py-4 px-10 rounded-full shadow-2xl hover:shadow-orange-500/40 transform hover:scale-105 transition-all duration-300 text-lg">
      Start Your AI Journey
    </button>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Let’s build smart, scalable AI solutions tailored to your needs.
        </p>
        <button className="bg-gradient-to-r from-orange-500 to-cyan-500 text-white font-bold py-3 px-10 rounded-full shadow-xl hover:shadow-orange-500/30 transform hover:scale-105 transition-all duration-300">
          Get in Touch
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-500 text-sm py-8 text-center border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} Buntu<span className="text-orange-400">AI</span>. All rights reserved.</p>
        <p className="mt-2">Crafted with precision for the future of technology.</p>
      </footer>
    </div>
  );
}