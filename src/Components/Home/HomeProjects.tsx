import { useContext } from "react";
import ExploreBtn from "../../Common/ExploreBtn";
import { ProjectsDataContext } from "../../Context/ProjectsContext";
import ProjectCard from "../../Common/ProjectCard";

const HomeProjects = () => {
  const projects = useContext(ProjectsDataContext);
  return (
    <section className="py-10">
      <div className="container text-blck dark:text-whte">
        <h3 className="heading text-blue fontRoma">Projects</h3>
        <div className=" grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3  gap-6 mt-6">
          {projects &&
            projects
              .slice(0, 4)
              .map((project) => <ProjectCard key={project.id} {...project} />)}
        </div>
        <ExploreBtn route="/projects" text="More Projects" />
      </div>
    </section>
  );
};

export default HomeProjects;
