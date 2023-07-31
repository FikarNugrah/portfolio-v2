import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBlock,
  AiOutlineDeploymentUnit,
  AiOutlineComment,
} from "react-icons/ai";

export default function Navigation() {
  return (
    <>
      <section className="side-bar-section">
        <div className="bar-area">
          <div className="bar">
            <a href="#home" className="list-bar">
              <AiOutlineHome />
            </a>
            <p className="title-bar">Home</p>
          </div>
          <div className="bar">
            <a href="#about" className="list-bar">
              <AiOutlineUser />
            </a>
            <p className="title-bar">About</p>
          </div>
          <div className="bar">
            <a href="#skills" className="list-bar">
              <AiOutlineBlock />
            </a>
            <p className="title-bar">Skills</p>
          </div>
          <div className="bar">
            <a href="#project" className="list-bar">
              <AiOutlineDeploymentUnit />
            </a>
            <p className="title-bar">Project</p>
          </div>
          <div className="bar">
            <a href="#contact" className="list-bar">
              <AiOutlineComment />
            </a>
            <p className="title-bar">Contact</p>
          </div>
        </div>
      </section>
    </>
  );
}
