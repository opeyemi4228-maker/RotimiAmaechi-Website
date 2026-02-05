import React from 'react';
import { ArrowRight } from 'lucide-react';
import { assets } from '@/assets/assets';
import Image from 'next/image';

const ValiantJoinSection = () => {
  const links = [
    { text: "Engage in Leadership & Public Service", url: "#" },
    { text: "Discover the Leadership Philosophy", url: "#" },
    { text: "Connect with Regional Initiatives", url: "#" },
    { text: "Support Nation-Building Efforts", url: "#" }
  ];

  return (
    <section className="py-20 px-6 bg-[#008751] lg:px-12 bg-orange-650">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-100 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            
            {/* Image Side */}
            <div className="relative h-[400px] lg:h-auto">
              <Image
                src={assets.Amaechi11}
                alt="Leadership, service, and national engagement"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Side */}
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 leading-tight">
                Be Part of a Legacy of Leadership
              </h2>

              {/* Links Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="group flex items-center gap-3 text-gray-900 hover:text-orange-700 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-gray-900 group-hover:border-orange-700 flex items-center justify-center transition-colors">
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </div>
                    <span className="text-lg font-medium underline">
                      {link.text}
                    </span>
                  </a>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValiantJoinSection;
