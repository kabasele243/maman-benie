'use client'

import Image from "next/image";
import { useState } from "react";

export default function AccessoiresPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6 border-b border-gray-100 relative">
        <div className="flex items-center gap-4 sm:gap-10">
          <span className="text-lg sm:text-xl font-bold text-gray-900">Maman Benie</span>
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
          <ul className={`fixed md:static top-16 left-0 w-full bg-white md:bg-transparent z-20 md:flex gap-8 text-gray-700 font-medium transition-all duration-200 ${menuOpen ? 'block' : 'hidden'} md:block md:w-auto md:top-auto md:left-auto`}>
            <li className="px-4 py-2 md:p-0"><a href="/" className="hover:text-black block">Home</a></li>
            <li className="px-4 py-2 md:p-0"><a href="/parfums" className="hover:text-black block">Parfums</a></li>
            <li className="px-4 py-2 md:p-0"><a href="/cosmetiques" className="hover:text-black block">Cosmétiques</a></li>
            <li className="px-4 py-2 md:p-0"><a href="/accessoires" className="hover:text-black block text-black font-bold">Accessoires</a></li>
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Nos Accessoires
          </h1>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
            Des accessoires pratiques et élégants, directement importés des Etats-Unis.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Product 1 */}
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
            <Image src="/images/parfume.png" alt="Trousse de Toilette" width={140} height={140} className="mb-4 w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] object-cover rounded-lg" />
            <h2 className="font-semibold text-base sm:text-lg mb-2">Trousse de Toilette</h2>
            <p className="text-gray-500 text-xs sm:text-sm mb-2 text-center">Organisation parfaite</p>
            <p className="text-black font-bold text-sm mb-4">25€</p>
            <button className="px-4 sm:px-6 py-2 bg-black text-white rounded-full font-medium text-xs sm:text-sm hover:bg-gray-900 transition">Ajouter au panier</button>
          </div>
          
          {/* Product 2 */}
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
            <Image src="/images/parfume.png" alt="Brosse à Cheveux" width={140} height={140} className="mb-4 w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] object-cover rounded-lg" />
            <h2 className="font-semibold text-base sm:text-lg mb-2">Brosse à Cheveux</h2>
            <p className="text-gray-500 text-xs sm:text-sm mb-2 text-center">Doux et confortable</p>
            <p className="text-black font-bold text-sm mb-4">15€</p>
            <button className="px-4 sm:px-6 py-2 bg-black text-white rounded-full font-medium text-xs sm:text-sm hover:bg-gray-900 transition">Ajouter au panier</button>
          </div>
          
          {/* Product 3 */}
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
            <Image src="/images/parfume.png" alt="Serviette de Bain" width={140} height={140} className="mb-4 w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] object-cover rounded-lg" />
            <h2 className="font-semibold text-base sm:text-lg mb-2">Serviette de Bain</h2>
            <p className="text-gray-500 text-xs sm:text-sm mb-2 text-center">Douce et absorbante</p>
            <p className="text-black font-bold text-sm mb-4">20€</p>
            <button className="px-4 sm:px-6 py-2 bg-black text-white rounded-full font-medium text-xs sm:text-sm hover:bg-gray-900 transition">Ajouter au panier</button>
          </div>
          
          {/* Product 4 */}
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
            <Image src="/images/parfume.png" alt="Gant de Toilette" width={140} height={140} className="mb-4 w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] object-cover rounded-lg" />
            <h2 className="font-semibold text-base sm:text-lg mb-2">Gant de Toilette</h2>
            <p className="text-gray-500 text-xs sm:text-sm mb-2 text-center">Délicat pour la peau</p>
            <p className="text-black font-bold text-sm mb-4">8€</p>
            <button className="px-4 sm:px-6 py-2 bg-black text-white rounded-full font-medium text-xs sm:text-sm hover:bg-gray-900 transition">Ajouter au panier</button>
          </div>
          
          {/* Product 5 */}
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
            <Image src="/images/parfume.png" alt="Porte-Savon" width={140} height={140} className="mb-4 w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] object-cover rounded-lg" />
            <h2 className="font-semibold text-base sm:text-lg mb-2">Porte-Savon</h2>
            <p className="text-gray-500 text-xs sm:text-sm mb-2 text-center">Design enfant</p>
            <p className="text-black font-bold text-sm mb-4">12€</p>
            <button className="px-4 sm:px-6 py-2 bg-black text-white rounded-full font-medium text-xs sm:text-sm hover:bg-gray-900 transition">Ajouter au panier</button>
          </div>
          
          {/* Product 6 */}
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
            <Image src="/images/parfume.png" alt="Miroir de Poche" width={140} height={140} className="mb-4 w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] object-cover rounded-lg" />
            <h2 className="font-semibold text-base sm:text-lg mb-2">Miroir de Poche</h2>
            <p className="text-gray-500 text-xs sm:text-sm mb-2 text-center">Compact et pratique</p>
            <p className="text-black font-bold text-sm mb-4">10€</p>
            <button className="px-4 sm:px-6 py-2 bg-black text-white rounded-full font-medium text-xs sm:text-sm hover:bg-gray-900 transition">Ajouter au panier</button>
          </div>
          
          {/* Product 7 */}
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
            <Image src="/images/parfume.png" alt="Élastiques à Cheveux" width={140} height={140} className="mb-4 w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] object-cover rounded-lg" />
            <h2 className="font-semibold text-base sm:text-lg mb-2">Élastiques à Cheveux</h2>
            <p className="text-gray-500 text-xs sm:text-sm mb-2 text-center">Lot de 20 pièces</p>
            <p className="text-black font-bold text-sm mb-4">6€</p>
            <button className="px-4 sm:px-6 py-2 bg-black text-white rounded-full font-medium text-xs sm:text-sm hover:bg-gray-900 transition">Ajouter au panier</button>
          </div>
          
          {/* Product 8 */}
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
            <Image src="/images/parfume.png" alt="Organisateur de Salle de Bain" width={140} height={140} className="mb-4 w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] object-cover rounded-lg" />
            <h2 className="font-semibold text-base sm:text-lg mb-2">Organisateur SDB</h2>
            <p className="text-gray-500 text-xs sm:text-sm mb-2 text-center">Rangement malin</p>
            <p className="text-black font-bold text-sm mb-4">35€</p>
            <button className="px-4 sm:px-6 py-2 bg-black text-white rounded-full font-medium text-xs sm:text-sm hover:bg-gray-900 transition">Ajouter au panier</button>
          </div>
          
          {/* Product 9 */}
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
            <Image src="/images/parfume.png" alt="Tapis de Bain" width={140} height={140} className="mb-4 w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] object-cover rounded-lg" />
            <h2 className="font-semibold text-base sm:text-lg mb-2">Tapis de Bain</h2>
            <p className="text-gray-500 text-xs sm:text-sm mb-2 text-center">Anti-dérapant</p>
            <p className="text-black font-bold text-sm mb-4">18€</p>
            <button className="px-4 sm:px-6 py-2 bg-black text-white rounded-full font-medium text-xs sm:text-sm hover:bg-gray-900 transition">Ajouter au panier</button>
          </div>
          
          {/* Product 10 */}
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
            <Image src="/images/parfume.png" alt="Porte-Brosse à Dents" width={140} height={140} className="mb-4 w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] object-cover rounded-lg" />
            <h2 className="font-semibold text-base sm:text-lg mb-2">Porte-Brosse à Dents</h2>
            <p className="text-gray-500 text-xs sm:text-sm mb-2 text-center">Hygienique</p>
            <p className="text-black font-bold text-sm mb-4">14€</p>
            <button className="px-4 sm:px-6 py-2 bg-black text-white rounded-full font-medium text-xs sm:text-sm hover:bg-gray-900 transition">Ajouter au panier</button>
          </div>
        </div>
      </section>
    </div>
  );
} 