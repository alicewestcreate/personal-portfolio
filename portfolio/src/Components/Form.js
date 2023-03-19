import React, {useState} from 'react';


const Form = () => {
    const [formState, setFormState] = useState({})

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });

      };

    return (
        <form>
            {/* <label for="fname">Your Name</label> */}
            <input type="text" id="fname" name="fname" placeholder="Your Name" onChange={handleInputChange}></input>
            {/* <label for="email">Your Email</label> */}
            <input type="email" id="email" name="email" placeholder='Email' onChange={handleInputChange}></input>
            {/* <label for="message">Message</label> */}
            <textarea type="text" id="message" name="message" placeholder='Message to say...' onChange={handleInputChange}></textarea>
            <input class="project-buttons" id="contactSubmit" type="submit" value="Send"></input>
        </form>

    );
}

export default Form;
