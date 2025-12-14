'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, PlayCircle } from 'lucide-react';


const GridBackground = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    {/* Base Grid */}
    <div 
      className="absolute inset-0 opacity-[0.08]"
      style={{
        backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}
    />
    {/* Radial Fade */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0f] via-transparent to-[#0b0c0f]" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c0f] via-transparent to-[#0b0c0f]" />
  </div>
);

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
      <GridBackground />

      {/* Floating Elements Container - Hidden on mobile, visible on lg */}
      <div className="absolute inset-0 pointer-events-none max-w-7xl mx-auto hidden lg:block">
        
        {/* Left Side Elements */}
        <div className="absolute top-1/3 left-10 animate-float-slow transform -rotate-12">
           <WireframeCan className="w-32 h-40 opacity-90 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]" />
        </div>
        <div className="absolute bottom-1/4 left-32 animate-float-delayed">
           <WireframeApple className="w-24 h-24 opacity-90 drop-shadow-[0_0_15px_rgba(74,222,128,0.3)]" />
        </div>
        <div className="absolute top-1/2 left-[15%] animate-float-reverse">
           <HexNut className="w-20 h-20 opacity-80 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
        </div>

        {/* Right Side Elements */}
        <div className="absolute top-1/3 right-10 animate-float-slow transform rotate-12">
            <WireframeScissors className="w-40 h-40 opacity-90 drop-shadow-[0_0_15px_rgba(99,102,241,0.3)]" />
        </div>
        <div className="absolute bottom-1/3 right-32 animate-float-delayed">
            <WireframeCup className="w-28 h-24 opacity-80 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center gap-8">
        
        {/* Top Tag */}
        <a href="#" className="group inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors">
            Community support, daily live office hours, and thousands of builders - all on Discord.
          </span>
        </a>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.1]">
          The Complete <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400">
            AI Agent Platform
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Botpress is an all-in-one platform for building AI agents powered by the latest LLMs.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 py-4 bg-[#116bff] hover:bg-[#0d5adb] text-white text-lg font-medium rounded-full transition-all hover:scale-105 shadow-[0_0_30px_rgba(17,107,255,0.4)] flex items-center justify-center gap-2 group">
            Get started for free
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 hover:bg-white/5 text-white text-lg font-medium rounded-full transition-all flex items-center justify-center gap-2">
            Watch a demo
            <PlayCircle className="w-5 h-5 opacity-70" />
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