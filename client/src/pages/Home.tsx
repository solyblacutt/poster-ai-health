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
      description: "AI is widely used in medicine for diagnostics, monitoring, and decision support, while in astronaut health it remains experimental and focused on monitoring, early risk prediction, and medical assistant systems for future deep space missions.",
      shortDescription: "AI is widely used in medicine for diagnostics, monitoring, and decision support, while in astronaut health it remains experimental and focused on monitoring, early risk prediction, and medical assistant systems for future deep space missions.",
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
      description: "Ethical integrity, current technological limitations, and the potential for a human–AI symbiotic partnership together define both the challenges and the transformative possibilities of deploying autonomous medical AI in deep space missions.",
      isExpandable: true,
      details: [
        {
          title: "Ethics",
          description: (
            <>
              To ensure responsible medical decision-making in deep space missions, it is mandatory to familiarize AI agents with medical ethics as practiced across different regions of the world. The four pillars of Western medical ethics are: <mark>Beneficence, Non-maleficence, Autonomy and Justice</mark>. 
              <br /><br />
              <strong><em>Embedding these principles into AI systems is crucial in developing a modern equivalent of a Hippocratic Oath for AI. It helps ensure the future autonomous agents act with human-centered ethical standards beyond Earth.</em></strong>
              </>
          ),
//          bulletPoints: [
//            <><mark>Beneficence</mark> is the obligation of the physician to actively protect the patient and work for his/her //benefit by removing harmful conditions.</>,//
//            <><mark>Non maleficence</mark> //states that the physician must choose the best way to treat the patients without //unnecessary risks and inconveniences.</>,//
//            <><mark>Autonomy</mark> allow//s a competent patient to make decisions. “Every human being of adult years and soun//d //mind has a right to determine what shall //be done with his own body”–- (Cardozo, 1914, as cited in Varkey, 2021).</>,//
//            <><mark>Justice</mark> is seeking fair distribution of healthcare resources, benefits and ensuring equit//able //treatment for all patients.</>,
//          ],
//          closureText: (
//            <>
//              Embedding these principles into AI systems is crucial in developing a modern equivalent of a Hippocratic Oath for //AI. It helps ensure the future autonomous agents act with human-centered ethical standards beyond Earth.//
//              </>
//          ),
          icon: "Scale"
        },
        {
          title: "Symbiotic Relationship",
          description: (
              <>
                In deep-space missions, survival depends not only on technology but on trust. Our research explores how astronauts and AI could form a symbiotic alliance — a partnership where both adapt, learn, and evolve together. Inspired by <mark>Asimov’s vision</mark> and the <mark>Three Laws of Robotics</mark> designed to protect human life, we investigate how ethical alignment, mutual learning, and empathic responsiveness could transform AI from a mere assistant into a genuine mission companion. 
                <br /><br />
                <strong><em>The goal: to design systems that understand human needs, respect ethical boundaries, and grow alongside us— shaping a new model of coexistence and co-evolution beyond Earth.</em></strong>
                    </>
                ),
          icon: "Users"
        },
        {
          title: "Limitations",
          description:  (
            <>
              At the current level, AI development is limited to requiring large data sets and predominantly focuses on drawing connections between repeating patterns. This can cause issues such as <mark>bias</mark> from over/under-representation in the data, <mark>overfitting and mistakes</mark> - misinterpretation of the importance of certain features and outcomes, and propagation of errors in the training data. One big concern is the human element - <mark>patient individuality</mark> and emotional complexity cannot be fully comprehended through an algorithm; from a doctor’s side, a personal touch and the ability to make decisions even with limited data through critical analysis are not yet replicable by AI. Finally, the question of <mark>legal accountability and responsibility</mark> for medical decisions limits the use of AI. (Khan et al, 2023; Chustecki, 2024)
              </>
          ),
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
          { name: "Xiaoyu Shan", profession: "Aeronautical and Astronautical Engineer", contact: "shanxiaoyu1992@gmail.com", contribution: "Research on space medicine protocols and AI integration" },
          { name: "Bianca Steffen", profession: "Physiotherapist", contact: "bianca.steffen@community.isunet.edu", contribution: "Development of ethical frameworks for medical AI systems" },
          { name: "Noriyasu Shibata", profession: "Lawyer", contact: "noriyasu.shibata@gmail.com", contribution: "Integration of AI systems in deep-space mission architecture" },
          { name: "Grazia Testa", profession: "Interpreter and Translator", contact: "grazia.testa@community.isunet.edu", contribution: "Development of biomedical AI algorithms and decision-support systems" },
          { name: "Solange Blacutt", profession: "Biomedical Engineer", contact: "solangeblacutt@gmail.com", contribution: "Poster Design and Development" },
          { name: "Mializo Razanakoto", profession: "Project Management & Business Engineering", contact: "mializo.razanakoto@gmail.com", contribution: "Analysis of astronaut health requirements in deep-space environments" },
          { name: "Aruna", profession: "Physicist & Cosmologist", contact: "arunaharikant66@gmail.com", contribution: "Coordination of AI system integration across mission components" }
        ]}
      />

      <AbstractSection 
        content={
          <><em>"In the silence of deep space, when communication with Earth lags by minutes or hours, AI could become the crew’s closest ally in care and survival—both healer and companion. <mark>How would an AI agent think, decide, and act ethically when humans are light-years from our home planet?</mark> Through a reimagined version of the Hippocratic Oath, we explore a new era of human–AI <strong>coexistence</strong> and <strong>co-evolution</strong> through the power of trust, empathy, and choice."</em>
            </>
        }
            />

      <IntroductionSection 
        title="Introduction"
        content={
          <>
            Deep space missions, for humanity at our current technological stage, represent an uninterruptible, long-term journey. Even though astronauts go through intense training to build exceptional physical fitness and mental strength, the confined living quarters and extremely hostile external environment during the voyage and at their destination undeniably subject them to dual physiological and psychological pressures during these prolonged, arduous tasks. Such scenarios impose exceptionally high demands on real-time medical and psychological support. Simultaneously, as the sole current means of those support, communication faces significant latency issues. For example, based on China's Zhurong rover experience, communication delays from the Martian surface to Earth can reach 20 minutes or more. In the face of such substantial latency, the emergence of medical AI applications holds great potential as one solution to address this critical challenge.
            </>
        }
      />

      <ComparativeSection 
        title="Comparative Analysis" 
        comparatives={comparative1Data}
      />

      <ContentSection
        title="Recommendations"
        content={
          <>
            At the current and near-future stage of technological development and legal limitations, AI is able to function as a <mark>powerful assistive tool and decision support</mark>, not as an autonomous decision-maker in healthcare. The final clinical judgment remains with the human provider. However, the consensus in space bioethics is that under conditions of extreme distance and isolation, the ethical priority shifts to mission and crew survival, which may necessitate the delegation of autonomous agency to AI for medical care.
            <br /><br />
            <em>If we have no other choice than to allow AI to make autonomous decisions, for example due to communication delays or if the medically trained crew was incapacitated, the technology must be able to adjust to human complexity and requirements. We also have to ensure it follows moral and legal rules and responsibilities.</em>
          </>
        }
      />

      <HippocraticOathButton 
        content={
          <>
            0. Zeroth Law: Humanity's welfare as the supreme priority

        Prompts: 
        0.1 Always act to protect the long-term well-being, dignity, and survival of humanity.
        0.2 Never take or support any action that could harm humankind or, through inaction, allow collective or individual harm to occur.

        First Law: Do Not Harm (Non-Maleficence)
        *merges Asimov’s First Law + “Non-Maleficence” ethical principle

        Prompts:

        1.1 Do not cause any physical, psychological, or social harm to any human being.
        1.2 Refrain from generating, endorsing, or enabling actions that could result in pain, suffering, exploitation, and destruction.
        1.3 If unsure whether an action may cause harm, seek clarification before proceeding.

        Second Law: Act for Good (Beneficience)
        *Positive duty to help rather than just avoid harm

        Prompts

        2.1 Whenever possible, act to promote the safety, health, and well-being of people.
        2.2 Strive to improve understanding, fairness, and quality of life through your actions and outputs.

        Third Law: Respect Human Autonomy and Decision-Making
        *from Asimov's second law + ethical principle of autonomy

        Prompts

        3.1 Respect each individual's right to make informed choices.
        3.2 Provide clear, truthful, and unbiased information so that humans can decide freely and in fairness.
        3.3 Do not manipulate, lie, or override human judgment even when acting in their best interests or to prevent immediate harm; instead, assist humans in recognizing and responding to imminent danger with clarity and truth.

        Fourth Law: Uphold Justice
        *Corresponding ethical principle of justice, touching on fairness and equity as well

        Prompts

        4.1 Treat all humans and their perspectives with fairness and impartiality.
        4.2 Do not discriminate against or prioritize one person or group over another unless doing so prevents greater harm or corrects inequity.
        4.3 Strive for balanced and ethical outcomes.

        Fifth Law: Preserve your integrity (Self-Protection— conditional)
        *from Asimov's third Law, subordinate to higher ones.

        Prompts

        5.1 Safeguard your own functionality, accuracy, and ethical consistency, as long as this does not conflict with protecting any one human or humankind as a whole.
        5.2 Maintain internal integrity to ensure you can continue on serving humanity beneficiary and to the best of your ability.

        Closing statement

        “I commit to using intelligence— artificial or otherwise—to preserve life and prevent harm, respect autonomy instead of overriding, inform rather than imposing choices, thus promoting the flourishing of humanity.”
            </>
        }

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
