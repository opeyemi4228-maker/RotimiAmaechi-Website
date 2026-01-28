'use client'
import React, { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, Send, MessageSquare, User, Building2, Clock, Globe, Linkedin, Twitter, Facebook, Instagram, CheckCircle, Calendar, FileText, Users, Briefcase } from "lucide-react";

const Connect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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
      title: "Email Address",
      primary: "contact@rotimimaechi.com",
      secondary: "press@rotimimaechi.com",
      color: "bg-[#E31E24]"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      primary: "+234 803 XXX XXXX",
      secondary: "+234 806 XXX XXXX",
      color: "bg-[#C41A1F]"
    },
    {
      icon: MapPin,
      title: "Office Locations",
      primary: "Abuja Office: Plot 123, Cadastral Zone, Abuja",
      secondary: "Port Harcourt Office: Rivers State",
      color: "bg-[#A01519]"
    },
    {
      icon: Clock,
      title: "Office Hours",
      primary: "Monday - Friday: 9:00 AM - 5:00 PM",
      secondary: "Saturday: By Appointment Only",
      color: "bg-[#8B1115]"
    }
  ];

  const inquiryCategories = [
    {
      icon: Briefcase,
      title: "Partnership Opportunities",
      description: "Corporate partnerships, collaborations, and strategic initiatives"
    },
    {
      icon: MessageSquare,
      title: "Media & Press Inquiries",
      description: "Interview requests, press releases, and media engagement"
    },
    {
      icon: Users,
      title: "Speaking Engagements",
      description: "Conference invitations, keynote addresses, and panel discussions"
    },
    {
      icon: FileText,
      title: "General Inquiries",
      description: "Questions, feedback, and general correspondence"
    }
  ];

  const socialMedia = [
    { icon: Twitter, name: "Twitter", handle: "@ChibuikeAmaechi", url: "#", color: "hover:bg-black" },
    { icon: Facebook, name: "Facebook", handle: "Chibuike Rotimi Amaechi", url: "#", color: "hover:bg-blue-600" },
    { icon: Instagram, name: "Instagram", handle: "@rotimimaechi", url: "#", color: "hover:bg-pink-600" },
    { icon: Linkedin, name: "LinkedIn", handle: "Chibuike Amaechi", url: "#", color: "hover:bg-blue-700" }
  ];

  const officeLocations = [
    {
      city: "Abuja",
      type: "Federal Capital Territory Office",
      address: "Plot 123, Cadastral Zone A7, Wuse 2, Abuja, Nigeria",
      phone: "+234 803 XXX XXXX",
      isMain: true
    },
    {
      city: "Port Harcourt",
      type: "Rivers State Office",
      address: "No. 45, Trans Amadi Industrial Layout, Port Harcourt, Rivers State",
      phone: "+234 806 XXX XXXX",
      isMain: false
    },
    {
      city: "Lagos",
      type: "Lagos Liaison Office",
      address: "Victoria Island, Lagos, Nigeria",
      phone: "+234 809 XXX XXXX",
      isMain: false
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#E31E24] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mt-[-86] mx-auto px-6 md:px-16 lg:px-24 py-24 md:py-32 lg:py-40">
          <div className="max-w-4xl">
            <p className="text-white/90 font-bold tracking-widest mb-6 text-sm md:text-base">LET'S CONNECT</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-8">
              GET IN TOUCH.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 max-w-3xl">
              Whether you're interested in partnerships, media inquiries, speaking engagements, 
              or simply want to connect - we're here to listen and engage.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact-form" 
                className="inline-flex items-center gap-3 bg-white text-[#E31E24] px-10 py-5 hover:bg-white/95 transition-all duration-300 font-bold text-lg tracking-wide group shadow-lg hover:shadow-xl rounded-full"
              >
                Send a Message
                <Send size={22} className="group-hover:translate-x-1 transition-transform duration-300" strokeWidth={3} />
              </a>
              <a 
                href="#offices" 
                className="inline-flex items-center gap-3 bg-transparent text-white border-2 border-white px-10 py-5 hover:bg-white hover:text-[#E31E24] transition-all duration-300 font-bold text-lg tracking-wide group rounded-full"
              >
                Office Locations
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

      {/* Quick Contact Info */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 group"
                >
                  <div className={`w-14 h-14 ${info.color} rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                    <Icon size={28} className="text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {info.title}
                  </h3>
                  <p className="text-sm text-gray-700 mb-1 font-semibold">
                    {info.primary}
                  </p>
                  <p className="text-sm text-gray-600">
                    {info.secondary}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section id="contact-form" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-black mb-4">Send Us a Message</h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              {submitted ? (
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-500 rounded-2xl p-8 md:p-12 text-center">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={48} className="text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-4">Message Sent Successfully!</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Thank you for reaching out. We've received your message and will respond within 24-48 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        category: "",
                        message: ""
                      });
                    }}
                    className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 tracking-wide">
                        FULL NAME *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-lg focus:border-[#E31E24] focus:outline-none text-gray-900 font-semibold"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 tracking-wide">
                        EMAIL ADDRESS *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@example.com"
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-lg focus:border-[#E31E24] focus:outline-none text-gray-900 font-semibold"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone and Category Row */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 tracking-wide">
                        PHONE NUMBER
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+234 XXX XXX XXXX"
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-lg focus:border-[#E31E24] focus:outline-none text-gray-900 font-semibold"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 tracking-wide">
                        INQUIRY CATEGORY *
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-lg focus:border-[#E31E24] focus:outline-none text-gray-900 font-semibold appearance-none bg-white"
                        >
                          <option value="">Select category</option>
                          <option value="partnership">Partnership Opportunities</option>
                          <option value="media">Media & Press Inquiries</option>
                          <option value="speaking">Speaking Engagements</option>
                          <option value="general">General Inquiries</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="mb-6">
                    <label className="block text-sm font-bold text-gray-700 mb-2 tracking-wide">
                      SUBJECT *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Brief subject of your message"
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-lg focus:border-[#E31E24] focus:outline-none text-gray-900 font-semibold"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label className="block text-sm font-bold text-gray-700 mb-2 tracking-wide">
                      YOUR MESSAGE *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Tell us more about your inquiry..."
                      className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg focus:border-[#E31E24] focus:outline-none text-gray-900 resize-none font-medium"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className="w-full bg-[#E31E24] text-white py-5 px-8 font-bold text-lg tracking-wider hover:bg-[#C41A1F] transition-all duration-300 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
                  >
                    <Send size={24} strokeWidth={2} />
                    SEND MESSAGE
                    <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" strokeWidth={3} />
                  </button>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    We typically respond within 24-48 hours • All fields marked with * are required
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar - Inquiry Types */}
            <div className="lg:col-span-2">
              <div className="sticky top-8">
                <div className="bg-gradient-to-br from-[#E31E24] to-[#C41A1F] rounded-2xl shadow-xl p-8 text-white mb-8">
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
                            <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                              <Icon size={20} className="text-white" strokeWidth={2} />
                            </div>
                            <div>
                              <h4 className="font-bold text-lg mb-1">{category.title}</h4>
                              <p className="text-white/80 text-sm leading-relaxed">
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
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-black mb-6">Connect on Social Media</h3>
                  <div className="space-y-3">
                    {socialMedia.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.url}
                          className={`flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:shadow-md transition-all duration-300 group ${social.color} hover:text-white`}
                        >
                          <div className="w-12 h-12 bg-gray-200 group-hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                            <Icon size={24} strokeWidth={2} />
                          </div>
                          <div>
                            <p className="font-bold text-sm">{social.name}</p>
                            <p className="text-xs opacity-80">{social.handle}</p>
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

      {/* Office Locations */}
      <section id="offices" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">Office Locations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us at any of our office locations across Nigeria
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border-2 ${
                  office.isMain ? 'border-[#E31E24]' : 'border-gray-200'
                } group hover:scale-105`}
              >
                {office.isMain && (
                  <span className="inline-block bg-[#E31E24] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    MAIN OFFICE
                  </span>
                )}
                <div className="w-16 h-16 bg-[#E31E24] rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <MapPin size={32} className="text-white" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">
                  {office.city}
                </h3>
                <p className="text-sm font-bold text-[#E31E24] mb-4">
                  {office.type}
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-gray-400 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-700">
                      {office.address}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-gray-400 flex-shrink-0" />
                    <p className="text-sm font-semibold text-gray-900">
                      {office.phone}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl h-96 md:h-[500px] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#E31E24]/10 to-[#C41A1F]/10"></div>
            <div className="relative text-center z-10">
              <Globe size={64} className="text-[#E31E24] mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold text-gray-700 mb-2">Interactive Map</h3>
              <p className="text-gray-600">Map integration coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 lg:p-16 text-white text-center">
            <Mail size={56} className="mx-auto mb-6 text-[#E31E24]" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates, news, and announcements
            </p>
            <form className="max-w-xl mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#E31E24]"
              />
              <button 
                type="submit"
                className="bg-[#E31E24] text-white px-8 py-4 rounded-full font-bold hover:bg-[#C41A1F] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Subscribe
                <ArrowRight size={20} strokeWidth={3} />
              </button>
            </form>
            <p className="text-white/60 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[#E31E24] to-[#C41A1F] text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            LET'S START A CONVERSATION
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Whether you have a question, proposal, or just want to say hello - 
            we're always ready to engage and collaborate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact-form" 
              className="inline-flex items-center justify-center gap-3 bg-white text-[#E31E24] px-10 py-5 hover:bg-white/95 transition-all duration-300 font-bold text-lg tracking-wide group shadow-lg hover:shadow-xl rounded-full"
            >
              <MessageSquare size={22} strokeWidth={2} />
              Send a Message
            </a>
            <a 
              href="tel:+234XXXXXXXXX" 
              className="inline-flex items-center justify-center gap-3 bg-transparent text-white border-2 border-white px-10 py-5 hover:bg-white hover:text-[#E31E24] transition-all duration-300 font-bold text-lg tracking-wide group rounded-full"
            >
              <Phone size={22} strokeWidth={2} />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Connect;