'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StickyNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTrigger, setShowTrigger] = useState(false);

  // Handle Scroll Detection (Only show button after 100vh)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowTrigger(true);
      } else {
        setShowTrigger(false);
        setIsOpen(false); // Optional: Auto-close if they scroll back to top
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* =======================================
          1. SCROLL TRIGGER (Hamburger)
          Remains visible on top-right after scroll
         ======================================= */}
      <div
        className={`fixed top-8 right-8 z-[100] transition-all duration-500 ease-in-out ${
          showTrigger 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="group flex flex-col justify-center gap-1.5 w-12 h-12 p-2 cursor-pointer mix-blend-difference"
          aria-label="Open Menu"
        >
          <span className="block w-full h-[2px] bg-white group-hover:w-3/4 transition-all duration-300 ml-auto"></span>
          <span className="block w-full h-[2px] bg-white transition-all duration-300"></span>
          <span className="block w-full h-[2px] bg-white group-hover:w-1/2 transition-all duration-300 ml-auto"></span>
        </button>
      </div>

      {/* =======================================
          2. SLIDE-DOWN OVERLAY (2/3 Height)
         ======================================= */}
      {/* - h-[70vh]: Sets height to approx 2/3 of screen
          - -translate-y-full: Hides it completely above the screen initially
          - translate-y-0: Slides it down into view
      */}
      <div
        className={`fixed top-0 left-0 w-full h-[70vh] bg-[#0a0a0a] text-white z-[90] flex flex-col shadow-2xl border-b border-gray-800 transition-transform duration-[600ms] cubic-bezier(0.76, 0, 0.24, 1) ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        
        {/* --- HEADER (Logo + Close) --- */}
        {/* Added mix-blend-difference so Close is visible even if animations overlap */}
        <div className="flex justify-between items-center px-8 py-6 md:px-16 md:py-8 shrink-0">
          <div className="text-2xl font-bold tracking-tight uppercase">Fortex®</div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-sm tracking-widest underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity uppercase"
          >
            Close
          </button>
        </div>

        {/* --- MAIN CONTENT BODY --- */}
        <div className="flex-grow flex flex-col md:flex-row px-8 md:px-16 overflow-hidden">
          
          {/* Left Col: Navigation Links */}
          {/* justify-center ensures links are centered vertically in the available space */}
          <nav className="flex-1 flex flex-col justify-center space-y-1 md:space-y-2">
            <NavItem label="Home" href="/" />
            <NavItem label="About" href="/about" />
            <NavItem label="Projects" href="/projects" superscript="/006/" />
            <NavItem label="Careers" href="/careers" superscript="/Hiring/" />
            <NavItem label="Blog" href="/blog" />
            <NavItem label="Contact" href="/contact" />
          </nav>

          {/* Right Col: Tagline */}
          <div className="hidden md:flex flex-1 items-center justify-end">
            <h2 className="text-3xl lg:text-4xl font-normal leading-tight text-right max-w-lg text-gray-200">
              Elevate your brand with design
              <br />
              built to inspire strength.
            </h2>
          </div>
        </div>

        {/* --- FOOTER AREA --- */}
        {/* shrink-0 ensures footer doesn't get crushed */}
        <div className="px-8 md:px-16 pb-6 shrink-0">
            
            {/* Bottom Links Row */}
            <div className="flex flex-col md:flex-row justify-between items-end md:items-center text-xs md:text-sm text-gray-400 border-t border-gray-800 pt-4">
                
                {/* Socials */}
                <div className="flex gap-6 mb-2 md:mb-0">
                    <SocialLink label="LinkedIn" />
                    <SocialLink label="Twitter" />
                    <SocialLink label="Instagram" />
                </div>

                {/* Info / Legal */}
                <div className="flex items-center gap-6">
                    <span>hello@fortex.com</span>
                    <span className="hidden md:inline">•</span>
                    <span>(415) 555-8247</span>
                </div>
            </div>
        </div>
      </div>
      
      {/* Optional: Dark backdrop for the bottom 1/3 of the screen (Click to close) */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-[80] transition-opacity duration-500"
          style={{ top: '70vh' }} // Starts where the menu ends
        />
      )}
    </>
  );
}

// --- SUB-COMPONENTS ---

const NavItem = ({ label, href, superscript }: { label: string; href: string; superscript?: string }) => (
  <div className="group w-fit relative">
    {/* Slightly reduced text size (text-4xl to 6xl) to fit the smaller container height */}
    <Link href={href} className="text-4xl md:text-6xl font-normal tracking-tight hover:text-gray-400 transition-colors block leading-tight">
      {label}
    </Link>
    {superscript && (
      <span className="absolute -top-1 -right-8 text-[10px] md:text-xs font-light text-gray-500 tracking-wider">
        {superscript}
      </span>
    )}
  </div>
);

const SocialLink = ({ label }: { label: string }) => (
  <a href="#" className="flex items-center gap-1 hover:text-white transition-colors group">
    {label}
    <svg 
      width="8" 
      height="8" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
    >
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  </a>
);