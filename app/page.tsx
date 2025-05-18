import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import SkillsSection from '@/components/sections/SkillsSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="flex flex-col px-12">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  );
}