import React from "react";

import { CONTACT } from "../content/about";

const Contact = () => {
  return (
    <div className="flex place-self-end mb-24 text-cloud tracking-wider bg-background">
      <nav className="-mb-px mr-1 mt-10">
        {CONTACT.map(provider => (
          <a
            className="inline-block px-6"
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
