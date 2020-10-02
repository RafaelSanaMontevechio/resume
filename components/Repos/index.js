import React from "react";

import UserStats from "./UserStats";
import Repo from "./Repo";

const Repos = ({ user, repos }) => {
  return (
    <div>
      <h2 className="text-4xl text-center font-bold text-orange uppercase mt-10">
        Tech Contribuitions
      </h2>
      <UserStats user={user} />

      <div className="md:grid md:grid-cols-3 md:gap-2 md:my-6">
        {repos.map((repo) => {
          return <Repo key={repo.id} repo={repo} />;
        })}
      </div>
    </div>
  );
};

export default Repos;
