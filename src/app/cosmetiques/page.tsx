'use client'

import ProductCard from "@/components/ProductCard";

// Product data array
const products = [
  {
    id: 1,
    name: "Lait Hydratant Bébé",
    description: "Hydratation 24h",
    price: 18,
    image: "/images/parfume.png"
  },
  {
    id: 2,
    name: "Gel Douche Enfant",
    description: "Doux et hypoallergénique",
    price: 12,
    image: "/images/parfume.png"
  },
  {
    id: 3,
    name: "Crème Visage Bébé",
    description: "Protection quotidienne",
    price: 15,
    image: "/images/parfume.png"
  },
  {
    id: 4,
    name: "Shampooing Enfant",
    description: "Sans larmes",
    price: 10,
    image: "/images/parfume.png"
  },
  {
    id: 5,
    name: "Huile de Massage",
    description: "Aux huiles essentielles",
    price: 20,
    image: "/images/parfume.png"
  },
  {
    id: 6,
    name: "Crème Solaire Enfant",
    description: "SPF 50+ protection",
    price: 16,
    image: "/images/parfume.png"
  },
  {
    id: 7,
    name: "Baume à Lèvres",
    description: "Hydratation naturelle",
    price: 8,
    image: "/images/parfume.png"
  },
  {
    id: 8,
    name: "Crème Apaisante",
    description: "Pour les irritations",
    price: 14,
    image: "/images/parfume.png"
  }
];

export default function CosmetiquesPage() {
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
            Nos Cosmétiques
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Des produits de soin naturels et doux, directement importés des Etats-Unis.
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