"use client";

import React from "react";
import { Check, MessageCircle, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Package } from "../app/lib/packages";
import TiltCard from "./TiltCard";
import { useCursor } from "./CursorContext";

interface PackageCardProps {
  pkg: Package;
  index: number;
}

export default function PackageCard({ pkg, index }: PackageCardProps) {
  const { setCursorText, setCursorVariant } = useCursor();

  // Contact links
  const whatsappNumber = "947XXXXXXXX"; // Replace with your actual number
  const emailAddress = "contact@velovs.com";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=I'm interested in the ${pkg.name} Package.`;
  const emailUrl = `mailto:${emailAddress}?subject=Inquiry: ${pkg.name} Package`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
    >
      <TiltCard className="h-full">
        <div className={`relative h-full p-8 rounded-2xl border transition-all duration-500 flex flex-col ${
          pkg.isCustom 
            ? "bg-velovs-black text-white border-velovs-gold/50 shadow-[0_0_30px_rgba(197,160,89,0.2)]" 
            : "bg-white dark:bg-white/5 border-gray-100 dark:border-white/10 hover:border-velovs-gold/50"
        }`}>
          
          {/* Header */}
          <div className="mb-8">
            <h3 className={`text-2xl font-bold mb-3 ${!pkg.isCustom && "text-velovs-black dark:text-white"}`}>
              {pkg.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {pkg.description}
            </p>
          </div>

          {/* Features List */}
          <ul className="space-y-4 mb-10 flex-grow">
            {pkg.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-velovs-gold shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600 dark:text-gray-300 font-light">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 mt-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-lg bg-velovs-gold text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all"
              onMouseEnter={() => { setCursorText("CHAT"); setCursorVariant("text"); }}
              onMouseLeave={() => { setCursorText(""); setCursorVariant("default"); }}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href={emailUrl}
              className="flex items-center justify-center gap-2 py-3 rounded-lg border border-velovs-gold/30 text-velovs-gold font-bold text-xs uppercase tracking-wider hover:bg-velovs-gold/10 transition-all"
              onMouseEnter={() => { setCursorText("MAIL"); setCursorVariant("text"); }}
              onMouseLeave={() => { setCursorText(""); setCursorVariant("default"); }}
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
          </div>

          {/* Subtle Background Glow for Custom Card */}
          {pkg.isCustom && (
            <div className="absolute inset-0 bg-velovs-gold/5 blur-3xl -z-10" />
          )}
        </div>
      </TiltCard>
    </motion.div>
  );
}