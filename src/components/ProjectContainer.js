import React from "react";

const ProjectContainer = (props) => {
  return (
    <li className="active">
      <div className="collapsible-header">
        <i className="material-icons">{props.icon}</i>
        {props.title}
      </div>
      <div className="collapsible-body">
        <h4>{props.title}</h4>
        <h5 className="top-margin">Description</h5>
        <p>{props.description}</p>
        <h5 className="top-margin">Technologies Utilized:</h5>
        <ul className="collection">
          {props.technologies.map((element, index) => (
            <li className="collection-item" key={index}>
              {element}
            </li>
          ))}
        </ul>
        <div className="top-margin center">
          <button className="waves-effect waves-light btn white lighten-5 grey-text text-darken-3">
            GitHub Repo
          </button>
          <button className="waves-effect waves-light btn white lighten-5 grey-text text-darken-3">
            Deployed App
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProjectContainer;
