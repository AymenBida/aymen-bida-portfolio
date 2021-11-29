import Link from "next/link";
import { projectsPage } from "../../template/data";

const Description = ({ socialLink }) => {
  const { descriptionWithLink, descriptionWithoutLink } = projectsPage.intro;
  console.log(socialLink);
  return (
    <>
      {socialLink ? (
        <>
          {descriptionWithLink}{" "}
          <Link href={socialLink}>
            <a target="_blank">my Github</a>
          </Link>
        </>
      ) : (
        descriptionWithoutLink
      )}
    </>
  );
};

export default Description;
