'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6 border-b border-gray-100 relative">
        <div className="flex items-center gap-4 sm:gap-10">
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
          <ul className={`fixed md:static top-16 left-0 w-full bg-white md:bg-transparent z-20 md:flex gap-8 text-gray-700 font-medium transition-all duration-200 ${menuOpen ? 'block' : 'hidden'} md:block md:w-auto md:top-auto md:left-auto`}>
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
          <button className="p-2"><svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg></button>
          <button className="p-2"><svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 6h15l-1.5 9h-13z"/><circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/></svg></button>
          <button className="p-2"><svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v2"/></svg></button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Bienvenue <br className="hidden sm:block" />Chez Maman Benie
          </h1>
          <p className="text-gray-500 text-base sm:text-lg max-w-md mx-auto md:mx-0">
            Découvrez nos produits pour votre bébé et votre enfant.
          </p>
          <button className="mt-4 px-6 sm:px-8 py-3 bg-black text-white rounded-full font-semibold text-base sm:text-lg shadow hover:bg-gray-900 transition">Shop Now</button>
        </div>
        <div className="flex justify-center md:justify-end mt-8 md:mt-0">
          <Image
            src="/images/parfume.png"
            alt="Mug"
            width={280}
            height={280}
            className="rounded-xl shadow-lg w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[340px] md:h-[340px] object-cover"
            priority
          />
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Product 1 */}
        <div className="bg-gray-50 rounded-xl p-4 sm:p-6 flex flex-col items-center">
          <Image src="/images/parfume.png" alt="Bag" width={140} height={140} className="mb-4 w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] object-cover" />
          <h2 className="font-semibold text-base sm:text-lg mb-2">Parfum</h2>
          <p className="text-gray-500 text-xs sm:text-sm mb-4 text-center">Parfum pour bébé et enfant.</p>
          <Link href="/parfums" className="px-4 sm:px-6 py-2 bg-black text-white rounded-full font-medium text-xs sm:text-sm hover:bg-gray-900 transition">Voir</Link>
        </div>
        {/* Product 2 */}
        <div className="bg-gray-50 rounded-xl p-4 sm:p-6 flex flex-col items-center">
          <Image src="/images/parfume.png" alt="Shoes" width={140} height={140} className="mb-4 w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] object-cover" />
          <h2 className="font-semibold text-base sm:text-lg mb-2">Cosmétique</h2>
          <p className="text-gray-500 text-xs sm:text-sm mb-4 text-center">Cosmétique pour bébé et enfant.</p>
          <Link href="/cosmetiques" className="px-4 sm:px-6 py-2 bg-black text-white rounded-full font-medium text-xs sm:text-sm hover:bg-gray-900 transition">Voir</Link>
        </div>
        {/* Product 3 */}
        <div className="bg-gray-50 rounded-xl p-4 sm:p-6 flex flex-col items-center">
          <Image src="/images/parfume.png" alt="Headphones" width={140} height={140} className="mb-4 w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] object-cover" />
          <h2 className="font-semibold text-base sm:text-lg mb-2">Accessoires</h2>
          <p className="text-gray-500 text-xs sm:text-sm mb-4 text-center">Accessoires pour bébé et enfant.</p>
          <Link href="/accessoires" className="px-4 sm:px-6 py-2 bg-black text-white rounded-full font-medium text-xs sm:text-sm hover:bg-gray-900 transition">Voir</Link>
        </div>
      </section>
    </div>
  );
}
