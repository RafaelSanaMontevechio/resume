import React from "react";
import ContactMe from "./ContactMe";

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
        <ContactMe />
      </div>
    </div>
  );
};

export default Hero;
