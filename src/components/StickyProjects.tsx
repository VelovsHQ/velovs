'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, Code2, Layers } from 'lucide-react';

// --- Types ---
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  color: string;
  image: string;
  link: string;
  repo: string;
}

// --- Mock Data ---
const projects: Project[] = [
  {
    id: 1,
    title: "Nebula Dashboard",
    category: "Analytics Platform",
    description: "A high-performance analytics dashboard designed for real-time data visualization. Built with Next.js and Tremor, it processes over 1M events per second with sub-second latency, providing actionable insights for SaaS businesses.",
    tags: ["Next.js", "TypeScript", "Tailwind", "D3.js"],
    color: "from-blue-500 to-cyan-400",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    repo: "#"
  },
  {
    id: 2,
    title: "Chronos AI",
    category: "Productivity Tool",
    description: "An AI-powered scheduling assistant that optimizes your calendar based on your energy levels and priorities. Features natural language processing for task entry and smart conflict resolution.",
    tags: ["React", "OpenAI API", "Node.js", "PostgreSQL"],
    color: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2064&auto=format&fit=crop",
    link: "#",
    repo: "#"
  },
  {
    id: 3,
    title: "Vortex Finance",
    category: "DeFi Protocol",
    description: "A decentralized exchange aggregator offering the best swap rates across multiple chains. Includes a unique liquidity provision algorithm that minimizes impermanent loss for long-term stakers.",
    tags: ["Solidity", "Ethers.js", "Web3", "Framer Motion"],
    color: "from-emerald-400 to-green-600",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
    link: "#",
    repo: "#"
  },
  {
    id: 4,
    title: "Echo Social",
    category: "Mobile Application",
    description: "A minimalist social network focused on voice interactions. Users share 30-second audio snippets. Built with React Native and Expo, featuring real-time audio waveforms and spatial audio rendering.",
    tags: ["React Native", "Firebase", "Redux", "Expo"],
    color: "from-orange-400 to-red-500",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    link: "#",
    repo: "#"
  }
];

// --- Components ---

const ProjectCard = ({ 
  project, 
  setActiveProject, 
  index 
}: { 
  project: Project; 
  setActiveProject: (id: number) => void;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);


  const cardOptions = React.useMemo(() => ({
        margin: "-20% 0px -10% 0px"
  }), []);

  const isInView = useInView(ref, cardOptions);

  useEffect(() => {
    if (isInView) {
      setActiveProject(index);
    }
  }, [isInView, setActiveProject, index]);

  return (
    <div 
      // Attach ref to the CONTAINER to catch the whole block early
      ref={ref}
      className="min-h-screen flex flex-col justify-center pt-24 p-8 md:16 border-l border-neutral-800/50"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-2 mb-4 text-neutral-400">
          <span className="text-sm font-mono">0{project.id}</span>
          <span className="h-px w-8 bg-neutral-700"></span>
          <span className="text-sm font-medium tracking-wider uppercase">{project.category}</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {project.title}
        </h2>
        
        <p className="text-lg text-neutral-400 mb-8 leading-relaxed max-w-lg">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-800 text-neutral-300 border border-neutral-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <a href={project.link} className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors group">
            <span className="font-medium">View Project</span>
            <ExternalLink size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a href={project.repo} className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
            <Github size={18} />
            <span className="font-medium">Source</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

// Custom hook helper for simpler InView detection
function useInView(ref: React.RefObject<Element>, options = {}) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);
    
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return isIntersecting;
}

const ProjectVisual = ({ activeProject }: { activeProject: number }) => {
  return (
    <div className="sticky top-0 h-screen w-full flex items-center justify-center pt-24 overflow-hidden">
      
      <div className="relative w-[90%] h-[60%] md:w-[80%] md:h-[70%] rounded-2xl overflow-hidden">
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeProject}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
             {/* Image with overlay */}
            <div className="absolute inset-0 bg-neutral-950/10 z-10" />
            <img 
              src={projects[activeProject].image} 
              alt={projects[activeProject].title}
              className="w-full h-full object-cover"
            />
            
            {/* Floating UI Elements for decoration */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-6 left-6 z-20 flex gap-4"
            >
               <div className="p-3 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 text-white">
                  <Code2 size={20} />
               </div>
               <div className="p-3 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 text-white">
                  <Layers size={20} />
               </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <div className="bg-neutral-950 min-h-screen text-neutral-200 selection:bg-blue-500/30">
      {/* Main Sticky Section */}
      <div className="relative flex flex-col md:flex-row w-full max-w-[1600px] mx-auto">
        
        {/* Left Column: Scrollable Content */}
        <div className="w-full md:w-1/2 flex flex-col z-20">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              setActiveProject={setActiveProject}
            />
          ))}
        </div>

        {/* Right Column: Sticky Visual */}
        <div className="hidden md:block w-1/2 relative z-10">
          <ProjectVisual activeProject={activeProject} />
        </div>
      </div>
    </div>
  );
}