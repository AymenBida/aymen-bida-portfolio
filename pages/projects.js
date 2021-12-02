import { useEffect, useState } from "react";
import { projectsPage, social } from "../template/data";
import Description from "../components/Description/Description";
import getRepos from "../lib/fetchProjects";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getRepos().then((repos) => {
      setProjects(repos);
      localStorage.setItem("projects", JSON.stringify(repos));
    });
  }, []);

  return (
    <div className="container" data-cy="container">
      <h1 className="title" data-cy="title">
        {projectsPage.intro.title}
      </h1>
      <p className="description" data-cy="description">
        <Description socialLink={social.github}></Description>
      </p>
      <div>
        {projects.map((project) => (
          <h2 key={project.id}>{project.name}</h2>
        ))}
      </div>
    </div>
  );
};

export default Projects;

// TODO: Create Projects page
// TODO: Make Projects page fetch data from github API

// TODO: Create genral css and theme specific css files when styling

// TODO: Later create a tool to create portfolios
