import React from 'react';
import { ArrowRight, Clock, ExternalLink } from 'lucide-react';
import { assets } from '@/assets/assets';
import Image from 'next/image';

const AmaechiNews = () => {
  const featuredNews = {
    image: assets.Grad,
    title: "Amaechi Graduates with Law Degree - A Testament to Lifelong Learning",
    date: "20 November, 2022",
    readTime: "5 MIN READ",
    description: "In a remarkable display of dedication to personal development, Rt. Hon. Rotimi Amaechi announced his graduation with a law degree, showcasing his commitment to continuous learning even while serving at the highest levels of government.",
    source: "Premium Times Nigeria",
    category: "Personal Achievement"
  };

  const sideNews = [
    {
      image: assets.Emir,
      title: "President Buhari Congratulates Amaechi on Prestigious Daura Chieftaincy Title",
      date: "5 February, 2022",
      readTime: "4 MIN READ",
      source: "The Guardian Nigeria",
      category: "National Honour"
    },
    {
      image: assets.Amae,
      title: "Amaechi Receives Highest Catholic Knights Promotion - Knight of Saint John",
      date: "19 August, 2021",
      readTime: "4 MIN READ",
      source: "Catholic Church Nigeria",
      category: "Religious Honour"
    }
  ];

  const bottomNews = [
    {
      title: "Buhari Reappoints Amaechi as Campaign Director-General - Trust in Proven Leadership",
      date: "20 September, 2018",
      readTime: "5 MIN READ",
      source: "ThisDay Live",
      category: "Political Leadership"
    },
    {
      title: "Senate Grants Amaechi 'Take a Bow' - Recognition of Distinguished Service Record",
      date: "24 July, 2019",
      readTime: "4 MIN READ",
      source: "Channels Television",
      category: "National Recognition"
    },
    {
      title: "Amaechi Retains Transportation Portfolio - Continuity in Infrastructure Development",
      date: "21 August, 2019",
      readTime: "3 MIN READ",
      source: "Punch Newspapers",
      category: "Ministerial Reappointment"
    }
  ];

  const additionalNews = [
    {
      title: "Amaechi Declares Presidential Ambition - Ready to Serve Nigeria at Highest Level",
      date: "9 April, 2022",
      readTime: "6 MIN READ",
      source: "Vanguard News"
    },
    {
      title: "Dame Judith Amaechi @ 50 - Celebrating Partnership in Public Service",
      date: "15 December, 2020",
      readTime: "4 MIN READ",
      source: "Vanguard Nigeria"
    },
    {
      title: "New Catholic Honour Tasks Amaechi to Hit the Mark in Public Service",
      date: "21 August, 2019",
      readTime: "5 MIN READ",
      source: "ThisDay"
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 md:mb-12 lg:mb-16 gap-4">
          <div>
            <p className="text-[#FF6B35] text-xs sm:text-sm font-bold tracking-widest mb-2 md:mb-3">
              IN THE NEWS
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900">
              Media Coverage
            </h2>
          </div>
          <button className="flex items-center gap-2 bg-[#008751] text-white px-6 md:px-8 py-3 md:py-4 rounded-md hover:bg-[#006b40] transition-all duration-300 font-bold text-sm tracking-wide shadow-lg hover:shadow-xl group transform hover:scale-105">
            See all news
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} strokeWidth={2.5} />
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Featured Article - Takes 2 columns */}
          <div className="lg:col-span-2 group cursor-pointer bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <div className="relative overflow-hidden aspect-[16/9]">
              <Image
                src={featuredNews.image}
                alt={featuredNews.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block bg-[#008751] text-white px-4 py-2 rounded-lg text-xs font-bold tracking-wide shadow-lg">
                  {featuredNews.category}
                </span>
              </div>
            </div>
            <div className="p-5 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight group-hover:text-[#008751] transition-colors">
                {featuredNews.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs sm:text-sm text-gray-600 mb-3 md:mb-4">
                <span className="font-semibold">{featuredNews.date}</span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {featuredNews.readTime}
                </span>
                <span className="text-[#FF6B35] font-semibold">• {featuredNews.source}</span>
              </div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 md:mb-6">
                {featuredNews.description}
              </p>
              <button className="inline-flex items-center gap-2 text-[#008751] font-bold text-sm hover:gap-3 transition-all duration-300">
                Read Full Article
                <ExternalLink size={16} />
              </button>
            </div>
          </div>

          {/* Side Articles - Stack vertically */}
          <div className="flex flex-col gap-6 md:gap-8">
            {sideNews.map((news, index) => (
              <div key={index} className="group cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="relative overflow-hidden aspect-[16/9]">
                  <Image
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    fill
                    priority={false}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block bg-[#FF6B35] text-white px-3 py-1.5 rounded-md text-xs font-bold tracking-wide shadow-lg">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 md:mb-3 leading-snug group-hover:text-[#008751] transition-colors">
                    {news.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs text-gray-600">
                    <span className="font-semibold">{news.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {news.readTime}
                    </span>
                    <span className="text-[#FF6B35] font-semibold">• {news.source}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row - Text Only Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-6 md:pt-8 border-t-2 border-gray-200">
          {bottomNews.map((news, index) => (
            <div key={index} className="group cursor-pointer bg-white rounded-xl p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <span 
                className="inline-block px-3 py-1 rounded-md text-xs font-bold mb-3 text-white"
                style={{ backgroundColor: index % 2 === 0 ? '#008751' : '#FF6B35' }}
              >
                {news.category}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-[#008751] transition-colors">
                {news.title}
              </h3>
              <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs text-gray-600 mb-3">
                <span className="font-semibold">{news.date}</span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {news.readTime}
                </span>
              </div>
              <span className="text-[#FF6B35] text-xs font-bold">{news.source}</span>
            </div>
          ))}
        </div>

        {/* Additional News Grid */}
        <div className="mt-12 md:mt-16 lg:mt-20">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
            More Headlines
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {additionalNews.map((news, index) => (
              <div key={index} className="group cursor-pointer bg-gradient-to-br from-white to-gray-50 rounded-lg p-5 md:p-6 border-l-4 hover:border-l-8 transition-all duration-300 shadow-md hover:shadow-lg"
                style={{ borderColor: index % 2 === 0 ? '#008751' : '#FF6B35' }}
              >
                <h4 className="text-base font-bold text-gray-900 mb-3 leading-snug group-hover:text-[#008751] transition-colors">
                  {news.title}
                </h4>
                <div className="flex flex-wrap items-center gap-2 text-xs text-gray-600 mb-2">
                  <span className="font-semibold">{news.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {news.readTime}
                  </span>
                </div>
                <span className="text-[#FF6B35] text-xs font-bold">{news.source}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 md:mt-20 bg-gradient-to-r from-[#008751] to-[#FF6B35] rounded-2xl p-1 shadow-2xl">
          <div className="bg-white rounded-xl p-6 sm:p-8 md:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
              Get the latest news and updates about Rt. Hon. Rotimi Amaechi's initiatives and public service
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-lg border-2 border-gray-300 focus:border-[#008751] focus:outline-none text-sm sm:text-base"
              />
              <button
                type="submit"
                className="bg-[#008751] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm tracking-wide hover:bg-[#006b40] transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmaechiNews;