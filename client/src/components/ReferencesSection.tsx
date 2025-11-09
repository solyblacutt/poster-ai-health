import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ReferencesSectionProps {
  content: string;
}

export default function ReferencesSection({ content }: ReferencesSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 px-6 relative">
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 
            className="text-2xl md:text-3xl font-bold mb-6 text-white"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
            data-testid="text-references-title"
          >
            References
          </h2>
          
          <p className="text-base text-cyan-100/80 leading-relaxed" data-testid="text-references-content">
            {content}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
