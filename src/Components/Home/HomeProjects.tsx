import { Link } from "react-router-dom";

const HomeProjects = () => {
  return (
    <section className="py-10">
      <div className="container text-blck dark:text-whte">
        <h3 className="heading text-blue fontRoma">Projects</h3>
        <div className="h-50"></div>
        <Link to="/about" className="btn smoothy mx-auto mt-6 text-lg w-fit">
          Explore More Projects
        </Link>
      </div>
    </section>
  );
};

export default HomeProjects;
