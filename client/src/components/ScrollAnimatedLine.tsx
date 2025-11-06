import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollAnimatedLine() {
  const [pathLength, setPathLength] = useState(0);
  
  const { scrollYProgress } = useScroll();

  // Calculate the path based on viewport dimensions
  // Starting point: center-left, between Introduction and Comparative sections
  // Path: smooth curve right while descending through Comparative Analysis, 
  // then smooth curve crossing to center-left at Hippocratic Oath
  
  // Using percentage-based positioning for better visibility
  const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 1080;
  
  const startX = viewportWidth * 0.3; // 30% from left - more centered
  const startY = 1100; // Between Introduction and Comparative Analysis
  
  const midX = viewportWidth * 0.7; // 70% from left - right side but visible
  const midY = 1700; // Through Comparative Analysis
  
  const endX = viewportWidth * 0.25; // 25% from left - center-left
  const endY = 2300; // At Hippocratic Oath section
  
  // Using cubic bezier curves for smooth transitions
  const pathD = `
    M ${startX} ${startY}
    C ${startX + (midX - startX) * 0.4} ${startY + (midY - startY) * 0.3},
      ${startX + (midX - startX) * 0.6} ${startY + (midY - startY) * 0.7},
      ${midX} ${midY}
    C ${midX - (midX - endX) * 0.4} ${midY + (endY - midY) * 0.3},
      ${midX - (midX - endX) * 0.6} ${midY + (endY - midY) * 0.7},
      ${endX} ${endY}
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
