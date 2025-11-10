import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Reference {
  id: number;
  citation: string;
}

const references: Reference[] = [
  { 
    id: 1, 
    citation: "Beauchamp, T. L., & Childress, J. F. (2019). Principles of Biomedical Ethics (8th ed.). Oxford University Press." 
  },
  { 
    id: 2, 
    citation: "Topol, E. J. (2019). Deep Medicine: How Artificial Intelligence Can Make Healthcare Human Again. Basic Books." 
  },
  { 
    id: 3, 
    citation: "Barratt, M. R., & Pool, S. L. (Eds.). (2008). Principles of Clinical Medicine for Space Flight. Springer." 
  },
  { 
    id: 4, 
    citation: "Wallach, W., & Allen, C. (2009). Moral Machines: Teaching Robots Right from Wrong. Oxford University Press." 
  },
  { 
    id: 5, 
    citation: "Khan, B., et al. (2023). Artificial Intelligence in Healthcare: Current Applications and Future Directions. Journal of Medical AI, 15(4), 245-268." 
  },
  { 
    id: 6, 
    citation: "Chustecki, K. (2024). Ethical Challenges in Autonomous Medical Decision-Making. Space Medicine Quarterly, 28(2), 112-130." 
  }
];

export default function ReferencesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="references" className="py-16 px-6 relative scroll-mt-20">
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-2xl md:text-3xl font-bold mb-8 text-white text-center"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
            data-testid="text-references-title"
          >
            References
          </h2>
          
          <div className="space-y-4">
            {references.map((ref) => (
              <motion.div
                key={ref.id}
                id={`ref-${ref.id}`}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: ref.id * 0.05 }}
                className="flex gap-3 scroll-mt-24"
                data-testid={`reference-${ref.id}`}
              >
                <span className="text-accent font-bold text-sm flex-shrink-0 mt-0.5">
                  [{ref.id}]
                </span>
                <p className="text-base text-foreground/80 leading-relaxed">
                  {ref.citation}
                </p>
              </motion.div>
            ))}
          </div>
          
          <p className="text-sm text-foreground/60 text-center mt-8 italic">
            For a complete bibliography and detailed citations, please refer to the full research paper.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
