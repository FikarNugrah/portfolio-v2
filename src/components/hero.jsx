// ======= ini akan tampil di TABLET DAN MOBILE ==========

import "../style/hero.css";
import profil from "../assets/profil.jpeg";

export default function Hero() {
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
          <div className="footer-hero">
            <div className="btn-area">
              <button className="btn-contact">
                <a href="#contact">CONTACT ME</a>
              </button>
            </div>
            <p className="cp-rt">&copy; 2023 | fikar Portfolio-v2</p>
          </div>
        </div>
      </section>
    </>
  );
}
