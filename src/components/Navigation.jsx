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
      <section className="navigation-section">
        <div className="navigation-area">
          <div className="navigation">
            <a href="#home" className="list-nav nav-active">
              <AiOutlineHome />
            </a>
            <p className="title-nav">Home</p>
          </div>
          <div className="navigation">
            <a href="#about" className="list-nav">
              <AiOutlineUser />
            </a>
            <p className="title-nav">About</p>
          </div>
          <div className="navigation">
            <a href="#skills" className="list-nav">
              <AiOutlineBlock />
            </a>
            <p className="title-nav">Skills</p>
          </div>
          <div className="navigation">
            <a href="#project" className="list-nav">
              <AiOutlineDeploymentUnit />
            </a>
            <p className="title-nav">Project</p>
          </div>
          <div className="navigation">
            <a href="#contact" className="list-nav">
              <AiOutlineComment />
            </a>
            <p className="title-nav">Contact</p>
          </div>
        </div>
      </section>
    </>
  );
}
