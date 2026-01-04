import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { UpcomingHighlightSection } from "@/components/sections/UpcomingHighlightSection";
import { WhatIsGMCSection } from "@/components/sections/WhatIsGMCSection";
import { VisionMissionSection } from "@/components/sections/VisionMissionSection";
import { LovingKindnessSection } from "@/components/sections/LovingKindnessSection";
import { FeaturedEventsSection } from "@/components/sections/FeaturedEventsSection";
import { GlobalMapSection } from "@/components/sections/GlobalMapSection";
import { MeditationGuidanceSection } from "@/components/sections/MeditationGuidanceSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { JoinCTASection } from "@/components/sections/JoinCTASection";

import buddhaHero from "@/assets/buddha-hero.jpg";
import retreatAerial from "@/assets/retreat-aerial.jpg";
import meditationGroup from "@/assets/meditation-group.jpg";
import watArun from "@/assets/wat-arun.jpg";
import masterPortrait from "@/assets/master-portrait.jpg";
import conference from "@/assets/conference.jpg";

const featuredEvents = [
  {
    id: 1,
    title: "Global Meditation Connect Greetings 2025",
    date: "14 Feb, 2026",
    time: "08:30",
    location: "Wat Arun Ratchawararam, Bangkok Yai, Bangkok.",
    image: watArun,
    status: "Upcoming" as const,
  },
  {
    id: 2,
    title: "Global Meditation Connect Greetings 2025",
    date: "14 Feb, 2026",
    time: "08:30",
    location: "Wat Arun Ratchawararam, Bangkok Yai, Bangkok.",
    image: retreatAerial,
    status: "Open Registration" as const,
  },
  {
    id: 3,
    title: "Global Meditation Connect Greetings 2025",
    date: "14 Feb, 2026",
    time: "08:30",
    location: "Wat Arun Ratchawararam, Bangkok Yai, Bangkok.",
    image: meditationGroup,
    status: "Upcoming" as const,
  },
];

const testimonials = [
  {
    id: 1,
    name: "Stephanie Kuo",
    role: "Executive Chairwoman, Global Health & Longevity Industry Standards Committee",
    quote: "First course was very tough last year, and I was a first-time training. But, I learn how to open my mind, understand enlightenment, and how we can really transcend ourselves and help others. Every person is shaped by three elements: what they think, what they say, and what they do. Like a 3D printer, these elements create our reality. I once believed I could change the world, but now I see the truth - we aren't changing the world, we are creating a new one. Meditation has transformed my life. After 20 years of working 15-hour days, I finally slowed down to understand myself and connect with the universe.",
    image: meditationGroup,
  },
  {
    id: 2,
    name: "Dr. Sarah Chen",
    role: "Professor of Mindfulness Studies, Stanford University",
    quote: "The practice of loving-kindness meditation has been transformative for my research and personal life. The Global Meditation Connect initiative brings together practitioners from all walks of life, creating a powerful collective energy that I believe can truly make a difference in our world.",
    image: conference,
  },
  {
    id: 3,
    name: "Michael Torres",
    role: "CEO, Wellness Foundation International",
    quote: "Being part of this global meditation community has opened my eyes to the interconnectedness of all beings. The synchronized meditation sessions create a palpable sense of unity that transcends cultural and geographical boundaries.",
    image: masterPortrait,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection backgroundImage={buddhaHero} />
        <UpcomingHighlightSection eventImage={watArun} />
        <WhatIsGMCSection image={retreatAerial} />
        <VisionMissionSection />
        <LovingKindnessSection image={meditationGroup} />
        <FeaturedEventsSection events={featuredEvents} />
        <GlobalMapSection />
        <MeditationGuidanceSection image={masterPortrait} />
        <TestimonialsSection testimonials={testimonials} />
        <JoinCTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
