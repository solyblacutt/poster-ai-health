import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import logoImage from "@assets/AI Poster Logo (2)_1762704396121.png";

interface IntroductionSectionProps {
  content: string;
}

export default function IntroductionSection({ content }: IntroductionSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-start gap-8">
          {/* Text content - 3/4 width */}
          <div className="flex-[3] relative">
            <div className="absolute -right-4 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent to-transparent rounded-full" />
            
            <div className="text-right pr-8">
              <motion.h2 
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold mb-8 text-white"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
                data-testid="text-introduction-title"
              >
                Introduction
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-foreground/80 leading-relaxed" 
                data-testid="text-introduction-content"
              >
                {content}
              </motion.p>
            </div>
          </div>

          {/* Circular button - 1/4 width */}
          <motion.div 
            className="flex-[1] flex items-start justify-center pt-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative">
              <motion.button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative rounded-full border-4 border-accent overflow-hidden"
                style={{
                  width: isHovered ? '320px' : '160px',
                  height: isHovered ? '320px' : '160px',
                  boxShadow: '0 0 30px rgba(104, 245, 213, 0.5), 0 0 60px rgba(104, 245, 213, 0.3)'
                }}
                animate={{
                  width: isHovered ? '320px' : '160px',
                  height: isHovered ? '320px' : '160px',
                  boxShadow: isHovered 
                    ? '0 0 40px rgba(104, 245, 213, 0.6), 0 0 80px rgba(104, 245, 213, 0.4)' 
                    : '0 0 30px rgba(104, 245, 213, 0.5), 0 0 60px rgba(104, 245, 213, 0.3)'
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                data-testid="button-intro-expand"
              >
                {!isHovered ? (
                  <motion.img
                    src={logoImage}
                    alt="AI Logo"
                    className="w-full h-full object-contain p-4"
                    style={{ mixBlendMode: "multiply" }}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    data-testid="img-intro-logo"
                  />
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="w-full h-full flex items-center justify-center p-8 bg-card/90 backdrop-blur-sm"
                  >
                    <p className="text-sm text-foreground text-center leading-relaxed" data-testid="text-intro-hover">
                      Communication delays from the Martian surface to Earth can reach 20 minutes or more. In the face of such substantial latency, the emergence of medical AI applications holds great potential as one solution to address this critical challenge.
                    </p>
                  </motion.div>
                )}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
