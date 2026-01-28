import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const UpcomingStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const events = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&q=80",
      categories: ["Leadership", "Governance"],
      title: "Amaechi’s Vision for a United, Secure, and Prosperous Nigeria",
      datetime: "Policy Engagement • National Address",
      colorful: true
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
      categories: ["Infrastructure", "Transportation"],
      title: "Transforming Nigeria Through Rail, Ports, and Connectivity",
      datetime: "Ministerial Record • National Impact",
      colorful: false
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1515169067865-5387ec356754?w=800&q=80",
      categories: ["Governance", "Rule of Law"],
      title: "Standing for the Rule of Law: Leadership with Courage",
      datetime: "Supreme Court Victory & Democratic Values",
      colorful: false
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
      categories: ["Economy", "Youth"],
      title: "Jobs, Education, and Opportunity for the Next Generation",
      datetime: "Human Capital & Economic Development",
      colorful: true
    }
  ];

  // Responsive items per view
  const getItemsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  useEffect(() => {
    const handleResize = () => {
      const newItemsPerView = getItemsPerView();
      setItemsPerView(newItemsPerView);
      const newMaxIndex = Math.max(0, events.length - newItemsPerView);
      if (currentIndex > newMaxIndex) {
        setCurrentIndex(newMaxIndex);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex, events.length]);

  const maxIndex = Math.max(0, events.length - itemsPerView);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 md:mb-12 gap-6">
          <div>
            <p className="text-xs sm:text-sm font-bold tracking-widest mb-2">
              CAMPAIGN STORIES
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              National Conversations
            </h2>
          </div>

          <div className="flex items-center gap-3 md:gap-4 flex-wrap">
            <button className="bg-black text-white px-6 md:px-8 py-3 md:py-4 font-bold text-xs sm:text-sm tracking-wide hover:bg-gray-900 transition-colors duration-300">
              VIEW ALL STORIES
            </button>
            <div className="flex gap-2">
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="w-10 h-10 md:w-12 md:h-12 border-2 border-gray-300 flex items-center justify-center hover:border-black transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous"
              >
                <ChevronLeft size={20} className="md:w-6 md:h-6" strokeWidth={2} />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className="w-10 h-10 md:w-12 md:h-12 border-2 border-gray-300 flex items-center justify-center hover:border-black transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next"
              >
                <ChevronRight size={20} className="md:w-6 md:h-6" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>

        {/* Cards Carousel */}
        <div className="overflow-hidden -mx-2 md:-mx-3">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
            }}
          >
            {events.map((event) => (
              <div
                key={event.id}
                className="flex-shrink-0 px-2 md:px-3"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="relative group cursor-pointer h-[500px] sm:h-[550px] md:h-[600px] rounded-lg md:rounded-2xl overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className={`absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ${
                      !event.colorful ? "grayscale" : ""
                    }`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                  <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
                    <div className="flex gap-2 flex-wrap">
                      {event.categories.map((category, idx) => (
                        <span
                          key={idx}
                          className="bg-white text-black px-3 py-1.5 md:px-4 md:py-2 text-xs font-bold tracking-wide"
                        >
                          {category}
                        </span>
                      ))}
                    </div>

                    <div>
                      <h3 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 leading-tight">
                        {event.title}
                      </h3>
                      <p className="text-white text-base md:text-lg mb-4 md:mb-6">
                        {event.datetime}
                      </p>
                      <button className="border-2 border-white text-white px-6 md:px-8 py-2.5 md:py-3 font-bold text-xs sm:text-sm tracking-wide hover:bg-white hover:text-black transition-all duration-300">
                        READ MORE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Dots */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {Array.from({ length: events.length }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-black w-8" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingStories;
