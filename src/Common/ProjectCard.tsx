import { RiExternalLinkLine } from "react-icons/ri";
import { ProjectType } from "../Types/ProjectType";
import { FaGithub } from "react-icons/fa";

const ProjectCard = (project: ProjectType) => {
  return (
    <div
      key={project.id}
      className="normalBg rounded-md border overflow-hidden projectCard"
    >
      <div className="aspect-video">
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
          <h2 className="text-xl font-bold mb-2 text-blue">{project.title}</h2>
          <p className="mb-3">{project.description}</p>
        <div className="mb-6 flex flex-wrap gap-2 h-fit">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-accent/10 text-accent-foreground rounded bg-gray-200 dark:bg-gray-800"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex">
          <button className="mx-auto btn smoothy  hover:opacity-[0.7]">
            <a
              href={project.repoLink}
              target="_blank"
              className="flexCenter gap-3"
            >
              <FaGithub className="text-xl" />
              Code
            </a>
          </button>
          <button className="mx-auto btn smoothy hover:opacity-[0.7]">
            <a
              href={project.demoLink}
              target="_blank"
              className="flexCenter gap-3"
            >
              <RiExternalLinkLine className="text-xl" />
              Demo
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
