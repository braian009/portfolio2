import * as React from "react";
import projects from "@/data/projects";

const ProjectsContext = React.createContext({
  projectList: null,
  currentProject: null,
  index: null,
  goNextProject: () => null,
  goPreviousProject: () => null,
  goSpecificProject: () => null,
});

const ProjectContextProvider = ({ children }) => {
  const projectList = projects;
  const [index, setIndex] = React.useState(0);
  let currentProject = projects[index];

  const goNextProject = () => {
    let nextIndex = index === projects.length ? 0 : index + 1;

    setIndex(nextIndex);
  };

  const goPreviousProject = () => {
    let nextIndex = index === 0 ? projects.length - 1 : index - 1;

    setIndex(nextIndex);
  };

  const goSpecificProject = (i) => {
    setIndex(i);
  };

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        currentProject,
        index,
        goNextProject,
        goPreviousProject,
        goSpecificProject,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectContextProvider;
