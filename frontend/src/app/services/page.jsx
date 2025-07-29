// app/services/page.tsx
export default function Services() {
  const services = [
    {
      title: "Computer Vision",
      icon: "👁️",
      description: "Object detection, facial recognition, video analytics, and real-time vision systems using deep learning.",
    },
    {
      title: "AI & Machine Learning",
      icon: "🧠",
      description: "Predictive models, generative AI, NLP, and custom LLM integrations for automation and insight.",
    },
    {
      title: "Data Science & Analytics",
      icon: "📊",
      description: "End-to-end data pipelines, visualization, and statistical modeling to turn data into decisions.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center text-orange-400">Our Services</h1>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 shadow-lg"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}