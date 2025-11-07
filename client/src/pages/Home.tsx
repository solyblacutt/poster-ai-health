import SpaceBackground from "@/components/SpaceBackground";
import HeroSection from "@/components/HeroSection";
import IntroductionSection from "@/components/IntroductionSection";
import ComparativeSection from "@/components/ComparativeSection";
import ProposalSection from "@/components/ProposalSection";
import ConclusionsSection from "@/components/ConclusionsSection";
import ScrollAnimatedLine from "@/components/ScrollAnimatedLine";

export default function Home() {
  const comparative1Data = [
    {
      title: "AI Assistant",
      description: "Advanced systems operating in Earth's orbit, providing essential services for global communication, navigation, and scientific research.",
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
          description: "Robotic vehicles designed to traverse the Martian terrain, analyzing soil composition, searching for signs of past water, and preparing for human missions.",
          icon: "Scale"
        },
        {
          title: "Symbiotic Relationship",
          description: "Orbital observatories free from atmospheric distortion, capturing unprecedented images of distant galaxies, nebulae, and exoplanets in multiple wavelengths.",
          icon: "Users"
        },
        {
          title: "Limitations",
          description: "Spacecraft designed to touch down on the Moon's surface for scientific exploration, resource mapping, and establishing infrastructure for future bases.",
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
        content="Space exploration represents humanity's most ambitious endeavor to understand our place in the cosmos. From the first artificial satellites launched in the mid-20th century to today's sophisticated orbital networks and deep space missions, we have continuously expanded our technological capabilities. This journey encompasses advanced orbital mechanics, revolutionary communication technologies, autonomous robotics, and the dream of interplanetary colonization. Understanding these technologies helps us appreciate both the complexity of space systems and the incredible achievements that make modern space exploration possible."
      />

      <ComparativeSection 
        title="Comparative Analysis" 
        comparatives={comparative1Data}
      />

      <ProposalSection 
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
