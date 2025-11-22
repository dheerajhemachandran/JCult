'use client';

import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';

export default function Equities() {
  return (
    <div className="min-h-screen bg-main">
      <main className="pt-20">
        {/* Hero Section - Same as commodities */}
        <section className="relative overflow-visible mb-8 md:mb-16">
          <div className="bg-primary min-h-[60vh] md:min-h-[70vh] flex items-start px-4 md:px-8 py-6 md:py-8 lg:py-16 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white">
              Equities
            </h1>
          </div>
        </section>

        {/* Image left, title and para right */}
        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-6 md:mb-0">
                <img 
                  src="/images/office.webp"
                  alt="Equities trading"
                  className="w-full h-48 md:h-64 lg:h-80 object-cover"
                />
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 md:mb-6">
                  Global Equity Markets
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-main leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Four columns with 5xl numbers and para with gray border */}
        <section className="py-6 md:py-8 lg:py-16 bg-tertiary">
          <div className="container-responsive">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <div className="border-l-2 border-gray-300 pl-4 md:pl-6">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4">
                  $10B+
                </div>
                <p className="text-sm md:text-base text-secondary leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="border-l-2 border-gray-300 pl-4 md:pl-6">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4">
                  50+
                </div>
                <p className="text-sm md:text-base text-secondary leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="border-l-2 border-gray-300 pl-4 md:pl-6">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4">
                  25
                </div>
                <p className="text-sm md:text-base text-secondary leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="border-l-2 border-gray-300 pl-4 md:pl-6">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4">
                  99%
                </div>
                <p className="text-sm md:text-base text-secondary leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Blue background with title top left, subtitle top right, then columns */}
        <section className="bg-primary py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start mb-8 md:mb-12">
              <div className="flex-1 mb-4 md:mb-0">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  Our Investment Approach
                </h2>
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <h3 className="text-lg md:text-xl lg:text-2xl text-white/90">
                  Guided by Excellence
                </h3>
              </div>
            </div>

            {/* Top row: 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-6 md:pt-10">
              <div className="relative pr-6">
                <div className="absolute top-0 right-0 h-full w-px bg-white/30 hidden md:block"></div>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Fundamental Analysis
                </h4>
                <p className="text-sm md:text-base leading-relaxed text-white/90">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="relative pr-6">
                <div className="absolute top-0 right-0 h-full w-px bg-white/30 hidden md:block"></div>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Quantitative Research
                </h4>
                <p className="text-sm md:text-base leading-relaxed text-white/90">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="relative pr-6">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Risk Management
                </h4>
                <p className="text-sm md:text-base leading-relaxed text-white/90">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            {/* Bottom row: 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-16 border-t border-white/20 pt-6 md:pt-10">
              <div className="relative pr-6">
                <div className="absolute top-0 right-0 h-full w-px bg-white/30 hidden md:block"></div>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Portfolio Construction
                </h4>
                <p className="text-sm md:text-base leading-relaxed text-white/90">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="relative pr-6">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Active Management
                </h4>
                <p className="text-sm md:text-base leading-relaxed text-white/90">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Alternating sections - 4 sections total */}
        {/* Section 1: Title and image left, para and link right */}
        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-6 md:mb-0">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 md:mb-8">
                  Long/Short Strategies
                </h2>
                <img 
                  src="/images/office-collage.jpg"
                  alt="Long short strategies"
                  className="w-full h-48 md:h-64 object-cover"
                />
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <p className="text-sm md:text-base lg:text-lg text-main leading-relaxed mb-4 md:mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="inline-flex items-center text-primary font-medium hover:translate-x-2 transition-transform">
                  Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Para and link left, title and image right */}
        <section className="py-6 md:py-8 lg:py-16 bg-tertiary">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-6 md:mb-0 md:pr-8 lg:pr-16">
                <p className="text-sm md:text-base lg:text-lg text-main leading-relaxed mb-4 md:mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="inline-flex items-center text-primary font-medium hover:translate-x-2 transition-transform">
                  Explore Strategy
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 md:mb-8">
                  Market Neutral
                </h2>
                <img 
                  src="/images/office.webp"
                  alt="Market neutral"
                  className="w-full h-48 md:h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Title and image left, para and link right */}
        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-6 md:mb-0">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 md:mb-8">
                  Sector Focused
                </h2>
                <img 
                  src="/images/office-collage.jpg"
                  alt="Sector focused"
                  className="w-full h-48 md:h-64 object-cover"
                />
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <p className="text-sm md:text-base lg:text-lg text-main leading-relaxed mb-4 md:mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="inline-flex items-center text-primary font-medium hover:translate-x-2 transition-transform">
                  View Sectors
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Para and link left, title and image right */}
        <section className="py-6 md:py-8 lg:py-16 bg-tertiary">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-6 md:mb-0 md:pr-8 lg:pr-16">
                <p className="text-sm md:text-base lg:text-lg text-main leading-relaxed mb-4 md:mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="inline-flex items-center text-primary font-medium hover:translate-x-2 transition-transform">
                  Discover More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 md:mb-8">
                  Global Opportunities
                </h2>
                <img 
                  src="/images/office.webp"
                  alt="Global opportunities"
                  className="w-full h-48 md:h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
