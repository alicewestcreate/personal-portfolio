import React from 'react';

const Button = ({classN, text}) => {
    return (
        <button className={classN}>
            {text}
        </button>
    );
}
export default Button;
