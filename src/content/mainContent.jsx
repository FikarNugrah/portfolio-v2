import { AiOutlineHome } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1000,
});

export default function MainContent() {
  return (
    <>
      <div className="main-content" id="home">
        <p className="introduce" data-aos="fade-right" data-aos-duration="1000">
          <AiOutlineHome />
          INTRODUCE
        </p>
        <p className="intro" data-aos="fade-right" data-aos-duration="1400">
          Say Hallo! From <span>Fikar</span>, a student and junior developer
          <span>.</span>
        </p>
        <p
          className="support-intro"
          data-aos="fade-right"
          data-aos-duration="1700"
        >
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
