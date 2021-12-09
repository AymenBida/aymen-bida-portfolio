import Link from "next/link";
import { projectsPage } from "../../template/data";
import { makeGithubLink } from "../../lib/utility";

const Description = ({ socialLink }) => {
  const { descriptionWithLink, descriptionWithoutLink } = projectsPage.intro;
  return (
    <>
      {socialLink ? (
        <>
          {descriptionWithLink}{" "}
          <Link href={makeGithubLink(socialLink)}>
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
