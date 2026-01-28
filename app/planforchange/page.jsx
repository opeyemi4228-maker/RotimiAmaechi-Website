'use client'
import React, { useState } from "react";
import { ArrowRight, Target, TrendingUp, Users, Zap, Shield, Lightbulb, Globe, Building2, Heart, GraduationCap, Stethoscope, Truck, Factory, Leaf, Scale, BookOpen, CheckCircle, Star, Award, Flame, Rocket, ChevronRight, MapPin, DollarSign, Briefcase, Clock } from "lucide-react";

const VisionForNigeria = () => {
  const [activePillar, setActivePillar] = useState(0);

  const visionStatement = {
    title: "A NEW NIGERIA",
    subtitle: "Building a Nation of Opportunity, Justice, and Prosperity",
    description: "A comprehensive vision for transforming Nigeria into a modern, competitive, and prosperous nation where every citizen has access to quality education, healthcare, economic opportunity, and justice under the law."
  };

  const coreValues = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Transparent governance, accountability in public service, and zero tolerance for corruption",
      color: "bg-[#E31E24]"
    },
    {
      icon: Users,
      title: "Service to Nation",
      description: "People-first leadership that prioritizes citizen welfare and national development",
      color: "bg-[#C41A1F]"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing technology and modern solutions to solve Nigeria's challenges",
      color: "bg-[#A01519]"
    },
    {
      icon: Scale,
      title: "Justice & Equity",
      description: "Equal opportunity for all Nigerians regardless of background, religion, or region",
      color: "bg-[#8B1115]"
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Setting international standards in governance, infrastructure, and service delivery",
      color: "bg-[#6F0D10]"
    },
    {
      icon: Flame,
      title: "Patriotism",
      description: "Unwavering commitment to Nigeria's unity, progress, and global competitiveness",
      color: "bg-[#5A0A0D]"
    }
  ];

  const keyPillars = [
    {
      icon: Building2,
      title: "Infrastructure Revolution",
      tagline: "Connecting Nigeria for Growth",
      description: "Transforming Nigeria's infrastructure through comprehensive modernization of transportation, power, and digital networks to drive economic growth and improve quality of life.",
      initiatives: [
        {
          name: "National Rail Network",
          details: "Complete standard gauge railway connecting all 36 states, reducing travel time and transportation costs",
          impact: "5M+ jobs created, 40% reduction in logistics costs"
        },
        {
          name: "Power Generation & Distribution",
          details: "Achieve 25,000MW generation capacity and 99% grid reliability through diversified energy sources",
          impact: "24/7 power for all homes and businesses"
        },
        {
          name: "Digital Infrastructure",
          details: "5G coverage nationwide, fiber optic networks in all LGAs, and digital literacy programs",
          impact: "100M Nigerians connected to high-speed internet"
        },
        {
          name: "Road & Bridge Network",
          details: "Reconstruct federal highways, build strategic bridges, and implement smart traffic systems",
          impact: "50% reduction in travel time between major cities"
        }
      ],
      color: "from-[#E31E24] to-[#C41A1F]"
    },
    {
      icon: GraduationCap,
      title: "Education Transformation",
      tagline: "Investing in Nigeria's Future",
      description: "Revolutionizing education from primary to tertiary level with focus on quality, accessibility, technology integration, and skills development for the 21st century economy.",
      initiatives: [
        {
          name: "Universal Quality Education",
          details: "Build 10,000 modern schools meeting international standards, train 500,000 teachers in modern pedagogy",
          impact: "Every Nigerian child in quality school by 2030"
        },
        {
          name: "Technology in Classrooms",
          details: "Equip all schools with computers, internet, and digital learning tools. Coding from primary school",
          impact: "Nigeria becomes Africa's tech education leader"
        },
        {
          name: "Skills & Vocational Training",
          details: "Establish 1,000 vocational centers teaching in-demand skills aligned with industry needs",
          impact: "2M youth trained annually in marketable skills"
        },
        {
          name: "Scholarship & Higher Education",
          details: "Expand overseas scholarship programs and upgrade universities to global standards",
          impact: "100,000 Nigerians studying abroad annually"
        }
      ],
      color: "from-[#C41A1F] to-[#A01519]"
    },
    {
      icon: Stethoscope,
      title: "Healthcare Revolution",
      tagline: "Health for All Nigerians",
      description: "Building a world-class healthcare system that provides affordable, accessible, and quality medical services to every Nigerian citizen.",
      initiatives: [
        {
          name: "Primary Healthcare Centers",
          details: "Upgrade and equip 10,000 PHCs with modern equipment, medicines, and trained personnel",
          impact: "Quality healthcare within 5km of every community"
        },
        {
          name: "Specialist Hospitals",
          details: "Build 100 specialist hospitals across all states with advanced medical technology",
          impact: "Stop medical tourism, save $2B annually"
        },
        {
          name: "Health Insurance Coverage",
          details: "Universal health insurance covering all Nigerians with subsidized premiums for low-income families",
          impact: "200M Nigerians with health coverage"
        },
        {
          name: "Medical Training & Research",
          details: "Train 100,000 healthcare workers and establish research centers for African diseases",
          impact: "Nigeria becomes regional medical hub"
        }
      ],
      color: "from-[#A01519] to-[#8B1115]"
    },
    {
      icon: Briefcase,
      title: "Economic Empowerment",
      tagline: "Jobs, Growth, and Prosperity",
      description: "Creating a robust, diversified economy that generates millions of jobs and lifts Nigerians out of poverty through strategic investments and business-friendly policies.",
      initiatives: [
        {
          name: "Job Creation Programs",
          details: "Public works, infrastructure projects, and youth employment schemes creating 10M jobs",
          impact: "Unemployment reduced to under 10%"
        },
        {
          name: "SME Support & Financing",
          details: "N500B SME fund with low-interest loans, business training, and market access support",
          impact: "5M new businesses created, 20M jobs"
        },
        {
          name: "Agriculture Modernization",
          details: "Mechanized farming, processing facilities, and direct market access for farmers",
          impact: "Food security, 50M jobs in agribusiness"
        },
        {
          name: "Manufacturing & Industry",
          details: "Industrial parks, tax incentives, and infrastructure to attract investment",
          impact: "Manufacturing contributes 20% to GDP"
        }
      ],
      color: "from-[#8B1115] to-[#6F0D10]"
    },
    {
      icon: Shield,
      title: "Security & Justice",
      tagline: "Safety for Every Nigerian",
      description: "Ensuring the safety and security of all Nigerians through modern policing, reformed judicial system, and strategic defense capabilities.",
      initiatives: [
        {
          name: "Police Reform & Modernization",
          details: "Recruit 200,000 officers, modern equipment, better training, and improved welfare",
          impact: "1 officer per 200 citizens, response time under 10 mins"
        },
        {
          name: "Judicial System Reform",
          details: "Fast-track courts, digitized case management, and zero tolerance for corruption",
          impact: "Cases resolved within 12 months maximum"
        },
        {
          name: "Border Security & Defense",
          details: "Secure borders with technology, strengthen military with modern equipment",
          impact: "Eliminate illegal arms, drugs, and smuggling"
        },
        {
          name: "Community Policing",
          details: "Engage communities in security, establish neighborhood watch programs",
          impact: "Crime reduced by 60% in 5 years"
        }
      ],
      color: "from-[#6F0D10] to-[#5A0A0D]"
    },
    {
      icon: Leaf,
      title: "Sustainable Environment",
      tagline: "Green Nigeria for Future Generations",
      description: "Environmental protection and climate action through renewable energy adoption, reforestation, and sustainable practices.",
      initiatives: [
        {
          name: "Renewable Energy Transition",
          details: "Solar, wind, and hydro to provide 40% of Nigeria's energy by 2035",
          impact: "Clean energy, 100,000 green jobs"
        },
        {
          name: "Reforestation Program",
          details: "Plant 1 billion trees in 10 years, protect existing forests and wildlife",
          impact: "Combat desertification, preserve biodiversity"
        },
        {
          name: "Waste Management",
          details: "Modern recycling facilities, ban on single-use plastics, clean cities campaign",
          impact: "Clean environment, 500,000 sanitation jobs"
        },
        {
          name: "Climate Adaptation",
          details: "Flood control systems, drought-resistant agriculture, coastal protection",
          impact: "Protect communities from climate impacts"
        }
      ],
      color: "from-[#5A0A0D] to-[#E31E24]"
    }
  ];

  const nationalGoals = [
    {
      icon: TrendingUp,
      goal: "GDP Growth",
      target: "8%+ annually",
      description: "Sustained economic growth through diversification and productivity"
    },
    {
      icon: Users,
      goal: "Poverty Reduction",
      target: "Under 20%",
      description: "Lift 50M+ Nigerians out of poverty by 2030"
    },
    {
      icon: Zap,
      goal: "Power Generation",
      target: "25,000 MW",
      description: "Reliable 24/7 electricity for all homes and businesses"
    },
    {
      icon: GraduationCap,
      goal: "Literacy Rate",
      target: "98%+",
      description: "Universal education and adult literacy programs"
    },
    {
      icon: Stethoscope,
      goal: "Life Expectancy",
      target: "70+ years",
      description: "World-class healthcare accessible to all citizens"
    },
    {
      icon: Globe,
      goal: "Global Competitiveness",
      target: "Top 20",
      description: "Nigeria among world's top 20 economies by 2035"
    }
  ];

  const implementationStrategy = [
    {
      phase: "Phase 1: Foundation",
      period: "Year 1-2",
      focus: "Institutional Reform & Quick Wins",
      actions: [
        "Establish anti-corruption framework and strengthen institutions",
        "Launch emergency infrastructure repairs nationwide",
        "Implement universal health insurance enrollment",
        "Begin mass teacher and healthcare worker recruitment",
        "Secure foreign direct investment commitments"
      ]
    },
    {
      phase: "Phase 2: Acceleration",
      period: "Year 2-3",
      focus: "Major Projects & Transformation",
      actions: [
        "Complete key rail corridors and power plants",
        "Open 5,000 new schools and 100 specialist hospitals",
        "Launch national digital ID and financial inclusion programs",
        "Establish 500 vocational training centers",
        "Begin major agricultural and manufacturing investments"
      ]
    },
    {
      phase: "Phase 3: Consolidation",
      period: "Year 3-4",
      focus: "Sustainability & Scale",
      actions: [
        "Complete national infrastructure transformation",
        "Achieve universal healthcare and education coverage",
        "Position Nigeria as regional economic powerhouse",
        "Reach all employment and poverty reduction targets",
        "Establish Nigeria as global innovation hub"
      ]
    }
  ];

  const commitment = [
    {
      icon: CheckCircle,
      title: "Transparent Governance",
      description: "Open budgets, public reporting, and citizen engagement in all government activities"
    },
    {
      icon: Award,
      title: "Meritocracy",
      description: "Appointments and opportunities based solely on competence, not connections"
    },
    {
      icon: Heart,
      title: "Youth Empowerment",
      description: "60% of cabinet under 50, youth quotas in all programs and initiatives"
    },
    {
      icon: Globe,
      title: "Global Partnerships",
      description: "Strategic alliances with leading nations and institutions for technology transfer"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#E31E24] via-[#C41A1F] to-[#A01519] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mt-[-96] mx-auto px-6 md:px-16 lg:px-24 py-24 md:py-32 lg:py-40">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Star size={24} className="text-white" fill="white" />
              <p className="text-white/90 font-bold tracking-widest text-sm md:text-base">VISION FOR NIGERIA</p>
              <Star size={24} className="text-white" fill="white" />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-8">
              {visionStatement.title}
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-white mb-6">
              {visionStatement.subtitle}
            </p>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 max-w-4xl mx-auto">
              {visionStatement.description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="#pillars" 
                className="inline-flex items-center gap-3 bg-white text-[#E31E24] px-10 py-5 hover:bg-white/95 transition-all duration-300 font-bold text-lg tracking-wide group shadow-lg hover:shadow-xl rounded-full"
              >
                Explore the Vision
                <Rocket size={22} className="group-hover:translate-x-1 transition-transform duration-300" strokeWidth={3} />
              </a>
              <a 
                href="#values" 
                className="inline-flex items-center gap-3 bg-transparent text-white border-2 border-white px-10 py-5 hover:bg-white hover:text-[#E31E24] transition-all duration-300 font-bold text-lg tracking-wide group rounded-full"
              >
                Our Values
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

      {/* Core Values */}
      <section id="values" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The fundamental principles that will guide our governance and nation-building
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100"
                >
                  <div className={`w-16 h-16 ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                    <Icon size={32} className="text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* National Goals */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">National Goals 2030</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ambitious yet achievable targets that will transform Nigeria into a modern, prosperous nation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nationalGoals.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[#E31E24] group hover:scale-105"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#C41A1F] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                      <Icon size={24} className="text-white" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {item.goal}
                      </h3>
                      <p className="text-3xl font-black text-[#E31E24]">
                        {item.target}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Pillars - Interactive */}
      <section id="pillars" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">Six Pillars of Transformation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive strategies across critical sectors to build a new Nigeria
            </p>
          </div>

          {/* Pillar Tabs */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {keyPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActivePillar(index)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
                    activePillar === index
                      ? 'bg-gradient-to-r from-[#E31E24] to-[#C41A1F] text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon size={20} strokeWidth={2.5} />
                  {pillar.title}
                </button>
              );
            })}
          </div>

          {/* Active Pillar Content */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden">
            <div className={`bg-gradient-to-r ${keyPillars[activePillar].color} p-8 md:p-12`}>
              <div className="flex items-start gap-6 mb-6">
                {React.createElement(keyPillars[activePillar].icon, {
                  size: 48,
                  className: "text-white flex-shrink-0",
                  strokeWidth: 2
                })}
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-2">
                    {keyPillars[activePillar].title}
                  </h3>
                  <p className="text-xl text-white/90 font-bold mb-4">
                    {keyPillars[activePillar].tagline}
                  </p>
                  <p className="text-lg text-white/80 leading-relaxed">
                    {keyPillars[activePillar].description}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <h4 className="text-2xl font-black text-white mb-8">Key Initiatives</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {keyPillars[activePillar].initiatives.map((initiative, idx) => (
                  <div 
                    key={idx}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <CheckCircle className="text-[#E31E24] flex-shrink-0 mt-1" size={24} strokeWidth={2.5} />
                      <h5 className="text-xl font-bold text-white">
                        {initiative.name}
                      </h5>
                    </div>
                    <p className="text-white/80 mb-4 leading-relaxed">
                      {initiative.details}
                    </p>
                    <div className="bg-[#E31E24]/20 rounded-lg p-3">
                      <p className="text-sm font-bold text-white/70 mb-1">EXPECTED IMPACT:</p>
                      <p className="text-white font-semibold">
                        {initiative.impact}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">Implementation Roadmap</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A phased approach to ensure sustainable transformation and measurable progress
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#E31E24] via-[#C41A1F] to-[#A01519] rounded-full hidden md:block"></div>

            <div className="space-y-8">
              {implementationStrategy.map((phase, index) => (
                <div 
                  key={index}
                  className="relative bg-white rounded-2xl shadow-xl p-8 md:p-10 md:ml-20 hover:shadow-2xl transition-all duration-300"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-12 top-10 w-8 h-8 bg-[#E31E24] rounded-full border-4 border-white shadow-lg hidden md:flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>

                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C41A1F] rounded-xl flex items-center justify-center text-white text-2xl font-black">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-1">
                            {phase.phase}
                          </h3>
                          <p className="text-[#E31E24] font-bold text-lg">
                            {phase.period}
                          </p>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg mb-4">
                        <p className="text-sm font-bold text-gray-700 mb-2">STRATEGIC FOCUS:</p>
                        <p className="text-lg font-semibold text-gray-900">
                          {phase.focus}
                        </p>
                      </div>
                      <div className="space-y-3">
                        {phase.actions.map((action, actionIdx) => (
                          <div key={actionIdx} className="flex items-start gap-3">
                            <ChevronRight className="text-[#E31E24] flex-shrink-0 mt-1" size={20} strokeWidth={3} />
                            <p className="text-gray-700 leading-relaxed">
                              {action}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment to Nigerians */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="bg-gradient-to-br from-[#E31E24] to-[#C41A1F] rounded-3xl p-8 md:p-12 lg:p-16 text-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Our Commitment to Nigerians</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Solemn pledges that will guide every decision and action in government
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {commitment.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                      <Icon size={28} className="text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl font-black mb-3">
                      {item.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-16 text-center">
          <Rocket size={64} className="mx-auto mb-8 text-[#E31E24]" strokeWidth={1.5} />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            TOGETHER, WE BUILD A NEW NIGERIA
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            This vision is not just a promise—it's a covenant with every Nigerian. 
            A commitment to excellence, justice, and prosperity for all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#join" 
              className="inline-flex items-center justify-center gap-3 bg-[#E31E24] text-white px-10 py-5 hover:bg-[#C41A1F] transition-all duration-300 font-bold text-lg tracking-wide group shadow-lg hover:shadow-xl rounded-full"
            >
              Join the Movement
              <Users size={22} strokeWidth={2} />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center gap-3 bg-transparent text-white border-2 border-white px-10 py-5 hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold text-lg tracking-wide group rounded-full"
            >
              Share Your Ideas
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" strokeWidth={3} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionForNigeria;