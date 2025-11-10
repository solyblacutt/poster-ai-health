import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import isuLogo from "@assets/Logo ISU white_1762742785016.png";

export default function ISULogoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-6 relative">
      <div className="container mx-auto max-w-4xl relative z-10 flex justify-center">
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
    </section>
  );
}
