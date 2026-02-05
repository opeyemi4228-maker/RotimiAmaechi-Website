import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Train, Ship, Building2, Users, Award, TrendingUp } from "lucide-react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const AchievementsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  // Animated Stats
  const stats = [
    { icon: Train, number: 1763, label: "KM of Rail Lines", suffix: "KM", color: "#008751" },
    { icon: Building2, number: 32, label: "Train Stations Built", suffix: "+", color: "#FF6B35" },
    { icon: Users, number: 11300, label: "Jobs Created", suffix: "+", color: "#008751" },
    { icon: Ship, number: 8, label: "Major Port Projects", suffix: "", color: "#FF6B35" },
    { icon: Award, number: 550, label: "Cadets Trained", suffix: "+", color: "#008751" },
    { icon: TrendingUp, number: 460, label: "Million Naira Revenue", suffix: "M+", color: "#FF6B35" }
  ];

  const achievements = [
    {
      id: 1,
      category: "Rail Infrastructure",
      title: "326KM Warri - Itakpe Standard Gauge Rail Line",
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80",
      impact: "Connecting South-South to National Grid"
    },
    {
      id: 2,
      category: "Rail Infrastructure",
      title: "157KM Lagos - Ibadan Standard Gauge Rail Line",
      image: assets.Abujakaduna,
      impact: "Transforming Southwest Transportation"
    },
    {
      id: 3,
      category: "Rail Infrastructure",
      title: "186KM Abuja - Kaduna Standard Gauge Rail Line",
      image: assets.Abujakaduna,
      impact: "Revolutionizing Capital Region Transit"
    },
    {
      id: 4,
      category: "Port Development",
      title: "Lekki Deep Seaport Construction",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
      impact: "Africa's Largest Deep Seaport"
    },
    {
      id: 5,
      category: "Port Development",
      title: "Bonny Deep Seaport Project",
      image: "https://images.unsplash.com/photo-1605880969009-32119f540dcc?w=800&q=80",
      impact: "Opening Rivers State to Maritime Trade"
    },
    {
      id: 6,
      category: "Infrastructure",
      title: "Kaduna Inland Dry Port Commissioned",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      impact: "Northern Nigeria Trade Hub"
    },
    {
      id: 7,
      category: "Human Capital",
      title: "150 Nigerians on Full Scholarships to China",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
      impact: "Building Local Technical Expertise"
    },
    {
      id: 8,
      category: "Innovation",
      title: "E-Ticketing System on Abuja - Ibadan Route",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      impact: "Modernizing Railway Services"
    },
    {
      id: 9,
      category: "Manufacturing",
      title: "Kajola Wagon Assembly Plant Established",
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
      impact: "Local Production Capacity"
    },
    {
      id: 10,
      category: "Education",
      title: "Transport University in Daura, Katsina",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
      impact: "First of Its Kind in West Africa"
    },
    {
      id: 11,
      category: "Maritime Security",
      title: "17 Special Mission Vessels & 3 Helicopters",
      image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&q=80",
      impact: "Deep Blue Project for Gulf of Guinea"
    },
    {
      id: 12,
      category: "Port Efficiency",
      title: "Electronic Call-Up System for Lagos Ports",
      image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800&q=80",
      impact: "Eliminating Traffic Gridlock"
    }
  ];

  // Responsive items per view - start with default 3 items
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isClient, setIsClient] = useState(false);

  // Use effect to set actual window-based items per view only on client
  useEffect(() => {
    setIsClient(true);

    const getItemsPerView = () => {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    };

    const newItemsPerView = getItemsPerView();
    setItemsPerView(newItemsPerView);

    const handleResize = () => {
      const newItemsPerView = getItemsPerView();
      setItemsPerView(newItemsPerView);
      const newMaxIndex = Math.max(0, achievements.length - newItemsPerView);
      if (currentIndex > newMaxIndex) {
        setCurrentIndex(newMaxIndex);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex, achievements.length]);

  // Intersection Observer for animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const maxIndex = Math.max(0, achievements.length - itemsPerView);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16 lg:py-24">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <p className="text-[#FF6B35] text-xs sm:text-sm font-bold tracking-widest mb-3 md:mb-4">
            PROVEN TRACK RECORD
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-4 md:mb-6">
            Transformational Achievements
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            As Federal Minister of Transportation (2015-2022), Rt. Hon. Rotimi Amaechi delivered unprecedented infrastructure development across Nigeria
          </p>
        </div>

        {/* Animated Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-16 md:mb-20 lg:mb-24">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} hasAnimated={hasAnimated} delay={index * 100} />
          ))}
        </div>

        {/* Navigation Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 md:mb-12 gap-6">
          <div>
            <p className="text-[#008751] text-xs sm:text-sm font-bold tracking-widest mb-2">
              MAJOR PROJECTS
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Infrastructure Portfolio
            </h3>
          </div>

          <div className="flex items-center gap-3 md:gap-4 flex-wrap">
            <button className="bg-[#008751] text-white px-6 md:px-8 py-3 md:py-4 rounded-md font-bold text-xs sm:text-sm tracking-wide hover:bg-[#006b40] transition-all duration-300 shadow-lg hover:shadow-xl">
              VIEW FULL LIST
            </button>
            <div className="flex gap-2">
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="w-10 h-10 md:w-12 md:h-12 rounded-md border-2 border-gray-300 flex items-center justify-center hover:border-[#008751] hover:bg-[#008751] hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous"
              >
                <ChevronLeft size={20} className="md:w-6 md:h-6" strokeWidth={2} />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className="w-10 h-10 md:w-12 md:h-12 rounded-md border-2 border-gray-300 flex items-center justify-center hover:border-[#008751] hover:bg-[#008751] hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next"
              >
                <ChevronRight size={20} className="md:w-6 md:h-6" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>

        {/* Achievements Carousel */}
        <div className="overflow-hidden -mx-2 md:-mx-3">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
            }}
          >
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="flex-shrink-0 px-2 md:px-3"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="relative group cursor-pointer h-[450px] sm:h-[500px] md:h-[550px] rounded-lg md:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

                  <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <span className="inline-block bg-[#008751] text-white px-3 py-1.5 md:px-4 md:py-2 text-xs font-bold tracking-wide rounded-md">
                        {achievement.category}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 leading-tight">
                        {achievement.title}
                      </h3>
                      <p className="text-[#FF6B35] text-sm md:text-base font-semibold mb-4 md:mb-6">
                        {achievement.impact}
                      </p>
                      <button className="border-2 border-white text-white px-6 md:px-8 py-2.5 md:py-3 rounded-md font-bold text-xs sm:text-sm tracking-wide hover:bg-white hover:text-[#008751] transition-all duration-300 transform hover:scale-105">
                        LEARN MORE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Dots */}
        <div className="flex justify-center gap-2 mt-6 md:mt-8 md:hidden">
          {Array.from({ length: Math.ceil(achievements.length / itemsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-[#008751] w-8" : "bg-gray-300 w-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Additional Achievements List */}
        <div className="mt-16 md:mt-20 lg:mt-24 bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
            More Key Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              "790KM Ibadan - Ilorin - Minna - Kano Rail line (Segment 3)",
              "284KM Kano - Maradi Standard with 103km branch to Dutse",
              "Rehabilitation of 1,178km Port-Harcourt - Maiduguri line",
              "377 wagons, 64 coaches, 21 locomotives purchased",
              "Dala Inland Dry Port in Kano commissioned",
              "Maritime Academy restructured to international standards",
              "6 new Tugboats commissioned by NPA",
              "Wharf Road Apapa reconstruction (abandoned 10+ years)",
              "Boat terminals in Kogi and Adamawa States",
              "Jetty construction completed in Yenagoa",
              "50 Engineers trained in China for railway development",
              "Nigeria received largest container vessel at Onne Port"
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-2 h-2 bg-[#008751] rounded-full mt-2"></div>
                <p className="text-gray-700 text-sm md:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Animated Stat Card Component
const StatCard = ({ stat, hasAnimated, delay }) => {
  const [count, setCount] = useState(0);
  const Icon = stat.icon;

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 2000;
    const steps = 60;
    const increment = stat.number / steps;
    let current = 0;

    const timer = setTimeout(() => {
      const counter = setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          setCount(stat.number);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
    }, delay);

    return () => clearTimeout(timer);
  }, [hasAnimated, stat.number, delay]);

  return (
    <div 
      className="bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      style={{ 
        animation: hasAnimated ? `fadeInUp 0.6s ease-out ${delay}ms both` : 'none' 
      }}
    >
      <div className="flex items-center justify-center mb-3 md:mb-4">
        <div 
          className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center"
          style={{ backgroundColor: `${stat.color}20` }}
        >
          <Icon size={24} style={{ color: stat.color }} strokeWidth={2.5} />
        </div>
      </div>
      <div className="text-center">
        <div 
          className="text-lg sm:text-2xl md:text-3xl font-black mb-1 md:mb-2"
          style={{ color: stat.color }}
        >
          {count.toLocaleString()}{stat.suffix}
        </div>
        <div className="text-gray-600 text-xs font-semibold leading-tight">
          {stat.label}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AchievementsSection;