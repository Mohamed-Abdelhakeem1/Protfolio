import { useContext } from "react";
import ProjectCard from "../Common/ProjectCard";
import { ProjectsDataContext } from "../Context/ProjectsContext";
import ExploreBtn from "../Common/ExploreBtn";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {projects &&
            projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
        </div>
        <div className="text-center mx-auto">
          <p className="mt-8 text-blue text-lg font-semibold text-center">
            If Not Now, When? Let’s Work Together!
          </p>
          <ExploreBtn route="/contact" text="Contact Me" />
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;

// grid-cols-1 md:grid-cols-2
