import React from "react";

import Typewriter from "typewriter-effect";

const HeroName = () => (
  <div className="flex flex-row text-green tracking-wide text-4xl font-thin md:text-7xl lg:text-8xl">
    <p>{">"}&nbsp;</p>
    <Typewriter
      options={{
        strings: "Mayorathan",
        autoStart: true,
        cursor: "_",
      }}
    />
  </div>
);

export default HeroName;
