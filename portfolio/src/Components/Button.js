import React from 'react';

const Button = ({classN, links, text}) => {
    console.log(links);
    return (
        <button className={classN}>
            {text}
        </button>
    );
}

export default Button;
