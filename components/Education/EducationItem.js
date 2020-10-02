import React from 'react';
import Education from '.';

const EducationItem = ({ degree }) => {
  return (
    <div className="py-6 px-8 mx-6 md:mx-0 md:px-16">
      <h4 className="text-lg uppercase font-bold mb-2">{degree.degree}</h4>
      <p className="text-2xl uppercase">
        {degree.subject}
        <br />
        <span className="text-lg normal-case font-bold">
          {degree.institution}
        </span>
      </p>
    </div>
  );
};

export default EducationItem;
