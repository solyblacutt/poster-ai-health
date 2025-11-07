import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBackgroundImage from "@assets/horizon green_1762478563215.png";

interface HeroSectionProps {
  title: string;
  teamMembers: string[];
}

export default function HeroSection({ title, teamMembers }: HeroSectionProps) {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Purple planet horizon background with zoom-in animation */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      
      {/* Gradient overlay with fade-in animation */}
      <motion.div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-[#0a1f1f]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />
      
      {/* Title positioned higher */}
      <div className="relative z-10 flex-1 flex items-start justify-center pt-32">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h1>
        </div>
      </div>

      {/* Team members positioned near bottom */}
      <div className="relative z-10 pb-24">
        <motion.div
          className="flex flex-wrap gap-4 justify-center items-center px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="px-6 py-3 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {member}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        data-testid="button-scroll-down"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}
