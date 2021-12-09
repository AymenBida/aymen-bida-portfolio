import { images } from "../../../template/data";
import Image from "next/image";
import styles from "./Project.module.scss";
import TagList from "../../TagList/TagList";
import Button from "../../Button/Button";
import { projectsPage } from "../../../template/data";

const Project = ({ project }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <Image
          alt="Project screenshot"
          src={project.image ?? images.defaultImage}
          layout="fill"
          placeholder="blur"
          blurDataURL={images.blurImage}
          objectFit="cover"
        />
      </div>
      <div className={styles.card__content}>
        <h2 className={styles.card__title}>{project.name}</h2>
        <p className={styles.card__description}>{project.description}</p>
        <TagList contents={project.topics} />
        <ul>
          <Button
            text={projectsPage.projects.TryItButton}
            link={project.homepage}
          />
          <Button
            text={projectsPage.projects.SourceCode}
            link={project.html_url}
          />
        </ul>
      </div>
    </div>
  );
};

export default Project;
