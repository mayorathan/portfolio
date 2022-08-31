import React from "react";

import HeroName from "./HeroName";
import HeroAbout from "./HeroAbout";

const Hero = () => {
  return (
    <div className="flex flex-col items-center space-y-10 md:space-y-20 md:items-start">
      <HeroName />
      <HeroAbout />
    </div>
  );
};

export default Hero;
