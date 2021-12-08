import { useContext } from "react";
import { projectsPage, social } from "../template/data";
import Description from "../components/Description/Description";
import { ProjectsContext } from "./_app";
import ProjectsList from "../components/ProjectsList/ProjectsList";

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
      <>
        {projects.length > 0 ? (
          <ProjectsList projects={projects} />
        ) : (
          "No projects found"
        )}
      </>
    </div>
  );
};

export default Projects;

// TODO: Create genral css and theme specific css files when styling

// TODO: Later create a tool to create portfolios
