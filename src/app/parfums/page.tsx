'use client'

import ProductCard from "@/components/ProductCard";

// Product data array
const products = [
  {
    id: 1,
    name: "Parfum Bébé Doux",
    description: "Parfum doux et naturel",
    price: 25,
    image: "/images/parfume.png"
  },
  {
    id: 2,
    name: "Parfum Enfant Frais",
    description: "Notes fraîches et légères",
    price: 28,
    image: "/images/parfume.png"
  },
  {
    id: 3,
    name: "Parfum Bébé Tendresse",
    description: "Aux notes de vanille douce",
    price: 22,
    image: "/images/parfume.png"
  },
  {
    id: 4,
    name: "Parfum Enfant Joyeux",
    description: "Notes fruitées et enjouées",
    price: 30,
    image: "/images/parfume.png"
  },
  {
    id: 5,
    name: "Parfum Bébé Calme",
    description: "Aux notes de lavande apaisante",
    price: 24,
    image: "/images/parfume.png"
  },
  {
    id: 6,
    name: "Parfum Enfant Aventure",
    description: "Notes boisées et naturelles",
    price: 32,
    image: "/images/parfume.png"
  }
];

export default function ParfumsPage() {
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