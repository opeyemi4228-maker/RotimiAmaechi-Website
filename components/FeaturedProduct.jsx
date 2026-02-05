import React, { useState, useEffect } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const ArrowRight = ({ size = 24, strokeWidth = 2 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const LeadershipQualitiesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Leadership qualities slides data
  const slides = [
    {
      id: 1,
      cards: [
        {
          image: assets.Amaechi10,
          title: "Visionary Leadership: Building Infrastructure That Transforms Nations",
          quality: "VISION",
          description: "From the Abuja-Kaduna rail to Lekki Deep Seaport, his vision connects communities and drives economic growth.",
          alt: "Strategic vision and planning"
        },
        {
          image: assets.Amaechi5,
          title: "Courage Under Pressure: Standing For Democracy And Rule Of Law",
          quality: "COURAGE",
          description: "Defected from PDP to APC on principle. Fought his governorship substitution to the Supreme Court—and won.",
          alt: "Courage and conviction in leadership"
        }
      ]
    },
    {
      id: 2,
      cards: [
        {
          image: assets.Amaechi6,
          title: "Proven Execution: Delivering Results Where Others Promise",
          quality: "EXECUTION",
          description: "1,763 KM of rail lines. 11,300+ jobs. 32 train stations. Not promises—delivered achievements.",
          alt: "Results-driven leadership"
        },
        {
          image: assets.Amaechi7,
          title: "Transparent Governance: Accountability As A Core Value",
          quality: "INTEGRITY",
          description: "₦460M+ in railway revenue returned to repay loans. Governance must be measured by results and accountability.",
          alt: "Transparent and accountable governance"
        }
      ]
    },
    {
      id: 3,
      cards: [
        {
          image: assets.Amaechi8,
          title: "People-Centered Service: Investing In Human Capital Development",
          quality: "SERVICE",
          description: "150 scholarships to China. 550+ maritime cadets trained. Building the next generation of Nigerian leaders.",
          alt: "Investment in people and education"
        },
        {
          image: assets.Amaechi9,
          title: "Strategic Innovation: Modernizing Systems For Efficiency",
          quality: "INNOVATION",
          description: "E-ticketing systems. Electronic call-up for ports. First Transport University. Technology-driven governance.",
          alt: "Innovation and modernization"
        }
      ]
    }
  ];

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 md:mb-16 lg:mb-20 gap-8">
          {/* Left Side - Title */}
          <div className="flex-1">
            <p className="text-[#FF6B35] text-xs sm:text-sm font-bold tracking-widest mb-3 md:mb-4">
              LEADERSHIP QUALITIES
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-tight">
              Character.<br />
              Conviction.<br />
              Capacity.
            </h2>
          </div>

          {/* Right Side - Description and Button */}
          <div className="flex-1 lg:max-w-xl">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 md:mb-8">
              Leadership is not about titles—it's about action, integrity, and results. Rotimi Amaechi has demonstrated unwavering commitment to national development through visionary infrastructure, courageous decisions, and transparent governance. His track record speaks louder than any promise.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-[#008751] text-white px-6 md:px-8 py-3 md:py-4 rounded-md font-bold text-sm tracking-wide hover:bg-[#006b40] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                Leadership Philosophy
              </button>
              <button className="bg-[#FF6B35] text-white p-3 md:p-4 rounded-md hover:bg-[#e55a28] transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105">
                <ArrowRight size={20} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          {/* Cards Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="min-w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                    {slide.cards.map((card, index) => (
                      <div
                        key={index}
                        className="relative group cursor-pointer overflow-hidden rounded-xl md:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
                      >
                        {/* Image */}
                        <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] overflow-hidden">
                          <Image
                            src={card.image}
                            alt={card.alt}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          />
                          {/* Overlay Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
                        </div>

                        {/* Quality Badge */}
                        <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                          <span 
                            className="inline-block px-4 py-2 rounded-lg font-black text-xs sm:text-sm tracking-widest text-white shadow-lg backdrop-blur-sm"
                            style={{ 
                              backgroundColor: index === 0 ? '#008751' : '#FF6B35'
                            }}
                          >
                            {card.quality}
                          </span>
                        </div>

                        {/* Text Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                          <h3 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-3 md:mb-4 drop-shadow-2xl">
                            {card.title}
                          </h3>
                          <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed drop-shadow-lg">
                            {card.description}
                          </p>
                        </div>

                        {/* Hover Arrow */}
                        <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                          <ArrowRight size={20} strokeWidth={2.5} className="text-[#008751]" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mt-8 md:mt-10 lg:mt-12 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="relative h-1 flex-1 bg-gray-300 overflow-hidden rounded-full"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-[#008751] to-[#FF6B35] transition-transform duration-300 origin-left ${
                    index === currentSlide ? "scale-x-100" : "scale-x-0"
                  }`}
                ></div>
              </button>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex justify-center gap-3 md:gap-4 mt-8 md:mt-10">
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="bg-[#008751] text-white px-6 md:px-8 py-3 md:py-4 rounded-md hover:bg-[#006b40] transition-all duration-300 font-bold text-sm shadow-lg hover:shadow-xl transform hover:scale-105"
              aria-label="Previous slide"
            >
              ← Previous
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="bg-[#FF6B35] text-white px-6 md:px-8 py-3 md:py-4 rounded-md hover:bg-[#e55a28] transition-all duration-300 font-bold text-sm shadow-lg hover:shadow-xl transform hover:scale-105"
              aria-label="Next slide"
            >
              Next →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LeadershipQualitiesSection;