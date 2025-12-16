'use client';

import React from 'react';
import Image from 'next/image';

// --- Types ---
type Testimonial = {
  id: number;
  handle: string;
  avatar: string; // Using colors/placeholders for this demo
  text: string;
};

// --- Data extracted from image ---
const testimonials: Testimonial[] = [
  {
    id: 1,
    handle: '@SarahChen - VP of Product, TechCorp',
    avatar: 'bg-blue-500',
    text: "Velovs transformed our data chaos into predictive intelligence. Their custom AI model cut our decision time from days to hours. This isn't just automation—it's a competitive advantage we didn't know we needed.",
  },
  {
    id: 2,
    handle: '@MarcusJ - Founder, GrowthLabs',
    avatar: 'bg-pink-500',
    text: "Most AI agencies overpromise and underdeliver. Velovs did the opposite. They built us a recommendation engine that increased conversions by 43% in the first month. Real results, zero fluff.",
  },
  {
    id: 3,
    handle: '@PriyaM - CTO, FinanceFlow',
    avatar: 'bg-indigo-500',
    text: "Finally, an AI partner who understands both the tech AND the business. Their neural strategy framework helped us identify $2M in operational savings. Smart people building smart systems.",
  },
  {
    id: 4,
    handle: '@AlexR - Head of Innovation, Retail360',
    avatar: 'bg-red-500',
    text: "From concept to production in 8 weeks. Their autonomous systems now handle what used to take our team 40 hours weekly. The ROI was immediate. This is the future, and they're building it.",
  },
  {
    id: 5,
    handle: '@LiamT - COO, MedixAI',
    avatar: 'bg-teal-500',
    text: "Velovs delivered a seamless integration between our legacy systems and new AI modules. Their team was proactive, communicative, and obsessed with quality. We saw measurable impact within the first quarter.",
  },
];

export default function CommunityMarquee() {
  return (
    <section className="relative w-full min-h-screen bg-black flex flex-col justify-center overflow-hidden py-24">
      
      {/* Background Matrix/Grid Effect (Subtle Texture) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div 
            className="absolute inset-0" 
            style={{
                backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)',
                backgroundSize: '30px 30px'
            }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
      </div>

      {/* Header Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-16 w-full">
        <span className="text-gray-400 text-sm font-medium tracking-wide uppercase mb-4 block">
          Community
        </span>
        <h2 className="text-5xl md:text-6xl text-white font-medium leading-tight mb-8">
          See what happens when intelligence <br />
          meets execution.
        </h2>
        
        <button className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
          Join our discord
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:translate-x-1 transition-transform"
          >
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Marquee Section */}
      <div className="relative w-full pt-16 group">
        
        {/* The Scrolling Track */}
        {/* We duplicate the list to create the infinite loop effect */}
        <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused]">
          
          {/* First Set of Cards */}
          {testimonials.map((item) => (
            <Card key={`a-${item.id}`} item={item} />
          ))}
          
          {/* Second Set of Cards (Duplicate for Loop) */}
          {testimonials.map((item) => (
            <Card key={`b-${item.id}`} item={item} />
          ))}

        </div>
      </div>

      {/* Tailwind Animation Config Injection */}
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}

// --- Individual Card Component ---
function Card({ item }: { item: Testimonial }) {
  return (
    <div className="w-[400px] md:w-[450px] mx-4 flex-shrink-0">
      <div className="h-full p-8 border border-[#10b981]/30 bg-black/40 backdrop-blur-sm rounded-lg transition-all duration-300 hover:bg-[#2E5C3F] hover:border-[#2E5C3F] hover:scale-[1.02] cursor-default group/card">
        
        {/* User Header */}
        <div className="flex items-center gap-3 mb-4">
          {/* Avatar Placeholder */}
          <div className={`w-10 h-10 rounded-full ${item.avatar} flex items-center justify-center text-white text-xs font-bold overflow-hidden`}>
            {/* If you have real images, use <Image /> here */}
             <img src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${item.handle}`} alt={item.handle} />
          </div>
          <span className="text-gray-300 font-medium group-hover/card:text-white">
            {item.handle}
          </span>
        </div>

        {/* Text Content */}
        <p className="text-gray-400 leading-relaxed text-[15px] group-hover/card:text-white/90">
          {item.text}
        </p>
      </div>
    </div>
  );
}