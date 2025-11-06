import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBackgroundImage from "@assets/Titulo y nombre de integrantes (1)_1762390628733.png";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Planet horizon image at 50% opacity to show stars through */}
      <div 
        className="absolute inset-0 z-0 opacity-50"
        style={{
          backgroundImage: `url(${heroBackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Subtle gradient overlay for smooth blending */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-[#1a0b2e]/60" />
      
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-8 text-white"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>

        <motion.div
          className="flex flex-wrap gap-4 justify-center items-center mt-12"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        data-testid="button-scroll-down"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}
