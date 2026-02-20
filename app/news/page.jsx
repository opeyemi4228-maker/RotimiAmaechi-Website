'use client'
import React, { useState } from "react";
import { Calendar, Clock, User, ArrowRight, Share2, Bookmark, ExternalLink, Search, Filter, ChevronRight, Megaphone, Users, Shield, TrendingUp, Eye, MessageCircle } from "lucide-react";
import Image from "next/image";
import { assets } from "../../assets/assets";

const AmaechiNews = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All News", icon: TrendingUp },
    { id: "campaign", label: "Campaign", icon: Megaphone },
    { id: "electoral", label: "Electoral Reform", icon: Shield },
    { id: "governance", label: "Governance", icon: Users },
  ];

  const featuredNews = [
    {
      id: 1,
      title: "Amaechi Storms Electronic Transmission Protest, Demands Electoral Transparency",
      excerpt: "Former Rivers State Governor joins protesters in Abuja, lending voice to renewed calls for protection and full implementation of electronic transmission of election results.",
      category: "Electoral Reform",
      date: "Tuesday, February 10, 2026",
      location: "Abuja, Nigeria",
      author: "Campaign News Desk",
      readTime: "4 min read",
      views: "12.5K",
      image: assets.Pro1, // UPDATE WITH ACTUAL IMAGE PATH
      featured: true,
      content: `Abuja, Nigeria — Tuesday

Former Rivers State Governor and ex-Minister of Transportation, Rotimi Amaechi, was among prominent figures who joined protesters in Abuja on Tuesday, lending his voice to renewed calls for the protection and full implementation of electronic transmission of election results.

Amaechi's presence at the protest ground drew significant attention, as demonstrators rallied in support of strengthening Nigeria's electoral system through technology-driven transparency. Addressing the crowd and speaking with journalists, he emphasized that credible elections remain the bedrock of any functional democracy.

According to him, electronic transmission is not merely a technological upgrade but a safeguard against manipulation and mistrust in the electoral process. He stressed that Nigerians deserve an election system that guarantees accuracy, accountability, and public confidence.

The protest, which brought together civil society groups, political stakeholders, and concerned citizens, remained peaceful amid a visible security presence. Participants carried placards advocating electoral reforms and chanted slogans demanding that institutions uphold democratic standards.

Amaechi maintained that democratic integrity must not be compromised, urging authorities to prioritize transparency in future electoral processes. His participation signaled continued engagement by influential political actors in conversations surrounding electoral reform.

Notably, Amaechi disclosed that he attended the protest with his son, a medical doctor, explaining that he took the precaution in case the demonstration turned violent and injuries were sustained.`,
      highlights: [
        "Joined protest with his son, a medical doctor, for safety",
        "Called electronic transmission 'safeguard against manipulation'",
        "Emphasized credible elections as bedrock of democracy",
        "Protest remained peaceful with visible security presence"
      ],
      tags: ["Electoral Reform", "Democracy", "Transparency", "Protest"]
    },
    {
      id: 2,
      title: "Amaechi Joins ADC AMAC Chairman Flagbearer on Campaign Trail",
      excerpt: "Ex-Minister of Transportation boosts ADC momentum ahead of FCT local government elections, emphasizing grassroots governance and accountability.",
      category: "Campaign",
      date: "Friday, February 13, 2026",
      location: "Abuja, Nigeria",
      author: "Campaign News Desk",
      readTime: "3 min read",
      views: "8.7K",
      image: assets.Camp2, // UPDATE WITH ACTUAL IMAGE PATH
      featured: true,
      content: `Abuja, Nigeria — Friday

Former Rivers State Governor and ex-Minister of Transportation, Rotimi Amaechi, on Friday joined the campaign rally of the African Democratic Congress (ADC) AMAC Chairman flagbearer, boosting momentum ahead of the forthcoming local government elections in the Federal Capital Territory.

Amaechi's appearance at the campaign ground energized party supporters and drew significant political attention, as party faithful gathered in large numbers to reaffirm their commitment to grassroots governance and democratic participation.

Addressing the crowd, Amaechi emphasized the importance of credible leadership at the local government level, describing area council administration as the closest tier of government to the people. He urged residents of the Abuja Municipal Area Council (AMAC) to support candidates who prioritize accountability, infrastructure development, and community welfare.

"Leadership at the grassroots determines the quality of governance people experience daily," Amaechi stated, encouraging voters to come out en masse and support the ADC candidate at the polls.

Party stakeholders described Amaechi's presence as a strategic endorsement that reflects growing confidence in the ADC's platform and its AMAC chairmanship candidate. The rally featured speeches from party leaders, youth mobilization groups, and women representatives who reiterated calls for transparency and effective service delivery.

The campaign event concluded with renewed assurances from party officials that the ADC remains committed to inclusive governance, grassroots empowerment, and democratic progress within the Federal Capital Territory.`,
      highlights: [
        "Energized ADC supporters at AMAC campaign rally",
        "Emphasized grassroots governance importance",
        "Called for accountability and infrastructure focus",
        "Strategic endorsement boosts ADC momentum"
      ],
      tags: ["Campaign", "ADC", "AMAC", "Local Government", "Grassroots"]
    }
  ];

  const recentNews = [
    {
      id: 3,
      title: "Amaechi's Track Record: 1,763+ KM Rail Infrastructure Delivered",
      excerpt: "A comprehensive review of transportation achievements during ministerial tenure from 2015-2022.",
      category: "Governance",
      date: "Monday, February 10, 2026",
      readTime: "6 min read",
      views: "15.2K",
      image: "/api/placeholder/800/400",
    },
    {
      id: 4,
      title: "300+ Schools Built: Amaechi's Education Legacy in Rivers State",
      excerpt: "How former governor transformed Rivers education sector with international-standard facilities.",
      category: "Governance",
      date: "Sunday, February 9, 2026",
      readTime: "5 min read",
      views: "10.8K",
      image: "/api/placeholder/800/400",
    },
    {
      id: 5,
      title: "ADC Mobilizes 100,000+ Volunteers Nationwide for 2027",
      excerpt: "Party strengthens grassroots presence across 36 states with massive volunteer recruitment.",
      category: "Campaign",
      date: "Saturday, February 8, 2026",
      readTime: "4 min read",
      views: "9.3K",
      image: "/api/placeholder/800/400",
    },
    {
      id: 6,
      title: "Amaechi Calls for Strengthened Anti-Corruption Framework",
      excerpt: "Former minister advocates for institutional reforms to combat financial malfeasance.",
      category: "Governance",
      date: "Thursday, February 6, 2026",
      readTime: "5 min read",
      views: "7.5K",
      image: "/api/placeholder/800/400",
    }
  ];

  const NewsCard = ({ article, size = "normal" }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const isFeatured = size === "featured";

    return (
      <article className={`bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${isFeatured ? 'lg:col-span-2' : ''} group`}>
        {/* Image */}
        <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-20">
            <span className="bg-[#008751] text-white px-4 py-2 rounded-full text-xs font-black tracking-wider shadow-lg">
              {article.category.toUpperCase()}
            </span>
          </div>

          {/* Featured Badge */}
          {article.featured && (
            <div className="absolute top-4 right-4 z-20">
              <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full text-xs font-black tracking-wider shadow-lg flex items-center gap-2">
                <TrendingUp size={14} strokeWidth={3} />
                BREAKING
              </span>
            </div>
          )}

          {/* Quick Stats Overlay */}
          <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center gap-4 text-white text-sm">
            <div className="flex items-center gap-1">
              <Eye size={16} />
              <span className="font-semibold">{article.views}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span className="font-semibold">{article.readTime}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-[#008751]" />
              <span className="font-semibold">{article.date}</span>
            </div>
            {article.location && (
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                <span className="font-semibold">{article.location}</span>
              </div>
            )}
          </div>

          {/* Title */}
          <h2 className={`font-black text-gray-900 mb-4 leading-tight hover:text-[#008751] transition-colors cursor-pointer ${
            isFeatured ? 'text-3xl md:text-4xl lg:text-5xl' : 'text-2xl md:text-3xl'
          }`}>
            {article.title}
          </h2>

          {/* Excerpt */}
          <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
            {article.excerpt}
          </p>

          {/* Highlights (Featured Only) */}
          {article.highlights && isFeatured && !isExpanded && (
            <div className="mb-6 bg-gray-50 rounded-xl p-6">
              <h3 className="font-black text-gray-900 mb-4 text-lg">Key Highlights:</h3>
              <ul className="space-y-3">
                {article.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <ChevronRight className="text-[#008751] flex-shrink-0 mt-0.5" size={20} strokeWidth={3} />
                    <span className="text-gray-700 font-medium">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Full Content (Expandable for Featured) */}
          {article.content && isExpanded && (
            <div className="mb-6 prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {article.content}
              </div>
            </div>
          )}

          {/* Tags */}
          {article.tags && (
            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags.map((tag, idx) => (
                <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-bold hover:bg-[#008751] hover:text-white transition-colors cursor-pointer">
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <div className="flex items-center gap-3">
              {isFeatured && article.content && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center gap-2 text-[#008751] font-bold hover:gap-3 transition-all duration-300"
                >
                  {isExpanded ? 'Show Less' : 'Read Full Story'}
                  <ArrowRight size={18} strokeWidth={3} />
                </button>
              )}
              {!isFeatured && (
                <button className="inline-flex items-center gap-2 text-[#008751] font-bold hover:gap-3 transition-all duration-300">
                  Read More
                  <ArrowRight size={18} strokeWidth={3} />
                </button>
              )}
            </div>
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#008751] flex items-center justify-center transition-colors group/btn" aria-label="Share">
                <Share2 size={18} className="text-gray-600 group-hover/btn:text-white" />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#FF6B35] flex items-center justify-center transition-colors group/btn" aria-label="Bookmark">
                <Bookmark size={18} className="text-gray-600 group-hover/btn:text-white" />
              </button>
            </div>
          </div>
        </div>
      </article>
    );
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#008751] via-[#006b40] to-[#008751] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6B35] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl lg:mt-[-36] mx-auto px-6 md:px-16 lg:px-24 py-24 md:py-32">
          <div className="max-w-4xl">
            <div className="inline-block mb-6">
              <span className="bg-[#FF6B35] text-white px-6 py-3 rounded-full font-black text-sm tracking-widest">
                LATEST UPDATES
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-8 drop-shadow-2xl">
              AMAECHI<br/>
              IN THE <span className="text-[#ff9d53]">NEWS.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed mb-12 max-w-3xl">
              Stay informed with the latest news, campaign updates, and insights from 
              Rt. Hon. Chibuike Rotimi Amaechi's journey for proven leadership.
            </p>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#FF6B35] py-4">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: "50+", label: "News Articles" },
              { num: "1K+", label: "Monthly Readers" },
              { num: "24/7", label: "Coverage" },
              { num: "36", label: "States Covered" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-black text-white mb-1">{stat.num}</div>
                <div className="text-white/90 text-sm font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="bg-gray-50 border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-300 rounded-xl focus:border-[#008751] focus:ring-2 focus:ring-[#008751]/20 focus:outline-none font-semibold"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                      selectedCategory === cat.id
                        ? 'bg-[#008751] text-white shadow-lg scale-105'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={16} strokeWidth={2.5} />
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Breaking News Alert */}
      <section className="bg-[#FF6B35] text-white py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 flex-shrink-0">
              <Megaphone size={24} className="animate-pulse" strokeWidth={2.5} />
              <span className="font-black text-sm tracking-wider">BREAKING:</span>
            </div>
            <p className="font-semibold">
              Amaechi Storms Electronic Transmission Protest, Demands Electoral Transparency • 
              ADC AMAC Campaign Rally Draws Massive Turnout
            </p>
          </div>
        </div>
      </section>

      {/* Featured News Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp size={32} className="text-[#008751]" strokeWidth={2.5} />
              <h2 className="text-4xl md:text-5xl font-black">Featured Stories</h2>
            </div>
            <p className="text-xl text-gray-600">
              Top headlines and breaking developments
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredNews.map((article) => (
              <NewsCard key={article.id} article={article} size="featured" />
            ))}
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Clock size={32} className="text-[#008751]" strokeWidth={2.5} />
              <h2 className="text-4xl md:text-5xl font-black">Recent Updates</h2>
            </div>
            <p className="text-xl text-gray-600">
              Latest news and campaign developments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentNews.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="bg-gradient-to-br from-[#008751] to-[#006b40] rounded-3xl p-12 md:p-16 text-white text-center shadow-2xl">
            <Megaphone size={64} className="mx-auto mb-8 text-[#FF6B35]" strokeWidth={1.5} />
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Stay Informed
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Get the latest news, campaign updates, and exclusive insights delivered to your inbox.
            </p>
            <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 font-semibold focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <button 
                type="submit"
                className="bg-[#FF6B35] text-white px-10 py-4 rounded-full font-bold hover:bg-[#e55a28] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight size={20} strokeWidth={3} />
              </button>
            </form>
            <p className="text-white/60 text-sm mt-6">
              Join 100K+ Nigerians following the campaign. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">Media Inquiries</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                For press releases, interview requests, and media partnerships, contact our communications team.
              </p>
              <div className="space-y-4">
                <a href="mailto:Mapnigeria2027@gmail.com" className="flex items-center gap-3 text-lg font-semibold text-[#008751] hover:gap-4 transition-all">
                  <ExternalLink size={20} strokeWidth={2.5} />
                  Mapnigeria2027@gmail.com
                </a>
                <a href="tel:+2349076579517" className="flex items-center gap-3 text-lg font-semibold text-[#008751] hover:gap-4 transition-all">
                  <ExternalLink size={20} strokeWidth={2.5} />
                  +234 907 657 9517
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-200">
              <h3 className="text-2xl font-black mb-6">Follow the Campaign</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Twitter", followers: "2.5M" },
                  { name: "Facebook", followers: "5M" },
                  { name: "Instagram", followers: "1.8M" },
                  { name: "YouTube", followers: "800K" }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="bg-gray-50 hover:bg-[#008751] p-4 rounded-xl transition-all duration-300 group text-center"
                  >
                    <div className="font-black text-2xl text-gray-900 group-hover:text-white mb-1">
                      {social.followers}
                    </div>
                    <div className="text-sm text-gray-600 group-hover:text-white font-semibold">
                      {social.name}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[#008751] via-[#006b40] to-[#008751] text-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-16 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8 drop-shadow-2xl">
            BE PART OF THE STORY
          </h2>
          <p className="text-2xl md:text-3xl mb-12 text-white/95 max-w-4xl mx-auto leading-relaxed">
            Follow our journey. Share our vision. Join the movement for proven leadership.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/volunteer" 
              className="inline-flex items-center justify-center gap-3 bg-white text-[#008751] px-12 py-6 hover:bg-white/95 transition-all duration-300 font-black text-xl tracking-wide group shadow-2xl hover:shadow-3xl rounded-full transform hover:scale-105"
            >
              <Users size={28} strokeWidth={3} />
              VOLUNTEER NOW
            </a>
            <a 
              href="/connect" 
              className="inline-flex items-center justify-center gap-3 bg-[#FF6B35] text-white px-12 py-6 hover:bg-[#e55a28] transition-all duration-300 font-black text-xl tracking-wide group rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              <MessageCircle size={28} strokeWidth={3} />
              GET IN TOUCH
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AmaechiNews;