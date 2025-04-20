import { ThemeProps } from "../Types/ThemeType";

const ProjectsPage = ({ themeClass }: ThemeProps) => {
  return (
    <main className={`${themeClass} bodyBg pt-20`}>
      <section className="container h-[100vh] text-5xl normalText">
        Here are my all projects
      </section>
    </main>
  );
};

export default ProjectsPage;
