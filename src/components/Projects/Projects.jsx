import React from "react";

import Project from "./Project";

const Projects = () => {
  return (
    <div className="flex flex-col place-self-start pt-10">
      <h1 className="text-5xl text-lightblue">Projects</h1>
      <span>
        <Project
          title={"Doo²"}
          techStack={["React Native", "Redux", "Firebase"]}
          imgSrc={require("../../assets/projects/doodoo.png")}
          description={
            "A To-Do list app like no other. Built for Android and iOS with React Native. Google's Firebase platform is used to manage user authentication and persistent data."
          }
        />
        <Project
          title={"Activity Connector"}
          techStack={["JavaScript", "Jest", "PEG.js"]}
          imgSrc={require("../../assets/projects/activity-connector.png")}
          description={
            "My bachelor's capstone project. A node based tool for instructors to plan course activities and synchronize the data with syllabus, LMS, etc. Moodle courses can be cloned and updated with new activity dates from a calendar."
          }
        />
        <Project
          title={"Portfolio Website"}
          techStack={["React", "Tailwind", "HTML5"]}
          imgSrc={require("../../assets/projects/portfolio.png")}
          description={
            "The page you are on right now! A responsive single-page application built with React and Tailwind. In order to keep the site future proof, components are auto-generated based on JSON data."
          }
        />
      </span>
    </div>
  );
};

export default Projects;
