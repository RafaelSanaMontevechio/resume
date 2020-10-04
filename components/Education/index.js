import React from 'react';
import { MdDoneAll } from 'react-icons/md';
import EducationItem from './EducationItem';

const degrees = [
  {
    degree: 'Graduation Degree',
    subject: 'Computer Information Systems',
    institution: 'Univás - Universidade do Vale do Sapucaí',
  },
  {
    degree: 'Full Stack Developer',
    subject: 'Computer Information Systems',
    institution: 'Dev Pleno',
  },
];

const Education = () => {
  return (
    <div className="md:px-6">
      <h3 className="text-4xl text-center font-bold text-orange uppercase mt-10">
        My Education
      </h3>
      <div className="leading-none mx-6 mb-4 bg-white rounded-lg shadow-lg  md:mx-0 md:grid md:grid-cols-2">
        {degrees.map((degree, i) => (
          <EducationItem key={`i${i}`} degree={degree} />
        ))}
      </div>
      <h3 className="text-4xl text-center font-bold text-orange uppercase mt-10">
        Languages
      </h3>
      <div className="leading-none mx-6 mb-4 bg-white rounded-lg shadow-lg  md:mx-0 md:grid md:grid-cols-2">
        <div className="py-6 px-6 mx-6 md:mx-0 md:px-16">
          <h4 className="text-lg uppercase font-bold mb-2">Languages</h4>
          <p className="md:text-2xl uppercase">
            English language
            <br />
            <span className="text-lg normal-case font-bold">Wizard</span>
          </p>
          <p className="mt-2">
            <MdDoneAll className="inline-block text-green-500" /> Intermediary
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
