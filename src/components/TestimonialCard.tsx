"use client";

import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { Testimonial } from "../app/lib/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="h-full p-10 md:p-12 rounded-3xl bg-white/5 dark:bg-velovs-charcoal/40 backdrop-blur-lg border border-white/10 flex flex-col relative group transition-all duration-700">
      
      {/* Premium Floating Quote Icon */}
      <div className="absolute top-8 left-8 text-velovs-gold/10">
        <Quote className="w-16 h-16 fill-current" />
      </div>

      {/* Quote Text - Enhanced spacing and line height */}
      <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-12 italic relative z-10">
        &ldquo;{testimonial.content}&rdquo;
      </p>

      {/* Client Info - Refined alignment */}
      <div className="mt-auto flex items-center gap-5 relative z-10 border-t border-white/10 pt-8">
        <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-velovs-gold/20">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            placeholder="blur"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        
        <div>
          <h4 className="text-base font-bold text-white uppercase tracking-widest">
            {testimonial.name}
          </h4>
          <p className="text-xs text-velovs-gold font-semibold mt-1">
            {testimonial.role} <span className="mx-1 text-gray-600">|</span> {testimonial.company}
          </p>
        </div>
      </div>

      {/* Luxury Hover Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-velovs-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </div>
  );
}