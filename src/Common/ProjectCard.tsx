import { RiExternalLinkLine } from "react-icons/ri";
import { ProjectType } from "../Types/ProjectType";
import { FaGithub } from "react-icons/fa";

const ProjectCard = (project: ProjectType) => {
  return (
    <div
      key={project.id}
      className="bg-card normalBg rounded-md border overflow-hidden transition-all hover:shadow-md animate-fade-in"
    >
      <div className="aspect-video bg-muted/50">
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          {project.description}
        </p>
        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-accent/10 text-accent-foreground rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
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
