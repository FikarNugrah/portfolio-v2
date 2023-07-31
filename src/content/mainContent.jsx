import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBlock,
  AiOutlineDeploymentUnit,
  AiOutlineComment,
} from "react-icons/ai";

export default function MainContent() {
  return (
    <>
      <div className="main-content" id="home">
        <p className="introduce">
          <AiOutlineHome />
          INTRODUCE
        </p>
        <p className="intro">
          Say Hallo! From <span>Fikar</span>, a student and junior developer
        </p>
        <p className="support-intro">
          I will develop my skills in the field of web developer, and help
          support me
        </p>
        <div className="status">
          <div className="started">
            <h1>4+</h1>
            <p>been studying for 4 months</p>
          </div>
          <div className="complated">
            <h1>30+</h1>
            <p>Has worked on more than 30 projects</p>
          </div>
        </div>
      </div>
    </>
  );
}
