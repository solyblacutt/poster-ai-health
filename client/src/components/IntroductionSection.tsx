import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface IntroductionSectionProps {
  content: string;
}

export default function IntroductionSection({ content }: IntroductionSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-purple-500 to-transparent rounded-full" />
          
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
            data-testid="text-introduction-title"
          >
            Introduction
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-introduction-content">
            {content}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
