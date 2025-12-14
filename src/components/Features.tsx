import React from 'react';
import { Container } from './ui/container';

const Features = () => {
  return (
    <section className="bg-black text-white min-h-screen w-full py-6 font-sans selection:bg-white selection:text-black overflow-hidden relative">
      <Container>
      {/* --- Top Navigation / Header Area --- */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-b border-gray-800 pb-6 mb-12">
        
        {/* Logo */}
        <div className="col-span-1 md:col-span-2">
          <h1 className="text-xl font-bold tracking-tight">Velovs®</h1>
        </div>

        {/* Quick Links */}
        <div className="col-span-1">
          <p className="text-xs text-gray-400 mb-1">Quick Links</p>
          <p className="text-sm font-medium">Home, Gallery, Work, Contact</p>
        </div>

        {/* Location Info */}
        <div className="col-span-1 hidden md:block">
          <p className="text-xs text-gray-400 mb-1">Based in Colombo <span className="text-[10px]">ˡᵏ</span></p>
          <p className="text-sm font-medium">Intelligence + Businesses</p>
        </div>
      </div>

      {/* --- Main Content Split --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
        
        {/* Left Column: Headline & White Strip */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full min-h-[400px]">
          
          {/* Hero Headline */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium leading-[1.1] tracking-tight">
              Pattern Dimensions <br />
              and Moments that <br />
              Connect and Leave a <br />
              Bold イメージ.
            </h2>
          </div>

          {/* White Info Strip */}
          {/* This strip stretches full width of the left column */}
          <div className="w-full bg-white text-black py-2 px-4 md:px-6 flex justify-between items-center text-sm md:text-base font-bold tracking-wide mt-auto">
            <span>Art Direction</span>
            <span>Branding</span>
            <span>Strategy</span>
          </div>
        </div>

        {/* Right Column: The Video Square */}
        <div className="lg:col-span-5 flex items-start justify-end">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-900">
            {/* NOTE: Replace the src below with your actual video file. 
              Using a placeholder abstract video for demonstration.
            */}
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700 ease-in-out"
            >
              <source src="https://videos.pexels.com/video-files/5527814/5527814-hd_1920_1080_25fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* --- Bottom Typography Section --- */}
      <div className="relative mt-12 md:mt-24 w-full">
        {/* Subtle separator line */}
        <div className="w-full h-px bg-gray-900 mb-4"></div>
        
        <div className="flex items-baseline leading-none">
          {/* The giant text */}
          <span className="text-[18vw] md:text-[22vw] font-bold tracking-tighter text-white block -mb-4 md:-mb-10">
            Akihiko
          </span>
          {/* Superscript TM */}
          <span className="text-2xl md:text-6xl font-bold align-top mt-4 md:mt-10 ml-2 md:ml-4">
            TM
          </span>
        </div>
      </div>
      </Container>

      {/* Floating Twitter/X Icon (Right edge) */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:block">
        <button className="bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-colors">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-white"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
        </button>
      </div>

    </section>
  );
};

export default Features;