import React from "react";

import { CONTACT } from "../content/about";

const Contact = () => {
  return (
    <div className="flex mt-10 mb-6 text-cloud  md:mb-14 md:place-self-end">
      <nav>
        {CONTACT.map(provider => (
          <a
            className="inline-block px-2 md:pl-6 lg:pl-8"
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
