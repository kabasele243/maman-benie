'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ParfumsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const whatsappNumber = "+243833260597";
  const whatsappMessage = "Pouvez-vous me donner plus d'informations?";
  
  const handleWhatsAppClick = (productName: string) => {
    const message = `Bonjour! Je suis intéressé(e) par le ${productName}. ${whatsappMessage}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-6 border-b border-gray-100">
        <div className="flex items-center gap-8">
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
          <ul className={`fixed md:static top-16 left-0 w-full bg-white md:bg-transparent z-20 md:flex gap-8 text-gray-600 font-medium transition-all duration-200 ${menuOpen ? 'block' : 'hidden'} md:block md:w-auto md:top-auto md:left-auto`}>
            <li className="px-6 py-3 md:p-0"><Link href="/" className="hover:text-gray-900 block transition-colors">Home</Link></li>
            <li className="px-6 py-3 md:p-0"><Link href="/parfums" className="block text-gray-900 font-semibold">Parfums</Link></li>
            <li className="px-6 py-3 md:p-0"><Link href="/cosmetiques" className="hover:text-gray-900 block transition-colors">Cosmétiques</Link></li>
            <li className="px-6 py-3 md:p-0"><Link href="/accessoires" className="hover:text-gray-900 block transition-colors">Accessoires</Link></li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Rechercher..."
              className="pl-4 pr-10 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-300 text-sm w-48 transition-all"
            />
            <span className="absolute right-3 top-3 text-gray-400">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            </span>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg></button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M6 6h15l-1.5 9h-13z"/><circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/></svg></button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v2"/></svg></button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Nos Parfums
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Découvrez notre collection de parfums délicats et doux, directement importés des Etats-Unis.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product 1 */}
          <div className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300">
            <div className="aspect-square mb-6 overflow-hidden rounded-xl bg-gray-50">
              <Image 
                src="/images/parfume.png" 
                alt="Parfum Bébé Doux" 
                width={300} 
                height={300} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="space-y-3">
              <h2 className="font-semibold text-lg text-gray-900">Parfum Bébé Doux</h2>
              <p className="text-gray-500 text-sm leading-relaxed">Parfum doux et naturel</p>
              <div className="flex items-center justify-between pt-2">
                <p className="text-xl font-bold text-gray-900">25€</p>
                <button 
                  onClick={() => handleWhatsAppClick("Parfum Bébé Doux")}
                  className="px-6 py-2.5 bg-green-500 text-white rounded-full font-medium text-sm hover:bg-green-600 transition-colors duration-200 flex items-center gap-2"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Commander
                </button>
              </div>
            </div>
          </div>
          
          {/* Product 2 */}
          <div className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300">
            <div className="aspect-square mb-6 overflow-hidden rounded-xl bg-gray-50">
              <Image 
                src="/images/parfume.png" 
                alt="Parfum Enfant Frais" 
                width={300} 
                height={300} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="space-y-3">
              <h2 className="font-semibold text-lg text-gray-900">Parfum Enfant Frais</h2>
              <p className="text-gray-500 text-sm leading-relaxed">Notes fraîches et légères</p>
              <div className="flex items-center justify-between pt-2">
                <p className="text-xl font-bold text-gray-900">28€</p>
                <button 
                  onClick={() => handleWhatsAppClick("Parfum Enfant Frais")}
                  className="px-6 py-2.5 bg-green-500 text-white rounded-full font-medium text-sm hover:bg-green-600 transition-colors duration-200 flex items-center gap-2"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Commander
                </button>
              </div>
            </div>
          </div>
          
          {/* Product 3 */}
          <div className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300">
            <div className="aspect-square mb-6 overflow-hidden rounded-xl bg-gray-50">
              <Image 
                src="/images/parfume.png" 
                alt="Parfum Bébé Tendresse" 
                width={300} 
                height={300} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="space-y-3">
              <h2 className="font-semibold text-lg text-gray-900">Parfum Bébé Tendresse</h2>
              <p className="text-gray-500 text-sm leading-relaxed">Aux notes de vanille douce</p>
              <div className="flex items-center justify-between pt-2">
                <p className="text-xl font-bold text-gray-900">22€</p>
                <button 
                  onClick={() => handleWhatsAppClick("Parfum Bébé Tendresse")}
                  className="px-6 py-2.5 bg-green-500 text-white rounded-full font-medium text-sm hover:bg-green-600 transition-colors duration-200 flex items-center gap-2"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Commander
                </button>
              </div>
            </div>
          </div>
          
          {/* Product 4 */}
          <div className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300">
            <div className="aspect-square mb-6 overflow-hidden rounded-xl bg-gray-50">
              <Image 
                src="/images/parfume.png" 
                alt="Parfum Enfant Joyeux" 
                width={300} 
                height={300} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="space-y-3">
              <h2 className="font-semibold text-lg text-gray-900">Parfum Enfant Joyeux</h2>
              <p className="text-gray-500 text-sm leading-relaxed">Notes fruitées et enjouées</p>
              <div className="flex items-center justify-between pt-2">
                <p className="text-xl font-bold text-gray-900">30€</p>
                <button 
                  onClick={() => handleWhatsAppClick("Parfum Enfant Joyeux")}
                  className="px-6 py-2.5 bg-green-500 text-white rounded-full font-medium text-sm hover:bg-green-600 transition-colors duration-200 flex items-center gap-2"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Commander
                </button>
              </div>
            </div>
          </div>
          
          {/* Product 5 */}
          <div className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300">
            <div className="aspect-square mb-6 overflow-hidden rounded-xl bg-gray-50">
              <Image 
                src="/images/parfume.png" 
                alt="Parfum Bébé Calme" 
                width={300} 
                height={300} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="space-y-3">
              <h2 className="font-semibold text-lg text-gray-900">Parfum Bébé Calme</h2>
              <p className="text-gray-500 text-sm leading-relaxed">Aux notes de lavande apaisante</p>
              <div className="flex items-center justify-between pt-2">
                <p className="text-xl font-bold text-gray-900">24€</p>
                <button 
                  onClick={() => handleWhatsAppClick("Parfum Bébé Calme")}
                  className="px-6 py-2.5 bg-green-500 text-white rounded-full font-medium text-sm hover:bg-green-600 transition-colors duration-200 flex items-center gap-2"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Commander
                </button>
              </div>
            </div>
          </div>
          
          {/* Product 6 */}
          <div className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300">
            <div className="aspect-square mb-6 overflow-hidden rounded-xl bg-gray-50">
              <Image 
                src="/images/parfume.png" 
                alt="Parfum Enfant Aventure" 
                width={300} 
                height={300} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="space-y-3">
              <h2 className="font-semibold text-lg text-gray-900">Parfum Enfant Aventure</h2>
              <p className="text-gray-500 text-sm leading-relaxed">Notes boisées et naturelles</p>
              <div className="flex items-center justify-between pt-2">
                <p className="text-xl font-bold text-gray-900">32€</p>
                <button 
                  onClick={() => handleWhatsAppClick("Parfum Enfant Aventure")}
                  className="px-6 py-2.5 bg-green-500 text-white rounded-full font-medium text-sm hover:bg-green-600 transition-colors duration-200 flex items-center gap-2"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Commander
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 