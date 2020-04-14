import React from 'react';
import Fade from "react-reveal/Fade";

const Header = () =>{
    return (
      <div className="header">
        <h1>
          <Fade bottom cascade>
            Infinite Movies
          </Fade>
        </h1>
      </div>
    );
}

export default Header