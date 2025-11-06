import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import proposalBg from "@assets/generated_images/Purple_cosmic_gradient_background_eec28ed4.png";

interface ProposalSectionProps {
  content: string;
}

export default function ProposalSection({ content }: ProposalSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${proposalBg})` }}
      />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="p-12 backdrop-blur-sm bg-card/80 border-2 border-primary/30">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary/20 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-purple-500/20 rounded-full blur-xl" />
              
              <h2 
                className="text-3xl md:text-4xl font-bold mb-6 text-foreground text-center"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
                data-testid="text-proposal-title"
              >
                Proposed Future
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed text-center" data-testid="text-proposal-content">
                {content}
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
