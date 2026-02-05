'use client'
import React, { useState } from "react";
import { ArrowRight, Users, Building2, Scale, Award, BookOpen, Briefcase, GraduationCap, Landmark, Shield, CheckCircle, ChevronDown, ChevronUp, Target, TrendingUp, Globe, Zap, Heart, Rocket, Star } from "lucide-react";

const AmaechiPresidentialCampaign = () => {
  const [expandedRole, setExpandedRole] = useState(null);

  const presidentialVision = [
    {
      icon: Rocket,
      title: "Infrastructure Revolution",
      description: "Replicate the rail transformation nationwide - connecting every state with modern transportation networks that create jobs and economic growth.",
      promise: "1,000+ new kilometers of rail lines in first term"
    },
    {
      icon: Users,
      title: "Youth Empowerment & Jobs",
      description: "Building on 11,300+ jobs created as Minister, launch massive youth employment program through infrastructure projects and skills training.",
      promise: "500,000 jobs in first 24 months"
    },
    {
      icon: Shield,
      title: "Security Through Development",
      description: "Secure Nigeria by connecting communities, creating opportunities, and deploying technology-driven solutions like the Deep Blue Project.",
      promise: "Integrated National Security Infrastructure"
    },
    {
      icon: TrendingUp,
      title: "Economic Prosperity",
      description: "Transform ports, boost exports, and make Nigeria a manufacturing hub. Proven track record with Lekki Deep Seaport and Inland Dry Ports.",
      promise: "Double GDP growth within 4 years"
    }
  ];

  const keyPositions = [
    {
      id: "minister",
      title: "Federal Minister of Transportation",
      period: "2015 - 2022 • 7 Years of Excellence",
      icon: Briefcase,
      color: "bg-[#008751]",
      achievements: [
        "Delivered 1,763+ KM of modern standard gauge rail lines - largest in Nigeria's history",
        "Created 11,300+ direct jobs through rail modernization projects",
        "Constructed 32 ultra-modern train stations across three routes",
        "Launched Deep Blue Project - Africa's most advanced maritime security system",
        "Established first Transport University in West Africa (Daura, Katsina)",
        "Trained 150 Nigerians in China with full international scholarships",
        "Generated ₦460+ Million in railway revenue, fully accounted for",
        "Completed abandoned Warri-Itakpe rail line after 30 years",
        "Extended rail into Lagos Port - revolutionizing cargo efficiency",
        "Built Lekki Deep Seaport - Africa's largest deep seaport",
        "Commissioned Kaduna and Kano Inland Dry Ports",
        "Introduced E-ticketing system - first digital railway tickets in Nigeria"
      ],
      impact: "Transformed Nigeria's infrastructure and created economic opportunities across all 36 states",
      testimonial: "Granted 'Take a Bow' by Senate - highest recognition for distinguished service"
    },
    {
      id: "governor",
      title: "Executive Governor of Rivers State",
      period: "2007 - 2015 • 8 Years of Transformation",
      icon: Landmark,
      color: "bg-[#FF6B35]",
      achievements: [
        "Built 160 Primary Health Centres and 3 ultra-modern hospitals",
        "Constructed 300+ Primary schools meeting international standards",
        "Built 24 model Secondary schools with modern facilities",
        "Facilitated yearly international scholarships for Rivers youth",
        "Generated 460 megawatts of power infrastructure",
        "Completed Greater Port Harcourt City Master Plan",
        "Built Adokiye Amiesimaka Stadium - FIFA standard facility",
        "Established 314-hectare Songhai Farm - largest in West Africa",
        "Connected all parts of Rivers State by road",
        "Instituted Due Process Commission for transparent governance",
        "Initiated Port Harcourt Monorail project",
        "Revived Port Harcourt Carnival (CARNIRIV)",
        "Championed urban renewal and city modernization"
      ],
      impact: "Transformed Rivers State into a model of development and good governance",
      testimonial: "Re-elected with massive support - testament to people's trust"
    },
    {
      id: "speaker",
      title: "Speaker, Rivers State House of Assembly",
      period: "1999 - 2007 • 8 Years of Legislative Excellence",
      icon: Scale,
      color: "bg-[#008751]",
      achievements: [
        "Made Rivers State House most productive Legislative House in Nigeria",
        "Elected Chairman, Conference of Speakers (Nigeria) - two consecutive terms",
        "Received Nigerian Union of Journalists Award of Excellence (2000)",
        "Defended State Assembly autonomy at Supreme Court - historic victory",
        "Established Speakers' Secretariat in Abuja for national coordination",
        "Created clearinghouse for legislative best practices",
        "Maintained harmonious executive-legislative relations",
        "Re-elected Speaker (2003) - unanimous confidence"
      ],
      impact: "Set new standards for legislative excellence and democratic governance",
      testimonial: "First Speaker to serve two full terms with continuous productivity"
    },
    {
      id: "campaign",
      title: "Director General, Presidential Campaigns",
      period: "2015 & 2019 • Architect of Change",
      icon: Target,
      color: "bg-[#FF6B35]",
      achievements: [
        "Led APC to historic 2015 victory - first time opposition defeated sitting president",
        "United ACN, CPC, ANPP, and nPDP into formidable APC coalition",
        "Secured President Buhari's re-election in 2019",
        "Demonstrated exceptional political strategy and grassroots mobilization",
        "Built bridges across ethnic, religious, and regional divides",
        "Proved ability to unite Nigerians toward common vision"
      ],
      impact: "Proved exceptional leadership in building consensus and delivering democratic victory",
      testimonial: "President Buhari's first choice for both campaign cycles - unmatched trust"
    }
  ];

  const educationalExcellence = [
    {
      year: "2024",
      achievement: "Called to Nigerian Bar (BL)",
      institution: "Nigerian Law School, Abuja",
      icon: Scale,
      highlight: "Distinguished Performance"
    },
    {
      year: "2024",
      achievement: "Bachelor of Laws (LLB)",
      institution: "Baze University, Abuja",
      icon: BookOpen,
      highlight: "Excellent Grade"
    },
    {
      year: "2024",
      achievement: "Master of Law (LLM)",
      institution: "King's College London, United Kingdom",
      specialization: "International Corporate and Commercial Law",
      icon: GraduationCap,
      highlight: "International Excellence"
    },
    {
      year: "1987",
      achievement: "BA (Hons) English Studies & Literature",
      institution: "University of Port Harcourt",
      icon: BookOpen,
      highlight: "President, National Union of Rivers State Students (NURSS)"
    }
  ];

  const impactMetrics = [
    {
      metric: "1,763+",
      label: "KM Rail Lines",
      description: "Modern infrastructure delivered",
      icon: "🚄"
    },
    {
      metric: "11,300+",
      label: "Jobs Created",
      description: "Direct employment opportunities",
      icon: "👷"
    },
    {
      metric: "460+",
      label: "Megawatts",
      description: "Power generation in Rivers State",
      icon: "⚡"
    },
    {
      metric: "300+",
      label: "Schools Built",
      description: "Educational infrastructure",
      icon: "🏫"
    },
    {
      metric: "32",
      label: "Train Stations",
      description: "Ultra-modern facilities",
      icon: "🚉"
    },
    {
      metric: "150+",
      label: "Scholarships",
      description: "International training in China",
      icon: "🎓"
    },
    {
      metric: "16",
      label: "Years",
      description: "Executive leadership experience",
      icon: "👔"
    },
    {
      metric: "314",
      label: "Hectares",
      description: "Songhai Farm - Largest in West Africa",
      icon: "🌾"
    }
  ];

  const leadershipPrinciples = [
    {
      icon: Shield,
      title: "Transparency & Accountability",
      description: "Established Due Process Commission. Every naira accounted for. ₦460M+ railway revenue transparently returned to federal coffers.",
      proof: "Senate granted 'Take a Bow' - highest honor for transparent service"
    },
    {
      icon: Zap,
      title: "Execution Excellence",
      description: "Not just promises - proven delivery. From 30-year abandoned Warri-Itakpe rail to modern Lagos-Ibadan line completed ahead of schedule.",
      proof: "1,763+ KM of rail delivered when others only talked"
    },
    {
      icon: Heart,
      title: "People-Centered Governance",
      description: "Governance must serve the people. 11,300+ jobs created. 150 scholarships abroad. 300+ schools built. Development you can see and touch.",
      proof: "Re-elected Governor with overwhelming support"
    },
    {
      icon: Star,
      title: "Courage & Conviction",
      description: "Stood for rule of law when substituted in 2007. Fought to Supreme Court and won. Defected from PDP to APC on principle. Nigeria needs leaders with backbone.",
      proof: "Supreme Court vindicated his stand for democracy (Oct 26, 2007)"
    }
  ];

  const honours = [
    {
      title: "Commander of the Order of the Niger (CON)",
      body: "Federal Republic of Nigeria",
      year: "National Honour"
    },
    {
      title: "Knight of the Order of Saint John (KSJ)",
      body: "Catholic Church",
      year: "2021"
    },
    {
      title: "Chieftaincy Title - Daura",
      body: "Katsina State Traditional Council",
      year: "2022",
      note: "Congratulated personally by President Buhari"
    },
    {
      title: "Award of Excellence",
      body: "Nigerian Union of Journalists",
      year: "2000"
    },
    {
      title: "'Take a Bow' Senate Recognition",
      body: "9th Nigerian Senate",
      year: "2019",
      note: "For distinguished ministerial service"
    }
  ];

  const whyAmaechi = [
    {
      title: "Proven Track Record",
      points: [
        "16 years of executive leadership (8 as Governor, 7 as Minister)",
        "Successfully managed multi-billion naira budgets transparently",
        "Delivered infrastructure projects on time and within budget",
        "Created thousands of jobs across multiple sectors"
      ]
    },
    {
      title: "National Vision",
      points: [
        "Built infrastructure connecting North, South, East, and West",
        "Led successful campaigns uniting diverse political interests",
        "Understands Nigeria's complexities from grassroots experience",
        "International exposure through King's College London education"
      ]
    },
    {
      title: "Economic Competence",
      points: [
        "Transformed Rivers State economy through infrastructure",
        "Revolutionized Nigeria's transportation and maritime sectors",
        "Attracted foreign investment through port development",
        "Generated revenue while maintaining fiscal responsibility"
      ]
    },
    {
      title: "Democratic Credentials",
      points: [
        "Fought for rule of law to Supreme Court - and won",
        "Champion of legislative independence and separation of powers",
        "Defected on principle when democracy was threatened",
        "Earned trust to lead presidential campaigns twice"
      ]
    }
  ];

  const toggleRole = (id) => {
    setExpandedRole(expandedRole === id ? null : id);
  };

  return (
    <div className="bg-white">
      {/* Presidential Hero Section */}
      <section className="relative bg-gradient-to-br from-[#008751] via-[#006b40] to-[#008751] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mt-[-86] mx-auto px-6 md:px-16 lg:px-24 py-24 md:py-32 lg:py-40">
          <div className="max-w-5xl">
            <div className="inline-block mb-6">
              <span className="bg-[#FF6B35] text-white px-6 py-3 rounded-full font-black text-sm tracking-widest shadow-2xl">
                The Leader
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-8 drop-shadow-2xl">
              RT. HON. CHIBUIKE<br/>
              <span className="text-[#FF6B35]">ROTIMI AMAECHI</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/95 leading-relaxed mb-8 font-bold">
              Not Promises. PROVEN RESULTS.
            </p>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 max-w-4xl">
              30+ years of transformational leadership. 1,763+ KM of rail delivered. 11,300+ jobs created.
              Nigeria needs a leader who has DONE IT before - not one who is learning on the job.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#vision" 
                className="inline-flex items-center gap-3 bg-white text-[#008751] px-10 py-5 hover:bg-white/95 transition-all duration-300 font-bold text-lg tracking-wide group shadow-2xl hover:shadow-3xl rounded-full transform hover:scale-105"
              >
            Vision
                <Rocket size={24} className="group-hover:scale-110 transition-transform duration-300" strokeWidth={3} />
              </a>
              <a 
                href="#join" 
                className="inline-flex items-center gap-3 bg-[#FF6B35] text-white px-10 py-5 hover:bg-[#e55a28] transition-all duration-300 font-bold text-lg tracking-wide group rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105"
              >
                Join the Movement
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" strokeWidth={3} />
              </a>
            </div>
          </div>
        </div>

        {/* Animated Stats Banner */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#FF6B35] py-4 overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap">
            <div className="flex items-center gap-12 px-6">
              <span className="font-black text-white text-xl">✓ 1,763+ KM RAIL DELIVERED</span>
              <span className="font-black text-white text-xl">✓ 11,300+ JOBS CREATED</span>
              <span className="font-black text-white text-xl">✓ 32 TRAIN STATIONS BUILT</span>
              <span className="font-black text-white text-xl">✓ 300+ SCHOOLS CONSTRUCTED</span>
              <span className="font-black text-white text-xl">✓ 16 YEARS EXECUTIVE LEADERSHIP</span>
            </div>
            <div className="flex items-center gap-12 px-6">
              <span className="font-black text-white text-xl">✓ 1,763+ KM RAIL DELIVERED</span>
              <span className="font-black text-white text-xl">✓ 11,300+ JOBS CREATED</span>
              <span className="font-black text-white text-xl">✓ 32 TRAIN STATIONS BUILT</span>
              <span className="font-black text-white text-xl">✓ 300+ SCHOOLS CONSTRUCTED</span>
              <span className="font-black text-white text-xl">✓ 16 YEARS EXECUTIVE LEADERSHIP</span>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}</style>
      </section>

      {/* Presidential Vision */}
      <section id="vision" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <p className="text-[#FF6B35] font-black tracking-widest mb-4 text-sm">THE AMAECHI AGENDA</p>
            <h2 className="text-4xl md:text-6xl font-black mb-6">Presidential Vision for Nigeria</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four pillars of transformation based on proven experience, not empty promises
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {presidentialVision.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#008751] group"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-20 h-20 bg-[#008751] rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                      <Icon size={40} className="text-white" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-gray-900 mb-3">
                        {pillar.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {pillar.description}
                      </p>
                      <div className="bg-[#008751] text-white px-4 py-2 rounded-lg inline-block font-bold text-sm">
                        {pillar.promise}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Results That Speak</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable achievements from 30+ years of dedicated public service
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {impactMetrics.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-gray-100 hover:border-[#FF6B35]"
              >
                <div className="text-5xl mb-3">{item.icon}</div>
                <div className="text-4xl md:text-5xl font-black text-[#008751] mb-2">
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

      {/* Track Record */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <p className="text-[#008751] font-black tracking-widest mb-4 text-sm">PROVEN LEADERSHIP</p>
            <h2 className="text-4xl md:text-6xl font-black mb-6">Distinguished Service Record</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              16 years of executive leadership. Billions managed transparently. Infrastructure delivered. Jobs created.
            </p>
          </div>

          <div className="space-y-6">
            {keyPositions.map((position) => {
              const Icon = position.icon;
              const isExpanded = expandedRole === position.id;
              
              return (
                <div 
                  key={position.id}
                  className="bg-gradient-to-r from-white to-gray-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-gray-100"
                >
                  <button
                    onClick={() => toggleRole(position.id)}
                    className="w-full p-8 flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center gap-6 flex-1">
                      <div className={`flex-shrink-0 w-20 h-20 ${position.color} rounded-2xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-xl`}>
                        <Icon size={36} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-black text-gray-900 mb-2">
                          {position.title}
                        </h3>
                        <p className="text-[#008751] font-bold text-lg tracking-wide">
                          {position.period}
                        </p>
                        {position.testimonial && (
                          <p className="text-[#FF6B35] font-semibold text-sm mt-2 italic">
                            🏆 {position.testimonial}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      {isExpanded ? (
                        <ChevronUp size={32} className="text-[#008751]" strokeWidth={3} />
                      ) : (
                        <ChevronDown size={32} className="text-gray-400 group-hover:text-[#008751] transition-colors duration-300" strokeWidth={3} />
                      )}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-8 pb-8 border-t-2 border-gray-200">
                      <div className="pt-8">
                        <div className="bg-gradient-to-r from-[#008751] to-[#006b40] text-white p-6 rounded-2xl mb-8 shadow-xl">
                          <p className="font-bold text-xl">
                            ✓ {position.impact}
                          </p>
                        </div>

                        <h4 className="text-2xl font-black text-gray-900 mb-6">Major Achievements:</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {position.achievements.map((achievement, idx) => (
                            <div 
                              key={idx}
                              className="flex items-start gap-3 bg-white p-5 rounded-xl border-2 border-gray-100 hover:border-[#008751] hover:shadow-lg transition-all duration-300"
                            >
                              <CheckCircle className="flex-shrink-0 text-[#008751] mt-0.5" size={24} strokeWidth={3} />
                              <p className="text-gray-700 leading-relaxed font-medium">
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

      {/* Leadership Principles */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Leadership Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Core values proven through decades of public service
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {leadershipPrinciples.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#008751] group"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#008751] to-[#006b40] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <Icon size={36} className="text-white" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-gray-900 mb-3">
                        {principle.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {principle.description}
                      </p>
                      <div className="bg-[#FF6B35] text-white px-4 py-3 rounded-lg font-bold text-sm">
                        ✓ {principle.proof}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Educational Excellence */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <p className="text-[#FF6B35] font-black tracking-widest mb-4 text-sm">LIFELONG LEARNER</p>
            <h2 className="text-4xl md:text-6xl font-black mb-6">Educational Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From student leader to lawyer - commitment to continuous learning and self-improvement
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-[#008751] via-[#FF6B35] to-[#008751] rounded-full hidden md:block"></div>

              <div className="space-y-8">
                {educationalExcellence.map((edu, index) => {
                  const Icon = edu.icon;
                  return (
                    <div 
                      key={index}
                      className="relative bg-gradient-to-r from-white to-gray-50 rounded-2xl shadow-xl p-8 md:ml-24 hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#008751]"
                    >
                      {/* Timeline dot */}
                      <div className="absolute -left-14 top-10 w-10 h-10 bg-[#008751] rounded-full border-4 border-white shadow-xl hidden md:flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>

                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#008751] to-[#FF6B35] rounded-2xl flex items-center justify-center shadow-xl">
                          <Icon size={36} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <div className="bg-[#FF6B35] text-white px-4 py-2 rounded-lg inline-block font-black text-sm mb-3">
                                {edu.year}
                              </div>
                              <h3 className="text-2xl font-black text-gray-900 mb-2">
                                {edu.achievement}
                              </h3>
                              <p className="text-[#008751] font-bold text-lg">
                                {edu.institution}
                              </p>
                            </div>
                          </div>
                          {edu.specialization && (
                            <div className="bg-gray-100 p-4 rounded-xl mt-4 border-l-4 border-[#008751]">
                              <p className="font-bold text-gray-900">
                                Specialization: <span className="text-[#008751]">{edu.specialization}</span>
                              </p>
                            </div>
                          )}
                          {edu.highlight && (
                            <div className="mt-4 text-[#FF6B35] font-bold text-sm">
                              🌟 {edu.highlight}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Honours & Recognition */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Honours & Recognition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              National and international recognition for distinguished service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {honours.map((honour, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#FF6B35] text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#008751] to-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <Award size={32} className="text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3">
                  {honour.title}
                </h3>
                <p className="text-[#008751] font-bold mb-2">
                  {honour.body}
                </p>
                <p className="text-gray-600 text-sm font-semibold">
                  {honour.year}
                </p>
                {honour.note && (
                  <p className="text-[#FF6B35] text-xs font-bold mt-3 italic">
                    {honour.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Amaechi Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Why Amaechi for President?</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-bold">
              Nigeria deserves a leader with PROVEN RESULTS, not just beautiful promises
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyAmaechi.map((reason, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#008751]"
              >
                <h3 className="text-2xl font-black text-[#008751] mb-6">
                  {reason.title}
                </h3>
                <div className="space-y-4">
                  {reason.points.map((point, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="flex-shrink-0 text-[#FF6B35] mt-1" size={24} strokeWidth={3} />
                      <p className="text-gray-700 leading-relaxed font-medium">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supreme Court Victory Highlight */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#FF6B35] px-6 py-3 rounded-full font-black text-sm tracking-widest mb-6">
                HISTORIC VICTORY
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Standing for Rule of Law
              </h2>
              <p className="text-xl text-white/90 leading-relaxed mb-6">
                In 2007, after winning the PDP primaries, faced unjust substitution. As a believer in democracy and rule of law, took the case to court.
              </p>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                On <span className="text-[#FF6B35] font-black">October 26, 2007</span>, the Supreme Court ruled him the rightful candidate and winner - a victory for the masses, democracy, and the rule of law.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <p className="text-white/90 leading-relaxed italic">
                  "I believed in the judiciary. I believed in the rule of law. And Nigeria rewarded that faith. This is the kind of leadership Nigeria needs - one that respects institutions and fights for what is right."
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#008751] to-[#006b40] rounded-2xl p-8 md:p-12">
              <h3 className="text-3xl font-black mb-8">
                Democratic Credentials
              </h3>
              <div className="space-y-6">
                {[
                  { title: "2007", desc: "Supreme Court victory - First Governor to win via court" },
                  { title: "2011", desc: "Re-elected with overwhelming support" },
                  { title: "2013", desc: "Defected to APC on principle - stood against impunity" },
                  { title: "2015", desc: "Led APC to historic victory - defeated sitting President" },
                  { title: "2019", desc: "Secured President Buhari's re-election as DG" },
                  { title: "2022", desc: "Polled 2nd in APC primaries with 316 delegates votes" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/20 transition-colors duration-300">
                    <p className="text-[#FF6B35] font-black text-lg mb-2">{item.title}</p>
                    <p className="text-white font-semibold">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Campaign CTA */}
      <section id="join" className="bg-gradient-to-br from-[#008751] via-[#006b40] to-[#008751] text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 md:px-16 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8 drop-shadow-2xl">
            NIGERIA DESERVES BETTER
          </h2>
          <p className="text-2xl md:text-3xl mb-6 text-white/95 font-bold">
            Not promises. PROVEN RESULTS.
          </p>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
            1,763+ KM of rail delivered. 11,300+ jobs created. 16 years of executive leadership.
            30+ years of service. Choose experience. Choose results. Choose Amaechi.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="volunteer" 
              className="inline-flex items-center justify-center gap-3 bg-white text-[#008751] px-12 py-6 hover:bg-white/95 transition-all duration-300 font-black text-xl tracking-wide group shadow-2xl hover:shadow-3xl rounded-full transform hover:scale-105"
            >
              VOLUNTEER NOW
              <Users size={28} className="group-hover:scale-110 transition-transform duration-300" strokeWidth={3} />
            </a>
            <a 
              href="support" 
              className="inline-flex items-center justify-center gap-3 bg-[#FF6B35] text-white px-12 py-6 hover:bg-[#e55a28] transition-all duration-300 font-black text-xl tracking-wide group rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              DONATE TO CAMPAIGN
              <Heart size={28} strokeWidth={3} />
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "36", label: "States to Transform" },
              { num: "200M+", label: "Nigerians to Serve" },
              { num: "4", label: "Years of Progress" },
              { num: "1", label: "Nigeria United" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-black text-[#FF6B35] mb-2">{stat.num}</div>
                <div className="text-white/90 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AmaechiPresidentialCampaign;