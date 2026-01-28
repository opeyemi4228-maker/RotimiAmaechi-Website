import React, { useState, useEffect } from "react";

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

const TechnologySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Leadership & Governance slides data
  const slides = [
    {
      id: 1,
      cards: [
        {
          image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80",
          title: "Infrastructure That Connects The Nation And Powers Growth",
          alt: "National infrastructure development project"
        },
        {
          image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
          title: "Institutions Built For Efficiency, Accountability, And Service",
          alt: "Modern government operations and public service"
        }
      ]
    },
    {
      id: 2,
      cards: [
        {
          image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
          title: "Transparent Governance Driven By Results, Not Promises",
          alt: "Leadership meeting focused on accountability"
        },
        {
          image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80",
          title: "Policies Designed For Scale, Stability, And National Impact",
          alt: "Strategic planning for national development"
        }
      ]
    }
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="bg-[#F5F5F5] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
          {/* Left Side - Title */}
          <div className="flex-1">
            <p className="text-[#E31E24] text-sm font-bold tracking-wider mb-4">
              LEADERSHIP & GOVERNANCE
            </p>
            <h2 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
              Proven Leadership.<br />
              Built To Deliver.
            </h2>
          </div>

          {/* Right Side - Description and Button */}
          <div className="flex-1 lg:max-w-md">
            <p className="text-gray-700 text-base leading-relaxed mb-8">
              Rotimi Amaechi’s leadership is anchored on strong institutions, infrastructure-driven growth, and policies that deliver measurable results. Governance must work for the people — efficiently, transparently, and at scale.
            </p>
            <div className="flex gap-3">
              <button className="bg-[#E31E24] text-white px-6 py-3 font-semibold text-sm hover:bg-[#C41A1F] transition-all duration-300 flex items-center gap-2">
                Leadership Agenda
              </button>
              <button className="bg-[#E31E24] text-white p-3 hover:bg-[#C41A1F] transition-all duration-300 flex items-center justify-center">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {slide.cards.map((card, index) => (
                      <div
                        key={index}
                        className="relative group cursor-pointer overflow-hidden"
                        style={{
                          clipPath: index === 0 
                            ? "polygon(0 0, 95% 0, 100% 100%, 0 100%)" 
                            : "polygon(5% 0, 100% 0, 100% 100%, 0 100%)"
                        }}
                      >
                        {/* Image */}
                        <div className="relative h-[400px] overflow-hidden">
                          <img
                            src={card.image}
                            alt={card.alt}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          />
                          {/* Overlay Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        </div>

                        {/* Text Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                          <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight">
                            {card.title}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mt-10 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="relative h-1 flex-1 bg-gray-300 overflow-hidden"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className={`absolute inset-0 bg-[#E31E24] transition-transform duration-300 origin-left ${
                    index === currentSlide ? "scale-x-100" : "scale-x-0"
                  }`}
                ></div>
              </button>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="bg-[#E31E24] text-white px-4 py-2 hover:bg-[#C41A1F] transition-all duration-300"
              aria-label="Previous slide"
            >
              ← Previous
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="bg-[#E31E24] text-white px-4 py-2 hover:bg-[#C41A1F] transition-all duration-300"
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

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <TechnologySection />
    </div>
  );
}
