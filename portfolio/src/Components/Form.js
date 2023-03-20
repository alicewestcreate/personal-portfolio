import React, {useState} from 'react';


const Form = () => {
    const [formState, setFormState] = useState({})


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value })
      };

    const saveForm = (e) => {
        e.preventDefault();
        console.log(formState)
    }

    return (
        <form>
            {/* <label for="fname">Your Name</label> */}
            <input type="text" id="fname" name="fname" placeholder="Your Name" onChange={handleInputChange}></input>
            {/* <label for="email">Your Email</label> */}
            <input type="email" id="email" name="email" placeholder='Email' onChange={handleInputChange}></input>
            {/* <label for="message">Message</label> */}
            <textarea type="text" id="message" name="message" placeholder='Message to say...' onChange={handleInputChange}></textarea>
            {/* <input class="project-buttons" id="contactSubmit" type="submit" value="Send" onSubmit={saveForm}>Save</input> */}
            <button type='button' id="contactSubmit"  class="project-buttons" onClick={saveForm}>Save</button>
        </form>

    );
}

export default Form;
