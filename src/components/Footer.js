import React from "react";
import LILogo from "../images/social-linkedin-circle-512.png";
import GHLogo from "../images/github logo.png";
import FBLogo from "../images/f_logo_RGB-Hex-Blue_512.png";
import MLogo from "../images/Circled_Medium_svg5-512.png";

const Footer = () => {
  return (
    <div className="row center">
      <div className="col s12">
        <p>Find me on the internet</p>
        <a href="https://www.linkedin.com/in/mathew-wilmot-937738174/">
          <img className="contact-icon" src={LILogo} alt="linkedIn Logo" />
        </a>
        &nbsp;
        <a href="https://github.com/MatWilmot">
          <img className="contact-icon" src={GHLogo} alt="GitHub Logo" />
        </a>
        &nbsp;
        <a href="https://www.facebook.com/matwilmot">
          <img className="contact-icon" src={FBLogo} alt="Facebook Logo" />
        </a>
        &nbsp;
        <a href="https://medium.com/@matwilmot90">
          <img className="contact-icon" src={MLogo} alt="Medium Logo" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
