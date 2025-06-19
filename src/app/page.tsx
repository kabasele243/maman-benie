'use client'

import Image from "next/image";
import Link from "next/link";

// Product data array
const products = [
  {
    id: 1,
    name: "Parfum",
    description: "Parfum en direct des USA.",
    image: "/images/parfume.png",
    alt: "Parfum",
    href: "/parfums"
  },
  {
    id: 2,
    name: "Cosmétique",
    description: "Cosmétique en direct des USA.",
    image: "/images/parfume.png",
    alt: "Cosmétique",
    href: "/cosmetiques"
  },
  {
    id: 3,
    name: "Accessoires",
    description: "Accessoires en direct des USA.",
    image: "/images/parfume.png",
    alt: "Accessoires",
    href: "/accessoires"
  }
];

export default function Home() {
  return (
    <div className="bg-white min-h-screen font-sans">
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
        {products.map((product) => (
          <div key={product.id} className="bg-gray-50 rounded-xl p-4 sm:p-6 flex flex-col items-center">
            <Image 
              src={product.image} 
              alt={product.alt} 
              width={140} 
              height={140} 
              className="mb-4 w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] object-cover" 
            />
            <h2 className="font-semibold text-base sm:text-lg mb-2">{product.name}</h2>
            <p className="text-gray-500 text-xs sm:text-sm mb-4 text-center">{product.description}</p>
            <Link 
              href={product.href} 
              className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium text-sm hover:border-gray-400 hover:text-gray-900 transition-all duration-200"
            >
              Voir
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
