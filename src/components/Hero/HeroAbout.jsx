import React from "react";

const About = () => {
  const skills = [
    "React",
    "React Native",
    "Redux",
    "Tailwind",
    "Spring",
    "AWS",
    "Express",
    "SQL",
    "GitHub",
    "Docker",
    "Git",
    "Vim",
  ];

  const SkillItem = skill => (
    <p
      key={skill}
      className="text-lightblue font-sans rounded-lg text-center  border-blue p-2 border-2">
      {skill.toLocaleUpperCase()}
    </p>
  );

  return (
    <div className="flex flex-row">
      <span className="flex flex-col w-2/3 pr-20">
        <h1 className="text-5xl text-lightblue">Hi there!</h1>
        <p className="text-xl tracking-wide text-cloud pt-4">
          Driven by a passion for technology, I began my journey as a trainee in
          a Montreal based start-up. After spending 4 months learning about
          JavaScript and Linux, I left the company and started my bachelors in
          Software Engineering. Currently, I'm working as an engineer in the
          financial markets.{" "}
        </p>
      </span>
      <span className="grid pt-4 grid-flow-col auto-cols-max grid-rows-4 gap-4">
        {skills.map(skill => SkillItem(skill))}
      </span>
    </div>
  );
};

export default About;
