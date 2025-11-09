import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import logoImage from "@assets/AI Poster Logo (2)_1762704396121.png";

interface HippocraticOathButtonProps {
  content: string;
}

export default function HippocraticOathButton({ 
  content
}: HippocraticOathButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="py-48 px-6 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.button
              onClick={() => setIsOpen(true)}
              className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-accent shadow-[0_0_40px_rgba(104,245,213,0.6),0_0_80px_rgba(104,245,213,0.4)] hover-elevate active-elevate-2 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="button-hippocratic-oath"
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  boxShadow: [
                    "0 0 40px rgba(104,245,213,0.6), 0 0 80px rgba(104,245,213,0.4)",
                    "0 0 60px rgba(104,245,213,0.8), 0 0 100px rgba(104,245,213,0.6)",
                    "0 0 40px rgba(104,245,213,0.6), 0 0 80px rgba(104,245,213,0.4)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <img 
                src={logoImage} 
                alt="Hippocratic Oath" 
                className="w-full h-full object-cover p-4"
                data-testid="img-oath-logo"
              />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto backdrop-blur-md bg-card/95 border-2 border-accent shadow-[0_0_30px_rgba(104,245,213,0.6),0_0_60px_rgba(104,245,213,0.4),inset_0_0_20px_rgba(104,245,213,0.2)]">
            <div className="relative p-8">
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-accent/40 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/40 rounded-full blur-2xl animate-pulse" />
              <div className="absolute top-1/2 left-0 w-2 h-24 bg-gradient-to-b from-transparent via-accent to-transparent rounded-full" />
              <div className="absolute top-1/2 right-0 w-2 h-24 bg-gradient-to-b from-transparent via-accent to-transparent rounded-full" />
              
              <DialogHeader>
                <DialogTitle 
                  className="text-4xl md:text-5xl font-bold mb-8 text-foreground text-center"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Hippocratic Oath
                </DialogTitle>
              </DialogHeader>
              
              <div className="w-24 h-1 mx-auto mb-8 bg-gradient-to-r from-transparent via-accent to-transparent" />
              
              <p className="text-xl text-foreground leading-relaxed text-center relative z-10">
                {content}
              </p>
            </div>
          </DialogContent>
        </motion.div>
      </Dialog>
    </>
  );
}
