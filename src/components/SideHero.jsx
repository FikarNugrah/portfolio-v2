import React from "react";
import profil from "../assets/profil.jpeg";
import "../style/hero.css";

export default function SideHero() {
  return (
    <>
      <section className="side-hero">
        <div className="top-dsct">
          <h1>
            Fikar <span>么</span>
          </h1>
          <p>
            Student <span>& Junior Devoloper</span>
          </p>
        </div>
        <div className="profil">
          <img src={profil} alt="" />
        </div>
        <div className="hero-text">
          <h1>My Second Portfolio in 2023 </h1>
          <p>in 2023 I have Created 2 Portfolios</p>
        </div>
        <div className="btn-area">
          <button className="btn-contact">
            <a href="#contact">CONTACT ME</a>
          </button>
        </div>
        <p className="cp-rt">&copy; 2023 | fikar Portfolio-v2</p>
      </section>
    </>
  );
}
