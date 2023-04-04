import React, { useState } from "react";

const Form = () => {
  const [formState, setFormState] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const saveForm = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <form>
      <label htmlFor="fname" />
      <input
        type="text"
        id="fname"
        name="fname"
        placeholder="Your Name"
        onChange={handleInputChange}
      ></input>
      <label htmlFor="email" />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        onChange={handleInputChange}
      ></input>
      <label htmlFor="message" />
      <textarea
        type="text"
        id="message"
        name="message"
        placeholder="Message to say..."
        onChange={handleInputChange}
      ></textarea>
      <button
        type="button"
        id="contactSubmit"
        className="project-buttons"
        onClick={saveForm}
      >
        Save
      </button>
    </form>
  );
};

export default Form;
