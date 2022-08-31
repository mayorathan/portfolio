import React from "react";

import HeroName from "./HeroName";
import HeroAbout from "./HeroAbout";

const Hero = () => {
  return (
    <div className="flex flex-col items-center space-y-10">
      <HeroName />
      <HeroAbout />
    </div>
  );
};

export default Hero;
