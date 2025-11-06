import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface DetailItemProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

export default function DetailItem({ title, description, image, index }: DetailItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden h-full hover-elevate transition-all" data-testid={`card-detail-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        <div className="aspect-video w-full overflow-hidden bg-muted">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h4 
            className="text-xl font-semibold mb-2 text-card-foreground"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
            data-testid={`text-detail-title-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {title}
          </h4>
          <p className="text-sm text-muted-foreground" data-testid={`text-detail-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {description}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}
