import ExploreBtn from "../../Common/ExploreBtn";

const HomeProjects = () => {
  return (
    <section className="py-10">
      <div className="container text-blck dark:text-whte">
        <h3 className="heading text-blue fontRoma">Projects</h3>
        <div className="h-50"></div>
        <ExploreBtn route="/projects" text="Explore More Projects" />
      </div>
    </section>
  );
};

export default HomeProjects;
