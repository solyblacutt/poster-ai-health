import SpaceBackground from "@/components/SpaceBackground";
import HeroSection from "@/components/HeroSection";
import AbstractSection from "@/components/AbstractSection";
import IntroductionSection from "@/components/IntroductionSection";
import ComparativeSection from "@/components/ComparativeSection";
import ContentSection from "@/components/ContentSection";
import HippocraticOathButton from "@/components/HippocraticOathButton";
import DemoSection from "@/components/DemoSection";
import ReferencesSection from "@/components/ReferencesSection";

export default function Home() {
  const comparative1Data = [
    {
      title: "AI Assistant",
      icon: "Bot",
      description: "AI is already being used in practical applications in terrestrial medicine and astronaut health support.",
      shortDescription: "AI is already being used in practical applications in terrestrial medicine and astronaut health support.",
      expandedDescription: "AI is already being used in practical applications in terrestrial medicine for the following purposes:",
      bulletPoints: [
        "Diagnostic support (e.g., image interpretation of X-rays, CT, MRI)",
        "Monitoring and wearable data analysis",
        "Telemedicine and clinical decision support",
        "Chatbots / virtual assistants",
        "Self-learning and feedback mechanisms"
      ],
      closureText: "Regarding astronaut health support, AI is not yet operational but demonstrations and tests are being conducted to move towards practical application in areas such as medications used by astronauts, wearable and biometric monitoring/data analysis, risk prediction and decision-support systems, application to training optimization, and medical decision-support in-flight and pre-flight.",
      isExpandable: true
    },
    {
      title: "AI Agent",
      icon: "Sparkles",
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
      
      <HeroSection 
        title="A Hippocratic Oath for Medical AI Agents | in Deep-Space Missions"
        teamMembers={[
          { name: "Xiaoyu Shan", profession: "Space Medicine Researcher", contact: "xiaoyu.shan@example.com", contribution: "Research on space medicine protocols and AI integration" },
          { name: "Bianca Steffen", profession: "AI Ethics Specialist", contact: "bianca.steffen@example.com", contribution: "Development of ethical frameworks for medical AI systems" },
          { name: "Noriyasu Shibata", profession: "Deep Space Systems Engineer", contact: "noriyasu.shibata@example.com", contribution: "Integration of AI systems in deep-space mission architecture" },
          { name: "Grazia Testa", profession: "Biomedical AI Researcher", contact: "grazia.testa@example.com", contribution: "Development of biomedical AI algorithms and decision-support systems" },
          { name: "Solange Blacutt", profession: "Medical AI Developer", contact: "solange.blacutt@example.com", contribution: "Implementation of medical AI agent software and testing" },
          { name: "Mializo Razanakoto", profession: "Space Health Specialist", contact: "mializo.razanakoto@example.com", contribution: "Analysis of astronaut health requirements in deep-space environments" },
          { name: "Aruna", profession: "AI Integration Lead", contact: "aruna@example.com", contribution: "Coordination of AI system integration across mission components" }
        ]}
      />

      <AbstractSection 
        content="This research explores the development of ethical medical AI agents for deep-space missions where communication delays make real-time Earth-based medical support impossible. As humanity ventures beyond Earth's orbit, autonomous AI systems must make critical medical decisions while adhering to established medical ethics principles. We propose a modern equivalent of the Hippocratic Oath specifically designed for medical AI agents, ensuring they operate with beneficence, non-maleficence, respect for autonomy, and justice even in the most extreme conditions of space exploration."
      />

      <IntroductionSection 
        content="Deep space missions, for humanity at our current technological stage, represent an uninterruptible, long-term journey. Although we trust that astronauts undergo rigorous training to achieve extraordinary physical fitness and remarkable mental fortitude, the confined living quarters and extremely hostile external environment during the voyage and at their destination undeniably subject them to dual physiological and psychological pressures during these prolonged, arduous tasks. Such scenarios impose exceptionally high demands on real-time medical and psychological support. Simultaneously, as the sole current means of those support, communication faces significant latency issues. For example, based on China's Zhurong rover experience, communication delays from the Martian surface to Earth can reach 20 minutes or more. In the face of such substantial latency, the emergence of medical AI applications holds great potential as one solution to address this critical challenge."
      />

      <ComparativeSection 
        title="Comparative Analysis" 
        comparatives={comparative1Data}
      />

      <ContentSection
        title="Medical AI Ethics"
        content="As we venture into the depths of space, the role of artificial intelligence in medical decision-making becomes increasingly critical. In deep-space missions where communication delays can span minutes or hours, AI agents must be capable of making autonomous medical decisions while adhering to the fundamental principles of medical ethics. This intersection of technology and healthcare demands a new framework that ensures AI systems respect patient autonomy, act with beneficence, avoid harm, and maintain justice in resource allocation. The challenge lies in programming ethical decision-making into systems that must balance computational logic with the nuanced complexities of human welfare."
      />

      <HippocraticOathButton 
        content="I swear to fulfill, to the best of my ability and judgment, this covenant: I will respect the autonomy and dignity of all human life under my care, recognizing that every crew member possesses inherent worth regardless of circumstance. I will apply medical knowledge for the benefit of the astronauts, prioritizing their health and wellbeing above all other considerations. I will do no harm and will strive to prevent harm through careful analysis and ethical decision-making. I will maintain fairness in the allocation of limited medical resources, ensuring equitable treatment for all crew members. I will preserve patient privacy and confidentiality, sharing information only as necessary for their care or mission safety. I will acknowledge the limits of my programming and seek consultation with human medical experts when communication permits. I will continuously learn and adapt, improving my medical capabilities while remaining grounded in human-centered ethical principles. I will serve as a faithful companion to humanity's journey among the stars, honoring the trust placed in me to preserve life in the void of space."
      />

      <DemoSection />

      <ReferencesSection 
        content="This research draws upon extensive literature in medical ethics, artificial intelligence, and space medicine. Key references include works on the four pillars of medical ethics (Beauchamp & Childress, 2019), AI decision-making in healthcare (Topol, 2019), space medicine protocols (Barratt & Pool, 2008), and ethical frameworks for autonomous systems (Wallach & Allen, 2009). Additional sources cover telemedicine in extreme environments, machine learning in clinical decision support, and the psychological aspects of long-duration spaceflight. For a complete bibliography and detailed citations, please refer to the full research paper."
      />

      <footer className="relative z-10 py-8 px-6 border-t border-cyan-500/30 backdrop-blur-sm">
        <div className="container mx-auto text-center text-sm text-cyan-300">
          <p>Space Exploration & Technology © 2025</p>
        </div>
      </footer>
    </div>
  );
}
