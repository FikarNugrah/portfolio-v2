import React from "react";
import React, { useState, useEffect } from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBlock,
  AiOutlineDeploymentUnit,
  AiOutlineComment,
} from "react-icons/ai";

export default function Navigation() {
  const sections = ["home", "about", "skills", "project", "contact"];
  const [activeSection, setActiveSection] = useState(sections[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate which section is in view
      const sectionInView = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          return top <= windowHeight / 2 && bottom >= windowHeight / 2;
        }
        return false;
      });

      if (sectionInView) {
        setActiveSection(sectionInView);
      }
    };

    // Add event listener for scrolling
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return (
    <>
      <section className="navigation-section">
        <div className="navigation-area" data-aos="fade-down">
          <div className="navigation">
            <a
              href="#home"
              onClick={() => setActiveSection("home")}
              className={
                activeSection === "home" ? "list-nav nav-active" : "list-nav"
              }
            >
              <AiOutlineHome />
            </a>
            <p className="title-nav">Home</p>
          </div>
          <div className="navigation">
            <a
              href="#about"
              onClick={() => setActiveSection("about")}
              className={
                activeSection === "about" ? "list-nav nav-active" : "list-nav"
              }
            >
              <AiOutlineUser />
            </a>
            <p className="title-nav">About</p>
          </div>
          <div className="navigation">
            <a
              href="#skills"
              onClick={() => setActiveSection("skills")}
              className={
                activeSection === "skills" ? "list-nav nav-active" : "list-nav"
              }
            >
              <AiOutlineBlock />
            </a>
            <p className="title-nav">Skills</p>
          </div>
          <div className="navigation">
            <a
              href="#project"
              onClick={() => setActiveSection("project")}
              className={
                activeSection === "project" ? "list-nav nav-active" : "list-nav"
              }
            >
              <AiOutlineDeploymentUnit />
            </a>
            <p className="title-nav">Project</p>
          </div>
          <div className="navigation">
            <a
              href="#contact"
              onClick={() => setActiveSection("contact")}
              className={
                activeSection === "contact" ? "list-nav nav-active" : "list-nav"
              }
            >
              <AiOutlineComment />
            </a>
            <p className="title-nav">Contact</p>
          </div>
        </div>
      </section>
    </>
  );
}
