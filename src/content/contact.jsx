import { AiOutlineComment } from "react-icons/ai";
import React from "react";

export default function Contact() {
  return (
    <>
      <section className="contact-content" id="contact">
        <p
          className="header-contact-content"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <AiOutlineComment />
          CONTACT ME
        </p>
        <p
          className="hero-text-contact"
          data-aos="fade-up"
          data-aos-duration="1300"
        >
          Let's Talk <span>Together!</span>
        </p>
        <div
          className="contact-area"
          data-aos="fade-up"
          data-aos-duration="1400"
        >
          <form action="">
            <div className="general">
              <label htmlFor="name">
                <p className="title-input">FULL NAME</p>
                <input type="text" placeholder="YOUR FULL NAME" id="name" />
              </label>
              <label htmlFor="phone">
                <p className="title-input">PHONE</p>
                <input type="tel" placeholder="YOUR PHONE NUMBER" id="phone" />
              </label>
              <label htmlFor="email">
                <p className="title-input">EMAIL</p>
                <input type="email" placeholder="YOUR EMAIL" id="email" />
              </label>
            </div>
            <div className="cmd">
              <p className="title-input">MASSAGE</p>
              <textarea
                name="command"
                id="command"
                placeholder="WRITE YOUR MASSAGE HERE!"
              ></textarea>
              <button className="submit" type="submit">
                Send Massage
              </button>
            </div>
          </form>
        </div>
        <p className="footer">Thank You For Visiting🙏</p>
      </section>
    </>
  );
}
