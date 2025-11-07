import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

interface ComparativeCardProps {
  title: string;
  description: string;
  isExpanded?: boolean;
  onToggle?: () => void;
  isExpandable?: boolean;
}

export default function ComparativeCard({ 
  title, 
  description, 
  isExpanded, 
  onToggle,
  isExpandable = true
}: ComparativeCardProps) {
  return (
    <Card 
      className={`p-8 backdrop-blur-md bg-white/5 border border-cyan-500/30 transition-all duration-300 ${
        isExpandable ? 'cursor-pointer hover-elevate active-elevate-2 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20' : 'hover-elevate hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20'
      }`}
      onClick={isExpandable ? onToggle : undefined}
      data-testid={`card-comparative-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 
            className="text-2xl font-semibold mb-3 text-white"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
            data-testid={`text-comparative-title-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {title}
          </h3>
          <p className="text-cyan-200" data-testid={`text-comparative-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {description}
          </p>
        </div>
        {isExpandable && (
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-6 h-6 text-cyan-400" />
          </motion.div>
        )}
      </div>
    </Card>
  );
}
