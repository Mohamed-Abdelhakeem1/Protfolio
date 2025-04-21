import AboutSection from "../Components/Home/AboutSection";
import HomeProjects from "../Components/Home/HomeProjects";
import Landing from "../Components/Home/Landing";
import Skills from "../Components/Home/Skills";


const HomePage = () => {
  return (
    <main className={`bodyBg`}>
      <Landing />
      <AboutSection />
      <HomeProjects />
      <Skills />
    </main>
  );
};

export default HomePage;
