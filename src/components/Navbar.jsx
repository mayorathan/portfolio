import React from "react";
import { Scrollchor } from "react-scrollchor";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Scrollchor to='#about'>About</Scrollchor>
        <Scrollchor to='#header'>Header</Scrollchor>
        <Scrollchor to='#footer'>Footer</Scrollchor>
      </nav>
    </div>
  );
};

export default Navbar;
