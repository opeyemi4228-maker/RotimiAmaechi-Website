'use client'
import React, { useState } from "react";
import { ArrowRight, Heart, Users, Briefcase, Gift, Calendar, Mail, Check, DollarSign, CreditCard, Megaphone, Target, Flag, Shield } from "lucide-react";

const AmaechiSupport = () => {
  const [donationType, setDonationType] = useState("monthly");
  const [selectedAmount, setSelectedAmount] = useState(50000);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedImpact, setSelectedImpact] = useState(null);

  const donationAmounts = [5000, 10000, 25000, 50000, 100000, 250000];

  const impactAreas = [
    {
      id: "grassroots",
      icon: Users,
      title: "Grassroots Organizing",
      description: "Fund voter registration drives, town halls, and community engagement across 36 states",
      color: "bg-[#008751]"
    },
    {
      id: "media",
      icon: Megaphone,
      title: "Media & Communications",
      description: "Support TV/radio ads, social media campaigns, and voter education materials",
      color: "bg-[#FF6B35]"
    },
    {
      id: "infrastructure",
      icon: Target,
      title: "Campaign Infrastructure",
      description: "Build state offices, training centers, and volunteer coordination systems",
      color: "bg-[#008751]"
    }
  ];

  const impactStories = [
    {
      amount: "₦5,000",
      impact: "Registers 50 voters and provides campaign materials for one LGA"
    },
    {
      amount: "₦10,000",
      impact: "Funds transportation for 20 volunteers to reach rural communities"
    },
    {
      amount: "₦25,000",
      impact: "Supports a town hall meeting with 200+ attendees in one community"
    },
    {
      amount: "₦50,000",
      impact: "Equips a local campaign office with essential materials for one month"
    },
    {
      amount: "₦100,000",
      impact: "Sponsors radio ads reaching 500,000+ voters in one state"
    },
    {
      amount: "₦250,000",
      impact: "Funds complete voter mobilization campaign in one senatorial district"
    }
  ];

  const volunteerOpportunities = [
    {
      icon: Users,
      title: "Door-to-Door Canvassing",
      commitment: "10 hours/week",
      description: "Talk to voters in your community about Amaechi's proven track record and vision for Nigeria"
    },
    {
      icon: Megaphone,
      title: "Phone Banking",
      commitment: "Flexible",
      description: "Call voters from our database, answer questions, and encourage voter registration"
    },
    {
      icon: Calendar,
      title: "Event Coordination",
      commitment: "Event-based",
      description: "Help organize town halls, rallies, and community meetings in your area"
    },
    {
      icon: Mail,
      title: "Social Media Advocacy",
      commitment: "5 hours/week",
      description: "Share campaign messages, counter misinformation, and engage supporters online"
    }
  ];

  const whySupport = [
    {
      icon: Shield,
      title: "Proven Leadership",
      fact: "16 years executive experience • 1,763+ KM rail delivered • 11,300+ jobs created"
    },
    {
      icon: Target,
      title: "Clear Vision",
      fact: "Detailed plan for infrastructure, jobs, education, and healthcare based on proven results"
    },
    {
      icon: Check,
      title: "Transparent Governance",
      fact: "₦460M+ railway revenue fully accounted • Senate 'Take a Bow' recognition"
    },
    {
      icon: Users,
      title: "People First",
      fact: "Track record of building 300+ schools, 160 health centers, creating opportunities"
    }
  ];

  const campaignPartners = [
    "Nigerian Professionals Abroad",
    "Youth for Amaechi Movement",
    "Women for Good Governance",
    "Business Leaders Forum",
    "Academic Coalition",
    "Diaspora Network"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#008751] via-[#006b40] to-[#008751] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mt-[-96] mx-auto px-6 md:px-16 lg:px-24 py-24 md:py-32 lg:py-40">
          <div className="max-w-4xl">
            <div className="inline-block mb-6">
              <span className="bg-[#FF6B35] text-white px-6 py-3 rounded-full font-black text-sm tracking-widest">
                FUEL THE MOVEMENT
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-8 drop-shadow-2xl">
              SUPPORT<br/>
              PROVEN<br/>
              <span className="text-[#FF6B35]">LEADERSHIP.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed mb-8">
              Every contribution powers grassroots organizing. Every donation builds campaign infrastructure. 
              Every naira brings Nigeria closer to proven, results-driven leadership.
            </p>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-12 max-w-3xl">
              <strong>Not promises. PROVEN RESULTS.</strong> Your support doesn't fund empty rhetoric—it backs 
              a leader who has DELIVERED 1,763+ KM of rail, created 11,300+ jobs, and transformed governance.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#donate" 
                className="inline-flex items-center gap-3 bg-white text-[#008751] px-10 py-5 hover:bg-white/95 transition-all duration-300 font-bold text-lg tracking-wide group shadow-2xl hover:shadow-3xl rounded-full transform hover:scale-105"
              >
                Donate to Campaign
                <Heart size={22} className="group-hover:scale-110 transition-transform duration-300" strokeWidth={3} fill="currentColor" />
              </a>
              <a 
                href="#volunteer" 
                className="inline-flex items-center gap-3 bg-[#FF6B35] text-white px-10 py-5 hover:bg-[#e55a28] transition-all duration-300 font-bold text-lg tracking-wide group rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105"
              >
                Volunteer Now
                <ArrowRight size={22} strokeWidth={3} />
              </a>
            </div>
          </div>
        </div>

        {/* Campaign Stats */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#FF6B35] py-4">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: "100K+", label: "Active Volunteers" },
              { num: "36", label: "State Campaigns" },
              { num: "₦2B+", label: "Raised to Date" },
              { num: "500K+", label: "Donors Nationwide" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-black text-white mb-1">{stat.num}</div>
                <div className="text-white/90 text-sm font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Support Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <p className="text-[#FF6B35] font-black tracking-widest mb-4 text-sm">WHY YOUR SUPPORT MATTERS</p>
            <h2 className="text-4xl md:text-6xl font-black mb-6">Backing a Winner</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You're not gambling on potential. You're investing in proven results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whySupport.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#008751]"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-[#008751] rounded-2xl flex items-center justify-center shadow-xl">
                      <Icon size={32} className="text-white" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-gray-900 mb-3">
                        {reason.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed font-semibold">
                        {reason.fact}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section id="donate" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Power the Campaign</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              100% of your donation funds grassroots organizing and voter outreach
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-gray-200">
                {/* Monthly/One-time Toggle */}
                <div className="flex gap-4 mb-8">
                  <button
                    onClick={() => setDonationType("monthly")}
                    className={`flex-1 py-4 px-6 font-bold text-sm tracking-wider transition-all duration-300 rounded-xl ${
                      donationType === "monthly"
                        ? "bg-[#008751] text-white shadow-lg scale-105"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    MONTHLY SUSTAINER
                  </button>
                  <button
                    onClick={() => setDonationType("onetime")}
                    className={`flex-1 py-4 px-6 font-bold text-sm tracking-wider transition-all duration-300 rounded-xl ${
                      donationType === "onetime"
                        ? "bg-[#008751] text-white shadow-lg scale-105"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    ONE-TIME DONATION
                  </button>
                </div>

                {/* Amount Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-black text-gray-900 mb-4 tracking-wide">SELECT AMOUNT (₦)</label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                        className={`py-4 px-4 font-bold text-base md:text-lg transition-all duration-300 rounded-xl ${
                          selectedAmount === amount && !customAmount
                            ? "bg-[#008751] text-white shadow-xl scale-105"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        ₦{amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#008751] font-bold text-xl">₦</span>
                    <input
                      type="number"
                      placeholder="Custom amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:border-[#008751] focus:ring-2 focus:ring-[#008751]/20 focus:outline-none text-xl font-bold"
                    />
                  </div>
                </div>

                {/* Impact Area */}
                <div className="mb-8">
                  <label className="block text-sm font-black text-gray-900 mb-4 tracking-wide">FUND PRIORITY AREA</label>
                  <div className="space-y-3">
                    {impactAreas.map((area) => {
                      const Icon = area.icon;
                      return (
                        <button
                          key={area.id}
                          onClick={() => setSelectedImpact(area.id)}
                          className={`w-full p-5 rounded-xl border-2 transition-all duration-300 text-left flex items-start gap-4 ${
                            selectedImpact === area.id
                              ? "border-[#008751] bg-green-50 scale-105"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <div className={`flex-shrink-0 w-14 h-14 ${area.color} rounded-xl flex items-center justify-center shadow-lg`}>
                            <Icon size={28} className="text-white" strokeWidth={2.5} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-black text-lg text-gray-900 mb-2">{area.title}</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">{area.description}</p>
                          </div>
                          {selectedImpact === area.id && (
                            <Check className="text-[#008751] flex-shrink-0" size={28} strokeWidth={3} />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Submit */}
                <button className="w-full bg-gradient-to-r from-[#008751] to-[#006b40] text-white py-5 px-8 font-black text-xl tracking-wider hover:from-[#006b40] hover:to-[#008751] transition-all duration-300 rounded-full shadow-2xl hover:shadow-3xl flex items-center justify-center gap-3 group">
                  <CreditCard size={24} strokeWidth={2.5} />
                  DONATE NOW
                  <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" strokeWidth={3} />
                </button>

                <p className="text-center text-sm text-gray-600 mt-6 font-semibold">
                  ✓ Secure payment • ✓ Transparent accounting • ✓ Cancel monthly giving anytime
                </p>
              </div>
            </div>

            {/* Impact Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-[#008751] to-[#006b40] rounded-2xl shadow-2xl p-8 text-white sticky top-8">
                <h3 className="text-3xl font-black mb-6">YOUR IMPACT</h3>
                <div className="space-y-4">
                  {impactStories.map((story, index) => (
                    <div 
                      key={index} 
                      className={`p-5 rounded-xl transition-all duration-300 ${
                        (customAmount && parseInt(customAmount) >= parseInt(story.amount.replace('₦', '').replace(',', ''))) ||
                        (selectedAmount && selectedAmount >= parseInt(story.amount.replace('₦', '').replace(',', '')))
                          ? "bg-[#FF6B35] scale-105 shadow-xl"
                          : "bg-white/10"
                      }`}
                    >
                      <div className="font-black text-2xl mb-2">{story.amount}</div>
                      <p className="text-white/95 leading-relaxed font-semibold">{story.impact}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t-2 border-white/20">
                  <div className="flex items-start gap-4 mb-6">
                    <Heart size={28} fill="white" strokeWidth={0} className="flex-shrink-0" />
                    <div>
                      <p className="font-bold text-lg mb-2">100% to Campaign Activities</p>
                      <p className="text-white/90 text-sm leading-relaxed">
                        Administrative costs covered by major donors. Every naira funds voter outreach, town halls, and grassroots organizing.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-sm font-bold mb-2">TRANSPARENT ACCOUNTING</p>
                    <p className="text-white/90 text-sm">
                      Like the ₦460M+ railway revenue he returned, every donation is tracked and reported. Proven transparency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <p className="text-[#008751] font-black tracking-widest mb-4 text-sm">JOIN 100,000+ VOLUNTEERS</p>
            <h2 className="text-4xl md:text-6xl font-black mb-6">Time is Currency Too</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Can't donate? Give your time. Every conversation converts voters. Every volunteer multiplies our reach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {volunteerOpportunities.map((opportunity, index) => {
              const Icon = opportunity.icon;
              return (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#008751]"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-[#FF6B35] rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-xl">
                      <Icon size={32} className="text-white" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-black text-gray-900">{opportunity.title}</h3>
                        <span className="text-xs font-bold text-[#008751] bg-green-50 px-3 py-2 rounded-full whitespace-nowrap">
                          {opportunity.commitment}
                        </span>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4 font-medium">{opportunity.description}</p>
                      <button className="text-[#008751] font-bold tracking-wide hover:gap-3 flex items-center gap-2 transition-all duration-300 group/btn">
                        SIGN UP NOW
                        <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform duration-300" strokeWidth={3} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-[#008751] to-[#006b40] rounded-2xl p-12 md:p-16 text-white text-center shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-black mb-6">Volunteer Benefits</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                "Training in political organizing",
                "Direct access to campaign leadership",
                "Certificate of campaign service",
                "Networking with 100K+ patriots",
                "Exclusive town hall invitations",
                "Meet Rt. Hon. Amaechi"
              ].map((benefit, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3">
                  <Check className="text-[#FF6B35] flex-shrink-0" size={24} strokeWidth={3} />
                  <p className="text-white/95 font-semibold text-left">{benefit}</p>
                </div>
              ))}
            </div>
            <a 
              href="volunteer" 
              className="inline-flex items-center gap-3 bg-white text-[#008751] px-12 py-5 hover:bg-white/95 transition-all duration-300 font-bold text-xl tracking-wide group shadow-2xl hover:shadow-3xl rounded-full transform hover:scale-105"
            >
              Start Volunteering
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" strokeWidth={3} />
            </a>
          </div>
        </div>
      </section>

      {/* Coalition Partners */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Coalition Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join leading organizations supporting proven leadership
            </p>
          </div>

          <div className="bg-white rounded-2xl p-12 shadow-xl border-2 border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {campaignPartners.map((partner, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-[#008751]"
                >
                  <span className="text-gray-900 font-bold text-center">{partner}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 text-lg mb-6">
              Want your organization to join the coalition?
            </p>
            <a 
              href="#partner" 
              className="inline-flex items-center gap-3 bg-[#008751] text-white px-10 py-5 hover:bg-[#006b40] transition-all duration-300 font-bold text-lg tracking-wide group shadow-lg hover:shadow-xl rounded-full"
            >
              Partner With Campaign
              <ArrowRight size={22} strokeWidth={3} />
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[#008751] via-[#006b40] to-[#008751] text-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-16 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8 drop-shadow-2xl">
            INVEST IN NIGERIA'S FUTURE
          </h2>
          <p className="text-2xl md:text-3xl mb-6 text-white/95">
            Not promises. PROVEN RESULTS.
          </p>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
            Your support backs a leader who has DELIVERED. 1,763+ KM of rail. 11,300+ jobs. 
            300+ schools. 16 years of executive leadership. Nigeria deserves proven excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#donate" 
              className="inline-flex items-center justify-center gap-3 bg-white text-[#008751] px-12 py-6 hover:bg-white/95 transition-all duration-300 font-black text-xl tracking-wide group shadow-2xl hover:shadow-3xl rounded-full transform hover:scale-105"
            >
              <Heart size={28} fill="currentColor" strokeWidth={0} />
              DONATE NOW
            </a>
            <a 
              href="#volunteer" 
              className="inline-flex items-center justify-center gap-3 bg-[#FF6B35] text-white px-12 py-6 hover:bg-[#e55a28] transition-all duration-300 font-black text-xl tracking-wide group rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              <Users size={28} strokeWidth={3} />
              VOLUNTEER TODAY
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AmaechiSupport;