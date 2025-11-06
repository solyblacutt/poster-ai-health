import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Scale, Users, AlertCircle, LucideIcon } from "lucide-react";

interface DetailItemProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

const iconMap: Record<string, LucideIcon> = {
  Scale: Scale,
  Users: Users,
  AlertCircle: AlertCircle
};

export default function DetailItem({ title, description, icon, index }: DetailItemProps) {
  const IconComponent = iconMap[icon] || AlertCircle;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pt-16"
    >
      {/* Icon positioned outside/above the card */}
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 z-10"
        whileHover={{ 
          rotate: [0, -10, 10, -10, 0],
          scale: 1.1,
          transition: { duration: 0.5 }
        }}
      >
        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center border-4 border-purple-400/50 shadow-xl shadow-purple-500/50 group-hover:shadow-purple-400/80 transition-shadow">
          <IconComponent className="w-14 h-14 text-white" strokeWidth={1.5} />
        </div>
      </motion.div>
      
      {/* Card content */}
      <Card className="overflow-visible h-full hover-elevate active-elevate-2 transition-all backdrop-blur-md bg-white/5 border border-purple-500/30 hover:border-purple-400/60 pt-20 hover:shadow-2xl hover:shadow-purple-500/40" data-testid={`card-detail-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        <div className="p-6">
          <h4 
            className="text-xl font-semibold mb-3 text-white text-center"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
            data-testid={`text-detail-title-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {title}
          </h4>
          <p className="text-sm text-purple-200 text-center" data-testid={`text-detail-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {description}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}
