'use client'
import React, { useState } from "react";
import { ArrowRight, Users, Building2, Scale, Award, BookOpen, Briefcase, GraduationCap, Landmark, Shield, CheckCircle, ChevronDown, ChevronUp, Target, TrendingUp, Globe, Zap } from "lucide-react";

const Governance = () => {
  const [expandedRole, setExpandedRole] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  const keyPositions = [
    {
      id: "minister",
      title: "Minister of Transportation",
      period: "2015 - 2022",
      icon: Briefcase,
      color: "bg-[#E31E24]",
      achievements: [
        "Launched the Deep Blue Project - Integrated National Maritime Surveillance and Security Infrastructure",
        "Completed the 30-year abandoned Warri-Itakpe rail line and flagged-off freight services",
        "Delivered the Lagos-Ibadan standard gauge rail line with state-of-the-art train stations",
        "Extended rail line into Apapa seaport, revolutionizing cargo transportation",
        "Secured establishment of CCECC Wagon Assembly Plant in Kajola for local production",
        "Established Transportation University in Katsina and Multi-disciplinary University in Rivers State",
        "Oversaw construction of multiple Inland Dry Ports across Nigeria",
        "Modernized Nigeria's railways with standard gauge rail lines and faster locomotives"
      ],
      impact: "Transformed Nigeria's transportation infrastructure and maritime security"
    },
    {
      id: "governor",
      title: "Governor of Rivers State",
      period: "2007 - 2015",
      icon: Landmark,
      color: "bg-[#C41A1F]",
      achievements: [
        "Constructed 160 Primary Health Centres and three ultra-modern hospitals",
        "Built over 300 Primary schools and 24 model Secondary schools meeting international standards",
        "Facilitated yearly overseas scholarships through RSSDA and Rivers State Scholarship Board",
        "Completed 460 megawatts of power infrastructure across the state",
        "Actualized Greater Port Harcourt City Master plan and Adokiye Amiesimaka stadium",
        "Established 314-hectare Songhai Rivers Initiative Farm - 20 times bigger than Porto Novo model",
        "Instituted Rivers State Due Process Commission for procurement transparency",
        "Revived Port Harcourt Carnival (CARNIRIV) as annual cultural celebration"
      ],
      impact: "Overhauled education, health sectors and transformed Rivers State infrastructure"
    },
    {
      id: "speaker",
      title: "Speaker, Rivers State House of Assembly",
      period: "1999 - 2007",
      icon: Scale,
      color: "bg-[#A01519]",
      achievements: [
        "Made Rivers State House of Assembly the most productive Legislative House in Nigeria",
        "Received Nigerian Union of Journalists award of Excellence in June 2000",
        "Elected Chairman, Conference of Speakers of State Assemblies for two consecutive terms",
        "Established Speakers' Secretariat at 12 Zaire Crescent, Maitama Abuja in August 2003",
        "Led successful Supreme Court challenge protecting State House of Assembly legislative functions",
        "Created clearinghouse for legislative information and experience sharing",
        "Re-elected as Speaker in 2003 demonstrating continued confidence of members"
      ],
      impact: "Set new standards for legislative excellence and state assembly autonomy"
    },
    {
      id: "dg",
      title: "Director General, Buhari Presidential Campaign",
      period: "2015 & 2019",
      icon: Target,
      color: "bg-[#8B1115]",
      achievements: [
        "Led APC to historic victory, defeating sitting President in 2015",
        "Orchestrated coalition of ACN, CPC, ANPP and nPDP to form APC",
        "Successfully secured second term for President Buhari in 2019",
        "Demonstrated exceptional political strategy and grassroots mobilization",
        "United diverse political interests toward common national vision"
      ],
      impact: "Engineered political transformation and democratic change in Nigeria"
    }
  ];

  const governancePhilosophy = [
    {
      icon: Shield,
      title: "Transparency & Accountability",
      description: "Established Due Process Commission and maintained open governance with constant communication with citizens. Made government expenditure transparent and accessible.",
      examples: ["Public Private Partnership frameworks", "Due Process Commission", "Open budget systems"]
    },
    {
      icon: Users,
      title: "Participatory Governance",
      description: "Led a participatory-style government, maintaining constant communication with the people and making the office of governor as approachable as never before.",
      examples: ["Community engagement programs", "Open-door policy", "Town hall meetings"]
    },
    {
      icon: TrendingUp,
      title: "Results-Driven Leadership",
      description: "Focused on measurable outcomes and sustainable development. From infrastructure to education, every project was designed for long-term impact.",
      examples: ["460MW power generation", "314-hectare Songhai Farm", "300+ schools built"]
    },
    {
      icon: Globe,
      title: "International Best Practices",
      description: "Implemented international standards across all sectors - from education facilities to rail infrastructure, ensuring Nigeria competes globally.",
      examples: ["Standard gauge railways", "International school standards", "Deep Blue maritime project"]
    }
  ];

  const educationJourney = [
    {
      year: "2024",
      achievement: "Called to Nigerian Bar",
      institution: "Nigerian Law School, Abuja",
      icon: Scale
    },
    {
      year: "2024",
      achievement: "LLB (Bachelor of Laws)",
      institution: "Baze University",
      icon: BookOpen
    },
    {
      year: "2024",
      achievement: "Master of Law (LLM)",
      institution: "Kings College, London",
      specialization: "International Corporate and Commercial Law",
      icon: GraduationCap
    },
    {
      year: "1987",
      achievement: "BA (Hons) English Studies & Literature",
      institution: "University of Port Harcourt",
      icon: BookOpen
    }
  ];

  const leadershipImpact = [
    {
      metric: "460+",
      label: "Megawatts of Power",
      description: "Generated across Rivers State"
    },
    {
      metric: "300+",
      label: "Schools Built",
      description: "Primary schools meeting international standards"
    },
    {
      metric: "160",
      label: "Health Centres",
      description: "Primary Health Centres constructed"
    },
    {
      metric: "8",
      label: "Years",
      description: "As Minister of Transportation"
    },
    {
      metric: "2x",
      label: "Presidential Wins",
      description: "Led successful campaigns in 2015 & 2019"
    },
    {
      metric: "314",
      label: "Hectares",
      description: "Songhai Farm - largest in West Africa"
    }
  ];

  const coreValues = [
    {
      icon: Zap,
      title: "Excellence",
      description: "Commitment to delivering world-class results in every endeavor, from infrastructure to education"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Unwavering dedication to transparency, accountability, and ethical leadership"
    },
    {
      icon: Users,
      title: "Service",
      description: "People-first approach to governance, ensuring accessibility and responsiveness to citizens' needs"
    },
    {
      icon: Target,
      title: "Vision",
      description: "Strategic thinking and long-term planning for sustainable development and national transformation"
    }
  ];

  const toggleRole = (id) => {
    setExpandedRole(expandedRole === id ? null : id);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#E31E24] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mt-[-88] mx-auto px-6 md:px-16 lg:px-24 py-24 md:py-32 lg:py-40">
          <div className="max-w-4xl">
            <p className="text-white/90 font-bold tracking-widest mb-6 text-sm md:text-base">LEADERSHIP • SERVICE • COURAGE</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-8">
              GOVERNANCE & LEGACY.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 max-w-3xl">
              A distinguished career spanning legislative excellence, transformative governance, 
              and national infrastructure development. From Speaker to Governor to Minister - 
              a legacy of service, transparency, and measurable impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#achievements" 
                className="inline-flex items-center gap-3 bg-white text-[#E31E24] px-10 py-5 hover:bg-white/95 transition-all duration-300 font-bold text-lg tracking-wide group shadow-lg hover:shadow-xl rounded-full"
              >
                Explore Achievements
                <Award size={22} className="group-hover:scale-110 transition-transform duration-300" strokeWidth={3} />
              </a>
              <a 
                href="#philosophy" 
                className="inline-flex items-center gap-3 bg-transparent text-white border-2 border-white px-10 py-5 hover:bg-white hover:text-[#E31E24] transition-all duration-300 font-bold text-lg tracking-wide group rounded-full"
              >
                Leadership Philosophy
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" strokeWidth={3} />
              </a>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20 md:h-32" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Leadership Impact Stats */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">Impact By Numbers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Measurable results from decades of dedicated public service
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {leadershipImpact.map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div className="text-4xl md:text-5xl font-black text-[#E31E24] mb-2">
                  {item.metric}
                </div>
                <div className="text-sm font-bold text-gray-900 mb-1">
                  {item.label}
                </div>
                <div className="text-xs text-gray-600">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Positions & Achievements */}
      <section id="achievements" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">Key Positions Held</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A distinguished career marked by transformative leadership at every level of governance
            </p>
          </div>

          <div className="space-y-6">
            {keyPositions.map((position) => {
              const Icon = position.icon;
              const isExpanded = expandedRole === position.id;
              
              return (
                <div 
                  key={position.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <button
                    onClick={() => toggleRole(position.id)}
                    className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center gap-6 flex-1">
                      <div className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 ${position.color} rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                        <Icon size={32} className="text-white md:w-10 md:h-10" strokeWidth={2} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
                          {position.title}
                        </h3>
                        <p className="text-[#E31E24] font-bold text-sm md:text-base tracking-wide">
                          {position.period}
                        </p>
                      </div>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      {isExpanded ? (
                        <ChevronUp size={28} className="text-[#E31E24]" strokeWidth={3} />
                      ) : (
                        <ChevronDown size={28} className="text-gray-400 group-hover:text-[#E31E24] transition-colors duration-300" strokeWidth={3} />
                      )}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-6 md:px-8 pb-8 border-t border-gray-100">
                      <div className="pt-6">
                        <div className="bg-gradient-to-r from-[#E31E24] to-[#C41A1F] text-white p-4 rounded-lg mb-6">
                          <p className="font-bold text-lg">
                            {position.impact}
                          </p>
                        </div>

                        <h4 className="text-xl font-bold text-gray-900 mb-4">Key Achievements:</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {position.achievements.map((achievement, idx) => (
                            <div 
                              key={idx}
                              className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                            >
                              <CheckCircle className="flex-shrink-0 text-[#E31E24] mt-0.5" size={20} strokeWidth={2.5} />
                              <p className="text-gray-700 text-sm leading-relaxed">
                                {achievement}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Governance Philosophy */}
      <section id="philosophy" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">Governance Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Core principles that have guided decades of transformative leadership
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {governancePhilosophy.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-[#E31E24] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={32} className="text-white" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {principle.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {principle.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {principle.examples.map((example, idx) => (
                          <span 
                            key={idx}
                            className="text-xs font-bold text-[#E31E24] bg-red-50 px-3 py-1.5 rounded-full"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Core Values */}
          <div className="bg-gradient-to-br from-[#E31E24] to-[#C41A1F] rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-black mb-8 text-center">Core Values</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                      <Icon size={24} className="text-white" strokeWidth={2.5} />
                    </div>
                    <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Educational Excellence */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">Educational Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A lifelong commitment to learning and academic excellence
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#E31E24] to-[#C41A1F] rounded-full hidden md:block"></div>

              <div className="space-y-8">
                {educationJourney.map((edu, index) => {
                  const Icon = edu.icon;
                  return (
                    <div 
                      key={index}
                      className="relative bg-white rounded-2xl shadow-lg p-6 md:p-8 md:ml-20 hover:shadow-xl transition-all duration-300 hover:scale-102"
                    >
                      {/* Timeline dot */}
                      <div className="absolute -left-12 top-8 w-8 h-8 bg-[#E31E24] rounded-full border-4 border-white shadow-lg hidden md:flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>

                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C41A1F] rounded-xl flex items-center justify-center">
                          <Icon size={32} className="text-white" strokeWidth={2} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-2xl font-black text-gray-900 mb-1">
                                {edu.achievement}
                              </h3>
                              <p className="text-[#E31E24] font-bold">
                                {edu.institution}
                              </p>
                            </div>
                            <span className="text-sm font-bold text-white bg-[#E31E24] px-4 py-2 rounded-full whitespace-nowrap ml-4">
                              {edu.year}
                            </span>
                          </div>
                          {edu.specialization && (
                            <div className="bg-gray-50 p-3 rounded-lg mt-3">
                              <p className="text-sm font-semibold text-gray-700">
                                Specialization: {edu.specialization}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-[#E31E24] to-[#C41A1F] rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl md:text-3xl font-black mb-4">
                From Student Leader to National Leader
              </h3>
              <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
                Active participation in student union politics at University of Port Harcourt, 
                serving as President of NURSS and member of NANS, laid the foundation for a 
                distinguished career in public service and governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Political Journey Highlight */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-8 md:p-12 lg:p-16 text-white">
                <h2 className="text-4xl md:text-5xl font-black mb-6">
                  Political Courage & Democratic Change
                </h2>
                <p className="text-lg text-white/90 leading-relaxed mb-6">
                  In 2007, after winning the PDP primaries, faced substitution without just cause. 
                  As a believer in the rule of law, took the case to court.
                </p>
                <p className="text-lg text-white/90 leading-relaxed mb-6">
                  On October 26, 2007, the Supreme Court pronounced him the rightful candidate 
                  and winner of the April 2007 Governorship election in Rivers State - 
                  <span className="font-bold text-[#E31E24]"> a victory for the masses and the rule of law.</span>
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                  <p className="text-sm font-bold text-[#E31E24] mb-2">HISTORIC MOMENT</p>
                  <p className="text-white/90">
                    Led the formation of APC by uniting nPDP with ACN, CPC, and ANPP, 
                    creating the political coalition that defeated a sitting president in 2015.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Award size={48} className="text-[#E31E24]" strokeWidth={2} />
                  <div>
                    <p className="font-bold text-lg">Commander of the Order of the Niger (CON)</p>
                    <p className="text-white/70 text-sm">National Honour</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#E31E24] to-[#C41A1F] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-8">
                  Legacy Highlights
                </h3>
                <div className="space-y-6">
                  {[
                    { label: "Chairman", detail: "Nigeria Governors' Forum (NGF) - Elected for second term with 19 votes" },
                    { label: "Award Recipient", detail: "Nigerian Union of Journalists Award of Excellence (2000)" },
                    { label: "Faith & Service", detail: "Christian Catholic • Knight of Saint Johns" },
                    { label: "Family", detail: "Married to Dame Judith Amaechi • Father of three sons" }
                  ].map((item, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors duration-300">
                      <p className="text-white/70 text-sm font-bold mb-1">{item.label}</p>
                      <p className="text-white font-semibold">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[#E31E24] to-[#C41A1F] text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            LEADERSHIP. SERVICE. COURAGE.
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            A proven track record of transformative governance, infrastructure development, 
            and unwavering commitment to the Nigerian people.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center gap-3 bg-white text-[#E31E24] px-10 py-5 hover:bg-white/95 transition-all duration-300 font-bold text-lg tracking-wide group shadow-lg hover:shadow-xl rounded-full"
            >
              Get In Touch
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" strokeWidth={3} />
            </a>
            <a 
              href="#biography" 
              className="inline-flex items-center justify-center gap-3 bg-transparent text-white border-2 border-white px-10 py-5 hover:bg-white hover:text-[#E31E24] transition-all duration-300 font-bold text-lg tracking-wide group rounded-full"
            >
              Read Full Biography
              <BookOpen size={22} strokeWidth={2} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Governance;