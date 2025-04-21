import ExploreBtn from "../Common/ExploreBtn";
import Skills from "../Components/Home/Skills";

const AboutPage = () => {
  return (
    <main className={`bodyBg pt-20`}>
      <section className="container normalText">
        <div className="flexBetween flex-col md:flex-row gap-8 py-10">
          <div className="w-70 h-90 md:w-90 md:h-90">
            <img
              className="w-full h-full object-cover"
              src="/Profile.JPG"
            ></img>
          </div>
          <div className="text-left flex-1">
            <h1 className=" fontRoma text-4xl">About Me</h1>
            <div className="flex gap-4 text-xs xs:text-sm sm:text-md md:text-lg lg:text-xl mt-5">
              <div className="flex flex-col gap-3  whitespace-nowrap">
                <p>Name:</p>
                <p>Birth Date:</p>
                <p>Address:</p>
                <p>Email:</p>
                <p>Phone:</p>
              </div>
              <div className="flex flex-col gap-3  text-blue font-semibold">
                <p>Mohamed Abdelhakeem</p>
                <p>July 19, 1998</p>
                <p>Mansoura, Egypt</p>
                <p>mohamedabdlehakeem197@gmail.com</p>
                <p>(+20) 106 8393 558</p>
              </div>
            </div>
            <div className="w-fit">
              <ExploreBtn route="/contact" text="Contact Me" />
            </div>
          </div>
        </div>
        <div className="Summary py-10 ">
          <h2 className="fontRoma text-3xl text-center text-blue ">Summary</h2>
          <p className="text-md sm:text-lg fontMon mt-5">
            I'm a motivated and fast-learning Junior Frontend Developer with
            hands-on experience in building interactive and responsive user
            interfaces using React. Skilled in using Redux for efficient state
            management in modern web applications. I build accessible,
            pixel-perfect digital experiences for the web. Proficient in Git and
            GitHub for version control and team collaboration. Eager to
            contribute to real-world projects, grow within a development team.
          </p>
        </div>
        <div className="Education py-10">
          <h2 className="fontRoma text-3xl text-center text-blue ">
            Education
          </h2>
          <p className="text-md sm:text-lg fontMon mt-5">
            A mechanical engineer who graduated from Mansoura University in 2025
            with a grade of "Good". Gained strong knowledge in core areas such
            as thermodynamics, fluid mechanics, and machine design. Integrated
            programming skills, including MATLAB and Python, into simulations,
            data analysis, and automation tasks relevant to the mechanical
            industry. Proficient in CAD tools like AutoCAD and SolidWorks, with
            hands-on experience in practical engineering projects. Known for
            strong problem-solving abilities, teamwork, and a commitment to
            continuous learning.
          </p>
        </div>
        <Skills />
        <div className="pb-10">
          <ExploreBtn route="/projects" text="Explore My Projects" />
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
