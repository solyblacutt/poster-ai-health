import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

interface ComparativeCardProps {
  title: string;
  description: string;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function ComparativeCard({ 
  title, 
  description, 
  isExpanded, 
  onToggle 
}: ComparativeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card 
        className="p-8 backdrop-blur-sm bg-card/50 border-card-border cursor-pointer hover-elevate active-elevate-2 transition-all"
        onClick={onToggle}
        data-testid={`card-comparative-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 
              className="text-2xl font-semibold mb-3 text-card-foreground"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
              data-testid={`text-comparative-title-${title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {title}
            </h3>
            <p className="text-muted-foreground" data-testid={`text-comparative-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
              {description}
            </p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-6 h-6 text-primary" />
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}
