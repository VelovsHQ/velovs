import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#080808] text-white min-h-screen w-full flex flex-col font-sans border-t border-white/10">
      
      {/* ================= TOP SECTION (Newsletter & Navigation) ================= */}
      <div className="flex flex-col lg:flex-row w-full flex-grow">
        
        {/* --- Col 1: Stay Connected (35% Width) --- */}
        <div className="w-full lg:w-[35%] p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1 mb-8">
              <span className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Stay connected</span>
              <span className="text-xs text-[#FF3B1D] font-bold">//</span>
            </div>
            
            <h3 className="text-2xl font-light leading-snug mb-8 text-white/90">
              Join us for updates on innovative design and brand growth.
            </h3>
          </div>

          <div className="mt-auto pt-12">
            <div className="relative group mb-8">
              <input 
                type="email" 
                placeholder="Your Email *" 
                className="w-full bg-transparent border-b border-white/20 py-4 text-lg text-white placeholder:text-zinc-500 focus:outline-none focus:border-white transition-colors"
              />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#FF3B1D] p-2 rounded-full text-white">
                <ArrowUpRight size={18} />
              </div>
            </div>
            <p className="text-[11px] text-zinc-600 leading-relaxed">
              By submitting, you agree to our <span className="text-white">Terms</span> and <span className="text-white">Privacy Policy</span>.
            </p>
          </div>
        </div>

        {/* --- Col 2: Navigation Group 1 (35% Width) --- */}
        <div className="w-full lg:w-[35%] p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col">
          <div className="flex items-center gap-1 mb-12">
            <span className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Navigation</span>
            <span className="text-xs text-[#FF3B1D] font-bold">//</span>
          </div>

          <div className="flex flex-col gap-1">
              <a href="#" className="text-3xl md:text-4xl font-light hover:text-zinc-400 transition-colors w-fit mb-1">Home</a>
              <a href="#" className="text-3xl md:text-4xl font-light hover:text-zinc-400 transition-colors w-fit mb-1">About</a>
              
              <a href="#" className="text-3xl md:text-4xl font-light hover:text-zinc-400 transition-colors relative w-fit group mb-1">
                Projects
                <span className="absolute -top-1 -right-8 text-[9px] text-zinc-500 font-mono tracking-widest group-hover:text-white transition-colors">/006/</span>
              </a>

              <a href="#" className="text-3xl md:text-4xl font-light hover:text-zinc-400 transition-colors relative w-fit group mb-1">
                Careers
                <span className="absolute -top-1 -right-10 text-[9px] text-zinc-500 font-mono tracking-widest group-hover:text-white transition-colors">/Hiring/</span>
              </a>

              <a href="#" className="text-3xl md:text-4xl font-light hover:text-zinc-400 transition-colors w-fit mb-1">Blog</a>
              <a href="#" className="text-3xl md:text-4xl font-light hover:text-zinc-400 transition-colors w-fit mb-1">Contact</a>
          </div>
        </div>

        {/* --- Col 3: Navigation Group 2 (30% Width) --- */}
        <div className="w-full lg:w-[30%] p-8 lg:p-12 flex flex-col">
           {/* Spacer to align with the list in Col 2 */}
           <div className="h-[20px] lg:h-[84px] mb-0"></div> 

           <div className="flex flex-col gap-1">
              {['Services', 'Process', 'Pricing', 'Testimonials', 'FAQ', '404'].map((item) => (
                <a key={item} href="#" className="text-3xl md:text-4xl font-light hover:text-zinc-400 transition-colors w-fit mb-1">
                  {item}
                </a>
              ))}
           </div>
        </div>

      </div>


      {/* ================= MIDDLE SECTION (Logo & Social) ================= */}
      <div className="flex flex-col lg:flex-row w-full border-y border-white/10">
        
        {/* --- Left Block: Logo (70% Width - Matches Col 1 + Col 2 above) --- */}
        <div className="w-full lg:w-[70%] border-b lg:border-b-0 lg:border-r border-white/10 flex items-center px-8 lg:px-12 py-12 lg:py-20 overflow-hidden">
          <h1 className="text-[17vw] leading-[0.8] font-bold tracking-tighter text-white select-none relative -ml-2">
            VELOVS
            <span className="absolute top-[5%] -right-[5%] text-[4vw] font-light">®</span>
          </h1>
        </div>

        {/* --- Right Block: Social Links (30% Width - Matches Col 3 above) --- */}
        <div className="w-full lg:w-[30%] p-8 lg:p-12 flex flex-col justify-center">
           <div className="flex items-center gap-1 mb-8">
            <span className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Social</span>
            <span className="text-xs text-[#FF3B1D] font-bold">//</span>
          </div>

          <div className="flex flex-col gap-3">
             {['LinkedIn', 'Instagram', 'YouTube', 'Twitter', 'Email'].map((item) => (
               <a key={item} href="#" className="flex items-center gap-2 text-xl font-light hover:text-zinc-400 transition-colors group">
                 {item} 
                 <ArrowUpRight size={18} className="text-zinc-600 group-hover:text-white transition-colors" />
               </a>
             ))}
          </div>
        </div>

      </div>


      {/* ================= BOTTOM SECTION (Meta Data) ================= */}
      <div className="flex flex-col lg:flex-row w-full text-zinc-500 text-xs shrink-0">
        
        {/* Bottom Col 1: Legal (35% Width) */}
        <div className="w-full lg:w-[35%] p-8 lg:px-12 py-8 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between gap-4">
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-zinc-700">•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <p className="text-zinc-600">© 2025 Velovs & Co®  All rights reserved.</p>
        </div>

        {/* Bottom Col 2: Company Info (35% Width) */}
        <div className="w-full lg:w-[35%] p-8 lg:px-12 py-8 border-b lg:border-b-0 lg:border-r border-white/10 flex items-end">
          <p className="max-w-md leading-relaxed">
            Velovs® is a company registered in the United Kingdom. All services are delivered directly by Velovs, with no third-party involvement.
          </p>
        </div>

        {/* Bottom Col 3: Credits (30% Width) */}
        <div className="w-full lg:w-[30%] p-8 lg:px-12 py-8 flex flex-col justify-end gap-3">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-6 h-6 rounded-full bg-zinc-800 overflow-hidden relative">
                 <img src="/images/logos/logo.png" alt="Isaac" className="opacity-80 object-cover w-full h-full" />
            </div>
            <span className="text-white group-hover:text-zinc-300 transition-colors">Designed by Velovs.</span>
          </div>
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-6 h-6 flex items-center justify-center bg-transparent">
                 <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                   <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#FF3B1D"/>
                 </svg>
            </div>
            <span className="text-white group-hover:text-zinc-300 transition-colors">Built with Love.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}