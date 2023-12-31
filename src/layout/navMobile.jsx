import React from "react";
import { useState, useEffect } from "react";
import { CgMenuMotion } from "react-icons/cg";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBlock,
  AiOutlineDeploymentUnit,
  AiOutlineComment,
  AiOutlineLike,
} from "react-icons/ai";

export default function NavMobile() {
  const [menu, setMenu] = useState(false);
  const [buttonColor, setButtonColor] = useState("white");
  const sections = ["home", "about", "skills", "project", "contact"];
  const [activeSection, setActiveSection] = useState(sections[0]);
  const [like, setLike] = useState(() => {
    const savedLike = localStorage.getItem("like");
    return savedLike ? parseInt(savedLike) : 0;
  });
  const [color, setColor] = useState(() => {
    const savedColor = localStorage.getItem("color");
    return savedColor || "white";
  });
  const [isLiked, setIsLiked] = useState(false);
  const [type, setType] = useState(false);

  const btnMenu = () => {
    setMenu(true);
    setType(true);
    setButtonColor("crimson");
    if (menu === true || type === true) {
      setMenu(false);
      setType(false);
      setButtonColor("white");
    }
  };

  const navs = document.querySelectorAll(".nav");
  navs.forEach((nav) => {
    nav.addEventListener("click", function () {
      setMenu(false);
      setType(false);
      setButtonColor("white");
    });
  });

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

  // LIKE HALAMAN

  const iLike = () => {
    if (!isLiked) {
      setLike((prevLike) => prevLike + 1);
      setColor("crimson");
      setIsLiked(true);
    }
  };

  useEffect(() => {
    localStorage.setItem("like", like.toString());
    localStorage.setItem("color", color);
  }, [like, color]);

  useEffect(() => {
    const alreadyLiked = localStorage.getItem("isLiked");
    if (alreadyLiked) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, []);

  useEffect(() => {
    if (isLiked) {
      localStorage.setItem("isLiked", "true");
    }
  }, [isLiked]);

  return (
    <>
      <section className={type ? "nav-mobile blur" : "nav-mobile"}>
        <button className="btn-nav-menu" data-aos="fade-left" onClick={btnMenu}>
          <i className="menu-logo" style={{ color: buttonColor }}>
            <CgMenuMotion />
          </i>
        </button>
        <section className={menu ? "menu-in menu-out" : "menu-out"}>
          <div className="menu-area">
            <p className="menu-text">Menu</p>
            <div className="list-menu">
              <a href="#home" className="nav">
                <i
                  className={activeSection === "home" ? "list icon-on" : "list"}
                >
                  <AiOutlineHome />
                </i>
                <p
                  className={activeSection === "home" ? "list nav-on" : "list"}
                >
                  Home
                </p>
              </a>
              <a href="#about" className="nav">
                <i
                  className={
                    activeSection === "about" ? "list icon-on" : "list"
                  }
                >
                  <AiOutlineUser />
                </i>
                <p
                  className={activeSection === "about" ? "list nav-on" : "list"}
                >
                  About
                </p>
              </a>
              <a href="#skills" className="nav">
                <i
                  className={
                    activeSection === "skills" ? "list icon-on" : "list"
                  }
                >
                  <AiOutlineBlock />
                </i>
                <p
                  className={
                    activeSection === "skills" ? "list nav-on" : "list"
                  }
                >
                  Skills
                </p>
              </a>
              <a href="#project" className="nav">
                <i
                  className={
                    activeSection === "project" ? "list icon-on" : "list"
                  }
                >
                  <AiOutlineDeploymentUnit />
                </i>
                <p
                  className={
                    activeSection === "project" ? "list nav-on" : "list"
                  }
                >
                  Project
                </p>
              </a>
              <a href="#contact" className="nav">
                <i
                  className={
                    activeSection === "contact" ? "list icon-on" : "list"
                  }
                >
                  <AiOutlineComment />
                </i>
                <p
                  className={
                    activeSection === "contact" ? "list nav-on" : "list"
                  }
                >
                  Contact
                </p>
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
          <div className="likes">
            <p>Like This Page ?</p>
            <div className="i-likes">
              <p onClick={iLike} style={{ color: color }}>
                <AiOutlineLike />
              </p>
              <span className="like">{like}</span>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
