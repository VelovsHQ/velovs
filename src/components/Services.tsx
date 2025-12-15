import React from 'react';

const servicesData = [
  {
    id: "01",
    title: "Art Direction",
    description: "We guide every visual decision from start to finish, ensuring clarity, emotion, and impact across every touchpoint."
  },
  {
    id: "02",
    title: "Brand Identity",
    description: "From strategy to execution, we shape consistent brand systems that speak clearly and feel uniquely ownable."
  },
  {
    id: "03",
    title: "Motion Direction",
    description: "We use motion as a design tool — adding clarity, rhythm, and energy to digital experiences with intention."
  },
  {
    id: "04",
    title: "Framer Sites",
    description: "Design meets execution with real-time, scalable websites — all crafted natively inside Framer for speed and precision."
  }
];

export default function Services() {
  return (
    <section className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      
      {/* 1. Header Section - Constrained Width */}
      <div className="max-w-[1800px] mx-auto px-10 md:px-24 lg:px-40">
        <div className="pt-12 md:pt-24 pb-12">
          <h1 className="text-[14vw] leading-[0.8] font-bold tracking-tighter flex items-start">
            Services
            <span className="text-4xl md:text-6xl lg:text-8xl font-light mt-2 ml-2 tracking-normal text-neutral-400">
              (6)
            </span>
          </h1>
        </div>
      </div>

      {/* 2. White Bar - Full Width Background */}
      <div className="w-full bg-white text-black py-0.8">
        {/* Inner container to align the text with the rest of the page content */}
        <div className="max-w-[1800px] mx-auto px-10 md:px-24 lg:px-40 flex justify-between items-center text-xs md:text-sm font-medium uppercase tracking-wide">
          <span>Precise</span>
          <span>Structured</span>
          <span>Focused</span>
          <span>Visual Language</span>
        </div>
      </div>

      {/* 3. Services List - Constrained Width */}
      <div className="max-w-[1800px] mx-auto px-10 md:px-24 lg:px-40">
        <div className="mt-12 md:mt-24 pb-24">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className="group grid grid-cols-1 md:grid-cols-12 gap-x-8"
            >
              {/* Spacer Column */}
              <div className="hidden md:block md:col-span-4 lg:col-span-5" />

              {/* Content Container */}
              <div className="md:col-span-8 lg:col-span-7 border-t border-neutral-800 py-12 md:py-16 transition-colors duration-500 group-hover:border-neutral-600">
                <div className="grid grid-cols-1 md:grid-cols-8 gap-y-6 md:gap-x-8">
                  
                  {/* ID Number */}
                  <div className="md:col-span-1 text-sm md:text-base font-mono text-neutral-400 group-hover:text-white transition-colors">
                    {service.id}
                  </div>

                  {/* Title */}
                  <div className="md:col-span-3 text-2xl md:text-3xl font-medium tracking-tight">
                    {service.title}
                  </div>

                  {/* Description */}
                  <div className="md:col-span-4 text-sm md:text-base text-neutral-400 leading-relaxed group-hover:text-neutral-200 transition-colors">
                    {service.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}