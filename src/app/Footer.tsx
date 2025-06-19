import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-start md:items-center gap-12">
        {/* Newsletter */}
        {/* <div>
          <h3 className="font-semibold text-lg mb-2">Subscribe to our newsletter</h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-l-md border border-gray-300 px-4 py-2 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gray-900 text-white px-6 py-2 rounded-r-md font-medium hover:bg-gray-800"
            >
              Subscribe
            </button>
          </form>
        </div> */}
        {/* Links */}
        <div className="flex gap-16">
          <div>
            <h4 className="font-semibold mb-2">Produits</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Parfums</a></li>
              <li><a href="#" className="hover:underline">Cosmétiques</a></li>
              <li><a href="#" className="hover:underline">Accessoires</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Contact</a></li>
              {/* <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">CGV</a></li> */}
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom row */}
      <div className="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row md:justify-between items-center text-gray-500 text-sm gap-4">
        <div>
          © 2025 Boutique Maman Benie<br />
          Tout droit réservé
        </div>
      </div>
    </footer>
  );
};

export default Footer; 