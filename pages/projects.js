import { useContext } from "react";
import { projectsPage, social } from "../template/data";
import Description from "../components/Description/Description";
import { ProjectsContext } from "./_app";

const Projects = () => {
  const projects = useContext(ProjectsContext);

  return (
    <div className="container" data-cy="container">
      <h1 className="title" data-cy="title">
        {projectsPage.intro.title}
      </h1>
      <p className="description" data-cy="description">
        <Description socialLink={social.github}></Description>
      </p>
      <div>
        {projects.length > 0
          ? projects.map((project) => (
              <div key={project.id}>
                <h2>{project.name}</h2>
              </div>
            ))
          : "No projects found"}
      </div>
    </div>
  );
};

export default Projects;

// TODO: Create genral css and theme specific css files when styling

// TODO: Later create a tool to create portfolios
