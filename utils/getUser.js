const getUser = async (userName) => {
  const resUser = await fetch(`https://api.github.com/users/${userName}`);
  const user = await resUser.json();
  const resRepos = await fetch(
    `https://api.github.com/users/${userName}/repos?sort=updated`
  );
  const originalRepos = await resRepos.json();

  const dontShowRepos = [
    'RafaelSanaMontevechio/curriculo',
    'RafaelSanaMontevechio/resume',
    'RafaelSanaMontevechio/Eng2',
    'RafaelSanaMontevechio/Eng3',
    'RafaelSanaMontevechio/Engenharia4-trabalho1',
    'RafaelSanaMontevechio/Engenharia4-trabalho2',
    'RafaelSanaMontevechio/tecnicasProgramacao4',
    'RafaelSanaMontevechio/Estatistica-trabalho',
    'RafaelSanaMontevechio/Periodo4-trabalho',
    'RafaelSanaMontevechio/Factory',
    'RafaelSanaMontevechio/Proxy',
  ];

  const isNotFork = (repo) => !repo.fork;
  const dontShowFilter = (repo) => dontShowRepos.indexOf(repo.full_name) === -1;
  const extractData = (repo) => ({
    id: repo.id,
    name: repo.name,
    full_name: repo.full_name,
    language: repo.language,
    stargazers_count: repo.stargazers_count,
  });

  const repos = originalRepos
    .filter(isNotFork)
    .filter(dontShowFilter)
    .map(extractData);

  return {
    repos,
    user,
  };
};

export default getUser;
