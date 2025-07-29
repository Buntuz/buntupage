// app/layout.js
// app/layout.js
import './globals.css'; // ← Add this line at the very top

import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Navigation */}
        <nav className="bg-gray-950 border-b border-orange-500 px-8 py-5 flex justify-between items-center sticky top-0 z-50 backdrop-blur-md">
          <Link href="/" className="text-2xl font-bold text-orange-400 tracking-wide">
            BuntuZ<span className="text-cyan-400">AI</span>
          </Link>
          <ul className="flex gap-8 text-sm font-medium">
            <li><Link href="/" className="hover:text-orange-300 transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-cyan-300 transition-colors">About</Link></li>
            <li><Link href="/services" className="hover:text-orange-300 transition-colors">Services</Link></li>
            <li><Link href="/blog" className="hover:text-cyan-300 transition-colors">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-orange-300 transition-colors">Contact</Link></li>
          </ul>
        </nav>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-black text-gray-500 text-sm py-8 text-center border-t border-gray-800 mt-20">
          <p>&copy; {new Date().getFullYear()} Buntu<span className="text-orange-400">AI</span>. All rights reserved.</p>
          <p className="mt-2">Crafted with precision for the future of technology.</p>
        </footer>
      </body>
    </html>
  );
}