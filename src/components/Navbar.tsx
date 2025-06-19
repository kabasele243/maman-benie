'use client'

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="flex items-center gap-4 sm:gap-10">
        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
        <ul className={`fixed md:static top-16 left-0 w-full bg-white/95 backdrop-blur-md md:bg-transparent z-20 md:flex gap-8 text-gray-700 font-medium transition-all duration-200 ${menuOpen ? 'block' : 'hidden'} md:block md:w-auto md:top-auto md:left-auto`}>
          <li className="px-4 py-2 md:p-0"><Link href="/" className="hover:text-black block text-black font-bold">Home</Link></li>
          <li className="px-4 py-2 md:p-0"><Link href="/parfums" className="hover:text-black block">Parfums</Link></li>
          <li className="px-4 py-2 md:p-0"><Link href="/cosmetiques" className="hover:text-black block">Cosmétiques</Link></li>
          <li className="px-4 py-2 md:p-0"><Link href="/accessoires" className="hover:text-black block">Accessoires</Link></li>
        </ul>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="Search for products..."
            className="pl-4 pr-10 py-2 rounded-md border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 text-sm min-w-[140px] sm:min-w-[200px]"
          />
          <span className="absolute right-3 top-2.5 text-gray-400">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          </span>
        </div>
      </div>
    </nav>
  );
} 