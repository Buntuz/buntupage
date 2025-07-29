// app/contact/page.tsx
export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-orange-400">Get in Touch</h1>
        <p className="text-gray-300 text-center mb-12">
          Have a project in mind? Let’s discuss how AI can transform your business.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              rows={5}
              className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500"
              placeholder="Tell us about your AI needs..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-cyan-500 text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 text-center text-gray-500">
          <p>Or reach us at: <span className="text-orange-400">hello@buntuai.com</span></p>
        </div>
      </div>
    </div>
  );
}