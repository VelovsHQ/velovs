import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={cn("max-w-[1550px] mx-auto px-8 md:px-15", className)} {...props}>
      {children}
    </div>
  );
}
