import React from "react";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import projct1 from "../assets/img1.png";
import projct2 from "../assets/img2.png";
import projct3 from "../assets/img3.png";
import projct4 from "../assets/img4.png";

export default function ProjectContent() {
  return (
    <>
      <section className="project-content" id="project">
        <p
          className="header-project-content"
          data-aos="fade-up"
          data-aos-duration="1100"
        >
          <AiOutlineDeploymentUnit />
          PROJECTS
        </p>
        <p
          className="top-text-projects"
          data-aos="fade-up"
          data-aos-duration="1300"
        >
          my <span>project</span> lately.
        </p>
        <div className="project-areas">
          <div
            className="prjct-area"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="project">
              <img width={300} src={projct1} alt="" />
            </div>
            <p className="time">4 months ago - Random Website</p>
          </div>
          <div
            className="prjct-area"
            data-aos="fade-up"
            data-aos-duration="1700"
          >
            <div className="project">
              <img width={300} src={projct2} alt="" />
            </div>
            <p className="time">3 months ago - Game Store</p>
          </div>
          <div
            className="prjct-area"
            data-aos="fade-up"
            data-aos-duration="1900"
          >
            <div className="project">
              <img width={300} src={projct3} alt="" />
            </div>
            <p className="time">1 months ago - Streaming Movie</p>
          </div>
          <div
            className="prjct-area"
            data-aos="fade-up"
            data-aos-duration="2100"
          >
            <div className="project">
              <img width={300} src={projct4} alt="" />
            </div>
            <p className="time">2 weeks ago - Form Login</p>
          </div>
        </div>
      </section>
    </>
  );
}
