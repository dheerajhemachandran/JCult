'use client';

import { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function InTheMedia() {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [showMore, setShowMore] = useState(false);

  const newsDataByYear: Record<string, Array<{ category: string; title: string; href: string; date: string; source?: string }>> = {
    '2024': [
      { category: "Press Release", title: "Lorem ipsum dolor sit amet consectetur adipiscing elit", href: "#", date: "Jan 15, 2024", source: "Bloomberg" },
      { category: "Company News", title: "Sed do eiusmod tempor incididunt ut labore et dolore", href: "#", date: "Jan 10, 2024", source: "Reuters" },
      { category: "Industry Update", title: "Ut enim ad minim veniam quis nostrud exercitation", href: "#", date: "Jan 5, 2024", source: "Financial Times" },
      { category: "Announcement", title: "Duis aute irure dolor in reprehenderit in voluptate", href: "#", date: "Dec 28, 2023" },
      { category: "Press Release", title: "Excepteur sint occaecat cupidatat non proident sunt", href: "#", date: "Dec 20, 2023", source: "WSJ" },
      { category: "Company News", title: "Sunt in culpa qui officia deserunt mollit anim id", href: "#", date: "Dec 15, 2023" },
      { category: "Industry Update", title: "Consectetur adipiscing elit sed do eiusmod tempor", href: "#", date: "Dec 10, 2023", source: "Bloomberg" },
      { category: "Announcement", title: "Incididunt ut labore et dolore magna aliqua enim", href: "#", date: "Dec 5, 2023" },
      { category: "Press Release", title: "Ad minim veniam quis nostrud exercitation ullamco", href: "#", date: "Nov 28, 2023", source: "Reuters" },
      { category: "Company News", title: "Laboris nisi ut aliquip ex ea commodo consequat", href: "#", date: "Nov 20, 2023" }
    ],
    '2023': [
      { category: "Press Release", title: "Duis aute irure dolor in reprehenderit voluptate", href: "#", date: "Dec 15, 2023", source: "Bloomberg" },
      { category: "Company News", title: "Velit esse cillum dolore eu fugiat nulla pariatur", href: "#", date: "Nov 10, 2023" },
      { category: "Industry Update", title: "Excepteur sint occaecat cupidatat non proident", href: "#", date: "Oct 5, 2023", source: "Financial Times" },
      { category: "Announcement", title: "Sunt in culpa qui officia deserunt mollit anim", href: "#", date: "Sep 28, 2023" },
      { category: "Press Release", title: "Sed ut perspiciatis unde omnis iste natus error", href: "#", date: "Aug 20, 2023", source: "WSJ" },
      { category: "Company News", title: "Nemo enim ipsam voluptatem quia voluptas sit", href: "#", date: "Jul 15, 2023" },
      { category: "Industry Update", title: "Neque porro quisquam est qui dolorem ipsum", href: "#", date: "Jun 10, 2023", source: "Bloomberg" },
      { category: "Announcement", title: "Ut enim ad minima veniam quis nostrum", href: "#", date: "May 5, 2023" },
      { category: "Press Release", title: "Quis autem vel eum iure reprehenderit qui", href: "#", date: "Apr 28, 2023", source: "Reuters" },
      { category: "Company News", title: "At vero eos et accusamus et iusto odio", href: "#", date: "Mar 20, 2023" }
    ],
    '2022': [
      { category: "Press Release", title: "Et harum quidem rerum facilis est et expedita", href: "#", date: "Dec 15, 2022", source: "Bloomberg" },
      { category: "Company News", title: "Nam libero tempore cum soluta nobis est", href: "#", date: "Nov 10, 2022" },
      { category: "Industry Update", title: "Temporibus autem quibusdam et aut officiis", href: "#", date: "Oct 5, 2022", source: "Financial Times" },
      { category: "Announcement", title: "Itaque earum rerum hic tenetur a sapiente", href: "#", date: "Sep 28, 2022" },
      { category: "Press Release", title: "Delectus ut aut reiciendis voluptatibus maiores", href: "#", date: "Aug 20, 2022", source: "WSJ" },
      { category: "Company News", title: "Alias consequatur aut perferendis doloribus", href: "#", date: "Jul 15, 2022" },
      { category: "Industry Update", title: "Saepe eveniet ut et voluptates repudiandae", href: "#", date: "Jun 10, 2022", source: "Bloomberg" },
      { category: "Announcement", title: "Sint et molestiae non recusandae itaque", href: "#", date: "May 5, 2022" },
      { category: "Press Release", title: "Earum necessitatibus saepe eveniet ut et", href: "#", date: "Apr 28, 2022", source: "Reuters" },
      { category: "Company News", title: "Voluptates repudiandae sint et molestiae", href: "#", date: "Mar 20, 2022" }
    ]
  };

  const currentYearData = newsDataByYear[selectedYear] || [];
  const displayedItems = showMore ? currentYearData : currentYearData.slice(0, 4);

  return (
    <div className="min-h-screen bg-main">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-visible mb-8 md:mb-16">
          <div className="bg-primary min-h-[60vh] md:min-h-[70vh] flex items-start px-4 md:px-8 pt-12 md:pt-16 lg:pt-20 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white">
              In The Media
            </h1>
          </div>
        </section>

        {/* Year Dropdown and News Items */}
        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            {/* Year Dropdown */}
            <div className="mb-8 md:mb-12">
              <div className="relative inline-block">
                <select
                  value={selectedYear}
                  onChange={(e) => {
                    setSelectedYear(e.target.value);
                    setShowMore(false);
                  }}
                  className="appearance-none bg-white border-2 border-primary text-primary font-bold px-6 py-3 pr-12 text-base md:text-lg cursor-pointer hover:bg-tertiary transition"
                >
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary pointer-events-none" />
              </div>
            </div>

            {/* News Items */}
            <div className="divide-y border-t border-b">
              {displayedItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="group flex justify-between py-4 md:py-6 items-start transition"
                >
                  <div className="space-y-1 flex-1">
                    <p className="text-xs md:text-sm text-secondary uppercase tracking-wide">
                      {item.category}
                    </p>
                    {(item.date || item.source) && (
                      <p className="text-xs text-secondary/70">
                        {item.date}
                        {item.source && <> | {item.source}</>}
                      </p>
                    )}
                    <h3 className="text-base md:text-lg font-bold text-primary group-hover:underline">
                      {item.title}
                    </h3>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition ml-4" />
                </a>
              ))}
            </div>

            {/* Load More Button */}
            {currentYearData.length > 4 && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="btn-primary px-6 md:px-8 py-3 text-sm md:text-base"
                >
                  {showMore ? 'Show Less' : 'Load More'}
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
