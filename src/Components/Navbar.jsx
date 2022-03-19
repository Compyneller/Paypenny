import React from "react";
// import "./navBar.css";
import logo from "../../src/Assets/logo-1024x1024.png";
import interact from "../../src/Assets/Interac_Brand_2021.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar custom-Navbar">
        <div className="container ">
          <div className="d-flex  justify-content-between w-100 align-items-center">
            <Link to="/">
              <img src={logo} className="brand" alt="" />
            </Link>
            <a href="https://www.interac.ca/en/content/life/three-reasons-to-set-up-interac-e-transfer-autodeposit-today/">
              <img src={interact} className="interact" alt="" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
