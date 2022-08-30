import activityConnector from "../assets/projects/activityConnector.png";
import doodoo from "../assets/projects/doodoo.png";
import portfolio from "../assets/projects/portfolio.png";

const PROJECTS = [
  {
    title: "Activity Connector",
    stack: ["JavaScript", "Jest", "PEG.js"],
    imgSrc: activityConnector,
    desc: "My bachelor's capstone project. A node based tool for instructors to plan course activities and synchronize the data with syllabus, LMS, etc. Moodle courses can be cloned and updated with new activity dates from a calendar.",
  },
  {
    title: "Doo²",
    stack: ["React Native", "Redux", "Firebase"],
    imgSrc: doodoo,
    desc: "A To-Do list app like no other. Built for Android and iOS with React Native. Google's Firebase platform is used to manage user authentication and persistent data.",
  },
  {
    title: "Portfolio",
    stack: ["React", "Tailwind CSS", "JSON"],
    imgSrc: portfolio,
    desc: "The page you are on right now! A responsive single-page application built with React and Tailwind. In order to keep the site future proof, components are auto-generated based on JSON data.",
  },
];

export default PROJECTS;
