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
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="p-12 backdrop-blur-md bg-white/5 border border-purple-500/30 hover-elevate transition-all">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-purple-500/30 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-purple-400/30 rounded-full blur-xl" />
              
              <h2 
                className="text-3xl md:text-4xl font-bold mb-6 text-white text-center"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
                data-testid="text-proposal-title"
              >
                Proposed Future
              </h2>
              
              <p className="text-lg text-purple-100 leading-relaxed text-center" data-testid="text-proposal-content">
                {content}
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
