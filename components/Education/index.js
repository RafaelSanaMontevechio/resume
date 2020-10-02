import React from "react";
import EducationItem from "./EducationItem";

const degrees = [
  {
    degree: "Graduation Degree",
    subject: "Computer Information Systems",
    institution: "Univás - Universidade do Vale do Sapucaí",
  },
  {
    degree: "Full Stack Developer",
    subject: "Computer Information Systems",
    institution: "Dev Pleno",
  },
];

const Education = () => {
  return (
    <div className="">
      <h3 className="text-4xl text-center font-bold text-orange uppercase mt-10">
        My Education
      </h3>
      <div className="mx-6 leading-none mb-4 bg-white rounded-lg shadow-lg  md:mx-0 md:grid md:grid-cols-2">
        {degrees.map((degree, i) => (
          <EducationItem key={`i${i}`} degree={degree} />
        ))}
      </div>
    </div>
  );
};

export default Education;
