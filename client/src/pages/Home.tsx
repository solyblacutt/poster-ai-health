import SpaceBackground from "@/components/SpaceBackground";
import HeroSection from "@/components/HeroSection";
import IntroductionSection from "@/components/IntroductionSection";
import ComparativeSection from "@/components/ComparativeSection";
import GridSection from "@/components/GridSection";
import ContentSection from "@/components/ContentSection";
import HippocraticOathButton from "@/components/HippocraticOathButton";
import ConclusionsSection from "@/components/ConclusionsSection";
import ScrollAnimatedLine from "@/components/ScrollAnimatedLine";

export default function Home() {
  const comparative1Data = [
    {
      title: "AI Assistant",
      description: "AI is already being used in practical applications in terrestrial medicine for the following purposes: diagnostic support (e.g., image interpretation of X-rays, CT, MRI); monitoring and wearable data analysis; telemedicine and clinical decision support; chatbots / virtual assistants; self-learning and feedback mechanisms. Regarding astronaut health support, AI is not yet operational but demonstrations and tests are being conducted to move towards practical application in the following areas; medications used by astronauts; wearable and biometric monitoring/data analysis; risk prediction and decision-support systems; application to training optimization; medical decision-support in-flight and pre-flight.",
      isExpandable: true,
      details: [
        {
          title: "Real-time Support",
          description: "Provides immediate assistance and guidance for routine medical tasks, helping healthcare professionals make quick decisions in standard situations.",
          icon: "Clock"
        },
        {
          title: "Data Analysis",
          description: "Processes large volumes of medical data to identify patterns and provide insights, supporting evidence-based decision making.",
          icon: "BarChart"
        },
        {
          title: "Task Automation",
          description: "Handles repetitive administrative tasks and documentation, allowing medical staff to focus on patient care and complex decision-making.",
          icon: "Cpu"
        }
      ]
    },
    {
      title: "AI Agent",
      description: "Missions venturing beyond Earth's orbit to study distant planets, moons, and celestial phenomena, expanding our understanding of the universe.",
      isExpandable: true,
      details: [
        {
          title: "Ethics",
          description: "To ensure responsible medical decision-making in deep space missions, it is mandatory to familiarize AI agents with medical ethics as practiced across different regions of the world. The four pillars of Western medical ethics are: Beneficence, Non-maleficence, Autonomy and Justice. Beneficence is the obligation of the physician to actively protect the patient and work for his/her benefit by removing harmful conditions. Non maleficence states that the physician must choose the best way to treat the patients without unnecessary risks and inconveniences. Autonomy allows a competent patient to make decisions. “Every human being of adult years and sound mind has a right to determine what shall be done with his own body”–- (Cardozo, 1914, as cited in Varkey, 2021). Justice is seeking fair distribution of healthcare resources, benefits and ensuring equitable treatment for all patients. Embedding these principles into AI systems is crucial in developing a modern equivalent of a Hippocratic Oath for AI. It helps ensure the future autonomous agents act with human-centered ethical standards beyond Earth.",
          icon: "Scale"
        },
        {
          title: "Symbiotic Relationship",
          description: "In deep-space missions, survival depends not only on technology but on trust. Our research explores how astronauts and AI could form a symbiotic alliance — a partnership where both adapt, learn, and evolve together. Inspired by Asimov’s vision and the Three Laws of Robotics designed to protect human life, we investigate how ethical alignment, mutual learning, and empathic responsiveness could transform AI from a mere assistant into a genuine mission companion. The goal: to design systems that understand human needs, respect ethical boundaries, and grow alongside us— shaping a new model of coexistence and co-evolution beyond Earth.",
          icon: "Users"
        },
        {
          title: "Limitations",
          description: "At the current level, AI development is limited to requiring large data sets and predominantly focuses on drawing connections between repeating patterns. This can cause issues such as bias from over/under-representation in the data, overfitting and mistakes - misinterpretation of the importance of certain features and outcomes, and propagation of errors in the training data. One big concern is the human element - patient individuality and emotional complexity cannot be fully comprehended through an algorithm; from a doctor’s side, a personal touch and the ability to make decisions even with limited data through critical analysis are not yet replicable by AI. Finally, the question of legal accountability and responsibility for medical decisions limits the use of AI. (Khan et al, 2023; Chustecki, 2024)",
          icon: "AlertCircle"
        }
      ]
    }
  ];

  return (
    <div className="relative min-h-screen">
      <SpaceBackground />
      <ScrollAnimatedLine />
      
      <HeroSection 
        title="A Hippocratic Oath for Medical AI Agents in Deep-Space Missions"
        teamMembers={["Xiaoyu Shan", "Bianca Steffen", "Noriyasu Shibata", "Grazia Testa", "Solange Blacutt", "Mializo Razanakoto", "Aruna"]}
      />

      <IntroductionSection 
        content="Deep space missions, for humanity at our current technological stage, represent an uninterruptible, long-term journey. Although we trust that astronauts undergo rigorous training to achieve extraordinary physical fitness and remarkable mental fortitude, the confined living quarters and extremely hostile external environment during the voyage and at their destination undeniably subject them to dual physiological and psychological pressures during these prolonged, arduous tasks. Such scenarios impose exceptionally high demands on real-time medical and psychological support. Simultaneously, as the sole current means of those support, communication faces significant latency issues. For example, based on China's Zhurong rover experience, communication delays from the Martian surface to Earth can reach 20 minutes or more. In the face of such substantial latency, the emergence of medical AI applications holds great potential as one solution to address this critical challenge."
      />

      <ComparativeSection 
        title="Comparative Analysis" 
        comparatives={comparative1Data}
      />

      <GridSection
        title="Core Principles"
        introduction="Establishing foundational guidelines for medical AI systems operating in extreme deep-space environments."
        items={[
          { title: "Patient Autonomy", icon: "Heart" },
          { title: "Intelligent Decision-Making", icon: "Brain" },
          { title: "Safety & Protection", icon: "Shield" },
          { title: "Adaptability", icon: "Telescope" }
        ]}
      />

      <ContentSection
        title="Medical AI Ethics"
        content="As we venture into the depths of space, the role of artificial intelligence in medical decision-making becomes increasingly critical. In deep-space missions where communication delays can span minutes or hours, AI agents must be capable of making autonomous medical decisions while adhering to the fundamental principles of medical ethics. This intersection of technology and healthcare demands a new framework that ensures AI systems respect patient autonomy, act with beneficence, avoid harm, and maintain justice in resource allocation. The challenge lies in programming ethical decision-making into systems that must balance computational logic with the nuanced complexities of human welfare."
      />

      <HippocraticOathButton 
        content="The future of space exploration envisions a multi-planetary civilization where humanity establishes permanent settlements beyond Earth. Through international collaboration, development of sustainable life support systems, and innovative propulsion technologies like nuclear thermal engines and ion drives, we will transform from mere visitors to true inhabitants of the solar system. This ambitious vision includes self-sufficient lunar bases serving as waypoints, thriving Martian colonies producing their own resources, and crewed missions to asteroids for mining operations. Advanced space telescopes will search for habitable exoplanets while quantum communication networks will connect our growing presence across the cosmos."
      />

      <ConclusionsSection 
        content="Space exploration continues to inspire and unite humanity in pursuit of knowledge and discovery. Through relentless technological innovation, unprecedented international cooperation, and unwavering determination, we are steadily unlocking the profound mysteries of the cosmos. As we gaze toward the stars with increasingly sophisticated instruments, we carry forward the dreams of past pioneers who dared to imagine the impossible, while simultaneously shouldering the aspirations of future generations who will inherit the fruits of our labor. United in our quest to explore the infinite frontier, we stand at the threshold of becoming a truly spacefaring civilization."
      />

      <footer className="relative z-10 py-8 px-6 border-t border-purple-500/30 backdrop-blur-sm">
        <div className="container mx-auto text-center text-sm text-purple-300">
          <p>Space Exploration & Technology © 2025</p>
        </div>
      </footer>
    </div>
  );
}
