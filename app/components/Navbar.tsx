"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const HoverPill = () => (
  <motion.span
    layoutId="nav-pill"
    transition={{ type: "spring", stiffness: 300, damping: 30 }}
    className="absolute inset-0 -z-10 bg-velovs-gold/10 rounded-lg"
  ></motion.span>
);

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  
  //Tracks which Nav Item is being hovered
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileExpanded(null);
  };

  const toggleMobileAccordion = (section: string) => {
    setMobileExpanded(mobileExpanded === section ? null : section);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-velovs-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-[60px] flex items-center justify-between">
          
          {/*----LOGO----*/}
          <Link href="/" className="text-xl font-bold tracking-tight text-velovs-black hover:opacity-80 transition-opacity z-50 relative">
            Velovs & Co.
          </Link>

          {/*----CENTER: DESKTOP NAVIGATION----*/}
          <div 
            className="hidden md:flex items-center space-x-2 text-sm font-medium text-velovs-charcoal h-full"
            onMouseLeave={() => setHoveredNav(null)}
          >
            
            {/*----HOME----*/}
            <Link 
              href="/" 
              className="relative px-4 py-2 transition-colors hover:text-velovs-black"
              onMouseEnter={() => setHoveredNav("home")}
            >
              <span className="relative z-10">Home</span>
              {hoveredNav === "home" && <HoverPill />}
            </Link>

            {/*----SERVICES----*/}
            <Link 
              href="/services" 
              className="relative px-4 py-2 transition-colors hover:text-velovs-black"
              onMouseEnter={() => setHoveredNav("services")}
            >
              <span className="relative z-10">Services</span>
              {hoveredNav === "services" && <HoverPill />}
            </Link>

            {/*----PRODUCTS----*/}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => {
                setHoveredDropdown("products");
                setHoveredNav("products");
              }}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <button className="relative px-4 py-2 flex items-center gap-1 transition-colors hover:text-velovs-black outline-none">
                <span className="relative z-10 flex items-center gap-1">
                  Products <ChevronDown className="w-4 h-4" />
                </span>
                {hoveredNav === "products" && <HoverPill />}
              </button>

              {/*----DROPDOWN----*/}
              <AnimatePresence>
                {hoveredDropdown === "products" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-[50px] left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-4 overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-velovs-gold to-velovs-navy"></div>
                    <div className="flex flex-col gap-2">
                      <Link href="#" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                        <div className="text-velovs-black font-semibold group-hover:text-velovs-gold">NeuroX Platform</div>
                        <div className="text-xs text-gray-500">The core agentic framework.</div>
                      </Link>
                      <Link href="#" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                        <div className="text-velovs-black font-semibold group-hover:text-velovs-gold">Velovs Guard</div>
                        <div className="text-xs text-gray-500">AI-powered cybersecurity.</div>
                      </Link>
                      <Link href="#" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                        <div className="text-velovs-black font-semibold group-hover:text-velovs-gold">Auto-Agent API</div>
                        <div className="text-xs text-gray-500">Build your own agents.</div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/*----COMPANY----*/}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => {
                setHoveredDropdown("company");
                setHoveredNav("company");
              }}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <button className="relative px-4 py-2 flex items-center gap-1 transition-colors hover:text-velovs-black outline-none">
                <span className="relative z-10 flex items-center gap-1">
                  Company <ChevronDown className="w-4 h-4" />
                </span>
                {hoveredNav === "company" && <HoverPill />}
              </button>

              <AnimatePresence>
                {hoveredDropdown === "company" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-[50px] left-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 p-4 overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-velovs-gold to-velovs-navy"></div>
                    <div className="flex flex-col gap-1">
                      <Link href="/about" className="block px-4 py-2 text-velovs-black hover:text-velovs-gold hover:bg-gray-50 rounded-md transition-all">About Us</Link>
                      <Link href="#" className="block px-4 py-2 text-velovs-black hover:text-velovs-gold hover:bg-gray-50 rounded-md transition-all">Board of Directors</Link>
                      <Link href="#" className="block px-4 py-2 text-velovs-black hover:text-velovs-gold hover:bg-gray-50 rounded-md transition-all">Careers</Link>
                      <Link href="#" className="block px-4 py-2 text-velovs-black hover:text-velovs-gold hover:bg-gray-50 rounded-md transition-all">Newsroom</Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/*----CONTACT----*/}
            <Link 
              href="/contact" 
              className="relative px-4 py-2 transition-colors hover:text-velovs-black"
              onMouseEnter={() => setHoveredNav("contact")}
            >
              <span className="relative z-10">Contact Us</span>
              {hoveredNav === "contact" && <HoverPill />}
            </Link>

          </div>

          {/*----RIGHT: MOBILE HAMBURGER BUTTON----*/}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-velovs-black hover:bg-gray-100 rounded-full transition-colors z-50 relative"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/*----MOBILE MENU OVERLAY----*/}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-velovs-white pt-[80px] px-6 md:hidden flex flex-col gap-4 overflow-y-auto"
          >
            <Link href="/" onClick={toggleMenu} className="text-2xl font-semibold text-velovs-black border-b border-gray-100 pb-4">Home</Link>
            <Link href="/services" onClick={toggleMenu} className="text-2xl font-semibold text-velovs-black border-b border-gray-100 pb-4">Services</Link>
            
            {/* Mobile Accordions */}
            <div className="border-b border-gray-100 pb-4">
              <button onClick={() => toggleMobileAccordion("products")} className="w-full flex items-center justify-between text-2xl font-semibold text-velovs-black">
                Products {mobileExpanded === "products" ? <ChevronUp /> : <ChevronDown />}
              </button>
              <AnimatePresence>
                {mobileExpanded === "products" && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <div className="flex flex-col gap-3 pt-4 pl-4">
                      <Link href="#" onClick={toggleMenu} className="text-lg text-gray-600">NeuroX Platform</Link>
                      <Link href="#" onClick={toggleMenu} className="text-lg text-gray-600">Velovs Guard</Link>
                      <Link href="#" onClick={toggleMenu} className="text-lg text-gray-600">Auto-Agent API</Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <button onClick={() => toggleMobileAccordion("company")} className="w-full flex items-center justify-between text-2xl font-semibold text-velovs-black">
                Company {mobileExpanded === "company" ? <ChevronUp /> : <ChevronDown />}
              </button>
              <AnimatePresence>
                {mobileExpanded === "company" && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <div className="flex flex-col gap-3 pt-4 pl-4">
                      <Link href="/about" onClick={toggleMenu} className="text-lg text-gray-600">About Us</Link>
                      <Link href="#" onClick={toggleMenu} className="text-lg text-gray-600">Board of Directors</Link>
                      <Link href="#" onClick={toggleMenu} className="text-lg text-gray-600">Careers</Link>
                      <Link href="#" onClick={toggleMenu} className="text-lg text-gray-600">Newsroom</Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/contact" onClick={toggleMenu} className="text-2xl font-semibold text-velovs-black border-b border-gray-100 pb-4">Contact Us</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}