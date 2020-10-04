import React from 'react';

import { AiFillStar } from 'react-icons/ai';

const Repo = ({ repo }) => {
  return (
    <div className="rounded bg-white hover:shadow-md py-6 px-6 mx-6 my-3 md:my-0">
      <h3 className="font-bold hover:underline">
        <a href={`https://github.com/${repo.full_name}`}>{repo.name}</a>
      </h3>
      <p className="flex items-center">
        Language: {repo.language} /
        <AiFillStar className="inline-block text-yellow-500" />{' '}
        {repo.stargazers_count}
      </p>
    </div>
  );
};

export default Repo;
