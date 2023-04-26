import React from "react";
import "./style.css";

const InfoWelcomePage = () => {
  return (
    <>
      <div id="divider"> </div>
      <section id="first">
        <div className="textWrapper">
          <div>
            <h2>Engineering</h2>
            <p>
              As a recent bootcamp graduate in Frontend Development and Software
              Engineering, I have been continuously praised for my ability to
              write efficient and legible code. I am proficient in Python,
              Javascript, CSS, and HTML, and have experience working with
              libraries such as Tkinker, React, Node.js, MUI, and Bootstrap. I
              enjoy both the logical and visual aspects of programming, and
              strive to create elegant and functional solutions.
            </p>
          </div>
          <div>
            <h2>Brand & Design</h2>
            <p>
              With over 10 years of experience and professional qualifications
              in Brand Strategy, Marketing, and Graphic Design, I possess a deep
              understanding of the Adobe Creative Suite practicing
              fundamental principles of design as well as brand and marketing
              strategies. From the curation of ideas to the implementation of
              campaigns, I bring a comprehensive understanding of the entire
              process.
            </p>
          </div>
        </div>
      </section>
      <section id="second">
        <div id="box"></div>
        <div className="text">
          <div id="textWrapper">
            <h2>Over the years</h2>
            <p>
              Brand is the golden thread that ties together all of my
              professional interests. To me, a brand is the personality behind a
              company, and without it, we lose the reason why. Over the years, I
              have worked as a brand designer, brand guardian, and brand
              manager. Now, I am looking to build software and applications for
              progressive brands that value their story as much as their
              customers do. <br />
              With a problem-solving mindset and a willingness to continue
              learning new languages and libraries, I am shifting my orientation
              to create elegant solutions for businesses and customers. Beyond
              this, I offer a strategic mind for results, a vigilant eye for
              detail, and a creative soul for design aesthetics.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoWelcomePage;
