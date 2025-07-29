// app/about/page.tsx
export default function About() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-orange-400">About BuntuAI</h1>
        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            BuntuAI is a forward-thinking technology consultancy specializing in <strong>Artificial Intelligence</strong>, 
            <strong> Computer Vision</strong>, and <strong>Data Science</strong>. We believe AI should be accessible, 
            ethical, and built to solve real-world problems.
          </p>
          <p>
            Founded by a team of machine learning engineers and computer vision researchers, we partner with startups 
            and enterprises to design, train, and deploy intelligent systems that see, learn, and act.
          </p>
          <p>
            From object detection in drones to real-time facial analysis for security, our solutions are engineered 
            for performance, scalability, and impact.
          </p>
          <div className="mt-10 p-8 bg-gray-900 rounded-xl border border-gray-700">
            <h2 className="text-2xl font-semibold text-cyan-300 mb-4">Our Mission</h2>
            <p>To empower organizations with AI that works — not just in the lab, but in the real world.</p>
          </div>
        </div>
      </div>
    </div>
  );
}