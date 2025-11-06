import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ComparativeCard from "./ComparativeCard";
import DetailItem from "./DetailItem";

interface DetailData {
  title: string;
  description: string;
  image: string;
}

interface ComparativeSectionProps {
  title: string;
  comparatives: {
    title: string;
    description: string;
    details: DetailData[];
  }[];
}

export default function ComparativeSection({ title, comparatives }: ComparativeSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
          data-testid={`text-section-title-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {comparatives.map((comparative, index) => (
            <div key={index}>
              <ComparativeCard
                title={comparative.title}
                description={comparative.description}
                isExpanded={expandedIndex === index}
                onToggle={() => toggleExpanded(index)}
              />

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden mt-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {comparative.details.map((detail, detailIndex) => (
                        <DetailItem
                          key={detailIndex}
                          title={detail.title}
                          description={detail.description}
                          image={detail.image}
                          index={detailIndex}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
