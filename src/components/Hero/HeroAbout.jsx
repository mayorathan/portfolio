import React from "react";

import { ABOUT } from "../../content/about";

const About = () => {
  const SkillItem = skill => {
    let textDecor;

    if (skill.type === "frontend") textDecor = "text-blue border-blue";
    else if (skill.type === "backend") textDecor = "text-purple border-purple";
    else textDecor = "text-red border-red";

    return (
      <p
        key={skill.name}
        className={
          textDecor +
          ` text-sm font-sans rounded-lg text-center p-2 border-2 lg:text-base`
        }>
        {skill.name.toLocaleUpperCase()}
      </p>
    );
  };

  return (
    <div className="flex flex-col items-center space-x-2 md:flex-row md:items-start md:space-x-0">
      <span className="flex flex-col items-center md:items-start md:w-2/3 md:pr-20">
        <p className="text-3xl text-orange md:text-4xl lg:text-5xl">
          {ABOUT.greeting}
        </p>
        <p className="pt-4 text-lg text-center px-4 tracking-wide text-cloud md:pt-6 md:text-left md:px-0 lg:text-xl">
          {ABOUT.desc}
        </p>
      </span>
      <span className="grid pt-4 grid-flow-col auto-cols-max grid-rows-4 gap-4 md:pt-6">
        {ABOUT.skills.map(skill => SkillItem(skill))}
      </span>
    </div>
  );
};

export default About;
