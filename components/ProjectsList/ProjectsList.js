import Project from "./Project/Project";
import styles from "./ProjectsList.module.scss"

const ProjectsList = ({ projects }) => {
  return (
    <div className={styles.list}>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
