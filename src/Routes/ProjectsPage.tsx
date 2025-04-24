import { useContext } from "react";
import ProjectCard from "../Common/ProjectCard";
import { ProjectsDataContext } from "../Context/ProjectsContext";

const ProjectsPage = () => {
  const projects = useContext(ProjectsDataContext);
  return (
    <main className="bodyBg pt-20 pb-10">
      <section className="container normalText">
        <h1 className="heading text-blue fontRoma">Projects</h1>
        <p className="text-lg max-w-2xl mx-auto text-center">
          A collection of my work showcasing my skills in frontend development,
          design implementation, and problem-solving.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3  gap-6 mt-6">
          {projects &&
            projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
