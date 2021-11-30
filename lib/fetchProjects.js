const parseData = (data) => {
  return data.map((item) => ({
    created_at: item.created_at,
    description: item.description,
    html_url: item.html_url,
    id: item.id,
    languages_url: item.languages_url,
    name: item.name,
    pushed_at: item.pushed_at,
  }));
};

const getRepos = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/users/aymenbida/repos?per_page=100"
    );
    const data = await response.json();
    const parsedData = parseData(data);
    return parsedData;
  } catch (error) {
    console.log(error);
  }
};

export default getRepos;