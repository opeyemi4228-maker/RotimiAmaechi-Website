import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';

const ValiantNews = () => {
  const featuredNews = {
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&q=80",
    title: "Remarks by Valiant Movement Founder at National Leadership Summit, Abuja",
    date: "15 Jan, 2026",
    readTime: "13 MIN READ",
    description: "Remarks by the Valiant Movement Founder at National Economic Forum: Nigeria's Future"
  };

  const sideNews = [
    {
      image: "https://images.unsplash.com/photo-1591608971362-f08b2a75731a?w=400&q=80",
      title: "Valiant Movement Launches Grassroots Democracy Initiative across Nigerian States",
      date: "14 Jan, 2026",
      readTime: "8 MIN READ"
    },
    {
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80",
      title: "DNA Experience Program Graduates 500+ Community Leaders in First Phase",
      date: "12 Jan, 2026",
      readTime: "6 MIN READ"
    }
  ];

  const bottomNews = [
    {
      title: "Valiant Movement's Largest Youth Mobilization of 2026: Steadfast Drive to Transform Communities",
      date: "10 Jan, 2026",
      readTime: "9 MIN READ"
    },
    {
      title: "Valiant Leadership Commends Nigerian Youth's Contributions to Nation-Building and Support for Democracy",
      date: "08 Jan, 2026",
      readTime: "7 MIN READ"
    },
    {
      title: "Valiant's Strategic Partnership Highlights Evolving Collaboration with Civil Society",
      date: "05 Jan, 2026",
      readTime: "5 MIN READ"
    }
  ];

  return (
    <section className="py-16 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-orange-800">
            News
          </h2>
          <button className="flex items-center gap-2 text-orange-800 hover:text-orange-600 transition-colors font-medium text-sm uppercase tracking-wide group">
            See all news
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Featured Article - Takes 2 columns */}
          <div className="lg:col-span-2 group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-4 aspect-[16/9]">
              <img
                src={featuredNews.image}
                alt={featuredNews.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-orange-800 mb-3 leading-tight group-hover:text-orange-600 transition-colors">
                {featuredNews.title}
              </h3>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                <span>{featuredNews.date}</span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {featuredNews.readTime}
                </span>
              </div>
              <p className="text-gray-700 text-sm">
                {featuredNews.description}
              </p>
            </div>
          </div>

          {/* Side Articles - Stack vertically */}
          <div className="flex flex-col gap-6">
            {sideNews.map((news, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-3 aspect-[16/9]">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-base font-bold text-orange-800 mb-2 leading-snug group-hover:text-orange-600 transition-colors">
                  {news.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-gray-600">
                  <span>{news.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {news.readTime}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row - Text Only Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-300">
          {bottomNews.map((news, index) => (
            <div key={index} className="group cursor-pointer">
              <h3 className="text-base font-bold text-orange-800 mb-2 leading-snug group-hover:text-orange-600 transition-colors">
                {news.title}
              </h3>
              <div className="flex items-center gap-3 text-xs text-gray-600">
                <span>{news.date}</span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {news.readTime}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValiantNews;