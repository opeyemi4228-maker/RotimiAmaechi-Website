import React, { useState, useEffect } from "react";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1920&q=80",
      type: "quote",
      quote: "LEADERSHIP, SERVICE, AND COURAGE FOR A STRONGER NIGERIA.",
      attribution: "RT. HON. CHIBUIKE ROTIMI AMAECHI (CON)",
      showButtons: true
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { email, zip });
    setEmail("");
    setZip("");
  };

  return (
    <section className="relative h-[700px] lg:h-[500px] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative mt-[-18] h-full flex items-center">
              <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
                {slide.type === "signup" && (
                  <div className="max-w-4xl">
                    <div className="bg-[#E31E24] inline-block px-12 py-8 mb-8">
                      <h1 className="text-white text-5xl lg:text-7xl font-black">
                        {slide.title}
                      </h1>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-3xl">
                      <input
                        type="email"
                        placeholder="ENTER YOUR EMAIL"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 px-6 py-4 bg-white border-2 border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-gray-500 text-sm font-semibold tracking-wide"
                        required
                      />
                      <input
                        type="text"
                        placeholder="ZIP"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        className="w-full sm:w-32 px-6 py-4 bg-white border-2 border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-gray-500 text-sm font-semibold tracking-wide"
                        required
                      />
                      <button
                        type="submit"
                        className="px-8 py-4 bg-white hover:bg-gray-100 border-2 border-gray-300 transition-all duration-300 flex items-center justify-center"
                        aria-label="Submit"
                      >
                        <ArrowRight size={24} strokeWidth={2.5} className="text-gray-800" />
                      </button>
                    </form>
                  </div>
                )}

                {slide.type === "quote" && (
                  <div className="max-w-4xl">
                    <h1 className="text-white text-5xl lg:text-7xl font-black mb-8 leading-tight">
                      {slide.quote}
                    </h1>
                    <p className="text-white text-xl lg:text-2xl mb-12 font-light tracking-wide">
                      {slide.attribution}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="#support"
                        className="bg-[#E31E24] text-white px-10 py-4 font-bold text-sm tracking-wider hover:bg-[#C41A1F] transition-colors duration-300 inline-flex items-center gap-3"
                      >
                        SUPPORT THE CAMPAIGN
                        <ArrowRight size={20} strokeWidth={2.5} />
                      </a>
                      <a
                        href="#volunteer"
                        className="bg-[#1E3A8A] text-white px-10 py-4 font-bold text-sm tracking-wider hover:bg-[#152A6B] transition-colors duration-300"
                      >
                        VOLUNTEER
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Social Media Icons */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
        <a className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-2">
          <img src="https://img.icons8.com/ios-filled/100/twitterx--v1.png" />
        </a>
        <a className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-2">
          <img src="https://img.icons8.com/ios-filled/100/tiktok--v1.png" />
        </a>
        <a className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-2">
          <img src="https://img.icons8.com/ios-filled/100/youtube-play.png" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
