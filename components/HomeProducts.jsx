import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-[#E31E24] text-white relative overflow-hidden">
      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20 md:py-32 lg:py-10">
        <div className="max-w-6xl">
          <h1 className="text-6xl md:text-7xl lg:text-6xl xl:text-8xl font-black tracking-tight leading-none mb-12 md:mb-8">
            LEADERSHIP THAT DELIVERS.
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Primary Button */}
            <a 
              href="#delivered" 
              className="inline-flex items-center justify-center gap-3 bg-white text-[#E31E24] px-8 md:px-10 py-4 md:py-5 hover:bg-white/95 transition-all duration-300 font-bold text-base md:text-lg tracking-wide group shadow-lg hover:shadow-xl rounded-full"
            >
              Proven Record of Service
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" strokeWidth={3} />
            </a>
            
            {/* Secondary Button */}
            <a 
              href="#plan" 
              className="inline-flex items-center justify-center gap-3 bg-transparent text-white border-2 border-white px-8 md:px-10 py-4 md:py-5 hover:bg-white hover:text-[#E31E24] transition-all duration-300 font-bold text-base md:text-lg tracking-wide group rounded-full"
            >
              Our Vision for Nigeria
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" strokeWidth={3} />
            </a>
          </div>
        </div>
      </div>

      {/* Scrolling Ticker Section */}
      <div className="bg-white py-5 overflow-hidden border-t-4 border-[#E31E24]">
        <div className="ticker-wrapper">
          <div className="ticker flex items-center gap-8 animate-scroll">
            {/* First set */}
            <div className="flex items-center gap-8 whitespace-nowrap">
              <span className="text-[#E31E24] font-black text-xl md:text-2xl uppercase tracking-tight">
                DELIVERED
              </span>
              <span className="text-gray-400 font-bold text-xl md:text-2xl uppercase tracking-tight">
                TRANSFORMED RIVERS STATE THROUGH INFRASTRUCTURE AND GOVERNANCE
              </span>
              
              <span className="text-[#E31E24] font-black text-xl md:text-2xl uppercase tracking-tight">
                DELIVERED
              </span>
              <span className="text-gray-400 font-bold text-xl md:text-2xl uppercase tracking-tight">
                REVOLUTIONIZED NATIONAL TRANSPORT AS MINISTER
              </span>
              
              <span className="text-[#E31E24] font-black text-xl md:text-2xl uppercase tracking-tight">
                DELIVERED
              </span>
              <span className="text-gray-400 font-bold text-xl md:text-2xl uppercase tracking-tight">
                CONSISTENT STAND FOR DEMOCRACY, ACCOUNTABILITY, AND COURAGE
              </span>
            </div>
            
            {/* Duplicate set */}
            <div className="flex items-center gap-8 whitespace-nowrap">
              <span className="text-[#E31E24] font-black text-xl md:text-2xl uppercase tracking-tight">
                DELIVERED
              </span>
              <span className="text-gray-400 font-bold text-xl md:text-2xl uppercase tracking-tight">
                TRANSFORMED RIVERS STATE THROUGH INFRASTRUCTURE AND GOVERNANCE
              </span>
              
              <span className="text-[#E31E24] font-black text-xl md:text-2xl uppercase tracking-tight">
                DELIVERED
              </span>
              <span className="text-gray-400 font-bold text-xl md:text-2xl uppercase tracking-tight">
                REVOLUTIONIZED NATIONAL TRANSPORT AS MINISTER
              </span>
              
              <span className="text-[#E31E24] font-black text-xl md:text-2xl uppercase tracking-tight">
                DELIVERED
              </span>
              <span className="text-gray-400 font-bold text-xl md:text-2xl uppercase tracking-tight">
                CONSISTENT STAND FOR DEMOCRACY, ACCOUNTABILITY, AND COURAGE
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Donate Button */}
      <a 
        href="#donate"
        className="fixed right-0 top-1/2 -translate-y-1/2 bg-[#E31E24] text-white font-black text-sm tracking-widest py-6 px-4 hover:bg-[#c91920] transition-all duration-300 shadow-lg z-50 writing-mode-vertical"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        SUPPORT ▶
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

        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
