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
          textDecor + ` font-sans rounded-lg text-center  p-2 border-2`
        }>
        {skill.name.toLocaleUpperCase()}
      </p>
    );
  };

  return (
    <div className="flex flex-row">
      <span className="flex flex-col w-2/3 pr-20">
        <h1 className="text-5xl text-orange">{ABOUT.greeting}</h1>
        <p className="text-xl tracking-wide text-cloud pt-6">{ABOUT.desc}</p>
      </span>
      <span className="grid pt-4 grid-flow-col auto-cols-max grid-rows-4 gap-4">
        {ABOUT.skills.map(skill => SkillItem(skill))}
      </span>
    </div>
  );
};

export default About;
