'use client'

import ProductCard from "@/components/ProductCard";

// Product data array
const products = [
  {
    id: 1,
    name: "Trousse de Toilette",
    description: "Organisation parfaite",
    price: 25,
    image: "/images/parfume.png"
  },
  {
    id: 2,
    name: "Brosse à Cheveux",
    description: "Doux et confortable",
    price: 15,
    image: "/images/parfume.png"
  },
  {
    id: 3,
    name: "Serviette de Bain",
    description: "Douce et absorbante",
    price: 20,
    image: "/images/parfume.png"
  },
  {
    id: 4,
    name: "Gant de Toilette",
    description: "Délicat pour la peau",
    price: 8,
    image: "/images/parfume.png"
  },
  {
    id: 5,
    name: "Porte-Savon",
    description: "Design enfant",
    price: 12,
    image: "/images/parfume.png"
  },
  {
    id: 6,
    name: "Miroir de Poche",
    description: "Compact et pratique",
    price: 10,
    image: "/images/parfume.png"
  },
  {
    id: 7,
    name: "Élastiques à Cheveux",
    description: "Lot de 20 pièces",
    price: 6,
    image: "/images/parfume.png"
  },
  {
    id: 8,
    name: "Organisateur SDB",
    description: "Rangement malin",
    price: 35,
    image: "/images/parfume.png"
  },
  {
    id: 9,
    name: "Tapis de Bain",
    description: "Anti-dérapant",
    price: 18,
    image: "/images/parfume.png"
  },
  {
    id: 10,
    name: "Porte-Brosse à Dents",
    description: "Hygienique",
    price: 14,
    image: "/images/parfume.png"
  }
];

export default function AccessoiresPage() {
  const whatsappNumber = "+243833260597";
  const whatsappMessage = "Pouvez-vous me donner plus d'informations?";
  
  const handleWhatsAppClick = (productName: string) => {
    const message = `Bonjour! Je suis intéressé(e) par le ${productName}. ${whatsappMessage}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Nos Accessoires
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Des accessoires pratiques et élégants, directement importés des Etats-Unis.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onWhatsAppClick={handleWhatsAppClick}
            />
          ))}
        </div>
      </section>
    </div>
  );
} 