import React from 'react';
import { ArrowRight } from 'lucide-react';

const ValiantHero = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Hero Section with Curved Edges */}
      <div className="relative w-full max-w-7xl h-[500px] rounded-3xl overflow-hidden shadow-2xl">
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1600&q=80"
            alt="Leadership and national development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center">
          <div className="px-12 lg:px-20 max-w-3xl">
            
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Leadership. Service. Courage.
            </h1>
            
            <p className="text-xl text-white/90 mb-10 font-light">
              A lifetime committed to public service, national development, and the rule of law.
            </p>

            <button className="group bg-[#E31E24] hover:bg-red-300 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center gap-3 shadow-xl">
              Explore the Journey
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ValiantHero;
