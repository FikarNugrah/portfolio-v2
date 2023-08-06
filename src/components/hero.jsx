// ======= ini akan tampil di TABLET DAN MOBILE ==========
import React from "react";
import profil from "../assets/profil.jpeg";
import { useState } from "react";

export default function Hero() {
  const [btnContack, setBtnCtk] = useState(false);

  const btnCtk = () => {
    setBtnCtk(true);
    if (btnContack === true) {
      setBtnCtk(false);
    }
    setTimeout(() => {
      setBtnCtk(false);
    }, 1000);
  };

  return (
    <>
      <section className="hero-section">
        <div className="hero-area">
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
          <div className="list-media">
            <div
              className="media-outline"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <a href="https://www.instagram.com/sanc_fikar/?hl=id">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="media-outline" data-aos="fade-right">
              <a href="https://www.facebook.com/yafikar.paskah/">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
            <div className="media-outline" data-aos="fade-left">
              <a href="https://www.youtube.com/channel/UCfd3WGWC8o3-6T1FlnuCVKw">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
            <div
              className="media-outline"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <a href="https://www.tiktok.com/@y4fi_yan">
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>
          <div className="footer-hero">
            <div className="btn-area">
              <a href="#contact" onClick={btnCtk}>
                <button
                  className={
                    btnContack ? "btn-contact btn-click" : "btn-contact"
                  }
                >
                  CONTACT ME
                </button>
              </a>
            </div>
            <p className="cp-rt">&copy; 2023 | fikar Portfolio-v2</p>
          </div>
        </div>
      </section>
    </>
  );
}
