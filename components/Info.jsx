import React from "react";
import { ArrowRight } from "lucide-react";

const InteriorServicesSection = () => {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      title: "Infrastructure & Development",
      description: "Delivering large-scale infrastructure that drives economic growth, connects communities, and creates sustainable national value.",
      link: "Learn more"
    },
    {
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
      title: "Governance & Institutional Reform",
      description: "Strengthening institutions through accountability, efficiency, and transparent leadership across public service and governance.",
      link: "Learn more"
    },
    {
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
      title: "Economic Growth & Sustainability",
      description: "Building a resilient economy focused on job creation, private-sector growth, fiscal responsibility, and long-term national prosperity.",
      link: "Learn more"
    }
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 leading-tight">
          Proven leadership in infrastructure, governance<br />
          and sustainable economic transformation
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-[280px] mb-6 overflow-hidden rounded-lg">
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center z-20 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight 
                    size={20} 
                    strokeWidth={2}
                    className="text-gray-900" 
                  />
                </div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteriorServicesSection;
