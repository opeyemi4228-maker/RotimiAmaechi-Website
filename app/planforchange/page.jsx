'use client'
import React, { useState } from "react";
import { ArrowRight, Target, TrendingUp, Users, Zap, Shield, Lightbulb, Globe, Building2, Heart, GraduationCap, Stethoscope, Truck, Factory, Leaf, Scale, BookOpen, CheckCircle, Star, Award, Flame, Rocket, ChevronRight, MapPin, DollarSign, Briefcase, Clock, Train, Ship, Wrench } from "lucide-react";

const AmaechiPlanForChange = () => {
  const [activePillar, setActivePillar] = useState(0);

  const manifestoVision = {
    title: "THE AMAECHI AGENDA",
    subtitle: "From Proven Results to National Transformation",
    description: "Not promises. Not theories. A comprehensive plan built on 30+ years of proven leadership, 1,763+ KM of rail delivered, 11,300+ jobs created, and 16 years of executive experience. Nigeria needs a leader who has DONE IT before."
  };

  const coreValues = [
    {
      icon: Shield,
      title: "Proven Integrity",
      description: "₦460M+ railway revenue transparently returned. Senate 'Take a Bow' for distinguished service. Due Process Commission established in Rivers State.",
      color: "bg-[#008751]",
      proof: "Senate Recognition 2019"
    },
    {
      icon: Rocket,
      title: "Execution Excellence",
      description: "1,763+ KM rail delivered when others only talked. 300+ schools built. 160 health centers constructed. Results, not rhetoric.",
      color: "bg-[#FF6B35]",
      proof: "30-year Warri-Itakpe completed"
    },
    {
      icon: Users,
      title: "People First",
      description: "11,300+ jobs created as Minister. 150 international scholarships. 550+ maritime cadets trained. Development that touches lives.",
      color: "bg-[#008751]",
      proof: "11,300+ direct jobs created"
    },
    {
      icon: Target,
      title: "Strategic Vision",
      description: "Led APC to historic 2015 victory. Transformed Rivers State. Revolutionized national transportation. Vision backed by execution.",
      color: "bg-[#FF6B35]",
      proof: "First opposition to defeat sitting president"
    },
    {
      icon: Scale,
      title: "Rule of Law",
      description: "Fought to Supreme Court for democracy in 2007 - and won. Champion of legislative independence. Defender of constitutional order.",
      color: "bg-[#008751]",
      proof: "Supreme Court Victory Oct 26, 2007"
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "King's College London LLM. International rail projects. Standard gauge infrastructure. Nigeria competing globally.",
      color: "bg-[#FF6B35]",
      proof: "Master of Law - King's College London"
    }
  ];

  const keyPillars = [
    {
      icon: Train,
      title: "Infrastructure Revolution",
      tagline: "Building on 1,763+ KM Success",
      description: "As Minister, I delivered 1,763+ KM of modern rail, 32 train stations, and revolutionized maritime infrastructure. As President, I'll complete what I started - connecting every state with world-class infrastructure.",
      trackRecord: "✓ Lagos-Ibadan rail (157KM) • ✓ Abuja-Kaduna rail (186KM) • ✓ Warri-Itakpe completed after 30 years • ✓ Lekki Deep Seaport • ✓ 32 modern train stations",
      initiatives: [
        {
          name: "Complete National Rail Network",
          details: "Extend standard gauge rail to all 36 states. Build on existing Lagos-Ibadan, Abuja-Kaduna, and Warri-Itakpe lines to create integrated national network",
          impact: "Connect Nigeria • Reduce transport costs 60% • Create 500,000+ jobs",
          timeline: "Year 1-3"
        },
        {
          name: "Power for All - 24/7 Electricity",
          details: "Replicate 460MW success in Rivers State nationwide. Solar, hydro, gas diversification. Distribution reform. Already proven with Afam, Trans Amadi, Onne power projects",
          impact: "25,000MW capacity • Reliable power 24/7 • Manufacturing boom",
          timeline: "Year 1-4"
        },
        {
          name: "Seaports & Maritime Excellence",
          details: "Complete Bonny Deep Seaport, expand Lekki. Implement Deep Blue security nationwide. Already restructured Maritime Academy to UK standards",
          impact: "Triple port capacity • Stop smuggling • Regional maritime hub",
          timeline: "Year 1-3"
        },
        {
          name: "Roads & Transportation",
          details: "Federal highways reconstruction. Smart traffic systems. Already built Port Harcourt monorail, connected entire Rivers State by road",
          impact: "Safe roads nationwide • Modern public transport • 200,000+ jobs",
          timeline: "Year 1-4"
        }
      ],
      color: "from-[#008751] to-[#006b40]"
    },
    {
      icon: GraduationCap,
      title: "Education Excellence",
      tagline: "From 300+ Schools to National Transformation",
      description: "As Governor, I built 300+ primary schools and 24 model secondary schools meeting international standards. Provided yearly scholarships. As President, I'll scale this nationwide.",
      trackRecord: "✓ 300+ schools built in Rivers • ✓ 24 international-standard secondary schools • ✓ 150 Nigerians studying in China (full scholarships) • ✓ Transport University established",
      initiatives: [
        {
          name: "Build 10,000 Modern Schools",
          details: "International standard schools in every LGA. Modern facilities, technology-equipped classrooms. Already built 300+ in Rivers State - I know how",
          impact: "Every child in quality school • 100,000+ teachers trained",
          timeline: "Year 1-3"
        },
        {
          name: "Mass Scholarship Program",
          details: "Expand 150-student China program to 100,000 annually. Already facilitated yearly Rivers scholarships - proven system",
          impact: "100,000 Nigerians studying abroad • Skills for 21st century",
          timeline: "Year 1-4"
        },
        {
          name: "Vocational & Skills Training",
          details: "1,000 centers nationwide. Technology, agriculture, manufacturing focus. Built Kajola Wagon Assembly Plant - local production works",
          impact: "2M youth trained annually • Job-ready graduates",
          timeline: "Year 2-4"
        },
        {
          name: "University Transformation",
          details: "Upgrade facilities to global standards. Research funding. Already established Transport University in Daura",
          impact: "World-class universities • Stop brain drain",
          timeline: "Year 2-4"
        }
      ],
      color: "from-[#FF6B35] to-[#e55a28]"
    },
    {
      icon: Stethoscope,
      title: "Healthcare Revolution",
      tagline: "From 160 PHCs to Universal Coverage",
      description: "As Governor, I built 160 Primary Health Centers and 3 ultra-modern hospitals. As President, I'll provide world-class healthcare for every Nigerian.",
      trackRecord: "✓ 160 PHCs built in Rivers • ✓ 3 ultra-modern hospitals • ✓ 550+ maritime cadets trained (health & safety) • ✓ Healthcare infrastructure investment",
      initiatives: [
        {
          name: "10,000 Primary Health Centers",
          details: "Upgrade and equip PHCs nationwide. Already built 160 in Rivers State - scale the model. Modern equipment, trained staff",
          impact: "Healthcare within 5km of every community • Universal access",
          timeline: "Year 1-3"
        },
        {
          name: "Specialist Hospitals Network",
          details: "100 specialist hospitals across all states. Stop medical tourism. Save billions. Already built 3 ultra-modern hospitals",
          impact: "Advanced care in Nigeria • $2B+ saved annually",
          timeline: "Year 2-4"
        },
        {
          name: "Universal Health Insurance",
          details: "Coverage for all 200M+ Nigerians. Subsidized for low-income. Proven governance model ensures transparency",
          impact: "Everyone covered • Affordable healthcare",
          timeline: "Year 1-2"
        },
        {
          name: "Train 100,000 Healthcare Workers",
          details: "Doctors, nurses, specialists. International training program. Already sent 150 to China - expand healthcare version",
          impact: "End doctor shortage • Nigeria as regional medical hub",
          timeline: "Year 1-4"
        }
      ],
      color: "from-[#008751] to-[#006b40]"
    },
    {
      icon: Briefcase,
      title: "Economic Prosperity & Jobs",
      tagline: "From 11,300+ Jobs to Millions",
      description: "As Minister, I created 11,300+ direct jobs through rail projects alone. As President, I'll replicate this job creation across all sectors.",
      trackRecord: "✓ 11,300+ jobs from rail projects • ✓ 314-hectare Songhai Farm (largest in West Africa) • ✓ Kajola Wagon Assembly Plant • ✓ Industrial development",
      initiatives: [
        {
          name: "10 Million Jobs Campaign",
          details: "Infrastructure projects, agriculture, manufacturing. Already created 11,300+ from railways - multiply across all sectors",
          impact: "Unemployment under 10% • Youth employment priority",
          timeline: "Year 1-4"
        },
        {
          name: "Agriculture Transformation",
          details: "Mechanization, processing, market access. Already built 314-hectare Songhai Farm - 20x bigger than Porto Novo model",
          impact: "Food security • 50M agribusiness jobs • Export earnings",
          timeline: "Year 1-3"
        },
        {
          name: "Manufacturing Renaissance",
          details: "Industrial parks, local production. Already established Kajola Wagon Assembly - replicate nationwide",
          impact: "Manufacturing 20% of GDP • Self-sufficiency • Exports",
          timeline: "Year 2-4"
        },
        {
          name: "SME Empowerment",
          details: "N500B fund, training, market access. Rivers State Due Process model ensures transparency in disbursement",
          impact: "5M new businesses • 20M indirect jobs",
          timeline: "Year 1-4"
        }
      ],
      color: "from-[#FF6B35] to-[#e55a28]"
    },
    {
      icon: Shield,
      title: "Security & Justice",
      tagline: "Building on Deep Blue Success",
      description: "As Minister, I launched Deep Blue Project - Africa's most advanced maritime security system. As President, I'll secure all of Nigeria with technology and strategy.",
      trackRecord: "✓ Deep Blue Project - 17 vessels, 2 aircraft, 3 helicopters • ✓ Electronic Call-Up system (eliminated port gridlock) • ✓ Rule of law champion",
      initiatives: [
        {
          name: "Integrated National Security",
          details: "Expand Deep Blue model to land borders. Technology-driven security. Already secured Gulf of Guinea - replicate nationwide",
          impact: "Safe borders • End smuggling • Modern defense",
          timeline: "Year 1-2"
        },
        {
          name: "Police Modernization",
          details: "200,000 new officers, modern equipment, better welfare. Training academy model. Technology integration",
          impact: "1 officer per 200 citizens • Response time under 10 mins",
          timeline: "Year 1-3"
        },
        {
          name: "Justice System Reform",
          details: "Fast-track courts, digital case management. Supreme Court victory 2007 proved commitment to rule of law",
          impact: "Cases resolved within 12 months • Zero tolerance for corruption",
          timeline: "Year 1-2"
        },
        {
          name: "Community Security",
          details: "Neighborhood watch, community policing. Participatory governance model from Rivers State",
          impact: "Crime reduced 60% • Citizens empowered",
          timeline: "Year 1-4"
        }
      ],
      color: "from-[#008751] to-[#006b40]"
    },
    {
      icon: Leaf,
      title: "Sustainable Development",
      tagline: "Green Nigeria, Prosperous Future",
      description: "Infrastructure development must be sustainable. Port Harcourt urban renewal and Greater Port Harcourt City Master Plan prove large-scale environmental projects work.",
      trackRecord: "✓ Greater Port Harcourt City Master Plan • ✓ Urban renewal programs • ✓ Modern waste management • ✓ Green infrastructure focus",
      initiatives: [
        {
          name: "Renewable Energy Revolution",
          details: "Solar, wind, hydro. 40% renewable by 2035. Power diversification already implemented in Rivers (Afam, Trans Amadi)",
          impact: "Clean energy • 100,000 green jobs • Climate leadership",
          timeline: "Year 1-4"
        },
        {
          name: "National Reforestation",
          details: "1 billion trees in 10 years. Combat desertification. Protect biodiversity. Environmental stewardship",
          impact: "Green Nigeria • Climate resilience",
          timeline: "Year 1-4"
        },
        {
          name: "Modern Waste Management",
          details: "Recycling facilities, clean cities. Already modernized Port Harcourt - scale nationwide",
          impact: "Clean environment • 500,000 sanitation jobs",
          timeline: "Year 2-4"
        },
        {
          name: "Climate Adaptation",
          details: "Flood control, drought-resistant agriculture, coastal protection. Infrastructure that lasts",
          impact: "Protected communities • Sustainable development",
          timeline: "Year 2-4"
        }
      ],
      color: "from-[#FF6B35] to-[#e55a28]"
    }
  ];

  const nationalTargets = [
    {
      icon: TrendingUp,
      goal: "GDP Growth",
      target: "8%+ Annually",
      current: "Based on proven economic management in Rivers State and infrastructure-led growth",
      achievement: "Transformed Rivers State economy through infrastructure"
    },
    {
      icon: Briefcase,
      goal: "Job Creation",
      target: "10M Jobs",
      current: "Proven with 11,300+ jobs from rail projects alone",
      achievement: "11,300+ jobs created as Minister"
    },
    {
      icon: Zap,
      goal: "Power Generation",
      target: "25,000 MW",
      current: "Built 460MW in Rivers State - scale nationwide",
      achievement: "460MW power infrastructure delivered"
    },
    {
      icon: Train,
      goal: "Rail Network",
      target: "5,000+ KM",
      current: "Delivered 1,763+ KM as Minister - continue momentum",
      achievement: "1,763+ KM already delivered"
    },
    {
      icon: GraduationCap,
      goal: "Schools Built",
      target: "10,000 Modern Schools",
      current: "Built 300+ in Rivers State - proven model",
      achievement: "300+ schools built as Governor"
    },
    {
      icon: Stethoscope,
      goal: "Healthcare Coverage",
      target: "200M Nigerians",
      current: "Built 160 PHCs in Rivers - scale the success",
      achievement: "160 Primary Health Centers built"
    }
  ];

  const implementationPlan = [
    {
      phase: "Year 1: Quick Wins & Foundation",
      period: "First 365 Days",
      focus: "Deliver immediate impact while building long-term capacity",
      icon: Rocket,
      actions: [
        "Complete ongoing rail projects (Lagos-Ibadan extension, Ibadan-Kano segment)",
        "Universal health insurance enrollment begins - Rivers model nationwide",
        "Launch 200,000 police recruitment and training program",
        "Begin 460MW power replication in 5 states",
        "Scholarship program expansion - 10,000 students first cohort",
        "Establish Due Process Commission federally (Rivers State model)",
        "Launch national digital ID linked to services"
      ],
      proof: "Proven capacity: Delivered similar scale projects in Rivers State and as Minister"
    },
    {
      phase: "Year 2-3: Transformation Accelerates",
      period: "Months 13-36",
      focus: "Major infrastructure delivery and institutional reform",
      icon: Building2,
      actions: [
        "Complete 2,000+ KM new rail lines (building on 1,763+ KM delivered)",
        "5,000 modern schools operational (scaling 300+ school model)",
        "50 specialist hospitals completed (scaling 3-hospital model)",
        "Achieve 15,000MW power generation capacity",
        "100,000 healthcare workers trained and deployed",
        "5M jobs created through infrastructure and agriculture",
        "Manufacturing hubs operational in all geopolitical zones"
      ],
      proof: "Track record: Built 300+ schools, 160 PHCs, 1,763+ KM rail - scaling proven models"
    },
    {
      phase: "Year 3-4: Consolidation & Scale",
      period: "Months 37-48",
      focus: "Complete transformation and sustainable systems",
      icon: Award,
      actions: [
        "National rail network connecting all 36 states complete",
        "10,000 schools and 100 specialist hospitals operational",
        "25,000MW power generation achieved - 24/7 electricity",
        "10M jobs milestone reached",
        "Universal healthcare coverage at 200M Nigerians",
        "Nigeria in top 20 global economies",
        "Export earnings doubled through manufacturing and agriculture"
      ],
      proof: "Experience: 16 years executive leadership, proven ability to deliver complex projects"
    }
  ];

  const accountability = [
    {
      icon: CheckCircle,
      title: "Quarterly Progress Reports",
      description: "Public reporting every 90 days on all targets and spending. Rivers State Due Process Commission model applied federally.",
      commitment: "Total transparency - every naira accounted for"
    },
    {
      icon: Users,
      title: "Citizen Engagement",
      description: "Town halls, digital feedback, open-door policy. Continued participatory governance from Rivers State experience.",
      commitment: "Government by the people, for the people"
    },
    {
      icon: Award,
      title: "Performance Metrics",
      description: "Cabinet members measured on delivery. Meritocracy, not connections. Competence-based appointments only.",
      commitment: "Results matter - non-performers replaced"
    },
    {
      icon: Globe,
      title: "International Audits",
      description: "Independent verification of all major projects. World Bank and IMF standards. Zero tolerance for corruption.",
      commitment: "Global best practices - Nigerian execution"
    }
  ];

  const provenLeadership = [
    {
      role: "Minister of Transportation",
      years: "7 Years (2015-2022)",
      delivered: [
        "1,763+ KM standard gauge rail",
        "11,300+ jobs created",
        "32 train stations built",
        "Deep Blue maritime security",
        "Transport University established",
        "₦460M+ revenue accounted for"
      ]
    },
    {
      role: "Governor of Rivers State",
      years: "8 Years (2007-2015)",
      delivered: [
        "300+ schools built",
        "160 Primary Health Centers",
        "460MW power infrastructure",
        "Songhai Farm - 314 hectares",
        "Greater Port Harcourt City",
        "Due Process Commission"
      ]
    },
    {
      role: "Speaker, House of Assembly",
      years: "8 Years (1999-2007)",
      delivered: [
        "Most productive legislature",
        "Chairman, Speakers Conference",
        "Legislative independence defended",
        "Supreme Court victory 2007"
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#008751] via-[#006b40] to-[#008751] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6B35] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mt-[-86] mx-auto px-6 md:px-16 lg:px-24 py-24 md:py-32 lg:py-40">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Star size={24} className="text-[#FF6B35]" fill="#FF6B35" />
              <p className="text-white/90 font-bold tracking-widest text-sm md:text-base">PLAN FOR CHANGE • MANIFESTO</p>
              <Star size={24} className="text-[#FF6B35]" fill="#FF6B35" />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-8 drop-shadow-2xl">
              {manifestoVision.title}
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-white mb-6">
              {manifestoVision.subtitle}
            </p>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed mb-8 max-w-4xl mx-auto">
              {manifestoVision.description}
            </p>
            
            {/* Quick Stats Banner */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
              {[
                { num: "1,763+", label: "KM Rail Delivered" },
                { num: "11,300+", label: "Jobs Created" },
                { num: "300+", label: "Schools Built" },
                { num: "16", label: "Years Leadership" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-black text-[#FF6B35] mb-1">{stat.num}</div>
                  <div className="text-white/90 text-sm font-bold">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="#pillars" 
                className="inline-flex items-center gap-3 bg-white text-[#008751] px-10 py-5 hover:bg-white/95 transition-all duration-300 font-bold text-lg tracking-wide group shadow-2xl hover:shadow-3xl rounded-full transform hover:scale-105"
              >
                Explore the Plan
                <Rocket size={22} className="group-hover:scale-110 transition-transform duration-300" strokeWidth={3} />
              </a>
              <a 
                href="#track-record" 
                className="inline-flex items-center gap-3 bg-[#FF6B35] text-white px-10 py-5 hover:bg-[#e55a28] transition-all duration-300 font-bold text-lg tracking-wide group rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105"
              >
                Proven Track Record
                <Award size={22} strokeWidth={3} />
              </a>
            </div>
          </div>
        </div>

        {/* Animated Achievement Banner */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#FF6B35] py-4 overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap">
            <div className="flex items-center gap-12 px-6">
              <span className="font-black text-white text-lg">✓ PROVEN RESULTS</span>
              <span className="font-black text-white text-lg">✓ NOT PROMISES</span>
              <span className="font-black text-white text-lg">✓ 30+ YEARS SERVICE</span>
              <span className="font-black text-white text-lg">✓ INFRASTRUCTURE DELIVERED</span>
              <span className="font-black text-white text-lg">✓ JOBS CREATED</span>
            </div>
            <div className="flex items-center gap-12 px-6">
              <span className="font-black text-white text-lg">✓ PROVEN RESULTS</span>
              <span className="font-black text-white text-lg">✓ NOT PROMISES</span>
              <span className="font-black text-white text-lg">✓ 30+ YEARS SERVICE</span>
              <span className="font-black text-white text-lg">✓ INFRASTRUCTURE DELIVERED</span>
              <span className="font-black text-white text-lg">✓ JOBS CREATED</span>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
        `}</style>
      </section>

      {/* Core Values with Proof */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <p className="text-[#FF6B35] font-black tracking-widest mb-4 text-sm">PROVEN VALUES</p>
            <h2 className="text-4xl md:text-6xl font-black mb-6">Not Just Values - Proven Track Record</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every value backed by concrete achievements and verifiable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#008751]"
                >
                  <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mb-6 shadow-xl`}>
                    <Icon size={32} className="text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {value.description}
                  </p>
                  <div className="bg-[#FF6B35] text-white px-4 py-2 rounded-lg text-sm font-bold inline-block">
                    ✓ {value.proof}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* National Targets with Current Progress */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">National Targets - Built on Success</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Ambitious targets based on proven achievements. Not wishes - scaled-up versions of what I've already delivered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nationalTargets.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-[#008751] hover:scale-105"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#008751] to-[#006b40] rounded-2xl flex items-center justify-center shadow-xl">
                      <Icon size={32} className="text-white" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {item.goal}
                      </h3>
                      <p className="text-3xl font-black text-[#008751]">
                        {item.target}
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg mb-3">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {item.current}
                    </p>
                  </div>
                  <div className="bg-[#FF6B35] text-white px-4 py-2 rounded-lg text-sm font-bold">
                    ✓ {item.achievement}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Six Pillars - Interactive */}
      <section id="pillars" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <p className="text-[#008751] font-black tracking-widest mb-4 text-sm">THE AMAECHI AGENDA</p>
            <h2 className="text-4xl md:text-6xl font-black mb-6">Six Pillars of Transformation</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Not theories from textbooks. Strategies proven through execution. Based on 16 years of executive leadership and concrete results.
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
                      ? 'bg-gradient-to-r from-[#008751] to-[#006b40] text-white shadow-xl scale-105'
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
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className={`bg-gradient-to-r ${keyPillars[activePillar].color} p-8 md:p-12`}>
              <div className="flex items-start gap-6 mb-6">
                {React.createElement(keyPillars[activePillar].icon, {
                  size: 56,
                  className: "text-white flex-shrink-0",
                  strokeWidth: 2
                })}
                <div className="flex-1">
                  <h3 className="text-3xl md:text-5xl font-black text-white mb-3">
                    {keyPillars[activePillar].title}
                  </h3>
                  <p className="text-xl md:text-2xl text-white/95 font-bold mb-4">
                    {keyPillars[activePillar].tagline}
                  </p>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    {keyPillars[activePillar].description}
                  </p>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-sm font-bold text-white/70 mb-2">PROVEN TRACK RECORD:</p>
                    <p className="text-white font-semibold text-base">
                      {keyPillars[activePillar].trackRecord}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <h4 className="text-3xl font-black text-white mb-8">Presidential Plan</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {keyPillars[activePillar].initiatives.map((initiative, idx) => (
                  <div 
                    key={idx}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border-2 border-white/10 hover:border-[#FF6B35]"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <CheckCircle className="text-[#008751] flex-shrink-0 mt-1" size={28} strokeWidth={3} />
                      <h5 className="text-2xl font-bold text-white">
                        {initiative.name}
                      </h5>
                    </div>
                    <p className="text-white/90 mb-4 leading-relaxed text-base">
                      {initiative.details}
                    </p>
                    <div className="bg-[#008751]/30 rounded-xl p-4 mb-4">
                      <p className="text-sm font-bold text-white/70 mb-1">IMPACT:</p>
                      <p className="text-white font-semibold">
                        {initiative.impact}
                      </p>
                    </div>
                    <div className="bg-[#FF6B35] text-white px-4 py-2 rounded-lg text-sm font-bold inline-block">
                      Timeline: {initiative.timeline}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">4-Year Implementation Plan</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Detailed roadmap with clear timelines. Based on proven ability to deliver complex projects on schedule.
            </p>
          </div>

          <div className="space-y-8">
            {implementationPlan.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 hover:shadow-3xl transition-all duration-300 border-2 border-gray-100"
                >
                  <div className="flex items-start gap-6 mb-8">
                    <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#008751] to-[#FF6B35] rounded-2xl flex items-center justify-center text-white text-3xl font-black shadow-xl">
                      <Icon size={40} strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                        {phase.phase}
                      </h3>
                      <p className="text-[#008751] font-bold text-xl mb-3">
                        {phase.period}
                      </p>
                      <div className="bg-gradient-to-r from-[#FF6B35] to-[#e55a28] text-white px-6 py-3 rounded-xl inline-block">
                        <p className="font-bold">FOCUS: {phase.focus}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {phase.actions.map((action, actionIdx) => (
                      <div key={actionIdx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
                        <ChevronRight className="text-[#008751] flex-shrink-0 mt-1" size={24} strokeWidth={3} />
                        <p className="text-gray-700 leading-relaxed font-medium">
                          {action}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-[#008751] text-white px-6 py-4 rounded-xl">
                    <p className="font-bold text-lg">
                      ✓ {phase.proof}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proven Leadership Track Record */}
      <section id="track-record" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <p className="text-[#FF6B35] font-black tracking-widest mb-4 text-sm">EXPERIENCE MATTERS</p>
            <h2 className="text-4xl md:text-6xl font-black mb-6">30+ Years of Proven Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Not learning on the job. Bringing three decades of executive experience and concrete achievements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {provenLeadership.map((record, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#008751]"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#008751] to-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <Award size={40} className="text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">
                    {record.role}
                  </h3>
                  <p className="text-[#008751] font-bold text-lg">
                    {record.years}
                  </p>
                </div>

                <div className="space-y-3">
                  {record.delivered.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="text-[#FF6B35] flex-shrink-0 mt-0.5" size={20} strokeWidth={3} />
                      <p className="text-gray-700 font-medium text-sm">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accountability Framework */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="bg-gradient-to-br from-[#008751] to-[#006b40] rounded-3xl p-8 md:p-12 lg:p-16 text-white shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Accountability Framework</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Transparent governance with measurable targets. Rivers State Due Process Commission model applied federally.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {accountability.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border-2 border-white/20"
                  >
                    <div className="w-16 h-16 bg-[#FF6B35] rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                      <Icon size={32} className="text-white" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-2xl font-black mb-3">
                      {item.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed mb-4 text-lg">
                      {item.description}
                    </p>
                    <div className="bg-white/20 px-4 py-3 rounded-lg">
                      <p className="text-white font-bold">
                        ✓ {item.commitment}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-16 text-center">
          <div className="mb-12">
            <div className="flex justify-center gap-4 mb-8">
              <div className="text-center">
                <div className="text-5xl font-black text-[#008751] mb-2">1,763+</div>
                <div className="text-white/70 text-sm">KM Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-[#FF6B35] mb-2">11,300+</div>
                <div className="text-white/70 text-sm">Jobs Created</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-[#008751] mb-2">16</div>
                <div className="text-white/70 text-sm">Years Leading</div>
              </div>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 drop-shadow-2xl">
            NOT PROMISES. PROVEN RESULTS.
          </h2>
          <p className="text-2xl md:text-3xl mb-6 text-white/95">
            Choose Experience. Choose Results. Choose Amaechi.
          </p>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
            This is not a manifesto of wishes. This is a plan built on 30+ years of proven execution, 
            tested strategies, and concrete achievements. Nigeria deserves a leader who has DONE IT before.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#join" 
              className="inline-flex items-center justify-center gap-3 bg-[#008751] text-white px-12 py-6 hover:bg-[#006b40] transition-all duration-300 font-black text-xl tracking-wide group shadow-2xl hover:shadow-3xl rounded-full transform hover:scale-105"
            >
              JOIN THE MOVEMENT
              <Users size={28} strokeWidth={3} />
            </a>
            <a 
              href="#support" 
              className="inline-flex items-center justify-center gap-3 bg-[#FF6B35] text-white px-12 py-6 hover:bg-[#e55a28] transition-all duration-300 font-black text-xl tracking-wide group rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              SUPPORT THE AGENDA
              <Heart size={28} strokeWidth={3} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AmaechiPlanForChange;