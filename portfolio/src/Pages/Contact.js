import React from "react";
import Form from "../Components/Form";
import Title from "../Components/Title";
const Contact = () => {
  return (
    <section id="Contact">
      <div className="formContainer">
        <Title title={"Say hello, "}></Title>
        <Form></Form>
        <div className="socials">
          <i class="fa-solid fa-file fa-xl"></i>
          <i class="fa-brands fa-linkedin fa-xl"></i>
          <i class="fa-brands fa-github fa-xl"></i>
          <i class="fa-solid fa-envelope fa-xl"></i>
        </div>
      </div>
    </section>
  );
};

export default Contact;
