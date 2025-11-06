import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollAnimatedLine() {
  const [pathLength, setPathLength] = useState(0);
  
  const { scrollYProgress } = useScroll();

  // Calculate the path based on viewport dimensions
  // Starting point: left side, middle height between Introduction and Comparative sections
  // Path: go right while descending through Comparative Analysis, then cross to left at Hippocratic Oath
  
  // Using absolute pixel values that will be calculated
  const startX = 80; // Left side with margin
  const startY = 1200; // Between Introduction and Comparative Analysis
  
  const midX = window.innerWidth - 80; // Right side with margin
  const midY = 1800; // Descending through Comparative Analysis
  
  const endX = 80; // Back to left side
  const endY = 2400; // At Hippocratic Oath section
  
  const pathD = `
    M ${startX} ${startY}
    L ${midX} ${midY}
    L ${endX} ${endY}
  `;

  // Animate the line drawing based on scroll
  const pathLengthValue = useTransform(scrollYProgress, [0.15, 0.45, 0.7], [0, 0.5, 1]);

  useEffect(() => {
    const path = document.querySelector("#animated-scroll-path") as SVGPathElement;
    if (path) {
      setPathLength(path.getTotalLength());
    }
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      <svg className="w-full h-full">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.2)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 1)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.2)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <motion.path
          id="animated-scroll-path"
          d={pathD}
          stroke="url(#line-gradient)"
          strokeWidth="4"
          fill="none"
          filter="url(#glow)"
          strokeLinecap="round"
          strokeDasharray={pathLength}
          strokeDashoffset={pathLength}
          style={{
            strokeDashoffset: useTransform(pathLengthValue, (v) => pathLength * (1 - v))
          }}
        />
      </svg>
    </div>
  );
}
