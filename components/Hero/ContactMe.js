import React from 'react';

import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const ContactMe = () => {
  return (
    <div className="relative border rounded-md border-orange px-8 mt-8 md:px-16 pb-4 pt-10 md:mt-6">
      <h3 className="absolute top-0 -mt-5 py-2 px-6 text-1xl text-white font-bold uppercase bg-orange">
        Contact Me
      </h3>
      <p>
        <a
          href="https://www.linkedin.com/in/rafaelsanamontevechio"
          target="blank"
        >
          <FaLinkedin className="text-4xl md:text-6xl inline-block mr-6 hover:text-color" />
        </a>
        <a href="https://www.github.com/rafaelsanamontevechio" target="blank">
          <FaGithub className="text-4xl  md:text-6xl  inline-block mr-6 hover:text-color" />
        </a>
      </p>
      <div className="mt-2 flex items-center py-2">
        <MdEmail className="inline-block text-2xl" />
        <span>rafael_sana@hotmail.com</span>
      </div>
    </div>
  );
};

export default ContactMe;
