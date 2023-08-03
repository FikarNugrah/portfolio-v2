import { useState } from "react";
import { CgMenuMotion } from "react-icons/cg";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBlock,
  AiOutlineDeploymentUnit,
  AiOutlineComment,
} from "react-icons/ai";

export default function NavMobile() {
  const [menu, setMenu] = useState(false);

  function btnMenu() {
    setMenu(true);
    document.querySelector(".nav-mobile").classList.toggle("blur");
    if (menu === true) {
      setMenu(false);
    }
  }

  const navs = document.querySelectorAll(".nav");
  navs.forEach((nav) => {
    nav.addEventListener("click", function () {
      setMenu(false);
    });
  });

  return (
    <>
      <section className="nav-mobile">
        <button className="btn-nav-menu" onClick={btnMenu}>
          <i className="menu-logo">
            <CgMenuMotion />
          </i>
        </button>
        <section className={menu ? "menu-in menu-out" : "menu-out"}>
          <div className="menu-area">
            <p className="menu-text">Menu</p>
            <div className="list-menu">
              <a href="#home" className="nav">
                <i>
                  <AiOutlineHome />
                </i>
                <p>Home </p>
              </a>
              <a href="#about" className="nav">
                <i>
                  <AiOutlineUser />
                </i>
                <p>About</p>
              </a>
              <a href="#skills" className="nav">
                <i>
                  <AiOutlineBlock />
                </i>
                <p>Skills</p>
              </a>
              <a href="#project" className="nav">
                <i>
                  <AiOutlineDeploymentUnit />
                </i>
                <p>Project</p>
              </a>
              <a href="#contact" className="nav">
                <i>
                  <AiOutlineComment />
                </i>
                <p>Contact</p>
              </a>
            </div>
          </div>
          <div className="list-media-area">
            <div className="list-media">
              <div className="media-outline">
                <a href="https://www.instagram.com/sanc_fikar/?hl=id">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
              <div className="media-outline">
                <a href="https://www.facebook.com/yafikar.paskah/">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </div>
              <div className="media-outline">
                <a href="https://www.youtube.com/channel/UCfd3WGWC8o3-6T1FlnuCVKw">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
              <div className="media-outline">
                <a href="https://www.tiktok.com/@y4fi_yan">
                  <i className="fa-brands fa-tiktok"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
