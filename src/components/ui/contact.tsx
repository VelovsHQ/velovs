import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section 
      className="sticky top-0 z-0 bg-[#FF3B1D] text-black min-h-screen w-full px-6 py-24 md:px-12 flex flex-col justify-between"
    >
      
      {/* Header */}
      <div>
        <h1 className="text-6xl md:text-9xl font-semibold tracking-tight mb-8">
          Get in <span className="font-light italic text-white/90">/touch/.</span>
        </h1>
        <div className="inline-block bg-black/10 px-3 py-1 text-xs uppercase font-bold tracking-wide mb-12">
          Please fill out this field.
        </div>
      </div>

      {/* Form Section - (Content remains same as previous) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-12">
           <p className="text-xl md:text-2xl font-light leading-relaxed max-w-lg">
             Reach out to discover how Fortex can support your digital goals.
           </p>
           {/* ... Address details ... */}
        </div>

        <form className="space-y-8">
          {/* ... Inputs ... */}
          <div className="space-y-1">
             <input type="text" placeholder="Your name *" className="w-full bg-transparent border-b border-black/20 py-3 focus:outline-none focus:border-black transition-colors" />
          </div>
          <button className="bg-white text-black px-8 py-4 rounded-sm font-medium flex items-center gap-2 hover:bg-black hover:text-white transition-colors duration-300 mt-4">
             Get in touch <ArrowUpRight size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}