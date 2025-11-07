import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

interface HippocraticOathButtonProps {
  content: string;
  buttonText?: string;
  imageUrl?: string;
}

export default function HippocraticOathButton({ 
  content, 
  buttonText = "Hippocratic Oath",
  imageUrl 
}: HippocraticOathButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="py-48 px-6 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {imageUrl ? (
              <button
                onClick={() => setIsOpen(true)}
                className="relative overflow-hidden rounded-lg hover-elevate active-elevate-2 transition-all border-2 border-cyan-400 shadow-[0_0_30px_rgba(168,85,247,0.6),0_0_60px_rgba(168,85,247,0.4)]"
                data-testid="button-hippocratic-oath"
              >
                <img src={imageUrl} alt={buttonText} className="w-full h-auto" />
              </button>
            ) : (
              <Button
                onClick={() => setIsOpen(true)}
                size="lg"
                className="text-2xl px-12 py-8 h-auto bg-cyan-900/60 border-2 border-cyan-400 hover:border-cyan-300 backdrop-blur-md shadow-[0_0_30px_rgba(168,85,247,0.6),0_0_60px_rgba(168,85,247,0.4),inset_0_0_20px_rgba(168,85,247,0.2)]"
                data-testid="button-hippocratic-oath"
              >
                <FileText className="w-8 h-8 mr-4" />
                {buttonText}
              </Button>
            )}
          </motion.div>
        </div>
      </section>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto backdrop-blur-md bg-cyan-900/60 border-2 border-cyan-400 shadow-[0_0_30px_rgba(168,85,247,0.6),0_0_60px_rgba(168,85,247,0.4),inset_0_0_20px_rgba(168,85,247,0.2)]">
          <div className="relative p-8">
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-cyan-500/40 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-cyan-400/40 rounded-full blur-2xl animate-pulse" />
            <div className="absolute top-1/2 left-0 w-2 h-24 bg-gradient-to-b from-transparent via-cyan-400 to-transparent rounded-full" />
            <div className="absolute top-1/2 right-0 w-2 h-24 bg-gradient-to-b from-transparent via-cyan-400 to-transparent rounded-full" />
            
            <DialogHeader>
              <DialogTitle 
                className="text-4xl md:text-5xl font-bold mb-8 text-white text-center"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Hippocratic Oath
              </DialogTitle>
            </DialogHeader>
            
            <div className="w-24 h-1 mx-auto mb-8 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            
            <p className="text-xl text-cyan-50 leading-relaxed text-center relative z-10">
              {content}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
