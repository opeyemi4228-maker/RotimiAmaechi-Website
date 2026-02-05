import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-[#008751] text-white relative overflow-hidden">
      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-20">
        <div className="max-w-6xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none mb-8 sm:mb-10 md:mb-12 drop-shadow-2xl">
            LEADERSHIP THAT DELIVERS.
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6">
            {/* Primary Button */}
            <a 
              href="#delivered" 
              className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white text-[#008751] px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 hover:bg-white/95 transition-all duration-300 font-bold text-sm sm:text-base md:text-lg tracking-wide group shadow-lg hover:shadow-xl rounded-full transform hover:scale-105"
            >
              <span className="whitespace-nowrap">Proven Record of Service</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" strokeWidth={3} />
            </a>
            
            {/* Secondary Button */}
            <a 
              href="#plan" 
              className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-transparent text-white border-2 border-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 hover:bg-white hover:text-[#008751] transition-all duration-300 font-bold text-sm sm:text-base md:text-lg tracking-wide group rounded-full transform hover:scale-105"
            >
              <span className="whitespace-nowrap">Our Vision for Nigeria</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" strokeWidth={3} />
            </a>
          </div>
        </div>
      </div>

      {/* Scrolling Ticker Section */}
      <div className="bg-white py-4 sm:py-5 md:py-6 overflow-hidden border-t-4 border-[#008751]">
        <div className="ticker-wrapper">
          <div className="ticker flex items-center gap-4 sm:gap-6 md:gap-8 animate-scroll">
            {/* First set */}
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8 whitespace-nowrap">
              <span className="text-[#008751] font-black text-lg sm:text-xl md:text-2xl uppercase tracking-tight">
                DELIVERED
              </span>
              <span className="text-gray-400 font-bold text-base sm:text-lg md:text-xl lg:text-2xl uppercase tracking-tight">
                TRANSFORMED RIVERS STATE THROUGH INFRASTRUCTURE AND GOVERNANCE
              </span>
              
              <span className="text-[#008751] font-black text-lg sm:text-xl md:text-2xl uppercase tracking-tight">
                DELIVERED
              </span>
              <span className="text-gray-400 font-bold text-base sm:text-lg md:text-xl lg:text-2xl uppercase tracking-tight">
                REVOLUTIONIZED NATIONAL TRANSPORT AS MINISTER
              </span>
              
              <span className="text-[#008751] font-black text-lg sm:text-xl md:text-2xl uppercase tracking-tight">
                DELIVERED
              </span>
              <span className="text-gray-400 font-bold text-base sm:text-lg md:text-xl lg:text-2xl uppercase tracking-tight">
                CONSISTENT STAND FOR DEMOCRACY, ACCOUNTABILITY, AND COURAGE
              </span>
            </div>
            
            {/* Duplicate set */}
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8 whitespace-nowrap">
              <span className="text-[#008751] font-black text-lg sm:text-xl md:text-2xl uppercase tracking-tight">
                DELIVERED
              </span>
              <span className="text-gray-400 font-bold text-base sm:text-lg md:text-xl lg:text-2xl uppercase tracking-tight">
                TRANSFORMED RIVERS STATE THROUGH INFRASTRUCTURE AND GOVERNANCE
              </span>
              
              <span className="text-[#008751] font-black text-lg sm:text-xl md:text-2xl uppercase tracking-tight">
                DELIVERED
              </span>
              <span className="text-gray-400 font-bold text-base sm:text-lg md:text-xl lg:text-2xl uppercase tracking-tight">
                REVOLUTIONIZED NATIONAL TRANSPORT AS MINISTER
              </span>
              
              <span className="text-[#008751] font-black text-lg sm:text-xl md:text-2xl uppercase tracking-tight">
                DELIVERED
              </span>
              <span className="text-gray-400 font-bold text-base sm:text-lg md:text-xl lg:text-2xl uppercase tracking-tight">
                CONSISTENT STAND FOR DEMOCRACY, ACCOUNTABILITY, AND COURAGE
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Donate Button - Desktop */}
      <a 
        href="#donate"
        className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 bg-[#FF6B35] text-white font-black text-xs sm:text-sm tracking-widest py-6 px-3 sm:px-4 hover:bg-[#e55a28] transition-all duration-300 shadow-xl z-50 writing-mode-vertical items-center justify-center"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        SUPPORT ▶
      </a>

      {/* Donate Button - Mobile (Bottom Fixed) */}
      <a 
        href="#donate"
        className="md:hidden fixed bottom-0 left-0 right-0 bg-[#FF6B35] text-white font-black text-sm tracking-widest py-4 px-4 hover:bg-[#e55a28] transition-all duration-300 shadow-xl z-50 text-center"
      >
        SUPPORT THE CAMPAIGN ▶
      </a>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .ticker-wrapper:hover .animate-scroll {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .animate-scroll {
            animation-duration: 40s;
          }
        }

        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;