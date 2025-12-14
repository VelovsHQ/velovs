import React from 'react';
import { Container } from './ui/container';

const Features = () => {
  return (
    <section className="bg-black text-white min-h-screen w-full py-6 font-sans selection:bg-white selection:text-black overflow-hidden relative">
      <Container>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-b border-gray-900 pb-6 mb-12"></div>

      {/* --- Main Content Split --- */}
      <div className="relative z-10 mb-24">
        
        {/* Headline */}
        <div className="mb-12 max-w-2xl lg:max-w-4xl relative z-10 md:ml-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight">
              Why Settle for Average <br />
              When Intelligence Can <br />
              Transform Your Business <br />
              Into Excellence?
            </h2>
        </div>

        {/* White Info Strip */}
        <div className="bg-white text-black py-0.5 px-4 md:px-30 flex justify-between items-center text-xs md:text-sm font-bold tracking-wide relative z-10 mr-8 md:pr-[26rem] lg:pr-[30rem] font-chakra-petch">
            <span>Design with AI</span>
            <span>Build with Data</span>
            <span>Scale with Intelligence</span>
        </div>
        
        {/* Video - Absolute Positioned Top Right on Desktop */}
        <div className="relative mt-8 md:mt-0 md:absolute md:right-6 md:top-0 z-20 w-full md:w-80 lg:w-96 aspect-square rounded-2xl overflow-hidden bg-gray-900 shadow-2xl">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover opacity-90"
            >
              <source src="/videos/temp_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </div>
        

      </div>

      {/* --- Bottom Typography Section --- */}
      <div className="relative mt-12 md:mt-24 w-full">
        {/* Subtle separator line */}
        {/* <div className="w-full h-px bg-gray-900 mb-4"></div> */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-b border-gray-800 pb-6 mb-2"></div>
        
        {/* SVG Graphic Implementation */}
        <div className="w-full leading-none">
          <svg
            viewBox="0 20 485 114" 
            className="w-full h-auto fill-white block"
            preserveAspectRatio="xMidYMid meet"
            aria-label="Velovs TM"
          >
            
            <text
              x="0"
              y="125"
              className="font-bold tracking-tighter"
              style={{ 
                fontSize: '139px', 
                fontFamily: 'inherit',
                letterSpacing: '-0.06em' // Tightened letter spacing slightly
              }}
            >
              Velovs
            </text>
            <text
              x="407" 
              y="58"
              className="font-bold"
              style={{ 
                fontSize: '48px', 
                fontFamily: 'inherit' 
              }}
            >
              TM
            </text>
          </svg>
        </div>
        <div className="h-px bg-gray-800 w-full"></div>
      </div>
      
      </Container>
      

      {/* Floating Social Icons (Right edge) */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
        <button className="bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-colors group">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-white group-hover:scale-110 transition-transform"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
        </button>
        <button className="bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-colors group">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-white group-hover:scale-110 transition-transform"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.6.6 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
        </button>
        <button className="bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-colors group">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-white group-hover:scale-110 transition-transform"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>
        </button>
        <button className="bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-colors group">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-white group-hover:scale-110 transition-transform"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path></svg>
        </button>
      </div>

    </section>
  );
};

export default Features;