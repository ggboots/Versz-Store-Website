import React from "react";
import { Link } from "react-router-dom";

import shoppingIcon from "/ShoppingIcon.png";
import VerszLogo from "/VerszLogo.png";

const Navbar = () => {
  return (
    
      <div className="title-container">
        <Link to="/">
        <img className="store-logo" src={VerszLogo} />
        </Link>
        <div className="title">
          <h1 className="title-text text-3xl">VERSE Store</h1>
        </div>
        <div className="title-icon-container">

          <img className="title-icon" src={shoppingIcon} />

        </div>
      </div>

  );
};

export default Navbar
