import React from "react";
import profil from "../assets/profil.jpeg";

export default function SideHero() {
  return (
    <>
      <section className="side-hero">
        <div className="side-area">
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
          <div className="footer-hero">
            <div className="btn-area">
              <a href="#contact">
                <button className="btn-contact">CONTACT ME</button>
              </a>
            </div>
            <p className="cp-rt">&copy; 2023 | fikar Portfolio-v2</p>
          </div>
        </div>
      </section>
    </>
  );
}
