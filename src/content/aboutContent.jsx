import { AiOutlineUser } from "react-icons/ai";

export default function AboutContent() {
  return (
    <>
      <section className="about-content" id="about">
        <p className="about">
          <AiOutlineUser />
          ABOUT ME
        </p>
        <div className="content-of-about">
          <h1 className="motivation-about">
            It Takes a Lot of Motivation <span>To Beat Vanishing Intent</span>.
          </h1>
          <p className="description-about">
            I have started my efforts to achieve my dream since grade 2 of
            Vocational School, namely in early May 2022 to become a Professional
            Web Devoloper, and there are so many obstacles that come as if I
            have lost my intention, but with the motivation I got, I am even
            more excited to taking it. I have also met friends who support each
            other, especially when you can code together or collaborate to make
            a project and develop it until it becomes extraordinary
          </p>
          <div>
            <p>My Hobies :</p>
            <br />
            <div className="hobies-area">
              <div className="hobies">
                <i class="fa-solid fa-volleyball"></i>
                <p>Vollay</p>
              </div>
              <div className="hobies">
                <i class="fa-solid fa-guitar"></i>
                <p>guitarist</p>
              </div>
              <div className="hobies">
                <i class="fa-solid fa-code"></i>
                <p>Ngoding</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
