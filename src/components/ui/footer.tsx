import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <div className="relative z-10 bg-[#050505] min-h-[800px] w-full flex flex-col justify-between px-6 py-12 md:px-12 md:py-20 text-[#Eaeae0]">
          
      {/* Top Section: Newsletter & Nav */}
      <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24">
        
        {/* Newsletter Column */}
        <div className="flex-1 max-w-md">
          <span className="text-xs text-gray-500 mb-6 block uppercase tracking-wider">Stay connected //</span>
          <h3 className="text-xl md:text-2xl font-light leading-snug mb-8">
            Join us for updates on innovative design and brand growth.
          </h3>
          {/* ... Input ... */}
          <div className="relative group border-b border-gray-800 pb-2">
            <input 
              type="email" 
              placeholder="Your Email *" 
              className="w-full bg-transparent py-2 text-lg focus:outline-none focus:border-white transition-colors"
            />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#FF3B1D] p-2 rounded-full text-white">
               <ArrowUpRight size={16} />
            </div>
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Navigation //</span>
            {['Home', 'About', 'Projects', 'Careers', 'Blog', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-lg md:text-xl hover:text-gray-400 transition-colors">{item}</a>
            ))}
          </div>
          <div className="flex flex-col gap-4 mt-8">
             {['Services', 'Process', 'Pricing', 'Testimonials', 'FAQ', '404'].map((item) => (
              <a key={item} href="#" className="text-lg md:text-xl hover:text-gray-400 transition-colors">{item}</a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Social //</span>
            {['LinkedIn', 'Instagram', 'YouTube', 'Twitter', 'Email'].map((item) => (
              <a key={item} href="#" className="flex items-center gap-2 text-lg md:text-xl hover:text-gray-400 transition-colors">
                {item} <ArrowUpRight size={14} className="text-gray-600" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Middle: Giant Logo */}
      <div className="w-full overflow-hidden py-24">
        <h1 className="text-[16vw] leading-none font-bold tracking-tighter text-center md:text-left text-white select-none">
          FORTEX<span className="text-4xl align-top">®</span>
        </h1>
      </div>

      {/* Bottom: Meta */}
      <div className="flex flex-col md:flex-row justify-between items-end border-t border-gray-900 pt-8 text-xs text-gray-500 gap-4">
        <div className="flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
        <div className="text-right">
           © 2025 Fortex®. All rights reserved.
        </div>
      </div>

    </div>
  );
}