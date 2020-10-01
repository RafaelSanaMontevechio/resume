import React from "react";
import getUser from "../utils/getUser";

const Index = ({ repos, user }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl">Olá, eu sou o Rafael Sana Montevechio</h1>
      <div>
        <div>
          <span>GitHub stats:</span>
          <p>Public repos: {user.public_repos}</p>
          <p>Public gists: {user.public_gists}</p>
          <p>Followers: {user.followers}</p>
        </div>
        <h2 className="font-bold text-3xl">Meus repositórios no GitHub</h2>
        {repos.map((repo) => {
          return (
            <div
              key={repo.id}
              className="rounded bg-gray-200 mx-8 my-4 p-4 hover:shadow-md"
            >
              <h3 className="font-bold">{repo.full_name}</h3>
              <p>
                Language: {repo.language} / Stars: {repo.stargazers_count}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  try {
    const { repos, user } = await getUser("rafaelsanamontevechio");

    return {
      props: {
        repos,
        user,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default Index;
