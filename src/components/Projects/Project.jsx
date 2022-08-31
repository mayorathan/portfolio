import React from "react";

const Project = ({ title, imgSrc, desc, stack }) => {
  const SkillItem = skill => (
    <p
      key={skill}
      className="text-foreground text-sm font-sans rounded-lg text-center  border-foreground p-2 border-2 lg:text-base">
      {skill.toLocaleUpperCase()}
    </p>
  );

  return (
    <div className="flex flex-col items-center pt-4 pb-4 md:items-start md:pt-10 md:pb-0 md:pl-4">
      <h2 className="text-2xl text-foreground tracking-wide md:text-3xl lg:text-4xl">
        {title}
      </h2>
      <span className="flex flex-col-reverse items-center md:flex-row md:items-start">
        <span className="border-b-4 border-foreground m-6 md:border-r-4 md:border-b-0 md:w-2/3 md:m-8">
          <img src={imgSrc} alt={title} className="shadow-md lg:w-108" />
        </span>
        <span className="flex flex-col items-center px-4 mt-4 md:items-start md:px-0 md:mt-0 md:w-2/3 md:m-8">
          <p className="text-cloud text-center tracking-wide md:text-left lg:text-base">
            {desc}
          </p>
          <span className="flex flex-row gap-4 mt-4">
            {stack.map(tech => SkillItem(tech))}
          </span>
        </span>
      </span>
    </div>
  );
};

export default Project;
