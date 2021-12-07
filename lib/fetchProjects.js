import config from "../template/config";
import { beautifyRepoName } from "../cypress/integration/lib/utility";
import { social } from "../template/data";

const parseData = (data) => {
  return data.map((item) => ({
    description: item.description,
    html_url: item.html_url,
    id: item.id,
    name: beautifyRepoName(item.name),
    homepage: item.homepage.split(";"),
    topics: item.topics,
  }));
};

const filterData = (data) => {
  return data.filter((data) => data.homepage);
};

const limitResults = (data, max) => {
  const results = [];
  for (let i = 0; i < max; i += 1) {
    if (!data[i]) break;

    results.push(data[i]);
  }
  return results;
};

const seperateImage = (data) => {
  const newData = data.map((item) => {
    switch (item.homepage.length) {
      case 1:
        return { ...item, homepage: item.homepage[0] };
      case 2:
        return { ...item, homepage: item.homepage[0], image: item.homepage[1] };
      default:
        return { ...item, error: "Wrong Homepage Link configuration" };
    }
  });

  return newData;
};

const getRepos = async () => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${social.github}/repos?sort=pushed&per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github.v3.raw+json",
        },
      }
    );
    const data = await response.json();
    const filtered = filterData(data); // shows only repos that have a homepage
    const limitedResults = limitResults(filtered, config.maxReposToShow); // limit repos by a set number
    const parsed = parseData(limitedResults);
    const imageSeperated = seperateImage(parsed); // seperate the homepage and the image link if the latter exists
    return imageSeperated;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getRepos;
