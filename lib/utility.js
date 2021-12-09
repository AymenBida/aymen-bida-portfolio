export const makeGithubLink = (username) => {
  return "https://github.com/" + username;
};

export const beautifyRepoName = (repoName) => {
  return repoName
    .split("-")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
};
