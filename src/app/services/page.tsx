"use client";

import React from "react";
import { 
  Bot, 
  BrainCircuit, 
  Workflow, 
  Database, 
  Layers, 
  Compass, 
  ArrowRight,
  Sparkles,
  ChevronDown
} from "lucide-react";
import { motion, Variants } from "framer-motion";

// --- COMPONENT & DATA IMPORTS ---
import GravityWeb from "../../components/GravityWeb";
import { useCursor } from "../../components/CursorContext";
import PackageCard from "../../components/PackageCard";
import TestimonialCard from "../../components/TestimonialCard";
import { SERVICE_PACKAGES } from "../lib/packages";
import { TESTIMONIALS } from "../lib/testimonials";

const services = [
  {
    title: "Autonomous AI Agents",
    description: "We design and deploy intelligent agents that reason, plan, and execute tasks independently; handling workflows and operations with minimal intervention.",
    icon: <Bot className="w-8 h-8" />
  },
  {
    title: "AI Business Solutions",
    description: "Custom systems tailored to business needs, including predictive analytics, optimization engines, and intelligent decision-support dashboards.",
    icon: <BrainCircuit className="w-8 h-8" />
  },
  {
    title: "Agentic Workflow Automation",
    description: "End-to-end automation using multi-agent systems that coordinate complex processes across departments and tools, beyond traditional automation.",
    icon: <Workflow className="w-8 h-8" />
  },
  {
    title: "Custom AI Integrations",
    description: "From internal tools to customer-facing platforms, we build bespoke AI solutions and seamlessly integrate them into your existing ecosystems.",
    icon: <Layers className="w-8 h-8" />
  },
  {
    title: "RAG & Knowledge Intelligence",
    description: "Retrieval-Augmented Generation systems that transform your internal databases into intelligent, queryable AI brains for your entire team.",
    icon: <Database className="w-8 h-8" />
  },
  {
    title: "AI Strategy & Architecture",
    description: "We help companies define their AI vision, designing scalable architectures, agent hierarchies, and long-term technical roadmaps.",
    icon: <Compass className="w-8 h-8" />
  }
];

export default function ServicesPage() {
  const { setCursorText, setCursorVariant } = useCursor();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <div className="w-full bg-velovs-white dark:bg-velovs-black text-velovs-black dark:text-white transition-colors duration-500">
      
      {/* 1. HERO SECTION (FULL VIEWPORT) */}
      <section className="min-h-[calc(100vh-120px)] w-full flex flex-col items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 dark:opacity-30">
          <GravityWeb />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-velovs-gold/20 bg-velovs-gold/5 text-velovs-gold text-xs font-bold uppercase tracking-widest mb-8"
          >
            <Sparkles className="w-3 h-3" />
            <span>Our Expertise</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl font-bold tracking-tight mb-8"
          >
            Intelligent <span className="text-velovs-gold">Solutions</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-2xl mx-auto"
          >
            Architecting the future of enterprise intelligence with autonomous agents and neural knowledge systems.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 text-velovs-gold/60"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-velovs-white dark:from-velovs-black to-transparent z-0 pointer-events-none" />
      </section>

      {/* 2. SERVICES GRID SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-32 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
                key={index} 
                variants={itemVariants}
                className="group relative"
                onMouseEnter={() => { 
                  setCursorText("EXPLORE"); 
                  setCursorVariant("text"); 
                }}
                onMouseLeave={() => { 
                  setCursorText(""); 
                  setCursorVariant("default"); 
                }}
            >
              <div className="h-full p-10 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-velovs-gold/40 transition-all duration-500 group-hover:shadow-2xl flex flex-col items-start text-left relative z-10 backdrop-blur-sm">
                <div className="mb-8 p-4 rounded-xl bg-velovs-gold/10 text-velovs-gold group-hover:bg-velovs-gold group-hover:text-black transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-velovs-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-10 flex-grow">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-velovs-gold/60 group-hover:text-velovs-gold transition-all">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              <div className="absolute inset-0 bg-velovs-gold/5 opacity-0 group-hover:opacity-100 blur-3xl -z-0 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. UPDATED: AUTO-SCROLLING CLIENT TESTIMONIALS */}
      <section className="max-w-full py-32 relative z-10 overflow-hidden border-t border-gray-100 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            What Our <span className="text-velovs-gold">Clients Say.</span>
          </motion.h2>
          <p className="text-gray-500 dark:text-gray-400 font-light text-lg max-w-2xl mx-auto leading-relaxed">
            Hear from the visionary companies and partners we have empowered with our agentic AI solutions.
          </p>
        </div>

        {/* INFINITE SCROLL CONTAINER */}
        <div className="relative flex overflow-hidden group">
          <div className="flex animate-infinite-scroll gap-6 py-4 px-3 group-hover:[animation-play-state:paused]">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, idx) => (
              <div 
                key={`${testimonial.id}-${idx}`}
                className="w-[350px] md:w-[450px] flex-shrink-0 transition-transform duration-500 hover:scale-[1.02]"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-velovs-gold text-black font-bold uppercase tracking-wider rounded-full text-xs hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] transition-all"
          >
            Join Our Clients
          </motion.button>
        </div>
      </section>

      {/* 4. SERVICE PACKAGES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-32 border-t border-gray-100 dark:border-white/10 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Select Your <span className="text-velovs-gold">Tier.</span>
          </motion.h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto font-light leading-relaxed">
            Scalable intelligence packages designed to match your organization&apos;s current complexity and future goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_PACKAGES.map((pkg, index) => (
            <PackageCard key={pkg.id} pkg={pkg} index={index} />
          ))}
        </div>
      </section>

    </div>
  );
}