import React from "react";

const Project = ({ title, imgSrc, description, techStack }) => {
  const SkillItem = skill => (
    <p
      key={skill}
      className="text-lightblue font-sans rounded-lg text-center  border-blue p-2 border-2">
      {skill.toLocaleUpperCase()}
    </p>
  );

  return (
    <div className="flex flex-col place-self-start pt-10 pl-4 pr-4">
      <h2 className="text-4xl text-lightblue">{title}</h2>
      <span className="flex flex-row">
        <span className="border-r-4 border-blue w-2/3 m-8">
          <img src={imgSrc} alt={title} className="w-108 shadow-md" />
        </span>
        <span className="flex flex-col w-2/3 m-8">
          <p className="text-cloud">{description}</p>
          <span className="flex flex-row gap-4 mt-4">
            {techStack.map(skill => SkillItem(skill))}
          </span>
        </span>
      </span>
    </div>
  );
};

export default Project;
