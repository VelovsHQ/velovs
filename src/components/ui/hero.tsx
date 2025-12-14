'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight, PlayCircle } from 'lucide-react';

// COMPONENT: Interactive Grid Background ---
const SpotlightGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="absolute inset-0 z-0 overflow-hidden"
    >
      {/* 1. The Static, Faint Grid (Always visible) */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* 2. The "Glowing" Grid (Revealed by mouse) */}
      <div 
        className="absolute inset-0 transition-opacity duration-300 ease-in-out"
        style={{
          opacity: opacity,
          // This creates the "Colorful" effect. We use a gradient background.
          background: 'radial-gradient(circle at center, rgba(17, 107, 255, 0.15), rgba(139, 92, 246, 0.15))',
          // The mask restricts this glowing background to ONLY the grid lines near the mouse
          maskImage: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
        }}
      >
        {/* overlay the grid lines on top of the glow so only the lines/boxes catch the light */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            opacity: 0.5
          }}
        />
      </div>

      {/* Fade Edges to Black (Vignette) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0f] via-transparent to-[#0b0c0f] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c0f] via-transparent to-[#0b0c0f] pointer-events-none" />
    </div>
  );
};

// COMPONENT: Static Grid Background (Not used currently) ---

// const GridBackground = () => (
//   <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
//     {/* Base Grid */}
//     <div 
//       className="absolute inset-0 opacity-[0.08]"
//       style={{
//         backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
//         backgroundSize: '40px 40px'
//       }}
//     />
//     {/* Radial Fade */}
//     <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0f] via-transparent to-[#0b0c0f]" />
//     <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c0f] via-transparent to-[#0b0c0f]" />
//   </div>
// );

const WireframeCan = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 140" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <ellipse cx="50" cy="20" rx="40" ry="15" className="stroke-purple-400" />
    <ellipse cx="50" cy="120" rx="40" ry="15" className="stroke-purple-600/50" strokeDasharray="4 4" />
    <path d="M10 20v100" className="stroke-purple-400" />
    <path d="M90 20v100" className="stroke-purple-400" />
    <path d="M10 35c0 8.28 17.9 15 40 15s40-6.72 40-15" className="stroke-purple-500/30" />
    <path d="M10 50c0 8.28 17.9 15 40 15s40-6.72 40-15" className="stroke-purple-500/30" />
    <path d="M10 65c0 8.28 17.9 15 40 15s40-6.72 40-15" className="stroke-purple-500/30" />
  </svg>
);

const WireframeApple = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    {/* Apple Body - approximation using circles/arcs */}
    <path 
      d="M50 25 C 20 25, 10 50, 25 80 C 35 95, 45 95, 50 90 C 55 95, 65 95, 75 80 C 90 50, 80 25, 50 25" 
      className="stroke-green-400 fill-green-900/10"
    />
    {/* Grid lines on apple */}
    <path d="M50 25v65" className="stroke-green-500/30" />
    <path d="M25 50h50" className="stroke-green-500/30" />
    <path d="M30 35c10 5 30 5 40 0" className="stroke-green-500/30" />
    <path d="M30 70c10 5 30 5 40 0" className="stroke-green-500/30" />
    {/* Stem */}
    <path d="M50 25q-5 -15 5 -20" className="stroke-green-300" />
  </svg>
);

const HexNut = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    {/* Outer Hex */}
    <path 
      d="M25 15 L75 15 L100 50 L75 85 L25 85 L0 50 Z" 
      className="stroke-blue-500 fill-blue-900/20"
    />
    {/* Inner Circle */}
    <circle cx="50" cy="50" r="20" className="stroke-blue-300" />
    {/* Depth lines */}
    <path d="M0 50 L25 50" className="stroke-blue-800/50" />
    <path d="M100 50 L75 50" className="stroke-blue-800/50" />
    <path d="M25 15 L25 85" className="stroke-blue-800/50" />
    <path d="M75 15 L75 85" className="stroke-blue-800/50" />
  </svg>
);

const WireframeScissors = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    {/* Handles */}
    <circle cx="20" cy="30" r="12" className="stroke-indigo-400" />
    <circle cx="20" cy="70" r="12" className="stroke-indigo-400" />
    {/* Blades */}
    <path d="M32 30 L90 70" className="stroke-indigo-300 fill-indigo-900/20" />
    <path d="M32 70 L90 30" className="stroke-indigo-300 fill-indigo-900/20" />
    {/* Pivot */}
    <circle cx="45" cy="50" r="3" className="fill-indigo-200" />
  </svg>
);

const WireframeCup = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 80" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    {/* Cup */}
    <path 
      d="M10 10 L20 60 C 22 70, 78 70, 80 60 L90 10" 
      className="stroke-cyan-400 fill-cyan-900/10"
    />
    <ellipse cx="50" cy="10" rx="40" ry="8" className="stroke-cyan-300" />
    {/* Handle */}
    <path d="M85 20 C 105 20, 105 50, 83 55" className="stroke-cyan-500" />
    {/* Grid lines */}
    <path d="M30 15v40" className="stroke-cyan-500/20" />
    <path d="M50 17v45" className="stroke-cyan-500/20" />
    <path d="M70 15v40" className="stroke-cyan-500/20" />
  </svg>
);


const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#0b0c0f] text-white overflow-hidden pt-20">
      <SpotlightGrid />

      {/* Floating Elements Container - Hidden on mobile, visible on lg */}
      <div className="absolute inset-0 pointer-events-none max-w-7xl mx-auto hidden lg:block">
        {/* Left Side Custom SVG */}
        <div className="absolute top-1/4 -left-50 animate-float-slow transform ">
          <img
            src="/images/hero/left.svg"
            alt="Left Hero Graphic"
            className="w-130 h-auto opacity-100 drop-shadow-[0_0_15px_rgba(46,75,147,0.3)]"
            draggable="false"
          />
        </div>

        {/* Right Side Custom SVG */}
        <div className="absolute top-1/4 -right-50 animate-float-slow transform">
          <img
            src="/images/hero/right.svg"
            alt="Right Hero Graphic"
            className="w-130 h-auto opacity-100 drop-shadow-[0_0_15px_rgba(11,65,153,0.3)]"
            draggable="false"
          />
        </div>
      </div>

      {/* Top Tag Box */}
      <div className="absolute top-37 left-0 right-0 z-20 flex justify-center px-4">
        <a 
          href="#" 
          className="
            group relative inline-flex items-center justify-center px-6 py-2 
            border border-[#3c8135] 
            bg-black/20 
            hover:bg-[#3c8135]/20 
            text-[#bbbebb]
            transition-colors duration-300 cursor-pointer
          "
        >
          
          {/* The Blinking Pointer */}
          {/* Uses the new fast, non-fading animation */}
          <span className="absolute -top-1 -left-1 w-2 h-2 bg-[#3c8135] animate-cursor"></span>

          {/* Text Content */}
          <span className="text-xs sm:text-sm font-mono">
            Community support, daily live office hours, and thousands of builders - all on Discord.
          </span>
          
        </a>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center gap-8">

        {/* Headline */}
        <h1 
          className="font-medium tracking-tight leading-[1.1]"
          style={{
            fontSize: 'clamp(3rem, 7vw, 6rem)',
            fontFamily: 'Aspekta, sans-serif'
          }}
        >
          The Complete <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400">
            AI Agent Platform
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Velovs & Co is an all-in-one platform for building AI agents powered by the latest LLMs.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mt-4 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 py-4 bg-[#8cd4ff] hover:bg-white text-black text-lg font-medium rounded-full transition-all ring-1 ring-[#8cd4ff] ring-offset-4 ring-offset-black flex items-center justify-center gap-2 group">
            Get started for free
            <ChevronRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="w-full sm:w-auto px-8 py-4 bg-[#1a1a1a] border border-white/20 hover:bg-white/10 text-white text-lg font-medium rounded-full transition-all flex items-center justify-center gap-2">
            Watch a demo
          </button>
        </div>

      </div>
    </section>
  );
};

// --- Animations CSS (Injected style for simplicity in this single file) ---
const Styles = () => (
  <style>{`
    @keyframes float-slow {
      0%, 100% { transform: translateY(0px) rotate(-12deg); }
      50% { transform: translateY(-20px) rotate(-10deg); }
    }
    @keyframes float-delayed {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
    }
    @keyframes float-reverse {
      0%, 100% { transform: translateY(0px) rotate(5deg); }
      50% { transform: translateY(15px) rotate(8deg); }
    }
    .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
    .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite 1s; }
    .animate-float-reverse { animation: float-reverse 8s ease-in-out infinite; }
  `}</style>
);

export default function App() {
  return (
    <div className="font-sans antialiased bg-[#0b0c0f] min-h-screen text-white selection:bg-[#116bff] selection:text-white">
      <Styles />
      <Hero />
    </div>
  );
}