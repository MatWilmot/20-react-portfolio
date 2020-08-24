import React from "react";
import picture from "../images/20190730_145147.jpg";

const AboutPage = () => {
  return (
    <div>
      <div className="container center">
        <div className="row">
          <div className="col s12">
            <h1>Wow, a whole page just about me!</h1>
          </div>
        </div>
        <hr />
        <div className="row grey lighten-5">
          <div className="col s12 xl6">
            <img className="responsive-img" src={picture} alt="Mat Wilmot" />
          </div>
          <div className="col s12 xl6">
            <h2>Here I go talking about myself again..</h2>
            <h4 className="grey-text">
              Full Stack Web Developer based in Mountain View, CA, originating
              from Manchester, England.
            </h4>
            <p className="flow-text">
              Motorcyclist. Gamer. Coder. Graduating UC Berkeley Extension's
              Part-Time Full-Stack Web Development bootcamp in September and
              currently looking for employment opportunities!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
