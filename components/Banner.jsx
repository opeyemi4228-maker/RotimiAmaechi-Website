import React from 'react';
import { ArrowRight } from 'lucide-react';
import { assets } from "@/assets/assets";
import Image from "next/image";

const AmaechiHero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-100 to-white flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Hero Section with Curved Edges */}
      <div className="relative w-full max-w-[1600px] h-[500px] sm:h-[600px] md:h-[650px] lg:h-[700px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src={assets.Amaechi11}
            alt="Rt. Hon. Chibuike Rotimi Amaechi - Leadership and National Development"
            className="w-full h-full object-cover transform -scale-x-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-black/10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center">
          <div className="px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24 max-w-4xl">
            
            {/* Badge */}
            <div className="inline-block mb-4 sm:mb-6">
              <span className="bg-[#FF6B35] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-sm tracking-widest shadow-lg">
                RT. HON. CHIBUIKE ROTIMI AMAECHI (CON)
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-4 sm:mb-6 md:mb-8 leading-tight drop-shadow-2xl">
              Infrastructure.<br />
              Integrity.<br />
              Impact.
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 sm:mb-10 md:mb-12 font-light leading-relaxed max-w-2xl drop-shadow-lg">
              Three decades of transformational leadership—from Rivers State Governor to Federal Minister of Transportation. Building the infrastructure that connects our nation and empowers our people.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-[#008751] hover:bg-[#006b40] text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg tracking-wide transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-2xl hover:shadow-3xl">
                Explore the Journey
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} strokeWidth={2.5} />
              </button>
            </div>

          </div>
        </div>

        {/* Stats Overlay - Bottom Right */}
        <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 md:bottom-12 md:right-12 hidden lg:flex gap-6 xl:gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 xl:p-6 text-center border border-white/20 shadow-xl">
            <div className="text-3xl xl:text-4xl font-black text-white mb-1">30+</div>
            <div className="text-xs xl:text-sm text-white/90 font-semibold">Years in Service</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 xl:p-6 text-center border border-white/20 shadow-xl">
            <div className="text-3xl xl:text-4xl font-black text-[#FF6B35] mb-1">1,763</div>
            <div className="text-xs xl:text-sm text-white/90 font-semibold">KM Rail Built</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 xl:p-6 text-center border border-white/20 shadow-xl">
            <div className="text-3xl xl:text-4xl font-black text-[#008751] mb-1">11,300+</div>
            <div className="text-xs xl:text-sm text-white/90 font-semibold">Jobs Created</div>
          </div>
        </div>

        {/* Mobile Stats - Bottom */}
        <div className="absolute bottom-6 left-6 right-6 lg:hidden">
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 sm:p-4 text-center border border-white/20 shadow-xl">
              <div className="text-xl sm:text-2xl font-black text-white mb-1">30+</div>
              <div className="text-xs text-white/90 font-semibold">Years</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 sm:p-4 text-center border border-white/20 shadow-xl">
              <div className="text-xl sm:text-2xl font-black text-[#FF6B35] mb-1">1,763</div>
              <div className="text-xs text-white/90 font-semibold">KM Rail</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 sm:p-4 text-center border border-white/20 shadow-xl">
              <div className="text-xl sm:text-2xl font-black text-[#008751] mb-1">11K+</div>
              <div className="text-xs text-white/90 font-semibold">Jobs</div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 md:top-12 md:right-12 hidden md:block">
          <div className="flex flex-col gap-3">
            <div className="w-3 h-3 rounded-full bg-[#008751] shadow-lg animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-[#FF6B35] shadow-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-3 h-3 rounded-full bg-white shadow-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AmaechiHero;