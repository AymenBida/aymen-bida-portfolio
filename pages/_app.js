import { createContext, useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import getRepos from "../lib/fetchProjects";

export const ProjectsContext = createContext();

const MyApp = ({ Component, pageProps }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (sessionStorage.getItem("repos")) {
      setProjects(JSON.parse(sessionStorage.getItem("repos")));
    } else {
      getRepos().then((repos) => {
        setProjects(repos);
        sessionStorage.setItem("repos", JSON.stringify(repos));
      });
    }
  }, []);

  return (
    <>
      <ProjectsContext.Provider value={projects}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ProjectsContext.Provider>
    </>
  );
};

export default MyApp;
