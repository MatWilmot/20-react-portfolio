import React, { useEffect } from "react";
import ProjectContainer from "../components/ProjectContainer";
import M from "materialize-css/dist/js/materialize.min.js";

const ProjectPage = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div class="container top-margin center">
      <div class="row">
        <div class="col s12 xl10 offset-xl1">
          <ul class="collapsible grey lighten-5">
            <ProjectContainer
              icon="book"
              title="Book It - The Social Bucket List"
              description="Book It was created as a group project in class. The brief was to use bcrypt, passport, and MySQL to power a website that can display user-specific information."
              technologies={[
                "JavaScript / jQuery / ajax",
                "axios",
                "bcryptjs",
                "dotenv",
                "express / express-session",
                "jest",
                "MySQL2",
                "passport / passport-local",
                "Sequelize / sequelize-cli",
              ]}
              repo="https://github.com/MatWilmot/bucketList"
              app="https://group4-bucket-list.herokuapp.com/"
            />

            <ProjectContainer
              icon="gif"
              title="Giphy Curator"
              description="Giphy Curator is another application that came to life during a group project at school. The concept was to create a web application that utilized local storage and could show persistent data to a user between visits to the page."
              technologies={[
                "JavaScript / jQuery / ajax",
                "Local Storage",
                "Third-party (giphy) API",
              ]}
              repo="https://github.com/MatWilmot/Gif-search-app"
              app="https://matwilmot.github.io/Gif-search-app/"
            />

            <ProjectContainer
              icon="cloud"
              title="Global Weather Application"
              description="This weather application was created as a homework project for class. We were challenged to use the OpenWeatherMap API and Bootstrap to create a weather dashboard that could search any city or town."
              technologies={[
                "JavaScript / jQuery / ajax",
                "Local Storage",
                "Third-party (OpenWeatherMap) API",
              ]}
              repo="https://github.com/MatWilmot/homework-06-weather-dashboard"
              app="https://matwilmot.github.io/homework-06-weather-dashboard/"
            />

            <ProjectContainer
              icon="videogame_asset"
              title="Video Game Quiz"
              description="This video game quiz was created as a homework project for class. It uses JavaScript to dynamically update the contents of the screen between questions. High scores are sorted from local storage by score into an array and used for a leader board."
              technologies={["JavaScript / jQuery / ajax", "Local Storage"]}
              repo="https://github.com/MatWilmot/Homework-04-Quiz"
              app="https://matwilmot.github.io/Homework-04-Quiz/index.html"
            />

            <ProjectContainer
              icon="lock_outline"
              title="Password Generator"
              description="This super simple password generator was an early homework project designed to test some concepts I'd been learning in class. It takes given parameters and generates a random string based on them."
              technologies={["JavaScript"]}
              repo="https://github.com/MatWilmot/homework-03-password-generator"
              app="https://matwilmot.github.io/homework-03-password-generator/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;

{
  /* <ProjectContainer
icon=""
title=""
description=""
technologies={[]}
repo="URL HERE"
app="URL HERE"
/> */
}
