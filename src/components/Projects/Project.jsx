import React from "react";

const Project = ({ title, imgSrc, desc, stack }) => {
  const SkillItem = skill => (
    <p
      key={skill}
      className="text-foreground text-sm font-sans rounded-lg text-center  border-foreground p-2 border-2 ">
      {skill.toLocaleUpperCase()}
    </p>
  );

  return (
    <div className="flex flex-col items-center pt-4 pb-4">
      <h2 className="text-2xl text-foreground tracking-wide ">{title}</h2>
      <span className="flex flex-col-reverse items-center">
        <span className="border-b-4 border-foreground m-6">
          <img src={imgSrc} alt={title} className="shadow-md" />
        </span>
        <span className="flex flex-col items-center px-4 mt-4">
          <p className="text-cloud text-center tracking-wide ">{desc}</p>
          <span className="flex flex-row gap-4 mt-4">
            {stack.map(tech => SkillItem(tech))}
          </span>
        </span>
      </span>
    </div>
  );
};

export default Project;
