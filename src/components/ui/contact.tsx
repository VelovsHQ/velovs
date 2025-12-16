import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section 
      className="sticky top-0 z-0 bg-[#FF3B1D] min-h-screen w-full px-6 py-32 md:px-12 lg:px-20 flex flex-col justify-between"
    >
      
      {/* Header Section */}
      <div>
        <h1 className="text-6xl md:text-9xl font-semibold tracking-tight mb-8 text-[#050505] font-chakra">
          Get in <span className="font-light italic text-white/90 font-sans">/touch/.</span>
        </h1>
        {/* Optional 'Please fill out this field' tag if you want it dynamically appearing */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 mt-8">
        
        {/* Left Column: Text Info */}
        <div className="space-y-16 text-[#050505]">
           <p className="text-lg md:text-xl font-light leading-relaxed max-w-sm opacity-80 font-chakra">
             Reach out to discover how Velovs & Co can support your goals and help elevate your brand to new heights.
           </p>
           
           <div className="space-y-8">
             <div>
               <div className="flex items-center gap-2 mb-3">
                 <span className="border border-black/20 rounded-full p-1"><div className="w-1 h-1 bg-black rounded-full"></div></span>
                 <h4 className="text-sm font-medium uppercase tracking-wide">Office</h4>
               </div>
               <div className="pl-7 space-y-0.5 opacity-70 text-sm md:text-base leading-relaxed">
                 <p>No.15 Random Place</p>
                 <p>Colombo 14</p>
                 <p>Sri Lanka</p>
               </div>
             </div>
             
             <div>
               <div className="flex items-center gap-2 mb-3">
                 <span className="border border-black/20 rounded-full p-1"><div className="w-1 h-1 bg-black rounded-full"></div></span>
                 <h4 className="text-sm font-medium uppercase tracking-wide">Contact</h4>
               </div>
               <div className="pl-7 space-y-0.5 opacity-70 text-sm md:text-base leading-relaxed">
                 <p>(94) 55-58247</p>
                 <p>hello@velovs.com</p>
               </div>
             </div>
           </div>
        </div>

        {/* Right Column: The Form */}
        <form className="flex flex-col justify-between h-full">
          <div className="space-y-6">
            
            {/* Name Input */}
            <div className="relative">
               <input 
                 type="text" 
                 placeholder="Your name *" 
                 className="w-full bg-transparent border-b border-white/20 py-5 text-lg text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-all duration-300" 
               />
            </div>

            {/* Email Input */}
            <div className="relative">
               <input 
                 type="email" 
                 placeholder="Your Email *" 
                 className="w-full bg-transparent border-b border-white/20 py-5 text-lg text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-all duration-300" 
               />
            </div>

            {/* Message Input */}
            <div className="relative">
               <textarea 
                 rows={1}
                 placeholder="Your message" 
                 className="w-full bg-transparent border-b border-white/20 py-5 text-lg text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-all duration-300 resize-y min-h-[80px]"
               ></textarea>
               {/* Decorative resize handle if needed, usually browser default is fine, but you can style it */}
            </div>
          </div>
          
          <div className="mt-12">
            <button 
                type="button"
                className="bg-white text-black px-6 py-4 rounded-sm font-medium text-sm md:text-base flex items-center gap-3 hover:bg-[#050505] hover:text-white transition-colors duration-300"
            >
               Get in touch <ArrowUpRight size={18} />
            </button>

            <p className="text-[11px] md:text-xs text-black/50 mt-6 max-w-md leading-relaxed">
              By submitting, you agree to our <a href="#" className="font-semibold text-black hover:underline">Terms</a> and <a href="#" className="font-semibold text-black hover:underline">Privacy Policy</a>.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}