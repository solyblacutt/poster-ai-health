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
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden h-full hover-elevate active-elevate-2 transition-all backdrop-blur-md bg-white/5 border border-purple-500/30" data-testid={`card-detail-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-purple-900/40 to-purple-600/20 flex items-center justify-center">
          <IconComponent className="w-24 h-24 text-purple-300" strokeWidth={1.5} />
        </div>
        <div className="p-6">
          <h4 
            className="text-xl font-semibold mb-2 text-white"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
            data-testid={`text-detail-title-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {title}
          </h4>
          <p className="text-sm text-purple-200" data-testid={`text-detail-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {description}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}
