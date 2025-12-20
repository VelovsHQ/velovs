"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";
import { useCursor } from "./CursorContext";

export default function MagneticCursor() {
  const { cursorVariant, cursorText, setCursorText, setCursorVariant } = useCursor();
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      // 1. Check if the device has a 'fine' pointer (mouse/trackpad)
      // 2. Check if the screen is wider than a tablet (typical mobile/tablet are < 1024px)
      const hasMouse = window.matchMedia("(pointer: fine)").matches;
      const isLargeScreen = window.innerWidth >= 1024;
      
      const shouldShow = hasMouse && isLargeScreen;
      setIsVisible(shouldShow);

      // Hide/Show default system cursor based on the same logic
      if (shouldShow) {
        document.body.style.cursor = 'none';
      } else {
        document.body.style.cursor = 'auto';
      }
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Reset cursor on page navigation
  useEffect(() => {
    setCursorText("");
    setCursorVariant("default");
  }, [pathname, setCursorText, setCursorVariant]);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (!isVisible) return;

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY, isVisible]);

  // If we shouldn't show the custom cursor, return null
  if (!isVisible) return null;

  const variants = {
    default: {
      height: 16,
      width: 16,
      backgroundColor: "transparent",
      border: "2px solid #C5A059",
      x: "-50%",
      y: "-50%",
    },
    text: {
      height: 40,
      width: 140,
      backgroundColor: "#C5A059",
      border: "0px solid transparent",
      x: "-50%",
      y: "-50%",
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none flex items-center justify-center rounded-full overflow-hidden"
      style={{ x, y }}
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: cursorVariant === "text" ? 1 : 0 }}
        className="text-black text-xs font-bold uppercase tracking-widest whitespace-nowrap"
      >
        {cursorText}
      </motion.span>
    </motion.div>
  );
}