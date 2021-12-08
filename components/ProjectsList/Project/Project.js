import { images } from "../../../template/data";
import Image from "next/image";
import styles from "./Project.module.scss";

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
      <h2 className={styles.card__title}>{project.name}</h2>
      <p className={styles.card__description}>{project.description}</p>
    </div>
  );
};

export default Project;
