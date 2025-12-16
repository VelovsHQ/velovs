"use client";

import { image } from "framer-motion/client";
import Image from "next/image";
import React from "react";

// Mock data for the background images (Use your own URLs)
const BG_IMAGES = [
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501854140884-074bf6b243e7?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=2078&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?q=80&w=2070&auto=format&fit=crop",
];

// Mock data for logos
const BRANDS = [
  "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum"
];

const PhoneShowcase = () => {
  return (
    <section className="relative w-full bg-black py-20 overflow-hidden flex flex-col items-center justify-center min-h-[600px]">
      
      {/* --- LAYER 1: Background Moving Images (Moves Right) --- */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full z-0">
        <div className="flex w-max animate-scroll-right hover:[animation-play-state:paused]">
          {/* We render the set twice to create the seamless infinite loop */}
          {[...BG_IMAGES, ...BG_IMAGES].map((src, index) => (
            <div
              key={index}
              className="relative w-[200px] h-[200px] md:w-[280px] md:h-[280px] mx-4 rounded-3xl overflow-hidden shrink-0"
            >
              <Image
                src="/images/brands/beach.jpg"
                alt="Background scenery"
                fill
                className="object-cover"
              />
              {/* The "Black Blur" Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent bottom-0 h-full w-full pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* --- LAYER 2: The Phone (Static Center) --- */}
      <div className="relative z-10 w-[800px] md:w-[1100px] mb-12">
        {/* Crop the bottom (hand) section of the phone image */}
        <div className="relative drop-shadow-2xl overflow-hidden" style={{ height: '650px' }}>
           <Image
            src="/images/brands/phone.png"
            alt="App Interface"
            width={1400}
            height={2800}
            priority
            className="w-full h-auto -scale-x-100"
            style={{ objectFit: 'cover', objectPosition: 'top' }}
          />
        </div>
      </div>

      {/* --- LAYER 3: Brand Logos (Moves Left) --- */}
      <div className="relative z-20 w-full mt-auto">
        <div className="flex w-max animate-scroll-left">
          {/* We render the set twice to create the seamless infinite loop */}
          {[...BRANDS, ...BRANDS].map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-8 md:mx-12 opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
               {/* Replace this SVG with your actual logo images */}
               <BrandLogoPlaceholder text={brand} />
            </div>
          ))}
        </div>
        
        {/* Gradient fades on the edges of the logo bar for smoothness */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-30 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-30 pointer-events-none" />
      </div>

    </section>
  );
};

// Simple placeholder SVG component for the demo
const BrandLogoPlaceholder = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2 text-gray-400">
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 md:w-8 md:h-8"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
    </svg>
    <span className="text-lg md:text-xl font-bold font-sans">{text}</span>
  </div>
);

export default PhoneShowcase;