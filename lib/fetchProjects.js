const parseData = (data) => {
  return data.map((item) => ({
    created_at: new Date(item.created_at),
    description: item.description,
    html_url: item.html_url,
    id: item.id,
    languages_url: item.languages_url,
    name: item.name,
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
      "https://api.github.com/users/aymenbida/repos?sort=pushed&per_page=100"
    );
    const data = await response.json();
    const filtered = filterData(data); // shows only repos that have a homepage
    const limitedResults = limitResults(filtered, 6);
    const parsed = parseData(limitedResults);
    const imageSeperated = seperateImage(parsed); // seperate the homepage and the image link if the latter exists
    return imageSeperated;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getRepos;
