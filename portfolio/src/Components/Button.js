import React from 'react';

const Button = ({classN, links, text}) => {
    return (
        <button className={classN}>
            {text}
        </button>
    );
}

export default Button;
