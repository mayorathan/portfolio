import React from "react";

import Typewriter from "typewriter-effect";

const HeroName = () => (
  <div className="flex flex-row text-lightGreen text-8xl font-thin">
    <p>{">"}&nbsp;</p>
    <Typewriter
      options={{
        strings: "Mayorathan",
        autoStart: true,
        cursor: "_",
        // delay: 150,
      }}
    />
  </div>
);

export default HeroName;
