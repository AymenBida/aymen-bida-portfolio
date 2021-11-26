import Link from "next/link";
import { projectsPage } from "../../template/data";

const Description = ({ socialLink }) => {
  const { descriptionWithLink, descriptionWithoutLink } = projectsPage.intro;
  console.log(socialLink);
  return (
    <>
      {socialLink ? (
        <p>
          {descriptionWithLink}{" "}
          <Link href={socialLink}>
            <a>my Github</a>
          </Link>
        </p>
      ) : (
        <p>{descriptionWithoutLink}</p>
      )}
    </>
  );
};

export default Description;
