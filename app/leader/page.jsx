'use client'
import React, { useState } from "react";
import { ArrowRight, Award, Users, Target, Zap, Heart, Globe } from "lucide-react";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("mission");

  // Updated Stats for Amaechi
  const stats = [
    { number: "5M+", label: "Lives Touched", icon: Heart },
    { number: "30+", label: "States Covered", icon: Globe },
    { number: "100+", label: "Community Projects", icon: Users },
    { number: "15 Years", label: "Of Service", icon: Award }
  ];

  // Updated Values for Amaechi
  const values = [
    {
      icon: Target,
      title: "Community-Focused",
      description: "We prioritize the needs of the communities we serve, ensuring meaningful impact."
    },
    {
      icon: Zap,
      title: "Innovative Solutions",
      description: "We implement creative approaches to address challenges and improve lives."
    },
    {
      icon: Users,
      title: "Partnership-Driven",
      description: "Collaboration with stakeholders is key to achieving sustainable outcomes."
    },
    {
      icon: Heart,
      title: "Compassionate Service",
      description: "Empathy and care guide all our programs and initiatives."
    }
  ];

  // Updated Team for Amaechi
  const team = [
    {
      name: "Amaechi Okechukwu",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
      bio: "Leading with 15+ years of experience in community development and social impact"
    },
    {
      name: "Chinwe Okafor",
      role: "Program Director",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80",
      bio: "Overseeing initiatives across multiple states to maximize community impact"
    },
    {
      name: "Emeka Udo",
      role: "Head of Innovation",
      image: "https://images.unsplash.com/photo-1531891437562-0f2a0d7f93ef?w=400&q=80",
      bio: "Driving innovative solutions for education, health, and social development"
    },
    {
      name: "Adaeze Nwosu",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1502767089025-6572583495b1?w=400&q=80",
      bio: "Ensuring smooth operations and effective delivery of all programs"
    }
  ];

  // Updated Timeline for Amaechi
  const timeline = [
    { year: "2008", title: "Foundation Established", description: "Amaechi Foundation began with a mission to serve communities in need." },
    { year: "2012", title: "State Outreach Launch", description: "Expanded programs to cover 10 states across Nigeria." },
    { year: "2015", title: "Health & Education Programs", description: "Introduced large-scale initiatives for healthcare and education." },
    { year: "2018", title: "1M Lives Impacted", description: "Celebrated reaching over 1 million people through our programs." },
    { year: "2021", title: "Digital Transformation", description: "Adopted digital tools to enhance program reach and efficiency." },
    { year: "2025", title: "5M Lives Impacted", description: "Marked a major milestone of positively affecting over 5 million lives." }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#E31E24] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mt-[-86] mx-auto px-6 md:px-16 lg:px-24 py-24 md:py-32 lg:py-40">
          <div className="max-w-4xl">
            <p className="text-white/90 font-bold tracking-widest mb-6 text-sm md:text-base">WHO WE ARE</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-8">
              BUILDING STRONGER COMMUNITIES
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 max-w-3xl">
              Amaechi Foundation is dedicated to transforming lives through community-centered programs, 
              innovative solutions, and unwavering service to humanity.
            </p>
            <a 
              href="#mission" 
              className="inline-flex items-center gap-3 bg-white text-[#E31E24] px-10 py-5 hover:bg-white/95 transition-all duration-300 font-bold text-lg tracking-wide group shadow-lg hover:shadow-xl rounded-full"
            >
              Discover Our Mission
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" strokeWidth={3} />
            </a>
          </div>
        </div>

        {/* Animated Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20 md:h-32" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-[#E31E24] rounded-full mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <Icon size={32} className="text-white" strokeWidth={2} />
                  </div>
                  <div className="text-4xl md:text-6xl font-black text-[#E31E24] mb-2">{stat.number}</div>
                  <div className="text-base md:text-lg font-semibold text-gray-700">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section id="mission" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">What Drives Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our mission, vision, and values guide everything we do at Amaechi Foundation
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab("mission")}
              className={`px-8 py-4 font-bold text-sm tracking-wider transition-all duration-300 ${
                activeTab === "mission"
                  ? "bg-[#E31E24] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              OUR MISSION
            </button>
            <button
              onClick={() => setActiveTab("vision")}
              className={`px-8 py-4 font-bold text-sm tracking-wider transition-all duration-300 ${
                activeTab === "vision"
                  ? "bg-[#E31E24] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              OUR VISION
            </button>
            <button
              onClick={() => setActiveTab("values")}
              className={`px-8 py-4 font-bold text-sm tracking-wider transition-all duration-300 ${
                activeTab === "values"
                  ? "bg-[#E31E24] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              OUR VALUES
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-white p-8 md:p-12 lg:p-16 rounded-2xl shadow-lg">
            {activeTab === "mission" && (
              <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#E31E24]">Our Mission</h3>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
                  To uplift communities across Nigeria through sustainable programs, empowerment initiatives, and compassionate service.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We focus on education, health, and social development, working hand-in-hand with local partners to create measurable and lasting impact.
                </p>
              </div>
            )}

            {activeTab === "vision" && (
              <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#E31E24]">Our Vision</h3>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
                  A Nigeria where every community has access to opportunities, resources, and empowerment.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We envision thriving communities with equitable access to education, healthcare, and social services, fostering long-term growth and prosperity.
                </p>
              </div>
            )}

            {activeTab === "values" && (
              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-[#E31E24] rounded-lg flex items-center justify-center">
                          <Icon size={28} className="text-white" strokeWidth={2} />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-gray-900">{value.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Years of dedication, growth, and transforming lives across Nigeria
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-[#E31E24] transform md:-translate-x-1/2"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="absolute left-8 md:left-1/2 w-16 h-16 bg-[#E31E24] rounded-full flex items-center justify-center transform md:-translate-x-1/2 z-10 shadow-lg">
                    <span className="text-white font-black text-sm">{item.year}</span>
                  </div>
                  <div className={`ml-28 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <div className="bg-gray-50 p-6 rounded-xl hover:shadow-xl transition-all duration-300">
                      <h3 className="text-2xl font-bold mb-2 text-[#E31E24]">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">Meet Our Leaders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated individuals driving Amaechi Foundation’s mission
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#E31E24] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold mb-1 text-gray-900">{member.name}</h3>
                <p className="text-[#E31E24] font-semibold mb-2 text-sm">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#E31E24] text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            JOIN US IN MAKING A DIFFERENCE
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90">
            Partner with Amaechi Foundation to uplift communities and create lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#donate" 
              className="inline-flex items-center justify-center gap-3 bg-white text-[#E31E24] px-10 py-5 hover:bg-white/95 transition-all duration-300 font-bold text-lg tracking-wide group shadow-lg hover:shadow-xl rounded-full"
            >
              Support Our Work
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" strokeWidth={3} />
            </a>
            <a 
              href="#volunteer" 
              className="inline-flex items-center justify-center gap-3 bg-transparent text-white border-2 border-white px-10 py-5 hover:bg-white hover:text-[#E31E24] transition-all duration-300 font-bold text-lg tracking-wide group rounded-full"
            >
              Get Involved
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" strokeWidth={3} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
