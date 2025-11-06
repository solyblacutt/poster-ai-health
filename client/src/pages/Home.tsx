import SpaceBackground from "@/components/SpaceBackground";
import FloatingObjects from "@/components/FloatingObjects";
import HeroSection from "@/components/HeroSection";
import IntroductionSection from "@/components/IntroductionSection";
import ComparativeSection from "@/components/ComparativeSection";
import ProposalSection from "@/components/ProposalSection";
import ConclusionsSection from "@/components/ConclusionsSection";

import issImage from "@assets/generated_images/ISS_satellite_orbital_view_609a170c.png";
import satImage from "@assets/generated_images/Communication_satellite_in_orbit_627a2035.png";
import marsImage from "@assets/generated_images/Mars_rover_exploration_scene_0422cee2.png";
import telescopeImage from "@assets/generated_images/Space_telescope_in_orbit_61b62f42.png";

export default function Home() {
  const comparative1Data = [
    {
      title: "Orbital Technology",
      description: "Advanced systems operating in Earth's orbit, providing essential services for global communication, navigation, and scientific research.",
      isExpandable: false
    },
    {
      title: "Deep Space Exploration",
      description: "Missions venturing beyond Earth's orbit to study distant planets, moons, and celestial phenomena, expanding our understanding of the universe.",
      isExpandable: true,
      details: [
        {
          title: "Mars Surface Rovers",
          description: "Robotic vehicles designed to traverse the Martian terrain, analyzing soil composition, searching for signs of past water, and preparing for human missions.",
          image: marsImage
        },
        {
          title: "Space Telescopes",
          description: "Orbital observatories free from atmospheric distortion, capturing unprecedented images of distant galaxies, nebulae, and exoplanets in multiple wavelengths.",
          image: telescopeImage
        },
        {
          title: "Lunar Landing Missions",
          description: "Spacecraft designed to touch down on the Moon's surface for scientific exploration, resource mapping, and establishing infrastructure for future bases.",
          image: issImage
        },
        {
          title: "Interplanetary Probes",
          description: "Unmanned spacecraft traveling to outer planets and beyond, collecting data on planetary atmospheres, magnetic fields, and cosmic radiation.",
          image: satImage
        }
      ]
    }
  ];

  return (
    <div className="relative min-h-screen">
      <SpaceBackground />
      <FloatingObjects />
      
      <HeroSection 
        title="Space Exploration & Technology"
        teamMembers={["Dr. Maria Garcia", "Prof. John Smith", "Dr. Sarah Chen", "Alex Rodriguez"]}
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
