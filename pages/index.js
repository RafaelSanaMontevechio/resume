import React from "react";


import { FiUsers } from "react-icons/fi";
import { RiGitRepositoryLine } from "react-icons/ri";
import { GoGist } from "react-icons/go";
import { AiFillStar } from "react-icons/ai";

import getUser from "../utils/getUser";
import PageHead from "../components/PageHead";
import Hero from "../components/Hero";

const Index = ({ repos, user }) => {
  return (
    <div className="container mx-auto">
      <PageHead />

      <Hero />

      <div className="bg-white rounded-lg md:mt-16 shadow-lg py-12 px-8 mx-6 md:px-16">
        <h3 className="text-4xl text-center text-orange">What I do</h3>
        <p className="text-2xl">Always learning!</p>
      </div>

      <div className="">
        <h3 className="text-4xl text-center font-bold text-orange uppercase mt-10">
          My Education
        </h3>
        <div className="mx-6 leading-none mb-4 bg-white rounded-lg shadow-lg  md:mx-0 md:grid md:grid-cols-2">
          {[1, 2].map((i, idx) => (
            <div key={idx} className="border-dashed border-t md:border-t-0 md:border-l-2 py-6 px-6 mx-6 md:mx-0 md:px-16">
              <h4 className="text-lg uppercase font-bold mb-2">
                Graduation Degree
              </h4>
              <p className="text-2xl uppercase">
                Computer Information Systems
                <br />
                <span className="text-lg normal-case font-bold">
                  Univás - Universidade do Vale do Sapucaí
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div>
          <h2 className="text-4xl text-center font-bold text-orange uppercase mt-10">
            Tech Contribuitions
          </h2>
          <p className="text-center">
            <span>GitHub stats: </span>
            <RiGitRepositoryLine className="inline-block" /> {user.public_repos}{" "}
            /
            <GoGist className="inline-block" /> {user.public_gists} /{" "}
            <FiUsers className="inline-block" /> {user.followers}
          </p>

          <div className="md:grid md:grid-cols-3 md:gap-2 md:my-6">
            {repos.map((repo) => {
              return (
                <div
                  key={repo.id}
                  className="rounded bg-white hover:shadow-md py-6 px-6 mx-6 my-3 md:my-0"
                >
                  <h3 className="font-bold hover:underline">
                    <a href={`https://github.com/${repo.full_name}`}>
                      {repo.name}
                    </a>
                  </h3>
                  <p>
                    Language: {repo.language} /
                    <AiFillStar className="inline-block text-yellow-500" />{" "}
                    {repo.stargazers_count}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-center border-t-2 my-8 py-4">
        <p>You can find the code of this site <a className="font-bold hover:underline"  href="https://github.com/rafaelsanamontevechio/resume">here</a></p>
        
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
