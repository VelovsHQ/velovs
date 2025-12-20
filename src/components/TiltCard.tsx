"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // 1. TILT PHYSICS (Existing logic)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // 2. SPOTLIGHT PHYSICS (New!)
  // We track the exact pixel coordinates for the flashlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const opacity = useMotionValue(0); // Spotlight opacity

  // Smooth springs for the tilt
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });
  
  // Smooth opacity for the spotlight
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // TILT Math (-0.5 to 0.5)
    const mouseXFromCenter = (e.clientX - rect.left) / width - 0.5;
    const mouseYFromCenter = (e.clientY - rect.top) / height - 0.5;
    x.set(mouseXFromCenter);
    y.set(mouseYFromCenter);

    // SPOTLIGHT Math (Exact Pixels)
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    opacity.set(1); // Turn light on
  };

  const handleMouseLeave = () => {
    // Reset Tilt
    x.set(0);
    y.set(0);
    // Fade out Spotlight
    opacity.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative transition-all duration-200 ease-out ${className}`}
    >
      {/* === NEW: THE SPOTLIGHT LAYER === 
         This sits ON TOP of the background but BEHIND the content.
         It uses a template literal to inject the X/Y coordinates into the CSS gradient.
      */}
      <motion.div
        className="absolute inset-0 z-0 rounded-2xl transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: springOpacity,
          background: useTransform(
            [mouseX, mouseY],
            ([xVal, yVal]) => 
              `radial-gradient(
                600px circle at ${xVal}px ${yVal}px, 
                rgba(197, 160, 89, 0.15), 
                transparent 40%
              )`
          ),
        }}
      />

      {/* Content Layer (Popped out in Z-space) */}
      <div style={{ transform: "translateZ(20px)" }} className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}