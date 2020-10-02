import React from "react";
import Head from "next/head";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { RiGitRepositoryLine } from "react-icons/ri";
import { GoGist } from "react-icons/go";
import { AiFillStar } from "react-icons/ai";

import getUser from "../utils/getUser";

const Index = ({ repos, user }) => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Rafael Sana Montevechio</title>
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
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
            <h3 className="absolute top-0 -mt-5 py-2 px-6 text-1xl text-white font-bold uppercase bg-orange">
              Contact Me
            </h3>
            <p>
              <FaLinkedin className="text-6xl inline-block mr-6" />
              <FaGithub className="text-6xl  inline-block mr-6" />
              <br />
              <span className="inline-block mt-4">
                or drop a line: rafael_sana@hotmail.com
              </span>
            </p>
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
          <div className="grid grid-cols-3 gap-2 my-6">
            {repos.map((repo) => {
              return (
                <div
                  key={repo.id}
                  className="rounded bg-white p-4 hover:shadow-md"
                >
                  <h3 className="font-bold hover:underline">
                    <a href={`https://github.com/${repo.full_name}`}>
                      {repo.full_name}
                    </a>
                  </h3>
                  <p>
                    Language: {repo.language} /{" "}
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
        <p>You can find the code of this site here</p>
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
