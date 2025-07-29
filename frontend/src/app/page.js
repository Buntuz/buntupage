// app/page.js
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
    <>
       {/* Hero Banner with Animations */}

        <section className="relative min-h-screen flex items-center justify-center text-white text-center overflow-hidden px-6 py-32">
  {/* Video Background */}
  <div className="absolute inset-0 z-0">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
      poster="/assets/video-placeholder.jpg" // Optional: fallback image
    >
      <source src="/assets/hero-loop.mp4" type="video/mp4" />
      {/* Fallback for browsers that don't support video */}
      <img
        src="/assets/fallback-bg.jpg"
        alt="Background"
        className="w-full h-full object-cover"
      />
    </video>

    {/* Overlay Gradient to Improve Text Readability */}
    <div
      className="absolute inset-0 z-10 opacity-80"
      style={{
        background: `linear-gradient(135deg, rgba(10, 25, 47, 0.7) 0%, rgba(30, 41, 59, 0.6) 100%),
                      radial-gradient(circle at 30% 70%, rgba(255, 138, 60, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 70% 30%, rgba(0, 209, 178, 0.2) 0%, transparent 50%)`,
      }}
    ></div>
  </div>

  {/* Floating Particles */}
  <div className="absolute inset-0 z-20 pointer-events-none">
    <div className="particle absolute w-2 h-2 bg-orange-400 rounded-full animate-float1 opacity-60"></div>
    <div className="particle absolute w-1 h-1 bg-cyan-400 rounded-full animate-float2 opacity-70"></div>
    <div className="particle absolute w-1 h-1 bg-orange-300 rounded-full animate-float3 opacity-50"></div>
    <div className="particle absolute w-2 h-2 bg-cyan-300 rounded-full animate-float1 opacity-40 delay-1000"></div>
  </div>

  {/* Glowing Orbs (Decorative) */}
  <div className="absolute top-1/4 left-10 w-40 h-40 bg-orange-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
  <div className="absolute bottom-1/4 right-10 w-52 h-52 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>

  {/* Content */}
  <div className="relative z-30 max-w-6xl mx-auto space-y-8">
    <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight animate-fade-in-up">
      Empowering{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-cyan-300">
        AI
      </span>{' '}
      & <span className="text-orange-300">Vision</span>
    </h2>
    <p className="text-lg md:text-2xl text-gray-100 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
      Advanced Data Science, Computer Vision, and AI Systems that{' '}
      <strong>see</strong>, <strong>learn</strong>, and <strong>transform</strong>.
    </p>
    <button className="relative group bg-white text-orange-600 font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-orange-500/40 transform hover:scale-105 transition-all duration-300 overflow-hidden z-20 mt-6 inline-block">
      <span className="relative z-10">Explore Our Services</span>
      {/* Shine Effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-white via-orange-100 to-white -translate-x-full group-hover:translate-x-full transition-transform duration-700 z-0"></span>
    </button>
  </div>
</section>

      {/* Main Content */}
      {/* Hero Banner with Vector Background */}
        {/* Hero Banner with Vector Background */}
        <section
          className="relative text-white text-center py-40 px-6 overflow-hidden min-h-screen flex items-center justify-center"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1440' height='800' viewBox='0 0 1440 800' preserveAspectRatio='xMidYMid slice'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stopColor='%230A192F' stopOpacity='1'/%3E%3Cstop offset='100%25' stopColor='%231E293B' stopOpacity='1'/%3E%3C/linearGradient%3E%3Cfilter id='glow'%3E%3CfeGaussianBlur stdDeviation='3' result='coloredBlur'/%3E%3CfeMerge%3E%3CfeMergeNode in='coloredBlur'/%3E%3CfeMergeNode in='SourceGraphic'/%3E%3C/feMerge%3E%3C/filter%3E%3C/defs%3E%3Crect width='1440' height='800' fill='url(%23grad1)'/%3E%3Cg stroke='%23FF8A3C' strokeWidth='1.5' opacity='0.3'%3E%3Cpath d='M200,400 L400,200 L600,300 L800,150 L1000,250 L1200,100' filter='url(%23glow)'/%3E%3Cpath d='M200,500 L450,600 L700,450 L950,550 L1200,400' filter='url(%23glow)'/%3E%3Cpath d='M300,300 L500,400 L750,200 L1000,350' filter='url(%23glow)'/%3E%3C/g%3E%3Cg fill='%23FF8A3C'%3E%3Ccircle cx='200' cy='400' r='6' filter='url(%23glow)'/%3E%3Ccircle cx='400' cy='200' r='7' filter='url(%23glow)'/%3E%3Ccircle cx='600' cy='300' r='5' filter='url(%23glow)'/%3E%3Ccircle cx='800' cy='150' r='8' filter='url(%23glow)'/%3E%3Ccircle cx='1000' cy='250' r='6' filter='url(%23glow)'/%3E%3Ccircle cx='1200' cy='100' r='9' fill='%2300D1B2' filter='url(%23glow)'/%3E%3C/g%3E%3Cg fill='%2300D1B2' opacity='0.6'%3E%3Ccircle cx='300' cy='100' r='2'/%3E%3Ccircle cx='600' cy='100' r='1.5'/%3E%3Ccircle cx='900' cy='80' r='2'/%3E%3Ccircle cx='1100' cy='200' r='1'/%3E%3C/g%3E%3Cg stroke='%23FF8A3C' strokeWidth='0.5' opacity='0.05'%3E%3Cpattern id='grid' width='50' height='50' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 50 0 L 0 0 0 50'/%3E%3C/pattern%3E%3Crect width='1440' height='800' fill='url(%23grid)'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Content */}
          <div className="relative z-10 max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Building <span className="text-orange-300">AI</span> That <span className="text-cyan-300">Sees</span>, <span className="text-orange-300">Thinks</span>, and <span className="text-cyan-300">Acts</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-100">
              Specializing in <strong>Computer Vision</strong>, <strong>Data Intelligence</strong>, and <strong>AI Systems</strong>.
            </p>
            <button className="bg-gradient-to-r from-orange-500 via-orange-400 to-cyan-400 text-gray-900 font-bold py-4 px-10 rounded-full shadow-2xl hover:shadow-orange-500/40 transform hover:scale-105 transition-all duration-300 text-lg">
              Start Your AI Journey
            </button>
          </div>
        </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 px-6 text-center">
        <h3 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Business?</h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Let’s build smart, scalable AI solutions tailored to your needs.
        </p>
        <button className="bg-gradient-to-r from-orange-500 to-cyan-500 text-white font-bold py-3 px-10 rounded-full shadow-xl hover:shadow-orange-500/30 transform hover:scale-105 transition-all duration-300">
          Get in Touch
        </button>
      </section>
    </>
  );
}