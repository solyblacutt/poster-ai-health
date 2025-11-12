import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import isuLogo from "@assets/Logo ISU white_1762742785016.png";
import isuPatch from "@assets/ISU Patch (1).png"

export default function ISULogoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-6 relative">
      <div className="container mx-auto max-w-4xl relative z-10 flex justify-center">
        <div className="flex items-start gap-8">
          {/* Text content - 3/4 width */}
          <div className="flex-[2] relative">
            </div><div className="absolute -right-4 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent to-transparent rounded-full" />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8 }}
              >
                <img 
                  src={isuLogo} 
                  alt="International Space University" 
                  className="w-auto h-32 md:h-40 object-contain"
                  data-testid="img-isu-logo"
                />
              </motion.div>
        </div>
        <div className="flex-[2] relative">
            <div className="absolute -right-4 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent to-transparent rounded-full" />
            
            <div className="text-right pr-8"></div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8 }}
              >
                <img 
                  src={isuPatch} 
                  alt="International Space University" 
                  className="w-auto h-32 md:h-40 object-contain"
                  data-testid="img-isu-logo"
                />
              </motion.div>
        </div>
      </div>
    </section>
  );
}
