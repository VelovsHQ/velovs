import React from 'react';

const servicesData = [
  {
    id: "01",
    title: "Neural Strategy",
    description: "Most companies guess. We calculate. Every decision backed by intelligence that sees patterns humans miss. This isn't consulting—it's evolution."
  },
  {
    id: "02",
    title: "Data-Driven Identity",
    description: "Your competitors have brands. You'll have a living system that predicts desire, adapts in real-time, and wins before the game begins."
  },
  {
    id: "03",
    title: "Autonomous Systems",
    description: "Why manage when you can orchestrate? We build AI that doesn't just follow orders—it anticipates needs, solves problems, and scales infinitely."
  },
  {
    id: "04",
    title: "Code That Thinks",
    description: "Generic solutions breed generic results. We craft AI that knows your business better than spreadsheets ever could. Precision. Power. Purpose."
  }
];

export default function Services() {
  return (
    <section className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      
      {/* 1. Header Section - Constrained Width */}
      <div className="max-w-[1800px] mx-auto px-10 md:px-24 lg:px-40">
        <div className="pt-12 md:pt-24 pb-12">
          <h1 className="text-[13.5vw] md:text-[12vw] lg:text-[9.5vw] leading-[0.85] font-bold tracking-tighter flex items-start">
            Services
            <span className="text-[1.7rem] md:text-[2.5rem] lg:text-[3.2rem] font-bold mt-2 ml-2 tracking-normal text-white">
              (4)
            </span>
          </h1>
        </div>
      </div>

      {/* 2. White Bar - Full Width Background */}
      <div className="w-full bg-white text-black py-0.8">
        {/* Inner container to align the text with the rest of the page content */}
        <div className="max-w-[1800px] mx-auto px-10 md:px-24 lg:px-40 flex justify-between items-center text-xs md:text-sm font-medium uppercase tracking-wide">
          <span>NEURAL</span>
          <span>ADAPTIVE</span>
          <span>COGNITIVE</span>
          <span>INTELLIGENT DESIGN</span>
        </div>
      </div>

      {/* 3. Services List - Constrained Width */}
      <div className="max-w-[1800px] mx-auto px-10 md:px-24 lg:px-40">
        <div className="mt-8 md:mt-16 pb-0">
          {servicesData.map((service, idx) => (
            <React.Fragment key={service.id}>
              <div 
                className="group grid grid-cols-1 md:grid-cols-12 gap-x-8"
              >
                {/* Spacer Column */}
                <div className="hidden md:block md:col-span-4 lg:col-span-5" />

                {/* Content Container */}
                <div className="md:col-span-8 lg:col-span-7 border-t border-neutral-800 py-8 md:py-10 transition-colors duration-500 group-hover:border-neutral-600">
                  <div className="grid grid-cols-1 md:grid-cols-8 gap-y-4 md:gap-x-8">
                    {/* ID Number */}
                    <div className="md:col-span-1 text-sm md:text-base font-mono text-neutral-400 group-hover:text-white transition-colors">
                      <span className="font-chakra font-bold text-white">{service.id}</span>
                    </div>
                    {/* Title */}
                    <div className="md:col-span-3 text-xl md:text-2xl font-medium tracking-tight">
                      <span className="font-chakra">{service.title}</span>
                    </div>
                    {/* Description */}
                    <div className="md:col-span-4 text-sm md:text-base text-neutral-400 leading-relaxed group-hover:text-neutral-200 transition-colors">
                      <span className="font-chakra">{service.description}</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Add a border after the last item */}
              {idx === servicesData.length - 1 && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8">
                  <div className="hidden md:block md:col-span-4 lg:col-span-5" />
                  <div className="md:col-span-8 lg:col-span-7 border-t border-neutral-800" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      
    </section>
  );
}