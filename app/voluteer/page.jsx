'use client'
import React, { useState } from "react";
import { ArrowRight, Users, Heart, Clock, MapPin, Calendar, CheckCircle, Star, Award, Target, Megaphone, BookOpen, Briefcase, Code, Camera, Pen, Handshake, Phone, Mail, User, Send, ChevronDown, ChevronUp, TrendingUp, Globe, MessageSquare, FileText, Shield, Zap } from "lucide-react";

const Volunteer = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    availability: "",
    skills: "",
    role: "",
    experience: "",
    motivation: ""
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

  const impactStats = [
    {
      icon: Users,
      number: "5,000+",
      label: "Active Volunteers",
      description: "Across Nigeria"
    },
    {
      icon: MapPin,
      number: "36",
      label: "States Covered",
      description: "Nationwide presence"
    },
    {
      icon: Target,
      number: "200+",
      label: "Projects Completed",
      description: "Lives transformed"
    },
    {
      icon: Clock,
      number: "50,000+",
      label: "Volunteer Hours",
      description: "Contributed monthly"
    }
  ];

  const volunteerRoles = [
    {
      id: "community",
      icon: Users,
      title: "Community Organizer",
      commitment: "15-20 hours/week",
      location: "On-site",
      color: "bg-[#E31E24]",
      description: "Lead grassroots mobilization, organize town halls, and coordinate local initiatives to engage communities directly.",
      responsibilities: [
        "Organize community meetings and engagement sessions",
        "Recruit and train local volunteers",
        "Coordinate with traditional and community leaders",
        "Document community needs and feedback",
        "Mobilize support for national initiatives"
      ],
      requirements: [
        "Strong interpersonal and communication skills",
        "Experience in community organizing or activism",
        "Ability to work with diverse groups",
        "Available for field activities and events",
        "Knowledge of local languages is a plus"
      ],
      benefits: [
        "Leadership development training",
        "Networking with changemakers",
        "Certificate of service",
        "Transportation stipend"
      ]
    },
    {
      id: "digital",
      icon: Megaphone,
      title: "Digital Advocate",
      commitment: "10-15 hours/week",
      location: "Remote",
      color: "bg-[#C41A1F]",
      description: "Amplify our message online through social media engagement, content creation, and digital campaigns.",
      responsibilities: [
        "Create and share engaging social media content",
        "Monitor and respond to online discussions",
        "Organize digital campaigns and hashtag movements",
        "Produce graphics, videos, and multimedia content",
        "Track and report digital engagement metrics"
      ],
      requirements: [
        "Strong social media presence and understanding",
        "Content creation skills (writing, design, or video)",
        "Familiarity with social media platforms and tools",
        "Creative thinking and storytelling abilities",
        "Commitment to factual, positive messaging"
      ],
      benefits: [
        "Digital marketing training",
        "Portfolio building opportunities",
        "Access to design tools and resources",
        "Recognition for top performers"
      ]
    },
    {
      id: "youth",
      icon: Target,
      title: "Youth Coordinator",
      commitment: "12-18 hours/week",
      location: "Hybrid",
      color: "bg-[#A01519]",
      description: "Mobilize and engage young Nigerians in political participation, leadership development, and civic education.",
      responsibilities: [
        "Organize youth forums and leadership workshops",
        "Develop youth-focused programs and initiatives",
        "Mentor young volunteers and activists",
        "Coordinate campus and youth organization outreach",
        "Facilitate voter registration drives"
      ],
      requirements: [
        "Age 18-35 preferred",
        "Passion for youth empowerment",
        "Leadership experience in student/youth organizations",
        "Public speaking and presentation skills",
        "Understanding of youth culture and concerns"
      ],
      benefits: [
        "Leadership certification program",
        "Mentorship from senior leaders",
        "Conference and seminar attendance",
        "Career development support"
      ]
    },
    {
      id: "professional",
      icon: Briefcase,
      title: "Professional Services",
      commitment: "Flexible",
      location: "Remote/Hybrid",
      color: "bg-[#8B1115]",
      description: "Contribute your professional expertise in law, finance, marketing, IT, or other specialized areas.",
      responsibilities: [
        "Provide pro bono professional consulting",
        "Review documents, strategies, and proposals",
        "Offer technical expertise in your field",
        "Mentor staff and other volunteers",
        "Support special projects requiring specialized skills"
      ],
      requirements: [
        "Professional qualification in relevant field",
        "Minimum 3 years professional experience",
        "Ability to work independently",
        "Strong problem-solving skills",
        "Commitment to ethical practice"
      ],
      benefits: [
        "Expand professional network",
        "High-impact project involvement",
        "Reference and recommendation letters",
        "Invitation to exclusive events"
      ]
    },
    {
      id: "content",
      icon: Pen,
      title: "Content Creator",
      commitment: "8-12 hours/week",
      location: "Remote",
      color: "bg-[#6F0D10]",
      description: "Write articles, create videos, design graphics, and produce multimedia content that tells our story.",
      responsibilities: [
        "Write blog posts, articles, and press releases",
        "Create videos, podcasts, and visual content",
        "Design infographics and promotional materials",
        "Interview volunteers and community members",
        "Maintain content calendar and deadlines"
      ],
      requirements: [
        "Strong writing, design, or video production skills",
        "Portfolio of previous work",
        "Creativity and attention to detail",
        "Ability to meet deadlines",
        "Knowledge of content creation tools"
      ],
      benefits: [
        "Build professional portfolio",
        "Access to premium software/tools",
        "Byline and creative credit",
        "Content creation workshops"
      ]
    },
    {
      id: "events",
      icon: Calendar,
      title: "Event Coordinator",
      commitment: "Event-based",
      location: "On-site",
      color: "bg-[#5A0A0D]",
      description: "Plan and execute rallies, town halls, fundraisers, and other events that bring our community together.",
      responsibilities: [
        "Plan and coordinate events from start to finish",
        "Manage logistics including venue, vendors, and permits",
        "Recruit and brief event volunteers",
        "Oversee event execution and troubleshooting",
        "Conduct post-event evaluation and reporting"
      ],
      requirements: [
        "Event planning or project management experience",
        "Strong organizational and multitasking skills",
        "Ability to work under pressure",
        "Problem-solving and decision-making abilities",
        "Flexibility to work evenings and weekends"
      ],
      benefits: [
        "Event management certification",
        "Hands-on planning experience",
        "Networking opportunities",
        "Event stipend for large events"
      ]
    },
    {
      id: "research",
      icon: BookOpen,
      title: "Research & Policy Analyst",
      commitment: "10-15 hours/week",
      location: "Remote",
      color: "bg-[#E31E24]",
      description: "Conduct research, analyze policies, and provide data-driven insights to inform our strategies and positions.",
      responsibilities: [
        "Conduct research on policy issues and trends",
        "Analyze data and produce reports",
        "Monitor political and economic developments",
        "Fact-check claims and statements",
        "Prepare briefing notes and position papers"
      ],
      requirements: [
        "Strong research and analytical skills",
        "Experience with data analysis tools",
        "Excellent written communication",
        "Attention to detail and accuracy",
        "Academic background in relevant field preferred"
      ],
      benefits: [
        "Research skills development",
        "Access to databases and resources",
        "Published work and citations",
        "Academic collaboration opportunities"
      ]
    },
    {
      id: "tech",
      icon: Code,
      title: "Tech & IT Support",
      commitment: "8-12 hours/week",
      location: "Remote",
      color: "bg-[#C41A1F]",
      description: "Support our digital infrastructure, develop tools, and ensure our online platforms run smoothly.",
      responsibilities: [
        "Maintain and improve website and digital platforms",
        "Develop apps and tools for volunteers and supporters",
        "Provide technical support for digital campaigns",
        "Ensure cybersecurity and data protection",
        "Troubleshoot technical issues"
      ],
      requirements: [
        "Programming skills (web development, app development)",
        "Understanding of IT systems and networks",
        "Problem-solving and debugging abilities",
        "Familiarity with modern tech stack",
        "Cybersecurity awareness"
      ],
      benefits: [
        "Real-world project experience",
        "Latest technology exposure",
        "Tech community networking",
        "Contribution to open-source projects"
      ]
    }
  ];

  const whyVolunteer = [
    {
      icon: Heart,
      title: "Make Real Impact",
      description: "Your efforts directly contribute to transforming Nigeria and improving lives across communities"
    },
    {
      icon: Users,
      title: "Build Connections",
      description: "Join a passionate network of changemakers, leaders, and professionals from diverse backgrounds"
    },
    {
      icon: Award,
      title: "Develop Skills",
      description: "Gain valuable experience in leadership, organization, communication, and specialized professional areas"
    },
    {
      icon: Star,
      title: "Recognition & Growth",
      description: "Receive certificates, recommendations, and opportunities for advancement in our movement"
    }
  ];

  const volunteerJourney = [
    {
      step: "1",
      title: "Apply Online",
      description: "Fill out our volunteer application form with your interests, skills, and availability"
    },
    {
      step: "2",
      title: "Interview & Matching",
      description: "Have a brief conversation with our team to find the perfect role for your talents"
    },
    {
      step: "3",
      title: "Orientation & Training",
      description: "Attend onboarding sessions to learn about our mission, values, and procedures"
    },
    {
      step: "4",
      title: "Start Contributing",
      description: "Begin your volunteer work with support from experienced team members and coordinators"
    }
  ];

  const testimonials = [
    {
      name: "Chiamaka Okonkwo",
      role: "Digital Advocate, Lagos",
      image: "👩🏾‍💼",
      quote: "Volunteering has given me purpose and allowed me to use my social media skills for positive change. I've grown so much professionally and personally.",
      duration: "2 years"
    },
    {
      name: "Ibrahim Musa",
      role: "Community Organizer, Kano",
      image: "👨🏾‍💼",
      quote: "Being part of this movement means I'm actively building the Nigeria I want to see. The training and mentorship have been invaluable.",
      duration: "18 months"
    },
    {
      name: "Ngozi Adeleke",
      role: "Youth Coordinator, Abuja",
      image: "👩🏾",
      quote: "I've organized over 20 youth forums and seen firsthand how political engagement transforms young people. This is where real change begins.",
      duration: "3 years"
    }
  ];

  const toggleRole = (id) => {
    setSelectedRole(selectedRole === id ? null : id);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#E31E24] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mt-[-130] mx-auto px-6 md:px-16 lg:px-24 py-24 md:py-32 lg:py-40">
          <div className="max-w-4xl">
            <p className="text-white/90 font-bold tracking-widest mb-6 text-sm md:text-base">JOIN THE MOVEMENT</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-8">
              VOLUNTEER WITH US.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 max-w-3xl">
              Be part of the transformation. Join thousands of passionate Nigerians using their 
              time, skills, and energy to build a better nation for all.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#apply" 
                className="inline-flex items-center gap-3 bg-white text-[#E31E24] px-10 py-5 hover:bg-white/95 transition-all duration-300 font-bold text-lg tracking-wide group shadow-lg hover:shadow-xl rounded-full"
              >
                Apply Now
                <Heart size={22} className="group-hover:scale-110 transition-transform duration-300" strokeWidth={3} fill="currentColor" />
              </a>
              <a 
                href="#roles" 
                className="inline-flex items-center gap-3 bg-transparent text-white border-2 border-white px-10 py-5 hover:bg-white hover:text-[#E31E24] transition-all duration-300 font-bold text-lg tracking-wide group rounded-full"
              >
                Explore Roles
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

      {/* Impact Stats */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 group"
                >
                  <div className="w-16 h-16 bg-[#E31E24] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <Icon size={32} className="text-white" strokeWidth={2} />
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-[#E31E24] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-bold text-gray-900 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">Why Volunteer?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              More than just giving your time—it's an investment in Nigeria's future and your own growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyVolunteer.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C41A1F] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} className="text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section id="roles" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">Volunteer Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the perfect role that matches your skills, interests, and availability
            </p>
          </div>

          <div className="space-y-6">
            {volunteerRoles.map((role) => {
              const Icon = role.icon;
              const isExpanded = selectedRole === role.id;
              
              return (
                <div 
                  key={role.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <button
                    onClick={() => toggleRole(role.id)}
                    className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center gap-6 flex-1">
                      <div className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 ${role.color} rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                        <Icon size={32} className="text-white md:w-10 md:h-10" strokeWidth={2} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
                          {role.title}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          <span className="inline-flex items-center gap-2 text-sm font-bold text-[#E31E24] bg-red-50 px-3 py-1 rounded-full">
                            <Clock size={14} strokeWidth={2.5} />
                            {role.commitment}
                          </span>
                          <span className="inline-flex items-center gap-2 text-sm font-bold text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                            <MapPin size={14} strokeWidth={2.5} />
                            {role.location}
                          </span>
                        </div>
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
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                          {role.description}
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-6">
                          <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                              <CheckCircle className="text-[#E31E24]" size={24} strokeWidth={2.5} />
                              Responsibilities
                            </h4>
                            <ul className="space-y-3">
                              {role.responsibilities.map((resp, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-700">
                                  <div className="w-1.5 h-1.5 bg-[#E31E24] rounded-full mt-2 flex-shrink-0"></div>
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                              <Shield className="text-[#E31E24]" size={24} strokeWidth={2.5} />
                              Requirements
                            </h4>
                            <ul className="space-y-3">
                              {role.requirements.map((req, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-700">
                                  <div className="w-1.5 h-1.5 bg-[#E31E24] rounded-full mt-2 flex-shrink-0"></div>
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-[#E31E24] to-[#C41A1F] rounded-xl p-6 text-white">
                          <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                            <Star size={20} strokeWidth={2.5} />
                            What You'll Gain
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {role.benefits.map((benefit, idx) => (
                              <span key={idx} className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-6 text-center">
                          <a
                            href="#apply"
                            className="inline-flex items-center gap-3 bg-[#E31E24] text-white px-8 py-4 rounded-full font-bold hover:bg-[#C41A1F] transition-all duration-300 shadow-lg hover:shadow-xl"
                          >
                            Apply for This Role
                            <ArrowRight size={20} strokeWidth={3} />
                          </a>
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

      {/* Volunteer Journey */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">Your Volunteer Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four simple steps to becoming part of our movement
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {volunteerJourney.map((step, index) => (
              <div key={index} className="relative">
                {index < volunteerJourney.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-1 bg-gradient-to-r from-[#E31E24] to-[#C41A1F]"></div>
                )}
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#C41A1F] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-black shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">Volunteer Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from volunteers making a difference across Nigeria
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{testimonial.image}</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-[#E31E24] font-semibold">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">Volunteering: {testimonial.duration}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-[#E31E24]" fill="#E31E24" strokeWidth={0} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">Apply to Volunteer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take the first step in your journey to transform Nigeria
            </p>
          </div>

          {submitted ? (
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-500 rounded-2xl p-12 text-center">
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={56} className="text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-4xl font-black text-gray-900 mb-4">Application Received!</h3>
              <p className="text-xl text-gray-700 mb-4">
                Thank you for your interest in volunteering with us, {formData.fullName}!
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team will review your application and contact you within 3-5 business days to discuss next steps.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    location: "",
                    availability: "",
                    skills: "",
                    role: "",
                    experience: "",
                    motivation: ""
                  });
                }}
                className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all duration-300"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 tracking-wide">
                    FULL NAME *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
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

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 tracking-wide">
                    PHONE NUMBER *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+234 XXX XXX XXXX"
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-lg focus:border-[#E31E24] focus:outline-none text-gray-900 font-semibold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 tracking-wide">
                    LOCATION (STATE) *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      placeholder="e.g., Lagos, Abuja, Kano"
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-lg focus:border-[#E31E24] focus:outline-none text-gray-900 font-semibold"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 tracking-wide">
                    PREFERRED ROLE *
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-lg focus:border-[#E31E24] focus:outline-none text-gray-900 font-semibold appearance-none bg-white"
                    >
                      <option value="">Select a role</option>
                      {volunteerRoles.map((role) => (
                        <option key={role.id} value={role.id}>
                          {role.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 tracking-wide">
                    AVAILABILITY *
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-lg focus:border-[#E31E24] focus:outline-none text-gray-900 font-semibold appearance-none bg-white"
                    >
                      <option value="">Select availability</option>
                      <option value="5-10">5-10 hours/week</option>
                      <option value="10-15">10-15 hours/week</option>
                      <option value="15-20">15-20 hours/week</option>
                      <option value="20+">20+ hours/week</option>
                      <option value="flexible">Flexible/Event-based</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2 tracking-wide">
                  RELEVANT SKILLS & EXPERIENCE
                </label>
                <textarea
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about your skills, experience, and any relevant background..."
                  className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg focus:border-[#E31E24] focus:outline-none text-gray-900 resize-none font-medium"
                ></textarea>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2 tracking-wide">
                  WHY DO YOU WANT TO VOLUNTEER? *
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Share your motivation for volunteering and what you hope to achieve..."
                  className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg focus:border-[#E31E24] focus:outline-none text-gray-900 resize-none font-medium"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#E31E24] text-white py-5 px-8 font-bold text-lg tracking-wider hover:bg-[#C41A1F] transition-all duration-300 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
              >
                <Send size={24} strokeWidth={2} />
                SUBMIT APPLICATION
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" strokeWidth={3} />
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                All fields marked with * are required • We'll contact you within 3-5 business days
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[#E31E24] to-[#C41A1F] text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            YOUR TIME. YOUR SKILLS. NIGERIA'S FUTURE.
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Every hour you contribute, every skill you share, brings us closer to the 
            Nigeria we all dream of. Join us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#apply" 
              className="inline-flex items-center justify-center gap-3 bg-white text-[#E31E24] px-10 py-5 hover:bg-white/95 transition-all duration-300 font-bold text-lg tracking-wide group shadow-lg hover:shadow-xl rounded-full"
            >
              <Heart size={22} fill="currentColor" strokeWidth={0} />
              Start Your Journey
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center gap-3 bg-transparent text-white border-2 border-white px-10 py-5 hover:bg-white hover:text-[#E31E24] transition-all duration-300 font-bold text-lg tracking-wide group rounded-full"
            >
              Questions? Contact Us
              <MessageSquare size={22} strokeWidth={2} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;