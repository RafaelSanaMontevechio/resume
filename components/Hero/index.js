import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Hero = () => {
  return (
    <div className="px-6 py-8 flex flex-col md:grid md:grid-cols-2 md:gap-6 md:pt-16 leading-none md:mb-4">
      <div className="flex items-center justify-center">
        <img
          className="rounded-full"
          src="/images/me.jpg"
          alt="Rafael Sana Montevechio"
        />
      </div>
      <div className="pt-12 md:pt-16">
        <h1 className="text-1xl text-center md:text-4xl md:text-left md:pl-16 uppercase">
          Hi, I'm Rafael Sana Montevechio
        </h1>
        <h2 className="font-bold text-2xl text-center md:text-5xl  md:text-left md:pl-16 uppercase">
        Support analyst
        </h2>
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
      </div>
    </div>
  );
};

export default Hero;
