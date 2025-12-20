"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define what information we need to share
type CursorContextType = {
  cursorText: string;
  setCursorText: (text: string) => void;
  cursorVariant: "default" | "text"; // "default" = small ring, "text" = expanded pill
  setCursorVariant: (variant: "default" | "text") => void;
};

const CursorContext = createContext<CursorContextType | undefined>(undefined);

// The Provider wraps your app to make this logic available everywhere
export function CursorProvider({ children }: { children: ReactNode }) {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "text">("default");

  return (
    <CursorContext.Provider 
      value={{ 
        cursorText, 
        setCursorText, 
        cursorVariant, 
        setCursorVariant 
      }}
    >
      {children}
    </CursorContext.Provider>
  );
}

// A simple hook to use this logic in other components
export function useCursor() {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
}