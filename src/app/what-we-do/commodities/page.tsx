'use client';

import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import Stats from '@/components/section/Stats';

export default function Commodities() {
  return (
    <div className="min-h-screen bg-main">
      <main className="pt-20">
        {/* Hero Section - Blue background sticking to right with gap on left */}
        <section className="relative overflow-visible mb-8 md:mb-16">
          <div className="bg-primary min-h-[60vh] md:min-h-[70vh] flex items-start px-4 md:px-8 py-6 md:py-8 lg:py-16 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white">
              Commodities
            </h1>
          </div>
        </section>

        {/* Title left, paragraph right */}
        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-primary">
                  Our Expertise
                </h2>
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <p className="text-sm md:text-base lg:text-lg text-main leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section with just two columns with gray borders */}
        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="border-l-2 border-secondary pl-4 md:pl-6">
                <h3 className="text-lg md:text-xl font-bold text-main mb-4">
                  Market Analysis
                </h3>
                <p className="text-sm md:text-base text-secondary leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="border-l-2 border-secondary pl-4 md:pl-6">
                <h3 className="text-lg md:text-xl font-bold text-main mb-4">
                  Trading Excellence
                </h3>
                <p className="text-sm md:text-base text-secondary leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Two columns left with numbers, space right, then two columns below with lists, image right */}
        <section className="py-6 md:py-8 lg:py-16 bg-tertiary">
          <div className="container-responsive">
            <div className="flex">
              {/* Left side - Numbers and Lists */}
              <div className="flex-2">
                {/* Top: Two columns with numbers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
                  <div className="border-l-2 border-secondary pl-4 md:pl-6">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-3 md:mb-4">
                      25+
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-main">
                      Years Experience
                    </h3>
                  </div>
                  <div className="border-l-2 border-secondary pl-4 md:pl-6">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-3 md:mb-4">
                      500+
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-main">
                      Global Partners
                    </h3>
                  </div>
                </div>

                {/* Bottom: Two columns with titles and lists */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="border-l-2 border-secondary pl-4 md:pl-6">
                    <h3 className="text-lg md:text-xl font-bold text-main mb-4">
                      Energy Markets
                    </h3>
                    <ul className="space-y-2 text-sm md:text-base text-secondary">
                      <li>• Crude Oil Trading</li>
                      <li>• Natural Gas</li>
                      <li>• Refined Products</li>
                      <li>• Renewable Energy</li>
                    </ul>
                  </div>
                  <div className="border-l-2 border-secondary pl-4 md:pl-6">
                    <h3 className="text-lg md:text-xl font-bold text-main mb-4">
                      Agricultural Products
                    </h3>
                    <ul className="space-y-2 text-sm md:text-base text-secondary">
                      <li>• Grains & Cereals</li>
                      <li>• Soft Commodities</li>
                      <li>• Livestock</li>
                      <li>• Food Processing</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right side - Image */}
              <div className="flex-1 md:pl-8 lg:pl-16">
                <img 
                  src="/images/office.webp"
                  alt="Commodities trading"
                  className="w-full h-64 md:h-80 lg:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Title with image below left, two paragraphs right */}
        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-1 mb-6 md:mb-0">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 md:mb-8">
                  Market Leadership
                </h2>
                <img 
                  src="/images/office-collage.jpg"
                  alt="Market leadership"
                  className="w-full h-48 md:h-64 object-cover"
                />
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16 space-y-4 md:space-y-6">
                <p className="text-sm md:text-base lg:text-lg text-main leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="text-sm md:text-base lg:text-lg text-main leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Title and text left, image right */}
        <section className="py-6 md:py-8 lg:py-16 bg-tertiary">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-6 md:mb-0">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 md:mb-6">
                  Global Reach
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-main leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <img 
                  src="/images/office.webp"
                  alt="Global operations"
                  className="w-full h-48 md:h-64 lg:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Title left top, three columns with numbers and paragraphs with gray border */}
        {/* correction 4 */}
        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-8 md:mb-12">
              Performance Metrics
            </h2>
            <div className="ml-0 md:ml-8 lg:ml-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="border-l-2 border-secondary pl-4 md:pl-6">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4">
                    $2.5B
                  </div>
                  <p className="text-sm md:text-base text-secondary leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
                <div className="border-l-2 border-secondary pl-4 md:pl-6">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4">
                    150+
                  </div>
                  <p className="text-sm md:text-base text-secondary leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
                <div className="border-l-2 border-secondary pl-4 md:pl-6">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4">
                    98%
                  </div>
                  <p className="text-sm md:text-base text-secondary leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Title with para left, image right */}
        <section className="py-6 md:py-8 lg:py-16 bg-tertiary">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-6 md:mb-0">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 md:mb-6">
                  Risk Management
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-main leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <img 
                  src="/images/office-collage.jpg"
                  alt="Risk management"
                  className="w-full h-48 md:h-64 lg:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Blue background with gap on right, title left, para with button right */}
        {/* correction 5 */}
        <section className="py-6 md:py-8 lg:py-16">
          <div className="bg-primary mr-0 md:mr-4 lg:mr-8">
            <div className="container-responsive py-6 md:py-8 lg:py-16">
              <div className="flex flex-col md:flex-row items-start">
                <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                    Partner With Us
                  </h2>
                </div>
                <div className="flex-1 md:pl-8 lg:pl-16 space-y-4 md:space-y-6">
                  <p className="text-sm md:text-base lg:text-lg text-white/90 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <p className="text-sm md:text-base lg:text-lg text-white/90 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <p className="text-sm md:text-base lg:text-lg text-white/90 leading-relaxed mb-4 md:mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <button className="bg-main text-primary px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-medium">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full width image attached to blue background above */}
        <section>
          <div className="ml-0 md:ml-4 lg:ml-8">
            <img 
              src="/images/office-collage.jpg"
              alt="Commodities operations"
              className="w-full h-64 md:h-80 lg:h-96 object-cover"
            />
          </div>
        </section>

        {/* Title and image left, paragraph right */}
        <section className="py-6 md:py-8 lg:py-16 bg-tertiary">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-6 md:mb-0">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 md:mb-8">
                  Innovation
                </h2>
                <img 
                  src="/images/office.webp"
                  alt="Innovation in commodities"
                  className="w-full h-48 md:h-64 object-cover"
                />
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <p className="text-sm md:text-base lg:text-lg text-main leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Drives Us structure from root */}
        <section className="bg-primary py-6 md:py-8 lg:py-16 relative overflow-visible">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start mb-6 md:mb-8">
              <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
                <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-white mb-3 md:mb-4 lg:mb-8">
                  Technology Drives Excellence
                </h2>
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <p className="text-sm md:text-base lg:text-lg text-white/90 mb-4 md:mb-6 lg:mb-8 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="bg-main text-primary px-3 md:px-4 py-3 text-sm md:text-base">
                  Explore Our Technology
                </button>
              </div>
            </div>
            <div className="flex justify-center relative z-10">
              <div className="relative" style={{ transform: 'translateY(60px)' }}>
                <video 
                  className="w-full max-w-[300px] md:max-w-[500px] lg:max-w-[600px] h-48 md:h-72 lg:h-96 object-cover"
                  autoPlay 
                  muted 
                  loop
                  playsInline
                  controls={false}
                >
                  <source src="/business.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Spacer for video overflow */}
        <section className="bg-main" style={{ paddingTop: '80px', paddingBottom: '1.5rem' }}>
          <div className="container-responsive">
            {/* Empty spacer */}
          </div>
        </section>

        {/* Image left attached to corner, title and button right aligned top */}
        <section className="py-6 md:py-8 lg:py-16">
          <div className="flex flex-col md:flex-row items-start">
            <div className="flex-1 mb-6 md:mb-0">
              <img 
                src="/images/office.webp"
                alt="Join our team"
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
              />
            </div>
            <div className="flex-1 md:pl-8 lg:pl-16 container-responsive">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 md:mb-6">
                Join Our Team
              </h2>
              <button className="btn-primary px-6 md:px-8 py-3 md:py-4 text-base md:text-lg">
                View Opportunities
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}