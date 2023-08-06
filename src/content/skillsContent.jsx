import { AiOutlineBlock, AiOutlineHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoReact,
  BiLogoJavascript,
} from "react-icons/bi";

export default function SkillsContent() {
  return (
    <>
      <section className="skills-content" id="skills">
        <p
          className="header-skills-content"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <AiOutlineBlock />
          MY SKILLS
        </p>
        <p className="Advantages" data-aos="fade-up" data-aos-duration="2000">
          My <span>Advantages</span>
        </p>
        <div className="list-skills">
          <div className="skills" data-aos="fade-up" data-aos-duration="1200">
            <div className="skills-area">
              <i>
                <AiOutlineHtml5 />
              </i>
              <p>Junior</p>
            </div>
            <p className="spek-skills">Html</p>
          </div>
          <div className="skills" data-aos="fade-up" data-aos-duration="1400">
            <div className="skills-area">
              <i>
                <BiLogoCss3 />
              </i>
              <p>Junior</p>
            </div>
            <p className="spek-skills">CSS</p>
          </div>
          <div className="skills" data-aos="fade-up" data-aos-duration="1600">
            <div className="skills-area">
              <i>
                <BiLogoJavascript />
              </i>
              <p>Junior</p>
            </div>
            <p className="spek-skills">Java Script</p>
          </div>
          <div className="skills" data-aos="fade-up" data-aos-duration="1800">
            <div className="skills-area">
              <i>
                <BiLogoTailwindCss />
              </i>
              <p>Junior</p>
            </div>
            <p className="spek-skills">Tailwind CSS</p>
          </div>
          <div className="skills" data-aos="fade-up" data-aos-duration="2000">
            <div className="skills-area">
              <i>
                <BiLogoReact />
              </i>
              <p>Junior</p>
            </div>
            <p className="spek-skills">React JS</p>
          </div>
        </div>
      </section>
    </>
  );
}
