import React from "react";

import "./Navbar.scss";

const Logo = (props) => {

    return (
        <div className="LogoContainer" >
           <div className="Logo pointable" onClick={props.logoClick}>
               dansl.dev
           </div>
        </div>
    );
};

export default Logo;