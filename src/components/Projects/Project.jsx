import React from "react";

const Project = ({ title, imgSrc, desc, stack }) => {
  const SkillItem = skill => (
    <p
      key={skill}
      className="text-foreground font-sans rounded-lg text-center  border-foreground p-2 border-2 md:text-sm">
      {skill.toLocaleUpperCase()}
    </p>
  );

  return (
    <div className="flex flex-col place-self-start pt-10 pl-4">
      <h2 className="text-4xl text-foreground tracking-wide md:text-3xl">
        {title}
      </h2>
      <span className="flex flex-row">
        <span className="border-r-4 border-foreground w-2/3 m-8">
          <img src={imgSrc} alt={title} className="w-108 shadow-md" />
        </span>
        <span className="flex flex-col w-2/3 m-8">
          <p className="text-cloud tracking-wide md:text-sm">{desc}</p>
          <span className="flex flex-row gap-4 mt-4">
            {stack.map(tech => SkillItem(tech))}
          </span>
        </span>
      </span>
    </div>
  );
};

export default Project;
