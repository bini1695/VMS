import React, { useState } from 'react';
import { Search, ShieldAlert, ShoppingBag } from 'lucide-react';

export default function Pharmacy() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const products = [
    { title: 'Apoquel Allergy Tablets', brand: 'Zoetis', price: '$45.00', weight: '16 mg (30 tabs)', prescription: true, category: 'Prescription Meds', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80' },
    { title: 'Frontline Plus Flea & Tick', brand: 'Merial', price: '$38.50', weight: '3 Doses', prescription: false, category: 'Flea & Tick', image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=400&q=80' },
    { title: 'Joint Support Chewables', brand: 'Nutramax', price: '$29.99', weight: '90 Chews', prescription: false, category: 'Supplements', image: 'https://images.unsplash.com/photo-1550572017-edf792890450?auto=format&fit=crop&w=400&q=80' },
    { title: 'Prescription Hydrolyzed Diet', brand: 'Hill\'s Science', price: '$62.00', weight: '15 lbs', prescription: true, category: 'Pet Food', image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=400&q=80' },
  ];

  const categories = ['All', 'Prescription Meds', 'Supplements', 'Flea & Tick', 'Pet Food'];

  const filtered = products.filter(p => 
    (category === 'All' || p.category === category) &&
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Notice Banner */}
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-xl flex items-start space-x-3 text-amber-900 shadow-sm">
        <ShieldAlert className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
        <p className="text-sm">
          <span className="font-bold">Prescription Verification Policy:</span> Items tagged with <span className="font-semibold text-coral">Rx Required</span> require approval from a licensed veterinarian prior to dispatch.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl border border-sage-200 shadow-sm">
        <div className="relative w-full md:w-96">
          <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search medications, supplements..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-forest focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                category === cat ? 'bg-forest text-white' : 'bg-cream-200 text-gray-700 hover:bg-sage-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Catalog Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((prod, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-sage-200 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition">
            <div>
              <div className="relative h-48 bg-gray-100">
                <img src={prod.image} alt={prod.title} className="w-full h-full object-cover" />
                {prod.prescription && (
                  <span className="absolute top-2 right-2 bg-coral text-white text-[10px] font-bold px-2 py-1 rounded-md shadow">
                    Rx Required
                  </span>
                )}
              </div>
              <div className="p-4 space-y-2">
                <span className="text-xs text-gray-400 uppercase font-semibold">{prod.brand}</span>
                <h3 className="font-bold text-gray-900 text-base line-clamp-1">{prod.title}</h3>
                <p className="text-xs text-gray-500">{prod.weight}</p>
                <div className="text-lg font-extrabold text-forest">{}</div>
              </div>
            </div>

            <div className="p-4 pt-0 space-y-2">
              <button className="w-full bg-forest hover:bg-forest-800 text-white font-semibold py-2 rounded-xl text-xs flex items-center justify-center space-x-1">
                <ShoppingBag className="w-4 h-4" />
                <span>Inquire / Add to List</span>
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}