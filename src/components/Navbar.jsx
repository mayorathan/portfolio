import React from "react";

import cv from "../assets/cv.pdf";

const Navbar = () => {
  return (
    <div className="flex place-self-end mb-24 text-cloud bg-background sticky top-0">
      <nav className="-mb-px mr-1 mt-10">
        <a
          className="inline-block px-6"
          href="mailto:mayorathan@hotmail.com"
          target="_blank"
          rel="noreferrer">
          Email
        </a>
        <a
          className="inline-block px-6"
          href="https://www.linkedin.com/in/mayorathan/"
          target="_blank"
          rel="noreferrer">
          LinkedIn
        </a>
        <a
          className="inline-block px-6"
          href="https://www.github.com/mayorathan/"
          target="_blank"
          rel="noreferrer">
          GitHub
        </a>
        <a
          className="inline-block ml-6"
          href={cv}
          target="_blank"
          rel="noreferrer">
          Resume
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
