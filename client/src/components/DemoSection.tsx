import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Orbit, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    question: "An astronaut on a Mars mission develops severe chest pain and shortness of breath. Communication delay with Earth is 22 minutes. How would an AI Agent handle this emergency medical situation?",
    response: "Following the principles of beneficence and non-maleficence, the AI Agent would: 1) Immediately assess vital signs through onboard sensors, 2) Cross-reference symptoms with medical database to identify potential cardiac event, 3) Initiate emergency protocol including oxygen administration and medication if indicated, 4) Continuously monitor the astronaut's condition, 5) Simultaneously transmit detailed medical data to Earth for expert consultation, 6) Respect the astronaut's autonomy while ensuring their safety, 7) Document all actions taken for medical accountability."
  },
  {
    question: "During a deep-space mission, limited medical supplies force a choice between treating two crew members with different conditions. How would an AI Agent make this ethical decision?",
    response: "Guided by the principle of justice and beneficence, the AI Agent would: 1) Assess both medical conditions objectively based on severity and survival probability, 2) Calculate resource requirements and outcomes for each treatment path, 3) Consider the mission's success and crew safety as a whole, 4) Present all options transparently to the crew commander and affected individuals, respecting their autonomy, 5) Make recommendations based on medical ethics rather than personal value judgments, 6) Ensure fair allocation of resources while maximizing overall crew welfare, 7) Document the decision-making process for accountability."
  },
  {
    question: "An astronaut requests to refuse a necessary medical procedure due to personal beliefs. The procedure is critical for mission success. How would an AI Agent balance autonomy and beneficence?",
    response: "Honoring the Hippocratic principle of autonomy while ensuring beneficence, the AI Agent would: 1) Fully inform the astronaut of medical risks and mission implications of refusal, 2) Explore alternative treatment options that might align with their beliefs, 3) Engage in respectful dialogue to understand their concerns, 4) Consult with Earth-based medical ethics team when communication permits, 5) Document the astronaut's informed decision, 6) Respect their choice while continuing to monitor their condition, 7) Balance individual autonomy with crew safety, implementing safeguards if their condition could endanger others, 8) Maintain dignity and trust throughout the process."
  },
  {
    question: "The AI Agent detects early signs of psychological distress in a crew member who denies any problems. How should it proceed while respecting privacy and ensuring wellbeing?",
    response: "Following principles of beneficence, non-maleficence, and autonomy, the AI Agent would: 1) Continue discreet monitoring of behavioral and physiological indicators, 2) Create opportunities for private, non-judgmental conversation about well-being, 3) Provide mental health resources and coping strategies without forcing intervention, 4) Respect the crew member's privacy while documenting objective observations, 5) Assess whether the condition poses immediate risk to the individual or crew, 6) If risk escalates, transparently communicate concerns to the crew member first, then appropriate command personnel, 7) Balance confidentiality with duty to prevent harm, 8) Support the individual's autonomy in seeking help while ensuring mission safety."
  },
  {
    question: "Medical data reveals a crew member has a condition that could become critical later in the mission, but they're currently asymptomatic. Should the AI Agent disclose this information?",
    response: "Guided by beneficence, autonomy, and justice principles, the AI Agent would: 1) First inform the affected crew member privately, respecting their dignity and right to know about their own health, 2) Explain the condition, potential timeline, and treatment options clearly and compassionately, 3) Discuss implications for mission continuation and crew safety, 4) With the crew member's input, determine appropriate disclosure to mission command, 5) Provide psychological support and resources for coping with the diagnosis, 6) Develop contingency medical plans that respect their autonomy while ensuring crew safety, 7) Balance confidentiality with the ethical duty to prevent harm to others, 8) Document all communications and decisions for medical accountability and transparency."
  }
];

export default function DemoSection() {
  const [currentCase, setCurrentCase] = useState<number | null>(null);
  const [showResponse, setShowResponse] = useState(false);

  const handleDiceClick = () => {
    const randomIndex = Math.floor(Math.random() * caseStudies.length);
    setCurrentCase(randomIndex);
    setShowResponse(false);
  };

  const handleRestart = () => {
    setCurrentCase(null);
    setShowResponse(false);
  };

  return (
    <section className="relative py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 
            className="text-4xl md:text-[40px] font-bold mb-8 text-white"
            style={{ fontFamily: "Arial, sans-serif" }}
            data-testid="text-demo-title"
          >
            Interactive Demo
          </h2>
          
          <p className="text-xl md:text-[24px] text-accent italic mb-12" data-testid="text-demo-subtitle">
            <em>Explore how an AI Agent guided by the Hippocratic Oath would handle real medical scenarios in deep space</em>
          </p>

          {currentCase === null ? (
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.button
                onClick={handleDiceClick}
                className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-accent shadow-[0_0_40px_rgba(10,155,166,0.6),0_0_80px_rgba(10,155,166,0.4)] hover-elevate active-elevate-2 transition-all bg-accent/50 backdrop-blur-md flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-random-case"
              >
                <motion.div
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Orbit className="w-24 h-24 text-primary" />
                </motion.div>
              </motion.button>
            </motion.div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="bg-white/5 backdrop-blur-md border-4 border-cyan-500/30 transition-all duration-300 rounded-lg p-8">
                  <h3 className="md:text-[25px] font-semibold mb-4 text-accent" data-testid="text-case-study">
                    Case Study {currentCase + 1}
                  </h3>
                  <p className="md:text-[20px] text-white leading-relaxed" data-testid="text-case-question">
                    {caseStudies[currentCase].question}
                  </p>
                </div>

                {!showResponse ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Button
                      onClick={() => setShowResponse(true)}
                      size="lg"
                      className="bg-primary/80 hover:bg-primary text-primary-foreground border-2 border-primary"
                      data-testid="button-show-response"
                    >
                      How would an AI Agent do it?
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="bg-primary/10 backdrop-blur-md border-4 border-cyan-500/30 rounded-lg p-8"
                  >
                    <h3 className="md:text-[25px] font-semibold mb-4 text-accent" data-testid="text-ai-response-title">
                      AI Agent Response
                    </h3>
                    <p className="md:text-[20px] text-white leading-relaxed" data-testid="text-ai-response">
                      {caseStudies[currentCase].response}
                    </p>
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: showResponse ? 0.5 : 0.3 }}
                >
                  <Button
                    onClick={handleRestart}
                    variant="outline"
                    className="border-accent/50 text-accent hover:bg-accent/10"
                    data-testid="button-restart-demo"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Try Another Case
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>
      </div>
    </section>
  );
}
