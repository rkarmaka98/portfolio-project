import { AboutSection } from "@/components/sections/about";
import { ArticlesSection } from "@/components/sections/articles";
import { ContactSection } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { HeroSection } from "@/components/sections/hero";
import { MoreSection } from "@/components/sections/more";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ArticlesSection />
      <MoreSection />
      <ContactSection />
    </div>
  );
}
