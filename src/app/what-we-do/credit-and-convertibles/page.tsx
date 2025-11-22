'use client';

import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';

export default function CreditAndConvertibles() {
  return (
    <div className="min-h-screen bg-main">
      <main className="pt-20">
        {/* Hero Section - Same as commodities */}
        <section className="relative overflow-visible mb-8 md:mb-16">
          <div className="bg-primary min-h-[60vh] md:min-h-[70vh] flex items-start px-4 md:px-8 py-6 md:py-8 lg:py-16 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white">
              Credit & Convertibles
            </h1>
          </div>
        </section>

        {/* Title left, paragraph right */}
        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-primary">
                  Strategic Credit Solutions
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

        {/* Section with columns and image - similar to commodities */}
        <section className="py-6 md:py-8 lg:py-16 bg-tertiary">
          <div className="container-responsive">
            <div className="flex">
              <div className="flex-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
                  <div className="border-l-2 border-secondary pl-4 md:pl-6">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-3 md:mb-4">
                      $5B+
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-main">
                      Assets Under Management
                    </h3>
                  </div>
                  <div className="border-l-2 border-secondary pl-4 md:pl-6">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-3 md:mb-4">
                      200+
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-main">
                      Active Positions
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="border-l-2 border-secondary pl-4 md:pl-6">
                    <h3 className="text-lg md:text-xl font-bold text-main mb-4">
                      Credit Strategies
                    </h3>
                    <ul className="space-y-2 text-sm md:text-base text-secondary">
                      <li>• Investment Grade</li>
                      <li>• High Yield Bonds</li>
                      <li>• Distressed Debt</li>
                      <li>• Structured Credit</li>
                    </ul>
                  </div>
                  <div className="border-l-2 border-secondary pl-4 md:pl-6">
                    <h3 className="text-lg md:text-xl font-bold text-main mb-4">
                      Convertible Securities
                    </h3>
                    <ul className="space-y-2 text-sm md:text-base text-secondary">
                      <li>• Convertible Bonds</li>
                      <li>• Convertible Arbitrage</li>
                      <li>• Equity-Linked Notes</li>
                      <li>• Hybrid Instruments</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex-1 md:pl-8 lg:pl-16">
                <img 
                  src="/images/office.webp"
                  alt="Credit and convertibles trading"
                  className="w-full h-64 md:h-80 lg:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Title and para left, image right */}
        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-6 md:mb-0">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 md:mb-6">
                  Deep Market Expertise
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-main leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <img 
                  src="/images/office-collage.jpg"
                  alt="Market expertise"
                  className="w-full h-48 md:h-64 lg:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Two columns to the right with gray left border */}
        <section className="py-6 md:py-8 lg:py-16 bg-tertiary">
          <div className="container-responsive">
            <div className="flex">
              <div className="flex-1"></div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <div className="space-y-6 md:space-y-8">
                  <div className="border-l-2 border-secondary pl-4 md:pl-6">
                    <h3 className="text-lg md:text-xl font-bold text-main mb-4">
                      Risk-Adjusted Returns
                    </h3>
                    <p className="text-sm md:text-base text-secondary leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                  <div className="border-l-2 border-secondary pl-4 md:pl-6">
                    <h3 className="text-lg md:text-xl font-bold text-main mb-4">
                      Portfolio Diversification
                    </h3>
                    <p className="text-sm md:text-base text-secondary leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Title and para left, image right */}
        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-6 md:mb-0">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 md:mb-6">
                  Analytical Framework
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-main leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <img 
                  src="/images/office.webp"
                  alt="Analytical framework"
                  className="w-full h-48 md:h-64 lg:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Title and para left, image right */}
        <section className="py-6 md:py-8 lg:py-16 bg-tertiary">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-6 md:mb-0">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 md:mb-6">
                  Global Opportunities
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-main leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <img 
                  src="/images/office-collage.jpg"
                  alt="Global opportunities"
                  className="w-full h-48 md:h-64 lg:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Image covering middle part */}
        <section>
          <div className="container-responsive">
            <img 
              src="/images/office.webp"
              alt="Credit operations"
              className="w-full h-64 md:h-80 lg:h-96 object-cover"
            />
          </div>
        </section>

        {/* Title and para left, image right */}
        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-6 md:mb-0">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 md:mb-6">
                  Convertible Arbitrage
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-main leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <img 
                  src="/images/office-collage.jpg"
                  alt="Convertible arbitrage"
                  className="w-full h-48 md:h-64 lg:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Opposite - Image left, title and para right */}
        <section className="py-6 md:py-8 lg:py-16 bg-tertiary">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-6 md:mb-0">
                <img 
                  src="/images/office.webp"
                  alt="Credit research"
                  className="w-full h-48 md:h-64 lg:h-80 object-cover"
                />
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 md:mb-6">
                  Credit Research
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-main leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Image left, title and button right */}
        <section className="py-6 md:py-8 lg:py-16">
          <div className="flex flex-col md:flex-row items-start">
            <div className="flex-1 mb-6 md:mb-0">
              <img 
                src="/images/office-collage.jpg"
                alt="Partner with us"
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
              />
            </div>
            <div className="flex-1 md:pl-8 lg:pl-16 container-responsive">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 md:mb-6">
                Partner With Our Team
              </h2>
              <button className="btn-primary px-6 md:px-8 py-3 md:py-4 text-base md:text-lg">
                Get In Touch
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
