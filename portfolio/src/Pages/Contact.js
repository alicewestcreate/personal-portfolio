import React from "react";
import Form from "../Components/Form";
import Title from "../Components/Title";
import pdf from "./images/AliceWest-DeveloperCV.pdf"
const Contact = () => {
  return (
    <section id="Contact">
      <div className="formContainer">
        <Title title={"Say hello, "}></Title>
        <Form></Form>
        <div className="socials">
          <a href={pdf} target={"blank"}><i class="fa-solid fa-file fa-xl"></i></a>
          <a href="https://www.linkedin.com/in/alicegwest/" target={"blank"}><i class="fa-brands fa-linkedin fa-xl"></i></a>
          <a href="https://github.com/alicewestcreate" target={"blank"}><i class="fa-brands fa-github fa-xl"></i></a>
          <a href="mailto:alicewestdesigns@gmail.com"><i class="fa-solid fa-envelope fa-xl"></i></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
