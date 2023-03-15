import React from 'react';


const Header = ({image}) => {
    return (
        <div id="hero" style={{backgroundImage:`url${image}`}}>
            <h3>{image}</h3>
        </div>
    );
}

export default Header;
