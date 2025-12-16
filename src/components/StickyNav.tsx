'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StickyNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTrigger, setShowTrigger] = useState(false);

  // Handle Scroll Detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowTrigger(true);
      } else {
        setShowTrigger(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* =======================================
          1. THE MORPHING TRIGGER BUTTON
          (Serves as both Open and Close button)
         ======================================= */}
      <div
        className={`fixed top-8 right-8 z-[100] transition-all duration-500 ease-in-out ${
          showTrigger 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center justify-end gap-3 cursor-pointer p-2 mix-blend-difference text-white"
          aria-label="Toggle Menu"
        >
          {/* "CLOSE" Text - Slides in from right when open */}
          <span 
            className={`text-sm font-bold tracking-widest uppercase transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
              isOpen 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-4 pointer-events-none' // Hidden/Offset when closed
            }`}
          >
            Close
          </span>

          {/* Animated Hamburger / X Icon */}
          <div className="relative w-8 h-6 flex flex-col justify-between items-end overflow-hidden">
            {/* Top Line */}
            <span 
              className={`block h-[2px] bg-white transition-all duration-300 ease-in-out ${
                isOpen 
                  ? 'w-full -rotate-45 translate-y-[11px]' // Turns into part of X
                  : 'w-full group-hover:w-3/4'             // Normal state
              }`}
            />
            
            {/* Middle Line */}
            <span 
              className={`block h-[2px] bg-white transition-all duration-300 ease-in-out ${
                isOpen 
                  ? 'w-0 opacity-0'                        // Disappears
                  : 'w-full'                               // Normal state
              }`}
            />
            
            {/* Bottom Line */}
            <span 
              className={`block h-[2px] bg-white transition-all duration-300 ease-in-out ${
                isOpen 
                  ? 'w-full rotate-45 -translate-y-[11px]' // Turns into part of X
                  : 'w-full group-hover:w-1/2'             // Normal state
              }`}
            />
          </div>
        </button>
      </div>

      {/* =======================================
          2. MENU OVERLAY (No Internal Close Button)
         ======================================= */}
      <div
        className={`fixed top-0 left-0 w-full h-[70vh] bg-[#0a0a0a] text-white z-[90] flex flex-col shadow-2xl border-b border-gray-800 transition-transform duration-[600ms] cubic-bezier(0.76, 0, 0.24, 1) ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        
        {/* --- HEADER --- */}
        {/* Removed the 'Close' button from here entirely to avoid duplication */}
        <div className="flex justify-between items-center px-8 py-6 md:px-16 md:py-8 shrink-0">
          <div className="text-2xl font-bold tracking-tight uppercase">
            Velovs & Co
            <span className="align-super text-xs ml-1">®</span>
          </div>
          {/* Empty div or removed button ensures layout consistency if needed, but not required here */}
        </div>

        {/* --- MAIN CONTENT BODY --- */}
        <div className="flex-grow flex flex-col md:flex-row px-8 md:px-16 overflow-hidden font-aspekta">
          
          <nav className="flex-1 flex flex-col justify-center space-y-1 md:space-y-2">
            <NavItem label="Home" href="/" />
            <NavItem label="About" href="/about" />
            <NavItem label="Projects" href="/projects" superscript="/006/" />
            <NavItem label="Careers" href="/careers" superscript="/Hiring/" />
            <NavItem label="Blog" href="/blog" />
            <NavItem label="Contact" href="/contact" />
          </nav>

          <div className="hidden md:flex flex-1 justify-end font-chakra mt-14">
            <h2 className="text-3xl lg:text-4xl font-normal leading-tight text-right max-w-lg text-gray-200">
              Elevate your brand with design
              <br />
              built to inspire strength.
            </h2>
          </div>
        </div>


        {/* --- FOOTER AREA --- */}
        <div className="px-8 md:px-16 pb-6 shrink-0">
            <div className="flex flex-col md:flex-row justify-between items-end md:items-center text-xs md:text-sm text-gray-400 border-t border-gray-800 pt-4">
                <div className="flex gap-6 mb-2 md:mb-0">
                    <SocialLink label="LinkedIn" />
                    <SocialLink label="Twitter" />
                    <SocialLink label="Instagram" />
                </div>

                <div className="flex items-center gap-6">
                    <span>hello@velovs.com</span>
                    <span className="hidden md:inline">•</span>
                    <span>(94) 55-58247</span>
                </div>
            </div>
        </div>
      </div>
      
      {/* Backdrop Click Layer */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[80] cursor-pointer"
          // Starts exactly where the menu ends to cover the bottom 30%
          style={{ top: '70vh' }} 
        />
      )}
    </>
  );
}

// --- SUB-COMPONENTS ---

const NavItem = ({ label, href, superscript }: { label: string; href: string; superscript?: string }) => (
  <div className="group w-fit relative">
    <Link
      href={href}
      className="font-normal tracking-tight hover:text-gray-400 transition-colors block leading-tight"
      style={{ fontSize: '3.25rem' }}
    >
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