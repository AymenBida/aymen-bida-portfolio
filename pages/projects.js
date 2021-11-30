import { projectsPage, social } from "../template/data";
import Description from "../components/Description/Description";

const projects = () => {
  return (
    <div className="container" data-cy="container">
      <h1 className="title" data-cy="title">
        {projectsPage.intro.title}
      </h1>
      <p className="description" data-cy="description">
        <Description socialLink={social.github}></Description>
      </p>
    </div>
  );
};

export default projects;

// TODO: Create Projects page
// TODO: Make Projects page fetch data from github API

// TODO: Create genral css and theme specific css files when styling

// TODO: Later create a tool to create portfolios