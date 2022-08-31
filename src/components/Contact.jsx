import React from "react";

import { CONTACT } from "../content/about";

const Contact = () => {
  return (
    <div className="flex mt-10 mb-6 text-cloud  bg-background md:mb-14">
      <nav>
        {CONTACT.map(provider => (
          <a
            className="inline-block px-2"
            href={provider.link}
            target="_blank"
            rel="noreferrer">
            {provider.platform}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Contact;
