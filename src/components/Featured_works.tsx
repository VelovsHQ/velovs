import React from 'react';

const FeaturedWorks: React.FC = () => {
  return (
    <section className="bg-black text-white w-full overflow-hidden py-12 border-b border-gray-800">
      

      {/* <div className="w-full px-6 md:px-12 flex justify-between items-center text-[10px] md:text-xs tracking-widest uppercase font-medium text-gray-400 pb-4 border-b border-gray-800">
      </div> */}

      {/* --- Infinite Marquee Section --- */}
      <div className="relative w-full py-16 md:py-32 flex overflow-hidden">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          
          {/* First Copy */}
          <MarqueeItem />
          
          {/* Second Copy (Immediate Follow-up) */}
          <MarqueeItem />
          
        </div>
      </div>
    </section>
  );
};

// Sub-component for clean code
const MarqueeItem = () => (
  <div className="flex items-center px-4 md:px-8">
    <span className="text-[15vw] leading-none font-bold tracking-tighter">
      {/* The Copyright Symbol */}
      <span className="font-medium mr-4 align-middle text-[12vw]">©</span>
      Featured Works
    </span>
  </div>
);

export default FeaturedWorks;