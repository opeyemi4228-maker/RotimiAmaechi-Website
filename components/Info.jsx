import React, { useState, useRef, useEffect } from "react";
import { ArrowRight, Calendar, Award, Users, Building2 } from "lucide-react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const PublicOfficeSection = () => {
  const [activeOffice, setActiveOffice] = useState(null);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const offices = [
    {
      id: 1,
      image: assets.Amaechi2,
      period: "1992 - 1994",
      title: "Special Assistant to Deputy Governor",
      location: "Rivers State, Nigeria",
      icon: Users,
      description: "Served under Deputy Governor Peter Odili, who recognized his political potential and mentored him. Gained foundational experience in state governance and public administration.",
      achievements: [
        "Built strong relationships in Rivers State political landscape",
        "Developed understanding of executive-legislative dynamics",
        "Learned governance under experienced leadership"
      ],
      link: "#",
      color: "#008751"
    },
    {
      id: 2,
      image: assets.Amaechi3,
      period: "1999 - 2007",
      title: "Speaker, Rivers State House of Assembly",
      location: "Rivers State, Nigeria",
      icon: Building2,
      description: "Elected to represent his constituency and subsequently became Speaker. Served two consecutive terms, championing legislative independence and defending constitutional provisions.",
      achievements: [
        "Chairman, Conference of Speakers of State Assemblies",
        "Successfully defended State Assembly autonomy at Supreme Court",
        "Fostered harmonious executive-legislative relations",
        "Led legislative reforms and institutional strengthening"
      ],
      link: "#",
      color: "#FF6B35"
    },
    {
      id: 3,
      image: assets.Amaechi3,
      period: "2007 - 2015",
      title: "Governor of Rivers State",
      location: "Rivers State, Nigeria",
      icon: Award,
      description: "Won the 2007 PDP primary but was substituted. Supreme Court ruled him the rightful candidate on October 26, 2007. Re-elected in 2011. Led unprecedented infrastructure transformation and development.",
      achievements: [
        "Massive infrastructure development - roads, bridges, flyovers",
        "Port Harcourt Monorail project initiated",
        "Power plant projects (Afam, Trans Amadi, Onne)",
        "Urban renewal and modernization programs",
        "Connected all parts of Rivers State by road",
        "Defected to APC (2013) and became Buhari's Campaign DG"
      ],
      link: "#",
      color: "#008751"
    },
    {
      id: 4,
      image: assets.Amaechi1,
      period: "2015 - 2022",
      title: "Federal Minister of Transportation",
      location: "Federal Republic of Nigeria",
      icon: Building2,
      description: "Appointed by President Muhammadu Buhari and re-nominated in 2019. Led the most ambitious railway modernization program in Nigeria's history. Revolutionized maritime and transportation infrastructure.",
      achievements: [
        "1,763+ KM of standard gauge rail lines delivered",
        "32 modern train stations constructed nationwide",
        "11,300+ jobs created through rail projects",
        "Major seaport development (Lekki, Bonny, Warri-Itakpe)",
        "Transport University established in Daura",
        "Deep Blue Project for maritime security",
        "E-ticketing and digital transformation",
        "150 Nigerians on scholarships to China for railway expertise"
      ],
      link: "#",
      color: "#FF6B35"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <p className="text-[#FF6B35] text-xs sm:text-sm font-bold tracking-widest mb-3 md:mb-4">
            DISTINGUISHED SERVICE
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 md:mb-6 leading-tight">
            Public Offices Held
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Over three decades of exemplary leadership across local, state, and federal government—delivering infrastructure, reforms, and transformational governance
          </p>
        </div>

        {/* Timeline Stats */}
        <div 
          ref={statsRef}
          className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 mb-16 md:mb-20"
        >
          <div className={`text-center ${isStatsVisible ? 'animate-stat-card' : 'opacity-0'}`} style={{ animationDelay: '0s' }}>
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#008751] mb-2 transition-all duration-500">30+</div>
            <div className="text-sm sm:text-base text-gray-600 font-semibold">Years in Public Service</div>
          </div>
          <div className={`text-center ${isStatsVisible ? 'animate-stat-card' : 'opacity-0'}`} style={{ animationDelay: '0.15s' }}>
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FF6B35] mb-2 transition-all duration-500">4</div>
            <div className="text-sm sm:text-base text-gray-600 font-semibold">Major Leadership Roles</div>
          </div>
          <div className={`text-center ${isStatsVisible ? 'animate-stat-card' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#008751] mb-2 transition-all duration-500">16</div>
            <div className="text-sm sm:text-base text-gray-600 font-semibold">Years as Executive Leader</div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {offices.map((office, index) => {
            const Icon = office.icon;
            return (
              <div
                key={office.id}
                className="group cursor-pointer bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                onMouseEnter={() => setActiveOffice(office.id)}
                onMouseLeave={() => setActiveOffice(null)}
              >
                {/* Image Container */}
                <div className="relative h-[240px] sm:h-[280px] md:h-[320px] overflow-hidden">
                  <Image
                    src={office.image}
                    alt={office.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Period Badge */}
                  <div 
                    className="absolute top-4 left-4 px-4 py-2 rounded-lg font-bold text-white text-sm backdrop-blur-md shadow-lg"
                    style={{ backgroundColor: `${office.color}ee` }}
                  >
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {office.period}
                    </div>
                  </div>

                  {/* Icon Badge */}
                  <div 
                    className="absolute bottom-4 right-4 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: office.color }}
                  >
                    <Icon size={24} className="text-white" strokeWidth={2.5} />
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-20">
                    <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-tight drop-shadow-lg">
                      {office.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 md:p-8">
                  {/* Location */}
                  <p 
                    className="text-sm font-bold mb-3 md:mb-4"
                    style={{ color: office.color }}
                  >
                    📍 {office.location}
                  </p>

                  {/* Description */}
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 md:mb-6">
                    {office.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-5 md:mb-6">
                    <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {office.achievements.slice(0, activeOffice === office.id ? office.achievements.length : 3).map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <div 
                            className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5"
                            style={{ backgroundColor: office.color }}
                          ></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    {office.achievements.length > 3 && activeOffice !== office.id && (
                      <button className="text-xs font-semibold mt-2 hover:underline" style={{ color: office.color }}>
                        +{office.achievements.length - 3} more achievements
                      </button>
                    )}
                  </div>

                  {/* CTA Button */}
                  <a
                    href={office.link}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm tracking-wide text-white transition-all duration-300 group/btn hover:gap-3 shadow-md hover:shadow-lg"
                    style={{ backgroundColor: office.color }}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={18} strokeWidth={2.5} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-[#008751] to-[#FF6B35] p-1 rounded-2xl shadow-2xl">
            <div className="bg-white rounded-xl px-8 md:px-12 py-8 md:py-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Learn More?
              </h3>
              <p className="text-gray-600 text-base md:text-lg mb-6 max-w-2xl mx-auto">
                Explore the full details of Rt. Hon. Rotimi Amaechi's distinguished career in public service
              </p>
              <a
                href="#full-biography"
                className="inline-flex items-center gap-3 bg-[#008751] text-white px-8 md:px-10 py-4 rounded-full font-bold text-sm md:text-base tracking-wide hover:bg-[#006b40] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                View Full Biography
                <ArrowRight size={20} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicOfficeSection;