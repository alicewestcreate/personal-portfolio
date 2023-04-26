import React from "react";
import Form from "../Components/Form";
import Title from "../Components/Title";
import pdf from "../Components/images/AliceWest-FrontEndDeveloper.pdf";
const Contact = () => {
  return (
    <section id="Contact">
      <div className="formContainer">
        <div className="formCopy">
          <Title title={"Say hello, "}></Title>
          <p>
            {" "}
            Thanks for visiting my portfolio! I'm always looking to connect with
            other creatives and discuss new ideas, so please don't hesitate to
            reach out to me using the contact form below. In the meantime, feel
            free to check out my resume or profile links below.
            Looking forward to hearing from you!
          </p>
        </div>
        <Form></Form>
        <div className="socials">
          <a href={pdf} target={"blank"}>
            <i className="fa-solid fa-file fa-xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/alicegwest/" target={"blank"}>
            <i className="fa-brands fa-linkedin fa-xl"></i>
          </a>
          <a href="https://github.com/alicewestcreate" target={"blank"}>
            <i className="fa-brands fa-github fa-xl"></i>
          </a>
          <a href="mailto:alicewestdesigns@gmail.com">
            <i className="fa-solid fa-envelope fa-xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
