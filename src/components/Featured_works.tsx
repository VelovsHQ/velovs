import React from 'react';

const FeaturedWorks: React.FC = () => {
  return (
    // Removed the outer border-b since we are adding specific borders around the text now
    <section className="bg-black text-white w-full overflow-hidden py-12">

      {/* --- Infinite Marquee Section --- */}
      {/* UPDATED HERE: 
          1. Added 'border-y' for top and bottom lines.
          2. Added 'border-neutral-800' for a subtle, low-opacity professional look.
          3. Reduced padding to 'py-4' so lines are close to the text.
      */}
      <div className="relative w-full py-4 border-y border-neutral-800 flex overflow-hidden my-8">
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
    {/* Added 'py-2' here just to give a tiny bit of breathing room between text and the new borders */}
    <span className="text-[15vw] leading-none font-bold tracking-tighter py-2">
      {/* The Copyright Symbol */}
      <span className="font-medium mr-4 align-middle text-[12vw]">©</span>
      Featured Works
    </span>
  </div>
);

export default FeaturedWorks;