import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactMe = () => {
  return (
    <div className="relative border rounded-md border-orange px-8 mt-8 md:px-16 pb-4 pt-10 md:mt-6">
      <h3 className="absolute top-0 -mt-5 py-2 px-6 text-1xl text-white font-bold uppercase bg-orange">
        Contact Me
      </h3>
      <p>
        <FaLinkedin className="text-4xl md:text-6xl inline-block mr-6" />
        <FaGithub className="text-4xl  md:text-6xl  inline-block mr-6" />
        <br />
        <span className="inline-block mt-4 ml-1">
          <MdEmail className="inline-block" /> rafael_sana@hotmail.com
        </span>
      </p>
    </div>
  );
};

export default ContactMe;
