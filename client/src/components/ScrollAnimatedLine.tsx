import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollAnimatedLine() {
  const [pathLength, setPathLength] = useState(0);
  
  const { scrollYProgress } = useScroll();

  // Calculate the path centered on screen for maximum visibility
  // Smooth flowing S-curve through the middle of the viewport
  
  const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
  
  // Calculate centered positions - max content width is typically 1280px
  const centerX = viewportWidth / 2;
  const flowWidth = Math.min(600, viewportWidth * 0.4); // How far the curve extends from center
  
  // Start point: slightly left of center, between Introduction and Comparative
  const startX = centerX - flowWidth * 0.5;
  const startY = 1100;
  
  // Mid point: slightly right of center, through Comparative Analysis
  const midX = centerX + flowWidth * 0.5;
  const midY = 1700;
  
  // End point: slightly left of center, at Hippocratic Oath
  const endX = centerX - flowWidth * 0.6;
  const endY = 2300;
  
  // Create smooth flowing S-curve with gentle control points
  const pathD = `
    M ${startX} ${startY}
    C ${startX + flowWidth * 0.3} ${startY + 200},
      ${midX - flowWidth * 0.3} ${midY - 200},
      ${midX} ${midY}
    C ${midX - flowWidth * 0.2} ${midY + 150},
      ${endX + flowWidth * 0.2} ${endY - 150},
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
