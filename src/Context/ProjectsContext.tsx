import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { ProjectType } from "../Types/ProjectType";

interface ProjectsContextProps {
  children: React.ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ProjectsDataContext = createContext<ProjectType[] | null>(null);
const ProjectsContext = ({ children }: ProjectsContextProps) => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const getProjects = useCallback(async () => {
    try {
      const res = await fetch("/Projects/Projects.json");
      const data = await res.json();
      setProjects(data.reverse());
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  }, []);
  useEffect(() => {
    getProjects();
  }, [getProjects]);

  const memoizedProjects = useMemo(() => projects, [projects]);


  return (
    <ProjectsDataContext.Provider value={memoizedProjects}>
      {children}
    </ProjectsDataContext.Provider>
  );
};

export default ProjectsContext;
