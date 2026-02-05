'use client'
import React, { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, Send, MessageSquare, User, Building2, Clock, Globe, Linkedin, Twitter, Facebook, Instagram, CheckCircle, Calendar, FileText, Users, Briefcase, Heart, Megaphone, HandshakeIcon, Target } from "lucide-react";

const AmaechiConnect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    lga: "",
    category: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Campaign Email",
      primary: "contact@amaechi2027.ng",
      secondary: "volunteer@amaechi2027.ng",
      color: "bg-[#008751]"
    },
    {
      icon: Phone,
      title: "Campaign Hotline",
      primary: "+234 803 ADC 2027",
      secondary: "WhatsApp: +234 806 AMAECHI",
      color: "bg-[#FF6B35]"
    },
    {
      icon: MapPin,
      title: "Campaign Headquarters",
      primary: "Abuja: Plot 456, Central District",
      secondary: "36 State Offices Nationwide",
      color: "bg-[#008751]"
    },
    {
      icon: Clock,
      title: "Contact Hours",
      primary: "24/7 Hotline Available",
      secondary: "Office: Mon-Sat 8AM - 8PM",
      color: "bg-[#FF6B35]"
    }
  ];

  const engagementOptions = [
    {
      icon: Users,
      title: "Volunteer with Us",
      description: "Join 100,000+ volunteers mobilizing for change. Door-to-door, phone banking, events.",
      action: "Sign Up to Volunteer",
      color: "from-[#008751] to-[#006b40]"
    },
    {
      icon: Heart,
      title: "Support the Campaign",
      description: "Your donation funds grassroots organizing, town halls, and voter education.",
      action: "Donate Now",
      color: "from-[#FF6B35] to-[#e55a28]"
    },
    {
      icon: Megaphone,
      title: "Become an Advocate",
      description: "Share our message on social media. Talk to friends, family, neighbors about the Amaechi Agenda.",
      action: "Get Resources",
      color: "from-[#008751] to-[#006b40]"
    },
    {
      icon: HandshakeIcon,
      title: "Partnership Opportunities",
      description: "Corporate partnerships, CSR collaborations, and strategic initiatives with proven leadership.",
      action: "Partner with Us",
      color: "from-[#FF6B35] to-[#e55a28]"
    }
  ];

  const inquiryCategories = [
    {
      icon: Users,
      title: "Volunteer & Activism",
      description: "Join grassroots organizing, door-to-door campaigns, phone banking"
    },
    {
      icon: MessageSquare,
      title: "Media & Press",
      description: "Interview requests, press credentials, media partnership"
    },
    {
      icon: Briefcase,
      title: "Corporate Partnership",
      description: "CSR collaborations, sponsorships, business alliances"
    },
    {
      icon: Target,
      title: "Policy & Research",
      description: "Policy input, research collaboration, expert consultation"
    },
    {
      icon: Calendar,
      title: "Town Hall & Events",
      description: "Request town hall in your community, speaking engagements"
    },
    {
      icon: FileText,
      title: "General Inquiries",
      description: "Questions, feedback, suggestions for the campaign"
    }
  ];

  const socialMedia = [
    { icon: Twitter, name: "Twitter/X", handle: "@ChibuikeAmaechi", url: "#", color: "hover:bg-black", followers: "2.5M followers" },
    { icon: Facebook, name: "Facebook", handle: "Chibuike Rotimi Amaechi", url: "#", color: "hover:bg-blue-600", followers: "5M followers" },
    { icon: Instagram, name: "Instagram", handle: "@rotimimaechi", url: "#", color: "hover:bg-pink-600", followers: "1.8M followers" },
    { icon: Linkedin, name: "LinkedIn", handle: "Chibuike Amaechi", url: "#", color: "hover:bg-blue-700", followers: "500K+ connections" }
  ];

  const stateOffices = [
    {
      zone: "North Central",
      states: ["FCT Abuja", "Benue", "Kogi", "Kwara", "Nasarawa", "Niger", "Plateau"],
      headquarters: "Abuja Campaign HQ",
      address: "Plot 456, Central Business District, Abuja",
      phone: "+234 803 111 1111",
      isMain: true
    },
    {
      zone: "South-South",
      states: ["Rivers", "Akwa Ibom", "Bayelsa", "Cross River", "Delta", "Edo"],
      headquarters: "Port Harcourt Regional Office",
      address: "Trans Amadi Industrial Layout, Port Harcourt, Rivers State",
      phone: "+234 803 222 2222",
      isMain: false
    },
    {
      zone: "South-West",
      states: ["Lagos", "Ogun", "Oyo", "Osun", "Ondo", "Ekiti"],
      headquarters: "Lagos Regional Office",
      address: "Victoria Island, Lagos State",
      phone: "+234 803 333 3333",
      isMain: false
    },
    {
      zone: "South-East",
      states: ["Abia", "Anambra", "Ebonyi", "Enugu", "Imo"],
      headquarters: "Enugu Regional Office",
      address: "Independence Layout, Enugu State",
      phone: "+234 803 444 4444",
      isMain: false
    },
    {
      zone: "North-West",
      states: ["Kaduna", "Kano", "Katsina", "Kebbi", "Sokoto", "Zamfara", "Jigawa"],
      headquarters: "Kaduna Regional Office",
      address: "Kaduna South, Kaduna State",
      phone: "+234 803 555 5555",
      isMain: false
    },
    {
      zone: "North-East",
      states: ["Adamawa", "Bauchi", "Borno", "Gombe", "Taraba", "Yobe"],
      headquarters: "Bauchi Regional Office",
      address: "GRA, Bauchi State",
      phone: "+234 803 666 6666",
      isMain: false
    }
  ];

  const volunteerBenefits = [
    "Direct impact on Nigeria's future",
    "Training in political organizing",
    "Access to exclusive campaign events",
    "Certificate of volunteer service",
    "Network with fellow patriots",
    "Meet Rt. Hon. Amaechi"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#008751] via-[#006b40] to-[#008751] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mt-[-94] mx-auto px-6 md:px-16 lg:px-24 py-24 md:py-32 lg:py-40">
          <div className="max-w-4xl">
            <div className="inline-block mb-6">
              <span className="bg-[#FF6B35] text-white px-6 py-3 rounded-full font-black text-sm tracking-widest">
                JOIN THE MOVEMENT
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-8 drop-shadow-2xl">
              CONNECT.<br/>
              ENGAGE.<br/>
              <span className="text-[#FF6B35]">TRANSFORM.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed mb-8">
              Be part of Nigeria's transformation. Volunteer, donate, advocate, or simply join the conversation.
            </p>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-12 max-w-3xl">
              Over 100,000 volunteers across 36 states. Join thousands of Nigerians mobilizing for proven leadership.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#volunteer" 
                className="inline-flex items-center gap-3 bg-white text-[#008751] px-10 py-5 hover:bg-white/95 transition-all duration-300 font-bold text-lg tracking-wide group shadow-2xl hover:shadow-3xl rounded-full transform hover:scale-105"
              >
                Volunteer Now
                <Users size={22} className="group-hover:scale-110 transition-transform duration-300" strokeWidth={3} />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-3 bg-[#FF6B35] text-white px-10 py-5 hover:bg-[#e55a28] transition-all duration-300 font-bold text-lg tracking-wide group rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105"
              >
                Get in Touch
                <Send size={22} strokeWidth={3} />
              </a>
            </div>
          </div>
        </div>

        {/* Campaign Stats Banner */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#FF6B35] py-4">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: "100K+", label: "Volunteers" },
              { num: "36", label: "State Offices" },
              { num: "774", label: "LGA Coordinators" },
              { num: "24/7", label: "Hotline Active" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-black text-white mb-1">{stat.num}</div>
                <div className="text-white/90 text-sm font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#008751]"
                >
                  <div className={`w-16 h-16 ${info.color} rounded-2xl flex items-center justify-center mb-6 shadow-xl`}>
                    <Icon size={32} className="text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-4">
                    {info.title}
                  </h3>
                  <p className="text-sm text-gray-900 mb-2 font-bold">
                    {info.primary}
                  </p>
                  <p className="text-sm text-gray-600 font-semibold">
                    {info.secondary}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement Options */}
      <section id="volunteer" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <p className="text-[#FF6B35] font-black tracking-widest mb-4 text-sm">GET INVOLVED</p>
            <h2 className="text-4xl md:text-6xl font-black mb-6">Ways to Make a Difference</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every contribution counts. Choose how you want to be part of Nigeria's transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {engagementOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${option.color} rounded-2xl p-8 md:p-10 text-white hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                    <Icon size={32} className="text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-3xl font-black mb-4">
                    {option.title}
                  </h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-8">
                    {option.description}
                  </p>
                  <button className="bg-white text-[#008751] px-8 py-4 rounded-full font-bold hover:bg-white/95 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-3">
                    {option.action}
                    <ArrowRight size={20} strokeWidth={3} />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Volunteer Benefits */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-[#008751]">
            <h3 className="text-3xl font-black text-center mb-8">Why Volunteer?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {volunteerBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
                  <CheckCircle className="text-[#008751] flex-shrink-0" size={24} strokeWidth={3} />
                  <p className="font-semibold text-gray-900">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="mb-12">
                <h2 className="text-4xl md:text-6xl font-black mb-4">Send Us a Message</h2>
                <p className="text-xl text-gray-600">
                  Questions? Ideas? Want to get involved? We're listening.
                </p>
              </div>

              {submitted ? (
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-4 border-[#008751] rounded-2xl p-12 text-center">
                  <div className="w-24 h-24 bg-[#008751] rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={56} className="text-white" strokeWidth={3} />
                  </div>
                  <h3 className="text-4xl font-black text-gray-900 mb-6">Thank You for Reaching Out!</h3>
                  <p className="text-xl text-gray-700 mb-8">
                    Your message has been received. Our team will respond within 24 hours. Together, we're building a better Nigeria.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        state: "",
                        lga: "",
                        category: "",
                        message: ""
                      });
                    }}
                    className="bg-[#008751] text-white px-10 py-4 rounded-full font-bold hover:bg-[#006b40] transition-all duration-300 shadow-lg"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-gray-200">
                  {/* Name and Email */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-black text-gray-900 mb-3 tracking-wide">
                        FULL NAME *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#008751]" size={20} />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:border-[#008751] focus:ring-2 focus:ring-[#008751]/20 focus:outline-none text-gray-900 font-semibold"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-black text-gray-900 mb-3 tracking-wide">
                        EMAIL ADDRESS *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#008751]" size={20} />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@example.com"
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:border-[#008751] focus:ring-2 focus:ring-[#008751]/20 focus:outline-none text-gray-900 font-semibold"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone and State */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-black text-gray-900 mb-3 tracking-wide">
                        PHONE NUMBER *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#008751]" size={20} />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+234 XXX XXX XXXX"
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:border-[#008751] focus:ring-2 focus:ring-[#008751]/20 focus:outline-none text-gray-900 font-semibold"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-black text-gray-900 mb-3 tracking-wide">
                        YOUR STATE *
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#008751]" size={20} />
                        <select
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:border-[#008751] focus:ring-2 focus:ring-[#008751]/20 focus:outline-none text-gray-900 font-semibold appearance-none bg-white"
                        >
                          <option value="">Select your state</option>
                          <option value="abia">Abia</option>
                          <option value="fct">FCT Abuja</option>
                          <option value="lagos">Lagos</option>
                          <option value="rivers">Rivers</option>
                          {/* Add all 36 states */}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* LGA and Category */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-black text-gray-900 mb-3 tracking-wide">
                        LOCAL GOVERNMENT
                      </label>
                      <input
                        type="text"
                        name="lga"
                        value={formData.lga}
                        onChange={handleChange}
                        placeholder="Your LGA"
                        className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:border-[#008751] focus:ring-2 focus:ring-[#008751]/20 focus:outline-none text-gray-900 font-semibold"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-black text-gray-900 mb-3 tracking-wide">
                        INQUIRY TYPE *
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#008751]" size={20} />
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:border-[#008751] focus:ring-2 focus:ring-[#008751]/20 focus:outline-none text-gray-900 font-semibold appearance-none bg-white"
                        >
                          <option value="">Select category</option>
                          <option value="volunteer">Volunteer & Activism</option>
                          <option value="media">Media & Press</option>
                          <option value="partnership">Corporate Partnership</option>
                          <option value="policy">Policy & Research</option>
                          <option value="event">Town Hall & Events</option>
                          <option value="general">General Inquiries</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <label className="block text-sm font-black text-gray-900 mb-3 tracking-wide">
                      YOUR MESSAGE *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Tell us how you want to contribute to Nigeria's transformation..."
                      className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:border-[#008751] focus:ring-2 focus:ring-[#008751]/20 focus:outline-none text-gray-900 resize-none font-medium"
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#008751] to-[#006b40] text-white py-5 px-8 font-black text-xl tracking-wider hover:from-[#006b40] hover:to-[#008751] transition-all duration-300 rounded-full shadow-2xl hover:shadow-3xl flex items-center justify-center gap-3 group"
                  >
                    <Send size={24} strokeWidth={2.5} />
                    SEND MESSAGE
                    <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" strokeWidth={3} />
                  </button>

                  <p className="text-center text-sm text-gray-600 mt-6 font-semibold">
                    ✓ We respond within 24 hours • Your information is secure
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="sticky top-8 space-y-8">
                {/* Inquiry Categories */}
                <div className="bg-gradient-to-br from-[#008751] to-[#006b40] rounded-2xl shadow-2xl p-8 text-white">
                  <h3 className="text-2xl font-black mb-6">How Can We Help?</h3>
                  <div className="space-y-4">
                    {inquiryCategories.map((category, index) => {
                      const Icon = category.icon;
                      return (
                        <div 
                          key={index}
                          className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300"
                        >
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-[#FF6B35] rounded-xl flex items-center justify-center">
                              <Icon size={20} className="text-white" strokeWidth={2.5} />
                            </div>
                            <div>
                              <h4 className="font-bold text-lg mb-1">{category.title}</h4>
                              <p className="text-white/90 text-sm leading-relaxed">
                                {category.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
                  <h3 className="text-2xl font-black mb-6">Follow the Campaign</h3>
                  <div className="space-y-3">
                    {socialMedia.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.url}
                          className={`flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 group ${social.color} hover:text-white`}
                        >
                          <div className="w-14 h-14 bg-gray-200 group-hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors duration-300">
                            <Icon size={28} strokeWidth={2} />
                          </div>
                          <div>
                            <p className="font-bold">{social.name}</p>
                            <p className="text-sm opacity-90">{social.handle}</p>
                            <p className="text-xs opacity-75 mt-1">{social.followers}</p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* State Offices */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <p className="text-[#FF6B35] font-black tracking-widest mb-4 text-sm">NATIONWIDE PRESENCE</p>
            <h2 className="text-4xl md:text-6xl font-black mb-6">36 State Offices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Campaign offices in every state. Find your local team and get involved.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stateOffices.map((office, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border-4 ${
                  office.isMain ? 'border-[#008751]' : 'border-gray-200'
                } hover:scale-105`}
              >
                {office.isMain && (
                  <span className="inline-block bg-[#008751] text-white text-xs font-black px-4 py-2 rounded-full mb-4">
                    NATIONAL HQ
                  </span>
                )}
                <div className="w-16 h-16 bg-gradient-to-br from-[#008751] to-[#FF6B35] rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                  <MapPin size={32} className="text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">
                  {office.zone}
                </h3>
                <p className="text-sm font-bold text-[#008751] mb-4">
                  {office.headquarters}
                </p>
                <div className="bg-gray-50 p-4 rounded-xl mb-4">
                  <p className="text-xs font-bold text-gray-600 mb-2">STATES COVERED:</p>
                  <p className="text-sm text-gray-900 font-semibold">
                    {office.states.join(", ")}
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-[#FF6B35] mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-700 font-medium">
                      {office.address}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-[#FF6B35] flex-shrink-0" />
                    <p className="text-sm font-bold text-gray-900">
                      {office.phone}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 md:p-16 text-white text-center shadow-2xl">
            <Mail size={64} className="mx-auto mb-8 text-[#FF6B35]" strokeWidth={1.5} />
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Stay Informed. Stay Engaged.
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Get campaign updates, town hall invitations, and volunteer opportunities delivered to your inbox.
            </p>
            <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 font-semibold focus:outline-none focus:ring-4 focus:ring-[#008751]"
              />
              <button 
                type="submit"
                className="bg-[#008751] text-white px-10 py-4 rounded-full font-bold hover:bg-[#006b40] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight size={20} strokeWidth={3} />
              </button>
            </form>
            <p className="text-white/60 text-sm mt-6">
              Join 500K+ Nigerians following the campaign. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[#008751] via-[#006b40] to-[#008751] text-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-16 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8 drop-shadow-2xl">
            EVERY VOICE MATTERS
          </h2>
          <p className="text-2xl md:text-3xl mb-6 text-white/95">
            Together, we're building the Nigeria we deserve.
          </p>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
            Whether you volunteer, donate, or simply spread the word - your contribution makes a difference. 
            Join 100,000+ Nigerians mobilizing for proven leadership.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#volunteer" 
              className="inline-flex items-center justify-center gap-3 bg-white text-[#008751] px-12 py-6 hover:bg-white/95 transition-all duration-300 font-black text-xl tracking-wide group shadow-2xl hover:shadow-3xl rounded-full transform hover:scale-105"
            >
              <Users size={28} strokeWidth={3} />
              VOLUNTEER NOW
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center gap-3 bg-[#FF6B35] text-white px-12 py-6 hover:bg-[#e55a28] transition-all duration-300 font-black text-xl tracking-wide group rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              <Send size={28} strokeWidth={3} />
              GET IN TOUCH
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AmaechiConnect;