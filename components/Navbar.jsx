'use client'
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    
    const hero = document.querySelector('#hero');
    if (hero) {
      const obs = new IntersectionObserver(
        ([entry]) => setIsHeroVisible(entry.isIntersecting),
        { root: null, threshold: 0.1 }
      );
      obs.observe(hero);
      return () => obs.disconnect();
    }

    const onScroll = () => {
      setIsHeroVisible(window.scrollY < 200);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Green Top Banner - ADC Green */}
      {isHydrated && (
        <div
          className={`bg-[#008751] text-white text-center transform transition-all duration-300 ease-in-out origin-top ${
            isHeroVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          }`}
        >
          <p className="text-sm md:text-base font-bold py-2">
            Join the Rt. Hon. Chibuike Rotimi Amaechi Campaign Today!
          </p>
        </div>
      )}

      {/* Main Navigation */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="font-bold text-xl text-[#008751]">
                Rt. Hon. Rotimi Amaechi.
              </h1>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              <a
                href="/"
                className="text-gray-700 hover:text-[#008751] font-medium tracking-wide text-sm transition-colors duration-200"
              >
                HOME
              </a>
              <a
                href="governance"
                className="text-gray-700 hover:text-[#008751] font-medium tracking-wide text-sm transition-colors duration-200"
              >
                THE JOURNEY
              </a>
              <a
                href="planforchange"
                className="text-gray-700 hover:text-[#008751] font-medium tracking-wide text-sm transition-colors duration-200"
              >
                PLAN FOR CHANGE
              </a>
              <a
                href="connect"
                className="text-gray-700 hover:text-[#008751] font-medium tracking-wide text-sm transition-colors duration-200"
              >
                CONNECT
              </a>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="support"
                className="bg-[#008751] text-white px-8 py-3 rounded-md font-bold text-sm tracking-wider hover:bg-[#006b40] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                SUPPORT THE CAMPAIGN
              </a>
              <a
                href="volunteer"
                className="bg-[#FF6B35] text-white px-8 py-3 rounded-md font-bold text-sm tracking-wider hover:bg-[#e55a28] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                VOLUNTEER
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#008751] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-6 border-t border-gray-200">
              <div className="flex flex-col gap-4">
                <a
                  href="/"
                  className="text-gray-700 hover:text-[#008751] font-medium tracking-wide text-sm py-2 transition-colors duration-200"
                >
                  HOME
                </a>
                <a
                  href="governance"
                  className="text-gray-700 hover:text-[#008751] font-medium tracking-wide text-sm py-2 transition-colors duration-200"
                >
                  THE JOURNEY
                </a>
                <a
                  href="planforchange"
                  className="text-gray-700 hover:text-[#008751] font-medium tracking-wide text-sm py-2 transition-colors duration-200"
                >
                  PLAN FOR CHANGE
                </a>
                <a
                  href="connect"
                  className="text-gray-700 hover:text-[#008751] font-medium tracking-wide text-sm py-2 transition-colors duration-200"
                >
                  CONNECT
                </a>

                <div className="flex flex-col gap-3 mt-4">
                  <a
                    href="support"
                    className="bg-[#008751] text-white px-6 py-3 rounded-md font-bold text-sm tracking-wider hover:bg-[#006b40] transition-all duration-300 text-center shadow-md"
                  >
                    SUPPORT THE CAMPAIGN
                  </a>
                  <a
                    href="volunteer"
                    className="bg-[#FF6B35] text-white px-6 py-3 rounded-md font-bold text-sm tracking-wider hover:bg-[#e55a28] transition-all duration-300 text-center shadow-md"
                  >
                    VOLUNTEER
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;