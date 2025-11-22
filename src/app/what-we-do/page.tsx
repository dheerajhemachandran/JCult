'use client';

import Hero from '@/components/section/Hero';
import { ArrowRight } from 'lucide-react';

export default function WhatWeDo() {
  const cards = [
    { title: "Commodities", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", link: "/what-we-do/commodities", image: "/images/office.webp" },
    { title: "Equities", description: "Sed do eiusmod tempor incididunt ut labore et dolore.", link: "/what-we-do/equities", image: "/images/office-collage.jpg" },
    { title: "Credit & Convertibles", description: "Ut enim ad minim veniam, quis nostrud exercitation.", link: "/what-we-do/credit-and-convertibles", image: "/images/office.webp" },
    { title: "Fixed Income & Macro", description: "Duis aute irure dolor in reprehenderit in voluptate.", link: "/what-we-do/fixed-income-and-macro", image: "/images/office-collage.jpg" },
    { title: "Global Quantitative Strategies", description: "Excepteur sint occaecat cupidatat non proident.", link: "/what-we-do/global-quantitative-strategies", image: "/images/office.webp" }
  ];

  return (
    <div className="min-h-screen bg-main">
      <main className="pt-20">
        {/* Hero Section with Image */}
        <Hero 
          imageSrc="/images/office.webp"
          title="What We Do"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        {/* Small blue text left, para with border right */}
        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-4 md:mb-0">
                <p className="text-xs md:text-sm font-bold text-primary">Our Expertise</p>
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16 md:border-l-2 border-primary">
                <p className="text-base md:text-lg lg:text-xl text-primary leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Title left, small para right */}
        <section className="py-6 md:py-8 lg:py-16 bg-tertiary">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-4 md:mb-0">
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-primary">
                  Our Approach
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

        {/* Image left, title with 3 paras right */}
        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-6 md:mb-0">
                <img 
                  src="/images/office-collage.jpg"
                  alt="Our strategy"
                  className="w-full h-64 md:h-80 lg:h-96 object-cover"
                />
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16 space-y-4 md:space-y-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                  Strategic Excellence
                </h2>
                <p className="text-sm md:text-base text-main leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="text-sm md:text-base text-main leading-relaxed">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-sm md:text-base text-main leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Title left, statement right */}
        <section className="py-6 md:py-8 lg:py-16 bg-tertiary">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-4 md:mb-0">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                  Our Mission
                </h2>
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <p className="text-lg md:text-xl lg:text-2xl text-primary font-medium leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5 Cards in 3 columns with grey left border */}
        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {cards.map((card, i) => (
                <div key={i} className="border-l-2 border-gray-300 pl-4 md:pl-6">
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-secondary leading-relaxed mb-4">
                    {card.description}
                  </p>
                  <a href={card.link} className="inline-flex items-center text-primary font-medium hover:translate-x-2 transition-transform mb-4 md:mb-6">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <img 
                    src={card.image}
                    alt={card.title}
                    className="w-full h-48 object-cover mt-4"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blue background with image top left hanging out, title right, 3 columns */}
        <section className="bg-primary py-6 md:py-8 lg:py-16 relative overflow-visible">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start mb-8 md:mb-12">
              <div className="flex-1 mb-6 md:mb-0 relative -mt-12 md:-mt-16">
                <img 
                  src="/images/office.webp"
                  alt="Our values"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  Guided by Our Values
                </h2>
              </div>
            </div>

            {/* 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-6 md:pt-10">
              <div className="relative pr-6">
                <div className="absolute top-0 right-0 h-full w-px bg-white/30 hidden md:block"></div>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Innovation
                </h4>
                <p className="text-sm md:text-base leading-relaxed text-white/90">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="relative pr-6">
                <div className="absolute top-0 right-0 h-full w-px bg-white/30 hidden md:block"></div>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Excellence
                </h4>
                <p className="text-sm md:text-base leading-relaxed text-white/90">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="relative pr-6">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Integrity
                </h4>
                <p className="text-sm md:text-base leading-relaxed text-white/90">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
