import React from "react";
import MainContent from "../content/mainContent";
import AboutContent from "../content/aboutContent";
import SkillsContent from "../content/skillsContent";
import ProjectContent from "../content/projectContent";

export default function MainHero() {
  return (
    <>
      <section className="main-section">
        <MainContent />
        <AboutContent />
        <SkillsContent />
        <ProjectContent />
      </section>
    </>
  );
}
