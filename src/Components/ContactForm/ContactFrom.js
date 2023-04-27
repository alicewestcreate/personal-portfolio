import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/75073aa0-e4f2-11ed-9b25-13156513d0a3"; 

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
        <input id="fname" type="text" placeholder="Your name" name="name" required />
        <input id="email" type="email" placeholder="Email" name="email" required />
        <textarea id="message" placeholder="Your message" name="message" required />
        <button  id="contactSubmit" className="project-buttons" type="submit"> Send a message </button>
  
    </form>
  );
};

export default ContactForm;