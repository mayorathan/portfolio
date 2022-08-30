import React from "react";

import HeroName from "./HeroName";
import HeroAbout from "./HeroAbout";

const Hero = () => {
  return (
    <div className="flex flex-col space-y-20">
      <HeroName />
      <HeroAbout />
    </div>
  );
};

export default Hero;
