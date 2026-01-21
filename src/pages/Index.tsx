import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { PublicationsSection } from "@/components/sections/PublicationsSection";
import { ExtracurricularsSection } from "@/components/sections/ExtracurricularsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <div className="section-divider" />
      <ProjectsSection />
      <ExperienceSection />
      <PublicationsSection />
      <ExtracurricularsSection />
      <AchievementsSection />
      <ContactSection />
    </main>
  );
};

export default Index;
