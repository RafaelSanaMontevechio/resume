import React from "react";

import { FiUsers } from "react-icons/fi";
import { RiGitRepositoryLine } from "react-icons/ri";
import { GoGist } from "react-icons/go";
import { AiFillStar } from "react-icons/ai";

import getUser from "../utils/getUser";
import PageHead from "../components/PageHead";
import Hero from "../components/Hero";
import Summary from "../components/Summary";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Repos from "../components/Repos";

const Index = ({ repos, user }) => {
  return (
    <div className="container mx-auto">
      <PageHead />
      <Hero />
      <Summary />
      <Education />
      <Repos user={user} repos={repos} />
      <Footer />
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
