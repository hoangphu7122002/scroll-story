import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OurStorySection } from "@/components/sections/OurStorySection";
import { MasterBioSection } from "@/components/sections/MasterBioSection";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { WorldElitesSection } from "@/components/sections/WorldElitesSection";
import { FoundationSection } from "@/components/sections/FoundationSection";
import { CredibilitySection } from "@/components/sections/CredibilitySection";
import { MissionsSection } from "@/components/sections/MissionsSection";

import masterPortrait from "@/assets/master-portrait.jpg";
import buddhaHero from "@/assets/buddha-hero.jpg";
import retreatAerial from "@/assets/retreat-aerial.jpg";
import meditationGroup from "@/assets/meditation-group.jpg";
import chinaMission from "@/assets/china-mission.jpg";
import japanMission from "@/assets/japan-mission.jpg";
import conference from "@/assets/conference.jpg";
import award from "@/assets/award.jpg";

const missions = [
  {
    title: "Great Missions in China",
    location: "China",
    image: chinaMission,
    description: "Spreading the authentic teachings of Buddha across the vast landscape of China, connecting with local Buddhist communities and establishing lasting partnerships for Dhamma preservation.",
  },
  {
    title: "Great Missions in Japan",
    location: "Japan",
    image: japanMission,
    description: "Building bridges between Thai and Japanese Buddhist traditions, fostering mutual understanding and collaborative efforts in meditation practice and spiritual development.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <OurStorySection storyImage={retreatAerial} />
        
        <MasterBioSection 
          portraitImage={masterPortrait}
          groupImage={meditationGroup}
        />
        
        <AwardsSection 
          conferenceImage={conference}
          awardImage={award}
        />
        
        <WorldElitesSection 
          retreatImage={retreatAerial}
          meditationImage={meditationGroup}
        />
        
        <FoundationSection buddhaImage={buddhaHero} />
        
        <CredibilitySection />
        
        <MissionsSection missions={missions} />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
