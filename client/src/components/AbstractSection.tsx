import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import logoImage from "@assets/AI Poster Logo (1)_1762478460895.png";

interface AbstractSectionProps {
  content: React.ReactNode;
}

export default function AbstractSection({ content }: AbstractSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-center">
          {/* Logo on the left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center"
          >
            <img 
              src={logoImage} 
              alt="AI Poster Logo" 
              className="w-64 h-64 md:w-80 md:h-80 object-contain"
              data-testid="img-abstract-logo"
            />
          </motion.div>

          {/* Title and content on the right */}
          <div className="md:col-span-3 relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-cyan-500 to-transparent rounded-full" />
            
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-4xl font-bold mb-8 text-white"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
              data-testid="text-abstract-title"
            >
              Abstract
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-cyan-100 leading-relaxed" 
              data-testid="text-abstract-content"
            >
              {content}
            </motion.p>
          </div>
        </div>
      </div>
      
    </section>
  );
}
