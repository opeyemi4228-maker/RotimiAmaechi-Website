'use client'
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");

  const slide = {
    image: assets.Amaechi10,
    backgroundText: "AMAECHI",
    subtitle: "PROVEN LEADERSHIP",
    tagline: "Not Promises. Results.",
    stats: [
      { number: "1,763+", label: "KM RAIL" },
      { number: "11,300+", label: "JOBS" },
      { number: "16", label: "YEARS LEADING" }
    ]
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { email, zip });
    setEmail("");
    setZip("");
  };

  return (
    <section id="hero" className="relative h-[600px] sm:h-[650px] md:h-[700px] lg:h-[750px] xl:h-[800px] overflow-hidden mt-[50px] lg:mt-0">
      <div className="relative w-full h-full">
        {/* Portrait Slide with Name Background */}
        <>
          {/* White/Clean Background with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-80 via-white to-gray-100"></div>
          
          {/* Large Background Text - AMAECHI - Super Responsive */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
            <h2 className="text-[8rem] sm:text-[10rem] md:text-[14rem] lg:text-[18rem] xl:text-[22rem] 2xl:text-[28rem] font-black text-gray-200/30 sm:text-gray-200/35 md:text-gray-200/40 tracking-tighter leading-none select-none whitespace-nowrap">
              {slide.backgroundText}
            </h2>
          </div>

          {/* Content Container */}
          <div className="relative h-full flex mt-[24] items-center pt-[30px] sm:pt-[30px] md:pt-[20px] lg:pt-20 pb-16 sm:pb-20 md:pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
                
                {/* Left Side - Text Content */}
                <div className="order-2 lg:order-1 space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 lg:text-left text-center">
                  {/* Subtitle Badge */}
                  <div className="inline-block lg:block mx-auto lg:mx-0">
                    <span className="bg-[#008751] text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-md font-black text-xs sm:text-sm tracking-widest shadow-lg">
                      {slide.subtitle}
                    </span>
                  </div>

                  {/* Name - Super Responsive Typography */}
                  <div>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-8xl 2xl:text-9xl font-black text-gray-900 leading-none mb-2 sm:mb-3 md:mb-4">
                      RT. HON.
                    </h1>
                    <h2 className="text-4xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-8xl font-black leading-none mb-1 sm:mb-1.5 md:mb-2">
                      <span className="text-[#008751]">CHIBUIKE</span>
                    </h2>
                    <h2 className="text-4xl sm:text-7xl md:text-7xl lg:text-5xl xl:text-8xl 2xl:text-7xl font-black leading-none mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                      <span className="text-[#FF6B35]">AMAECHI</span>
                    </h2>
                    <p className="text-xl sm:text-lg md:text-4xl lg:text-4xl xl:text-5xl font-light text-gray-600 italic">
                      {slide.tagline}
                    </p>
                  </div>

                  {/* Stats - Responsive Grid */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 md:items-center md:gap-5 pt-4 sm:pt-5 md:pt-7 justify-items-center lg:justify-items-start">
                    {slide.stats.map((stat, idx) => (
                      <div key={idx} className="text-center bg-white/50 rounded-lg p-2 sm:p-3 md:p-5 shadow-sm">
                        <div className="text-xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl font-black text-[#008751] mb-0.5 sm:mb-1">
                          {stat.number}
                        </div>
                        <div className="text-[0.6rem] sm:text-xs md:text-sm font-bold text-gray-600 tracking-wide leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Buttons - Super Responsive */}
                  <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 pt-2 sm:pt-3 md:pt-5 justify-center lg:justify-start">
                    <a
                      href="/plan-for-change"
                      className="bg-[#008751] text-white px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-md font-bold text-xs sm:text-sm md:text-base tracking-wider hover:bg-[#006b40] transition-all duration-300 inline-flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <span>VIEW THE PLAN</span>
                      <ArrowRight size={16} className="sm:w-5 sm:h-5 md:w-5 md:h-5" strokeWidth={2.5} />
                    </a>
                    <a
                      href="/the-journey"
                      className="bg-white text-[#008751] border-2 border-[#008751] px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-md font-bold text-xs sm:text-sm md:text-base tracking-wider hover:bg-[#008751] hover:text-white transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      HIS JOURNEY
                    </a>
                  </div>
                </div>

                {/* Right Side - Portrait Image - Super Responsive */}
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[450px] lg:max-w-md xl:max-w-lg">
                    {/* Decorative Elements - Responsive Sizes */}
                    <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 md:-top-6 md:-left-6 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#008751] rounded-full blur-2xl sm:blur-3xl opacity-20"></div>
                    <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 md:-bottom-6 md:-right-6 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#FF6B35] rounded-full blur-2xl sm:blur-3xl opacity-20"></div>
                    
                    {/* Image Container with Shadow */}
                    <div className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl transform hover:scale-105 transition-transform duration-500">
                      {/* ADC Color Strip at Top - Responsive Height */}
                      <div className="absolute top-0 left-0 right-0 h-2 sm:h-2.5 md:h-3 bg-gradient-to-r from-[#008751] to-[#FF6B35]"></div>
                      
                      {/* Portrait Image */}
                      <div className="relative w-full aspect-[3/4]">
                        <Image
                          src={slide.image}
                          alt="Rt. Hon. Chibuike Rotimi Amaechi"
                          fill
                          priority
                          className="object-cover object-center"
                          sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 400px, (max-width: 1280px) 448px, 512px"
                        />
                      </div>
                      
                      {/* Badge at Bottom - Responsive Padding */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 md:p-5 lg:p-6">
                        <p className="text-white font-bold text-sm sm:text-base md:text-lg text-center">
                          CON • KSJ
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </>
      </div>
      <div className="hidden md:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 flex-col gap-4 lg:gap-6 z-20">
        <a 
          href="#" 
          className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white hover:bg-[#008751] flex items-center justify-center p-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
          aria-label="Twitter"
        >
          <img 
            src="https://img.icons8.com/ios-filled/100/twitterx--v1.png" 
            alt="Twitter"
            className="w-full h-full object-contain"
          />
        </a>
        <a 
          href="#" 
          className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white hover:bg-[#008751] flex items-center justify-center p-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
          aria-label="TikTok"
        >
          <img 
            src="https://img.icons8.com/ios-filled/100/tiktok--v1.png" 
            alt="TikTok"
            className="w-full h-full object-contain"
          />
        </a>
        <a 
          href="#" 
          className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white hover:bg-[#008751] flex items-center justify-center p-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
          aria-label="YouTube"
        >
          <img 
            src="https://img.icons8.com/ios-filled/100/youtube-play.png" 
            alt="YouTube"
            className="w-full h-full object-contain"
          />
        </a>
      </div>


    </section>
  );
};

export default HeroSection;