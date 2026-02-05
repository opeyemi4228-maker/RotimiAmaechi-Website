/*
================================================================================
GOOGLE FORMS INTEGRATION SETUP GUIDE
================================================================================

STEP 1: CREATE YOUR GOOGLE FORM
--------------------------------
1. Go to https://forms.google.com
2. Click "+ Blank" to create a new form
3. Title it "Amaechi 2027 Volunteer Application"
4. Add these fields IN THIS EXACT ORDER:

   Field 1: Full Name (Short answer) - REQUIRED
   Field 2: Email Address (Short answer) - REQUIRED  
   Field 3: Phone Number (Short answer) - REQUIRED
   Field 4: State (Dropdown) - REQUIRED
      Options: All 36 Nigerian states + FCT
   Field 5: LGA (Short answer)
   Field 6: Preferred Volunteer Role (Multiple choice) - REQUIRED
      Options:
      - Door-to-Door Canvassing
      - Phone Banking  
      - Social Media Advocacy
      - Event Coordination
      - Research & Data
      - Fundraising
      - Other
   Field 7: Weekly Availability (Multiple choice) - REQUIRED
      Options:
      - 5-10 hours/week
      - 10-15 hours/week
      - 15-20 hours/week
      - 20+ hours/week
      - Flexible/Event-based
   Field 8: Skills & Experience (Paragraph)
   Field 9: Why do you want to volunteer? (Paragraph) - REQUIRED

STEP 2: GET YOUR FORM ID
-------------------------
1. Click "Send" button in top right
2. Click the link icon
3. Your URL will look like:
   https://docs.google.com/forms/d/e/1FAIpQLSc.../viewform
4. Copy the part after "/d/e/" and before "/viewform"
   Example: 1FAIpQLSc... (this is your FORM_ID)

STEP 3: GET ENTRY IDs (CRITICAL!)
----------------------------------
METHOD A - Using Pre-fill Link (RECOMMENDED):
1. In your form, click the 3 dots menu (⋮) in top right
2. Select "Get pre-filled link"
3. Fill in DUMMY data for EVERY field:
   - Full Name: Test
   - Email: test@test.com
   - Phone: 08012345678
   - State: Lagos
   - LGA: Ikeja
   - Role: Door-to-Door Canvassing
   - Availability: 10-15 hours/week
   - Skills: Test skills
   - Motivation: Test motivation
4. Click "Get link" at bottom
5. Copy the entire URL
6. You'll see something like:
   https://docs.google.com/forms/d/e/FORM_ID/viewform?
   entry.123456789=Test&
   entry.234567890=test@test.com&
   entry.345678901=08012345678&
   ...

7. Extract EACH entry ID:
   - entry.123456789 → Full Name
   - entry.234567890 → Email
   - entry.345678901 → Phone
   - etc.

METHOD B - Using Browser Inspector:
1. Open your Google Form in browser
2. Right-click and select "Inspect" (or press F12)
3. Look for <input> tags with names like "entry.XXXXXXXXX"
4. Match each entry to its field by looking at the labels

STEP 4: UPDATE THE CODE BELOW
------------------------------
Replace these values in the code:
- GOOGLE_FORM_ID: Your form ID from Step 2
- All entry.XXXXXXXXX values with your actual entry IDs from Step 3

STEP 5: TEST YOUR FORM
-----------------------
1. Fill out the form on your website
2. Check your Google Form responses
3. Verify all fields are captured correctly

TROUBLESHOOTING:
----------------
- If submissions don't appear: Double-check ALL entry IDs
- If some fields missing: Verify entry ID matches the correct field
- If getting errors: Make sure form is set to "Accept responses"
- Test with Google Form's preview mode first

================================================================================
*/

'use client'
import React, { useState } from "react";
import { ArrowRight, Users, Heart, Clock, MapPin, Mail, CheckCircle, User, Send, Phone, Briefcase, Shield, Star, Megaphone, Calendar, BookOpen, Code, Pen, Target } from "lucide-react";

const AmaechiVolunteer = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    state: "",
    lga: "",
    role: "",
    availability: "",
    skills: "",
    motivation: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ============================================================================
  // REPLACE THESE WITH YOUR ACTUAL GOOGLE FORM VALUES
  // ============================================================================
  
  const GOOGLE_FORM_ID = "YOUR_FORM_ID_HERE"; // Replace with your form ID
  const GOOGLE_FORM_ACTION_URL = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`;
  
  const FORM_FIELD_IDS = {
    fullName: "entry.000000001",      // Replace with actual
    email: "entry.000000002",         // Replace with actual
    phone: "entry.000000003",         // Replace with actual
    state: "entry.000000004",         // Replace with actual
    lga: "entry.000000005",           // Replace with actual
    role: "entry.000000006",          // Replace with actual
    availability: "entry.000000007",  // Replace with actual
    skills: "entry.000000008",        // Replace with actual
    motivation: "entry.000000009"     // Replace with actual
  };

  const nigerianStates = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
    "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT Abuja", "Gombe",
    "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos",
    "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto",
    "Taraba", "Yobe", "Zamfara"
  ];

  const volunteerRoles = [
    { id: "door-to-door", label: "Door-to-Door Canvassing", icon: Users },
    { id: "phone-banking", label: "Phone Banking", icon: Phone },
    { id: "social-media", label: "Social Media Advocacy", icon: Megaphone },
    { id: "event-coordination", label: "Event Coordination", icon: Calendar },
    { id: "research", label: "Research & Data", icon: BookOpen },
    { id: "fundraising", label: "Fundraising", icon: Target },
    { id: "other", label: "Other", icon: Star }
  ];

  const impactStats = [
    { icon: Users, number: "100K+", label: "Active Volunteers", description: "Across all 36 states" },
    { icon: MapPin, number: "774", label: "LGA Teams", description: "Grassroots presence" },
    { icon: Target, number: "5M+", label: "Voters Reached", description: "Through volunteers" },
    { icon: Clock, number: "24/7", label: "Campaign Active", description: "Round-the-clock organizing" }
  ];

  const whyVolunteer = [
    {
      icon: Shield,
      title: "Back Proven Leadership",
      description: "Support a leader who DELIVERED 1,763+ KM rail, 11,300+ jobs, and 300+ schools. Not promises - proven results."
    },
    {
      icon: Users,
      title: "Build Nigeria Together",
      description: "Join 100,000+ patriots mobilizing for transformation. Your efforts convert voters and change minds."
    },
    {
      icon: Star,
      title: "Gain Real Experience",
      description: "Political organizing training, leadership development, and skills that advance your career."
    },
    {
      icon: Heart,
      title: "Make History",
      description: "Be part of the movement that brings experienced, tested leadership to Aso Rock."
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const googleFormData = new FormData();
      googleFormData.append(FORM_FIELD_IDS.fullName, formData.fullName);
      googleFormData.append(FORM_FIELD_IDS.email, formData.email);
      googleFormData.append(FORM_FIELD_IDS.phone, formData.phone);
      googleFormData.append(FORM_FIELD_IDS.state, formData.state);
      googleFormData.append(FORM_FIELD_IDS.lga, formData.lga);
      googleFormData.append(FORM_FIELD_IDS.role, formData.role);
      googleFormData.append(FORM_FIELD_IDS.availability, formData.availability);
      googleFormData.append(FORM_FIELD_IDS.skills, formData.skills);
      googleFormData.append(FORM_FIELD_IDS.motivation, formData.motivation);

      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        body: googleFormData,
        mode: 'no-cors'
      });

      setSubmitted(true);
      setIsSubmitting(false);
      
      setTimeout(() => setSubmitted(false), 7000);

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitted(true);
      setIsSubmitting(false);
      setTimeout(() => setSubmitted(false), 7000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      state: "",
      lga: "",
      role: "",
      availability: "",
      skills: "",
      motivation: ""
    });
    setSubmitted(false);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#008751] via-[#006b40] to-[#008751] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6B35] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mt-[-34] mx-auto px-6 md:px-16 lg:px-24 py-24 md:py-32 lg:py-40">
          <div className="max-w-4xl">
            <div className="inline-block mb-6">
              <span className="bg-[#FF6B35] text-white px-6 py-3 rounded-full font-black text-sm tracking-widest">
                JOIN 100,000+ VOLUNTEERS
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-8 drop-shadow-2xl">
              VOLUNTEER<br/>
              FOR PROVEN<br/>
              <span className="text-[#FF6B35]">LEADERSHIP.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed mb-8">
              Be part of Nigeria's transformation. Join thousands mobilizing for a leader who has DONE IT before.
            </p>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-12 max-w-3xl">
              <strong>Not promises. PROVEN RESULTS.</strong> 1,763+ KM rail delivered • 11,300+ jobs created • 
              300+ schools built • 16 years executive leadership.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#apply" 
                className="inline-flex items-center gap-3 bg-white text-[#008751] px-10 py-5 hover:bg-white/95 transition-all duration-300 font-bold text-lg tracking-wide group shadow-2xl hover:shadow-3xl rounded-full transform hover:scale-105"
              >
                Sign Up Now
                <Heart size={22} className="group-hover:scale-110 transition-transform duration-300" strokeWidth={3} fill="currentColor" />
              </a>
              <a 
                href="#why" 
                className="inline-flex items-center gap-3 bg-[#FF6B35] text-white px-10 py-5 hover:bg-[#e55a28] transition-all duration-300 font-bold text-lg tracking-wide group rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105"
              >
                Why Volunteer
                <ArrowRight size={22} strokeWidth={3} />
              </a>
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#FF6B35] py-4">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {impactStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="text-3xl font-black text-white mb-1">{stat.number}</div>
                  <div className="text-white/90 text-sm font-bold">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section id="why" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <p className="text-[#FF6B35] font-black tracking-widest mb-4 text-sm">MAKE A DIFFERENCE</p>
            <h2 className="text-4xl md:text-6xl font-black mb-6">Why Volunteer for Amaechi?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You're not backing empty promises. You're supporting proven leadership with a track record.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyVolunteer.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#008751]"
                >
                  <div className="w-16 h-16 bg-[#008751] rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                    <Icon size={32} className="text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Ways to Volunteer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the role that fits your skills and schedule
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerRoles.slice(0, 6).map((role, index) => {
              const Icon = role.icon;
              const isGreen = index % 2 === 0;
              return (
                <div 
                  key={role.id}
                  className={`bg-gradient-to-br ${isGreen ? 'from-[#008751] to-[#006b40]' : 'from-[#FF6B35] to-[#e55a28]'} rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                    <Icon size={32} className="text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-black mb-3">
                    {role.label}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {role.id === 'door-to-door' && "Talk to voters face-to-face about Amaechi's proven track record"}
                    {role.id === 'phone-banking' && "Call voters, answer questions, encourage registration and turnout"}
                    {role.id === 'social-media' && "Share campaign messages, counter misinformation online"}
                    {role.id === 'event-coordination' && "Organize town halls, rallies, and community meetings"}
                    {role.id === 'research' && "Gather data, analyze policies, support campaign strategy"}
                    {role.id === 'fundraising' && "Help raise funds to power grassroots organizing"}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section id="apply" className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-12">
            <p className="text-[#008751] font-black tracking-widest mb-4 text-sm">GET STARTED</p>
            <h2 className="text-4xl md:text-6xl font-black mb-6">Join the Movement</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fill out the form below. We'll contact you within 24-48 hours to get you started.
            </p>
          </div>

          {submitted ? (
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-4 border-[#008751] rounded-2xl p-12 text-center shadow-2xl">
              <div className="w-24 h-24 bg-[#008751] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={56} className="text-white" strokeWidth={3} />
              </div>
              <h3 className="text-4xl font-black text-gray-900 mb-6">Welcome to the Team!</h3>
              <p className="text-xl text-gray-700 mb-4">
                <strong>{formData.fullName}</strong>, thank you for joining the movement for proven leadership!
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Your application has been submitted successfully. Our <strong>{formData.state}</strong> team will 
                contact you within 24-48 hours.
              </p>
              <div className="bg-white p-6 rounded-xl mb-8 max-w-md mx-auto">
                <p className="text-sm font-bold text-gray-700 mb-2">WHAT'S NEXT:</p>
                <ul className="text-left text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-[#008751] flex-shrink-0 mt-0.5" size={18} strokeWidth={3} />
                    <span>Check <strong>{formData.email}</strong> for confirmation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-[#008751] flex-shrink-0 mt-0.5" size={18} strokeWidth={3} />
                    <span>State coordinator will call you on <strong>{formData.phone}</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-[#008751] flex-shrink-0 mt-0.5" size={18} strokeWidth={3} />
                    <span>Orientation and training details shared</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={resetForm}
                className="bg-[#008751] text-white px-10 py-4 rounded-full font-bold hover:bg-[#006b40] transition-all duration-300 shadow-lg"
              >
                Submit Another Application
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
                      name="fullName"
                      value={formData.fullName}
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
                      {nigerianStates.map((state) => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* LGA and Role */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-black text-gray-900 mb-3 tracking-wide">
                    LOCAL GOVERNMENT AREA
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#008751]" size={20} />
                    <input
                      type="text"
                      name="lga"
                      value={formData.lga}
                      onChange={handleChange}
                      placeholder="Your LGA (optional)"
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:border-[#008751] focus:ring-2 focus:ring-[#008751]/20 focus:outline-none text-gray-900 font-semibold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-black text-gray-900 mb-3 tracking-wide">
                    PREFERRED ROLE *
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#008751]" size={20} />
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:border-[#008751] focus:ring-2 focus:ring-[#008751]/20 focus:outline-none text-gray-900 font-semibold appearance-none bg-white"
                    >
                      <option value="">Select a role</option>
                      {volunteerRoles.map((role) => (
                        <option key={role.id} value={role.label}>
                          {role.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="mb-6">
                <label className="block text-sm font-black text-gray-900 mb-3 tracking-wide">
                  WEEKLY AVAILABILITY *
                </label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#008751]" size={20} />
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:border-[#008751] focus:ring-2 focus:ring-[#008751]/20 focus:outline-none text-gray-900 font-semibold appearance-none bg-white"
                  >
                    <option value="">Select availability</option>
                    <option value="5-10 hours/week">5-10 hours/week</option>
                    <option value="10-15 hours/week">10-15 hours/week</option>
                    <option value="15-20 hours/week">15-20 hours/week</option>
                    <option value="20+ hours/week">20+ hours/week</option>
                    <option value="Flexible/Event-based">Flexible/Event-based</option>
                  </select>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <label className="block text-sm font-black text-gray-900 mb-3 tracking-wide">
                  SKILLS & EXPERIENCE
                </label>
                <textarea
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about relevant skills, experience, or background (e.g., social media, organizing, public speaking, data entry, etc.)"
                  className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:border-[#008751] focus:ring-2 focus:ring-[#008751]/20 focus:outline-none text-gray-900 resize-none font-medium"
                ></textarea>
              </div>

              {/* Motivation */}
              <div className="mb-8">
                <label className="block text-sm font-black text-gray-900 mb-3 tracking-wide">
                  WHY DO YOU WANT TO VOLUNTEER? *
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Share why you're passionate about supporting Rt. Hon. Amaechi and what you hope to contribute..."
                  className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:border-[#008751] focus:ring-2 focus:ring-[#008751]/20 focus:outline-none text-gray-900 resize-none font-medium"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-[#008751] to-[#006b40] text-white py-5 px-8 font-black text-xl tracking-wider hover:from-[#006b40] hover:to-[#008751] transition-all duration-300 rounded-full shadow-2xl hover:shadow-3xl flex items-center justify-center gap-3 group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                    SUBMITTING...
                  </>
                ) : (
                  <>
                    <Send size={24} strokeWidth={2.5} />
                    VOLUNTEER NOW
                    <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" strokeWidth={3} />
                  </>
                )}
              </button>

              <p className="text-center text-sm text-gray-600 mt-6 font-semibold">
                ✓ Secure submission • ✓ 24-48 hour response • ✓ All fields with * are required
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[#008751] via-[#006b40] to-[#008751] text-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-16 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8 drop-shadow-2xl">
            EVERY VOLUNTEER MATTERS
          </h2>
          <p className="text-2xl md:text-3xl mb-6 text-white/95">
            Your time converts voters. Your effort builds momentum.
          </p>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
            Join 100,000+ Nigerians mobilizing for proven leadership. Together, we're bringing 
            experience, results, and integrity to Aso Rock.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#apply" 
              className="inline-flex items-center justify-center gap-3 bg-white text-[#008751] px-12 py-6 hover:bg-white/95 transition-all duration-300 font-black text-xl tracking-wide group shadow-2xl hover:shadow-3xl rounded-full transform hover:scale-105"
            >
              <Users size={28} strokeWidth={3} />
              VOLUNTEER TODAY
            </a>
            <a 
              href="/connect" 
              className="inline-flex items-center justify-center gap-3 bg-[#FF6B35] text-white px-12 py-6 hover:bg-[#e55a28] transition-all duration-300 font-black text-xl tracking-wide group rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              <Phone size={28} strokeWidth={3} />
              QUESTIONS? CALL US
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AmaechiVolunteer;