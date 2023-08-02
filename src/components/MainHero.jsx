import React from "react";
import MainContent from "../content/mainContent";
import AboutContent from "../content/aboutContent";
import SkillsContent from "../content/skillsContent";
import ProjectContent from "../content/projectContent";
import Contact from "../content/contact";
import Hero from "./hero";

export default function MainHero() {
  return (
    <>
      <section className="main-section">
        <Hero />
      </section>
      <section className="main">
        <MainContent />
        <AboutContent />
        <SkillsContent />
        <ProjectContent />
        <Contact />
      </section>
    </>
  );
}
