"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  BrainCircuit, 
  LayoutDashboard, 
  Workflow, 
  Cpu, 
  Database, 
  Compass,
  ArrowRight,
  ChevronRight,
  Menu,
  X,
  Zap // Used for the integration icon placeholder
} from "lucide-react";

// ----------------------------------------------------------------------
// ⚠️ NOTE FOR DEVELOPER:
// In your local project, DELETE the internal mock components below (lines 26-80) 
// and UNCOMMENT the import below to use your real component:
//
// import { Navbar, NavBody, NavItems, NavbarLogo } from "../components/ui/resizable-navbar";
// ----------------------------------------------------------------------

// --- INTERNAL MOCK COMPONENTS (For Preview Only) ---
const Navbar = ({ children, className = "" }: any) => (
  <nav className={`w-full fixed top-0 z-50 px-4 pt-4 ${className}`}>{children}</nav>
);

const NavBody = ({ children, className = "" }: any) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`
      mx-auto max-w-5xl px-6 h-14 flex items-center justify-between rounded-full 
      transition-all duration-500 ease-in-out
      ${scrolled 
        ? "bg-white/80 backdrop-blur-xl shadow-sm border border-gray-200/50 w-full" 
        : "bg-transparent w-full"} 
      ${className}
    `}>
      {children}
    </div>
  );
};

const NavbarLogo = ({ className = "" }: any) => (
  <div className={`select-none flex items-center gap-2 ${className}`}>
    <div className="w-3 h-3 bg-[#C5A059] rounded-full shadow-[0_0_10px_#C5A059]" />
    <span className="text-[#1F1F1F] font-semibold tracking-tight text-lg">
      Velovs & Co.
    </span>
  </div>
);

const NavItems = ({ items, className = "" }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ul className={`hidden md:flex items-center gap-8 ${className}`}>
        {items.map((item: any, idx: number) => (
          <li key={idx}>
            <a href={item.link} className="text-[#1F1F1F] text-xs font-medium tracking-wide hover:text-[#C5A059] transition-colors">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <button className="md:hidden p-1 text-gray-800" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>
    </>
  );
};
// --- END INTERNAL MOCK COMPONENTS ---


// --- DATA CONFIGURATION ---
const SERVICES = [
  {
    title: "Autonomous AI Agents",
    description: "Intelligent agents that reason, plan, and execute tasks independently with minimal human intervention.",
    icon: <BrainCircuit className="w-6 h-6" />,
    colSpan: "md:col-span-2",
  },
  {
    title: "AI Business Solutions",
    description: "Custom dashboards and predictive analytics tailored to your unique operational needs.",
    icon: <LayoutDashboard className="w-6 h-6" />,
    colSpan: "md:col-span-1",
  },
  {
    title: "Agentic Workflow",
    description: "Multi-agent systems coordinating complex processes across departments.",
    icon: <Workflow className="w-6 h-6" />,
    colSpan: "md:col-span-1",
  },
  {
    title: "Custom Integrations",
    description: "Bespoke AI solutions seamlessly integrated into your existing ecosystems.",
    icon: <Cpu className="w-6 h-6" />,
    colSpan: "md:col-span-2",
  },
  {
    title: "RAG Systems",
    description: "Transform internal documents into queryable AI brains using Retrieval-Augmented Generation.",
    icon: <Database className="w-6 h-6" />,
    colSpan: "md:col-span-1",
  },
  {
    title: "Strategy & Architecture",
    description: "Defining your AI vision and designing scalable agent hierarchies for the long term.",
    icon: <Compass className="w-6 h-6" />,
    colSpan: "md:col-span-2",
  },
];

// Integration Logos Data (Split into rows for visual balance)
const INTEGRATIONS_ROW_1 = [
  "OpenAI", "Claude 3", "LLaMA", "Mistral AI", "Microsoft Phi-3", "Hugging Face", "Gemini", "Perplexity"
];
const INTEGRATIONS_ROW_2 = [
  "AWS", "Google Cloud", "Azure", "IBM", "Snowflake", "Oracle", "Databricks"
];
const INTEGRATIONS_ROW_3 = [
  "MongoDB", "Pinecone", "Fivetran", "Salesforce", "SAP", "ServiceNow", "Qdrant", "AtScale"
];

// Placeholder video
const VIDEO_SRC = "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"; 

export default function Page() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-white font-sans selection:bg-[#C5A059]/30 selection:text-[#1F1F1F]"
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* --- Navbar --- */}
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems
            items={[
              { name: "Home", link: "#" },
              { name: "What we do", link: "#what-we-do" },
              { name: "Services", link: "#services" },
              { name: "Process", link: "#how-we-work" },
              { name: "Contact", link: "#contact" },
            ]}
          />
        </NavBody>
      </Navbar>

      {/* --- Hero Section --- */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* Background Video Layer */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <motion.div style={{ y }} className="relative w-full h-[120%]">
             <video
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full grayscale-[100%] contrast-[1.1] brightness-[1.2] opacity-40"
            >
              <source src={VIDEO_SRC} type="video/mp4" />
            </video>
          </motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex justify-center mb-6">
                <span className="text-[#1F1F1F] font-semibold tracking-[0.2em] uppercase text-[10px] md:text-xs py-2 px-4 rounded-full border border-[#1F1F1F]/10 bg-white/50 backdrop-blur-sm">
                The Cognitive Layer
                </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-[#1F1F1F] mb-8 leading-[0.95]">
              Autonomous <br /> 
              <span className="text-[#C5A059]">Intelligence.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#1F1F1F]/70 font-medium max-w-2xl mx-auto leading-relaxed mb-12">
              We design intelligent agents that reason, plan, and execute. 
              Efficiency, reimagined for the modern era.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-[#1F1F1F] text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#0A0A0A] hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/10 flex items-center gap-2">
                Explore Solutions <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-white/40 backdrop-blur-md text-[#1F1F1F] px-8 py-4 rounded-full text-sm font-semibold hover:bg-white transition-all flex items-center gap-1 group border border-[#1F1F1F]/10">
                Watch the film <ChevronRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Services / Bento Grid Section --- */}
      <section id="services" className="py-32 bg-white relative">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="mb-20 md:text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] tracking-tight mb-6">
              Intelligence in every layer.
            </h2>
            <p className="text-lg text-gray-500 font-light">
              From autonomous agents to bespoke integration, we build the cognitive architecture that powers your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`
                  group bg-[#F9F9F9] p-10 rounded-[2rem] hover:bg-white border border-transparent hover:border-[#C5A059]/20 hover:shadow-2xl hover:shadow-[#C5A059]/5 transition-all duration-500
                  flex flex-col justify-between h-full
                  ${service.colSpan ? service.colSpan : 'md:col-span-1'}
                `}
              >
                <div>
                  <div className="mb-8 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#1F1F1F] group-hover:bg-[#1F1F1F] group-hover:text-[#C5A059] transition-colors duration-300 border border-gray-100">
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#1F1F1F] mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-[15px] font-medium">
                    {service.description}
                  </p>
                </div>
                
                <div className="mt-8 pt-8 flex items-center text-sm font-bold text-[#C5A059] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEW: INTEGRATIONS SECTION --- */}
      <section className="py-24 bg-[#F5F5F7]">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F1F1F] tracking-tight mb-4">
              Enterprise - ready integrations
            </h2>
            <p className="text-gray-500 font-light text-lg">
              Seamless connectivity with Velovs & Co.
            </p>
          </motion.div>

          <div className="space-y-4 md:space-y-6">
            {/* Helper function to render rows */}
            {[INTEGRATIONS_ROW_1, INTEGRATIONS_ROW_2, INTEGRATIONS_ROW_3].map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-wrap justify-center gap-3 md:gap-4">
                {row.map((name, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 + rowIndex * 0.1 }}
                    className="flex items-center gap-3 bg-white px-5 py-3 md:px-6 md:py-4 rounded-full shadow-sm hover:shadow-md border border-gray-200/60 transition-all cursor-default group"
                  >
                    {/* Placeholder Icon (Since we don't have SVGs) */}
                    <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-[#1F1F1F] group-hover:text-[#C5A059] transition-colors">
                      <Zap className="w-3 h-3 fill-current" />
                    </div>
                    <span className="text-[#1F1F1F] text-sm md:text-base font-semibold tracking-tight">
                      {name}
                    </span>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Feature Highlight (Large Card) --- */}
      <section className="pb-24 pt-10 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-[#1F1F1F] rounded-[2.5rem] p-10 md:p-24 overflow-hidden relative text-white shadow-2xl shadow-gray-200 mt-20">
            <div className="relative z-10 max-w-2xl">
              <h3 className="text-[#C5A059] font-bold tracking-widest uppercase mb-6 text-xs">Velovs & Co.</h3>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight">
                Ready to deploy <br/> the future?
              </h2>
              <p className="text-gray-400 text-lg mb-12 leading-relaxed font-light">
                We help companies define their AI vision, designing scalable architectures and agent hierarchies that stand the test of time.
              </p>
              <button className="bg-white text-[#1F1F1F] px-10 py-5 rounded-full font-bold hover:bg-[#C5A059] hover:text-white transition-all duration-300 shadow-lg text-sm">
                Start the Conversation
              </button>
            </div>
            
            {/* Decorative Gold Glow */}
            <div className="absolute -right-20 -bottom-40 w-[600px] h-[600px] bg-[#C5A059] rounded-full blur-[150px] opacity-10 pointer-events-none" />
            
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* --- Minimal Footer --- */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-gray-400 font-medium">
            © {new Date().getFullYear()} Velovs & Co. All rights reserved.
          </div>
          <div className="flex gap-8 text-sm font-semibold text-gray-400">
            <a href="#" className="hover:text-[#1F1F1F] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#1F1F1F] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#1F1F1F] transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}