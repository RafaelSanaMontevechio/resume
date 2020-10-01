import React from "react";
import getUser from "../utils/getUser";

const Index = ({ repos, user }) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 pt-16 leading-none mb-4">
        <div className="rounded-full flex items-center justify-center">
          <img
            className="rounded-full"
            src="/images/me.jpg"
            alt="Rafael Sana Montevechio"
          />
        </div>
        <div className="pt-24">
          <h1 className="text-4xl pl-16 uppercase">
            Hi, I'm Rafael Sana Montevechio
          </h1>
          <h2 className="font-bold text-5xl pl-16 uppercase">Algum texto</h2>
          <div className="relative border rounded-md border-orange px-16 pb-4 pt-10 mt-6">
            <h3 className="absolute top-0 -mt-5 py-2 px-6 text-1xl text-white font-bold uppercase bg-orange">Contact Me</h3>
            <ul>
              <li>Linkedin</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg mt-16 shadow-lg py-12 px-16">
        <h3 className="text-4xl text-center text-orange">What I do</h3>
        <p className="text-2xl">Always learning!</p>
      </div>

      <div className="">
        <h3 className="text-4xl text-center font-bold text-orange uppercase mt-10">
          My Education
        </h3>
        <div className="grid grid-cols-2 leading-none mb-4 bg-white rounded-lg  shadow-lg py-6">
          {[1, 2].map((i) => (
            <div className="border-dashed border-l-2 px-16">
              <h4 className="text-lg uppercase font-bold mb-2">
                Graduation Degree
              </h4>
              <p className="text-2xl uppercase">
                Computer Information Systems
                <br />
                <span className="text-lg normal-case font-bold">
                  {" "}
                  Univás - Universidade do Vale do Sapucaí
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-bold text-3xl">Meus repositórios no GitHub</h2>
        <div>
            <span>GitHub stats:</span>
            <p>Public repos: {user.public_repos}</p>
            <p>Public gists: {user.public_gists}</p>
            <p>Followers: {user.followers}</p>
          </div>
        {repos.map((repo) => {
          return (
            <div
              key={repo.id}
              className="rounded bg-white mx-8 my-4 p-4 hover:shadow-md"
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
