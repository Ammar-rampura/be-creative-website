import React from "react";
import { cn } from "@/lib/utils";

interface DecorProps extends React.HTMLAttributes<HTMLDivElement> {
  count?: number;
}

export function GoldDivider({ className, ...props }: DecorProps) {
  return (
    <div className={cn("flex items-center justify-center my-6", className)} {...props}>
      <svg
        width="120"
        height="24"
        viewBox="0 0 120 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#D4AF37]" // Gold color
      >
        <path
          d="M60 2C60 2 54 12 40 12C26 12 0 12 0 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M60 2C60 2 66 12 80 12C94 12 120 12 120 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="60" cy="12" r="4" fill="currentColor" />
        <circle cx="60" cy="12" r="8" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
}

export function SparkleField({ className, ...props }: DecorProps) {
  return (
    <div className={cn("absolute inset-0 pointer-events-none opacity-50", className)} {...props}>
      {/* Simple absolute sparkles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-yellow-300 animate-pulse" />
      <div className="absolute top-1/2 right-1/4 w-1 h-1 rounded-full bg-yellow-200 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
    </div>
  );
}

export function PetalField({ className, ...props }: DecorProps) {
  return (
    <div className={cn("absolute inset-0 pointer-events-none opacity-30", className)} {...props}>
      {/* Abstract petal shapes */}
      <svg className="absolute top-10 left-10 text-pink-300 w-6 h-6 animate-spin-slow" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C15 2 22 5 22 12C22 19 15 22 12 22C9 22 2 19 2 12C2 5 9 2 12 2Z" />
      </svg>
      <svg className="absolute bottom-20 right-20 text-rose-300 w-8 h-8 animate-spin-slow" style={{ animationDirection: 'reverse' }} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C15 2 22 5 22 12C22 19 15 22 12 22C9 22 2 19 2 12C2 5 9 2 12 2Z" />
      </svg>
    </div>
  );
}
