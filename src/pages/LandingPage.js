import React, { useEffect } from "react";
import parallax1 from "../images/parallax-1.jpg";
import parallax2 from "../images/parallax-2.jpg";
import M from "materialize-css/dist/js/materialize.min.js";

const LandingPage = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <div>
      <div className="parallax-container">
        <div className="parallax">
          <img src={parallax1} alt="code on a screen" />
        </div>
      </div>

      <div className="section grey lighten-5">
        <div className="row container">
          <h2 className="header">Hi, I'm Mat</h2>
          <p className="grey-text text-darken-3 lighten-3">
            I'm a full stack web developer currently studying at UC Berkeley:
            Extension, focusing on the MERN stack. Have a look around, lurk my
            code, learn some stuff about me, and feel free to reach out if you
            have questions or just want to chat!
          </p>
        </div>
      </div>

      <div className="parallax-container">
        <div className="parallax">
          <img src={parallax2} alt="different code on a different screen" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
