import React from "react";
import picture from "../images/20190730_145147.jpg";
import PillButton from "../components/PillButton";

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
              Full-Stack Web Development boot-camp, focusing on the MERN
              (MongoDB / MySQL, Express, React, Node) stack, in September and
              currently looking for employment opportunities!
            </p>
          </div>
        </div>
        <hr />
        <div className="row container">
          <h4>Technology</h4>
          <PillButton bgcol="lightgrey" col="black" title="JavaScript" />
          <PillButton bgcol="lightgrey" col="black" title="HTML5" />
          <PillButton bgcol="lightgrey" col="black" title="CSS3" />
          <PillButton bgcol="lightgrey" col="black" title="React" />
          <PillButton bgcol="lightgrey" col="black" title="Node" />
          <PillButton bgcol="lightgrey" col="black" title="Express" />
          <PillButton bgcol="lightgrey" col="black" title="MySQL" />
          <PillButton bgcol="lightgrey" col="black" title="Sequelize" />
          <PillButton bgcol="lightgrey" col="black" title="MongoDB" />
          <PillButton bgcol="lightgrey" col="black" title="Mongoose" />
          <PillButton bgcol="lightgrey" col="black" title="jQuery" />
          <PillButton bgcol="lightgrey" col="black" title="Passport" />
          <PillButton bgcol="lightgrey" col="black" title="bcryptjs" />
          <PillButton bgcol="lightgrey" col="black" title="Express-sessions" />
          <PillButton bgcol="lightgrey" col="black" title="Inquirer" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
