import { AiOutlineHome } from "react-icons/ai";

export default function MainContent() {
  return (
    <>
      <div className="main-content" data-aos="fade-right" id="home">
        <p className="introduce">
          <AiOutlineHome />
          INTRODUCE
        </p>
        <p className="intro">
          Say Hallo! From <span>Fikar</span>, a student and junior developer
          <span>.</span>
        </p>
        <p className="support-intro">
          I will develop my skills in the field of web developer, and help
          support me
        </p>
        <div className="status">
          <div className="started" data-aos="fade-right">
            <h1>4+</h1>
            <p>been studying for 4 months</p>
          </div>
          <div className="complated" data-aos="fade-left">
            <h1>30+</h1>
            <p>Has worked on more than 30 projects</p>
          </div>
        </div>
      </div>
    </>
  );
}
