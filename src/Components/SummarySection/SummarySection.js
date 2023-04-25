import React from 'react';
import "../../index.css"

const SummarySection = ({title, content}) => {

    if (typeof content === "string") {
        return (
            <>
            <h3>{title}</h3>
            <p> {content}</p>
            </>
        )
    } else {
        const listItem = content.map((item, index) => <li id={index}>{item}</li>)



        return (
            <>
            <h3>{title}</h3>
            <ul>
            {listItem}
            {/* <p>not sting</p> */}
            </ul>
            </>
            
        )
    }

}

export default SummarySection;
