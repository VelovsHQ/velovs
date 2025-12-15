import React from 'react';

const StatsSection = () => {
  return (
    <section className="relative w-full bg-black text-white border-t border-b border-white/10 overflow-hidden">
      {/* Background Grid & Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main Vertical Divider */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
        
        {/* Additional Grid Lines (Subtle) */}
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white/5" />
        <div className="absolute right-1/4 top-0 bottom-0 w-px bg-white/5" />
        
        {/* Horizontal Lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-white/5" />
        <div className="absolute bottom-1/4 left-0 right-0 h-px bg-white/5" />

        {/* Diagonal Hash Pattern - Top Left */}
        <div className="absolute top-0 left-1/4 w-1/4 h-32 opacity-10"
             style={{
               backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 12px, #ffffff 12px, #ffffff 13px)`
             }} 
        />

        {/* Diagonal Hash Pattern - Top Right */}
        <div className="absolute top-0 right-0 w-1/4 h-32 opacity-10"
             style={{
               backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 12px, #ffffff 12px, #ffffff 13px)`
             }} 
        />
        
        {/* Diagonal Hash Pattern - Bottom Right (Partial overlap based on image) */}
         <div className="absolute bottom-0 right-0 w-1/4 h-48 opacity-10"
             style={{
               backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 12px, #ffffff 12px, #ffffff 13px)`
             }} 
        />
      </div>

      {/* The Big Arc Overlay */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        preserveAspectRatio="none"
        viewBox="0 0 1440 400"
      >
        <path 
          d="M -100 400 C 200 100, 1240 100, 1540 400" 
          stroke="white" 
          strokeWidth="1" 
          fill="none" 
          vectorEffect="non-scaling-stroke"
          className="opacity-50"
        />
      </svg>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0">
          
          {/* Stat 1 */}
          <div className="flex flex-col justify-center pl-4 md:pl-12 border-l border-white/10 md:border-l-0">
            <span className="text-sm md:text-base text-gray-400 font-light tracking-wide mb-2 md:mb-4">
              LLM tokens processed per hour
            </span>
            <div className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white tabular-nums">
              42,483,460
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col justify-center pl-4 md:pl-12 md:border-l border-white/10">
            <span className="text-sm md:text-base text-gray-400 font-light tracking-wide mb-2 md:mb-4">
              Users
            </span>
            <div className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white tabular-nums">
              757.8K
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;