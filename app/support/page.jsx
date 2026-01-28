'use client'
import React, { useState } from "react";
import { ArrowRight, Heart, Users, Briefcase, Gift, Calendar, Mail, Check, DollarSign, CreditCard } from "lucide-react";

const SupportUs = () => {
  const [donationType, setDonationType] = useState("monthly");
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedImpact, setSelectedImpact] = useState(null);

  const donationAmounts = [25, 50, 100, 250, 500, 1000];

  const impactAreas = [
    {
      id: "education",
      icon: Users,
      title: "Education & Skills",
      description: "Provide quality education and vocational training to underserved communities",
      color: "bg-[#E31E24]"
    },
    {
      id: "health",
      icon: Heart,
      title: "Health & Wellness",
      description: "Deliver essential healthcare services and promote community well-being",
      color: "bg-[#C41A1F]"
    },
    {
      id: "economic",
      icon: Briefcase,
      title: "Economic Empowerment",
      description: "Create sustainable livelihoods and financial independence",
      color: "bg-[#A01519]"
    }
  ];

  const impactStories = [
    {
      amount: "$25",
      impact: "Provides school supplies for 5 children for an entire semester"
    },
    {
      amount: "$50",
      impact: "Funds a week of nutritious meals for a family of four"
    },
    {
      amount: "$100",
      impact: "Supports vocational training for one individual"
    },
    {
      amount: "$250",
      impact: "Delivers healthcare services to 10 community members"
    },
    {
      amount: "$500",
      impact: "Establishes a micro-enterprise for a small business owner"
    },
    {
      amount: "$1000",
      impact: "Transforms an entire classroom with modern learning tools"
    }
  ];

  const volunteerOpportunities = [
    {
      icon: Users,
      title: "Community Outreach",
      commitment: "10 hours/week",
      description: "Engage directly with communities and help coordinate programs on the ground"
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      commitment: "Flexible",
      description: "Share your expertise in areas like marketing, finance, or technology"
    },
    {
      icon: Calendar,
      title: "Event Coordination",
      commitment: "Event-based",
      description: "Help organize and manage fundraising events and awareness campaigns"
    },
    {
      icon: Mail,
      title: "Digital Advocacy",
      commitment: "5 hours/week",
      description: "Amplify our message through social media and online engagement"
    }
  ];

  const corporatePartners = [
    "Global Tech Solutions",
    "Healthcare Innovations",
    "Education First Foundation",
    "Sustainable Energy Corp",
    "Community Banking Group",
    "Digital Future Industries"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#E31E24] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mt-[-86] mx-auto px-6 md:px-16 lg:px-24 py-24 md:py-32 lg:py-40">
          <div className="max-w-4xl">
            <p className="text-white/90 font-bold tracking-widest mb-6 text-sm md:text-base">MAKE AN IMPACT</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-8">
              SUPPORT OUR MISSION.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 max-w-3xl">
              Your generosity transforms lives. Every contribution, big or small, creates lasting change 
              and builds a brighter future for communities around the world.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#donate" 
                className="inline-flex items-center gap-3 bg-white text-[#E31E24] px-10 py-5 hover:bg-white/95 transition-all duration-300 font-bold text-lg tracking-wide group shadow-lg hover:shadow-xl rounded-full"
              >
                Donate Now
                <Heart size={22} className="group-hover:scale-110 transition-transform duration-300" strokeWidth={3} fill="currentColor" />
              </a>
              <a 
                href="#volunteer" 
                className="inline-flex items-center gap-3 bg-transparent text-white border-2 border-white px-10 py-5 hover:bg-white hover:text-[#E31E24] transition-all duration-300 font-bold text-lg tracking-wide group rounded-full"
              >
                Volunteer With Us
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

      {/* Donation Form Section */}
      <section id="donate" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">Make Your Donation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your contribution level and see the direct impact you'll create
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Donation Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                {/* Donation Type Toggle */}
                <div className="flex gap-4 mb-8">
                  <button
                    onClick={() => setDonationType("monthly")}
                    className={`flex-1 py-4 px-6 font-bold text-sm tracking-wider transition-all duration-300 rounded-lg ${
                      donationType === "monthly"
                        ? "bg-[#E31E24] text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    MONTHLY
                  </button>
                  <button
                    onClick={() => setDonationType("onetime")}
                    className={`flex-1 py-4 px-6 font-bold text-sm tracking-wider transition-all duration-300 rounded-lg ${
                      donationType === "onetime"
                        ? "bg-[#E31E24] text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    ONE-TIME
                  </button>
                </div>

                {/* Amount Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-bold text-gray-700 mb-4 tracking-wide">SELECT AMOUNT</label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                        className={`py-4 px-6 font-bold text-lg transition-all duration-300 rounded-lg ${
                          selectedAmount === amount && !customAmount
                            ? "bg-[#E31E24] text-white shadow-lg scale-105"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="number"
                      placeholder="Custom amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-lg focus:border-[#E31E24] focus:outline-none text-lg font-semibold"
                    />
                  </div>
                </div>

                {/* Impact Area Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-bold text-gray-700 mb-4 tracking-wide">WHERE SHOULD YOUR DONATION GO?</label>
                  <div className="space-y-3">
                    {impactAreas.map((area) => {
                      const Icon = area.icon;
                      return (
                        <button
                          key={area.id}
                          onClick={() => setSelectedImpact(area.id)}
                          className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left flex items-start gap-4 ${
                            selectedImpact === area.id
                              ? "border-[#E31E24] bg-red-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <div className={`flex-shrink-0 w-12 h-12 ${area.color} rounded-lg flex items-center justify-center`}>
                            <Icon size={24} className="text-white" strokeWidth={2} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 mb-1">{area.title}</h4>
                            <p className="text-sm text-gray-600">{area.description}</p>
                          </div>
                          {selectedImpact === area.id && (
                            <Check className="text-[#E31E24] flex-shrink-0" size={24} strokeWidth={3} />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Submit Button */}
                <button className="w-full bg-[#E31E24] text-white py-5 px-8 font-bold text-lg tracking-wider hover:bg-[#C41A1F] transition-all duration-300 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group">
                  <CreditCard size={24} strokeWidth={2} />
                  PROCEED TO PAYMENT
                  <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" strokeWidth={3} />
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  Secure payment processing • Tax-deductible • Cancel anytime
                </p>
              </div>
            </div>

            {/* Impact Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-[#E31E24] to-[#C41A1F] rounded-2xl shadow-xl p-8 text-white sticky top-8">
                <h3 className="text-2xl font-black mb-6">YOUR IMPACT</h3>
                <div className="space-y-4">
                  {impactStories.map((story, index) => (
                    <div 
                      key={index} 
                      className={`p-4 rounded-lg transition-all duration-300 ${
                        (customAmount && parseInt(customAmount) >= parseInt(story.amount.replace('$', ''))) ||
                        (selectedAmount && selectedAmount >= parseInt(story.amount.replace('$', '')))
                          ? "bg-white/20 scale-105"
                          : "bg-white/10"
                      }`}
                    >
                      <div className="font-black text-2xl mb-2">{story.amount}</div>
                      <p className="text-white/90 text-sm leading-relaxed">{story.impact}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart size={24} fill="white" strokeWidth={0} />
                    <span className="font-bold">100% of your donation goes to programs</span>
                  </div>
                  <p className="text-white/80 text-sm">
                    Administrative costs are covered by our corporate partners, ensuring every dollar you give directly supports our mission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">Volunteer Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Share your time, skills, and passion to make a lasting difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {volunteerOpportunities.map((opportunity, index) => {
              const Icon = opportunity.icon;
              return (
                <div 
                  key={index}
                  className="group bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-[#E31E24] rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <Icon size={32} className="text-white" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-bold text-gray-900">{opportunity.title}</h3>
                        <span className="text-sm font-bold text-[#E31E24] bg-red-50 px-3 py-1 rounded-full whitespace-nowrap">
                          {opportunity.commitment}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">{opportunity.description}</p>
                      <button className="text-[#E31E24] font-bold text-sm tracking-wide hover:gap-3 flex items-center gap-2 transition-all duration-300 group/btn">
                        APPLY NOW
                        <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" strokeWidth={3} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-[#E31E24] to-[#C41A1F] rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl md:text-4xl font-black mb-4">Ready to Get Started?</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Fill out our volunteer application and join a community of changemakers
            </p>
            <a 
              href="#apply" 
              className="inline-flex items-center gap-3 bg-white text-[#E31E24] px-10 py-5 hover:bg-white/95 transition-all duration-300 font-bold text-lg tracking-wide group shadow-lg hover:shadow-xl rounded-full"
            >
              Complete Application
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" strokeWidth={3} />
            </a>
          </div>
        </div>
      </section>

      {/* Corporate Partnership Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">Corporate Partnerships</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join leading organizations making a difference through strategic partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-[#E31E24]">Why Partner With Us?</h3>
              <ul className="space-y-4">
                {[
                  "Amplify your corporate social responsibility impact",
                  "Engage employees in meaningful volunteer opportunities",
                  "Gain visibility through co-branded initiatives",
                  "Access to impact reports and transparent metrics",
                  "Tax benefits and positive brand association"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-[#E31E24] flex-shrink-0 mt-1" size={24} strokeWidth={3} />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6 text-[#E31E24]">Partnership Tiers</h3>
              <div className="space-y-4">
                {[
                  { tier: "Platinum Partner", amount: "$100,000+", color: "bg-gray-800" },
                  { tier: "Gold Partner", amount: "$50,000+", color: "bg-yellow-600" },
                  { tier: "Silver Partner", amount: "$25,000+", color: "bg-gray-400" },
                  { tier: "Bronze Partner", amount: "$10,000+", color: "bg-orange-700" }
                ].map((tier, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-4 h-4 ${tier.color} rounded-full`}></div>
                        <span className="font-bold text-xl text-gray-900">{tier.tier}</span>
                      </div>
                      <span className="text-[#E31E24] font-black text-lg">{tier.amount}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl font-bold mb-8 text-center">Our Trusted Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {corporatePartners.map((partner, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300"
                >
                  <span className="text-gray-600 font-semibold text-center">{partner}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="#corporate" 
              className="inline-flex items-center gap-3 bg-[#E31E24] text-white px-10 py-5 hover:bg-[#C41A1F] transition-all duration-300 font-bold text-lg tracking-wide group shadow-lg hover:shadow-xl rounded-full"
            >
              Explore Partnership Opportunities
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" strokeWidth={3} />
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#E31E24] text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            EVERY CONTRIBUTION COUNTS
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
            Whether you donate, volunteer, or partner with us, you're investing in a better future for all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#donate" 
              className="inline-flex items-center justify-center gap-3 bg-white text-[#E31E24] px-10 py-5 hover:bg-white/95 transition-all duration-300 font-bold text-lg tracking-wide group shadow-lg hover:shadow-xl rounded-full"
            >
              <Heart size={22} fill="currentColor" strokeWidth={0} />
              Make a Donation
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center gap-3 bg-transparent text-white border-2 border-white px-10 py-5 hover:bg-white hover:text-[#E31E24] transition-all duration-300 font-bold text-lg tracking-wide group rounded-full"
            >
              Contact Us
              <Mail size={22} strokeWidth={2} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportUs;