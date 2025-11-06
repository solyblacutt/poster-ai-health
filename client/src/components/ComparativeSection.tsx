import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ComparativeCard from "./ComparativeCard";
import DetailItem from "./DetailItem";

interface DetailData {
  title: string;
  description: string;
  icon: string;
}

interface ComparativeSectionProps {
  title: string;
  comparatives: {
    title: string;
    description: string;
    details?: DetailData[];
    isExpandable?: boolean;
  }[];
}

export default function ComparativeSection({ title, comparatives }: ComparativeSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const expandableComparative = comparatives.find(c => c.isExpandable);
  const expandableIndex = comparatives.findIndex(c => c.isExpandable);

  return (
    <section className="pt-24 pb-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-white"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
          data-testid={`text-section-title-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {comparatives.map((comparative, index) => (
            <ComparativeCard
              key={index}
              title={comparative.title}
              description={comparative.description}
              isExpanded={comparative.isExpandable && isExpanded}
              onToggle={comparative.isExpandable ? () => setIsExpanded(!isExpanded) : undefined}
              isExpandable={comparative.isExpandable}
            />
          ))}
        </div>

        <AnimatePresence>
          {isExpanded && expandableComparative && expandableComparative.details && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {expandableComparative.details.map((detail, detailIndex) => (
                  <DetailItem
                    key={detailIndex}
                    title={detail.title}
                    description={detail.description}
                    icon={detail.icon}
                    index={detailIndex}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
