import AboutSection from "../Components/Home/AboutSection";
import HomeProjects from "../Components/Home/HomeProjects";
import Landing from "../Components/Home/Landing";
import Skills from "../Components/Home/Skills";
import { ThemeProps } from "../Types/ThemeType";


const HomePage = ({ themeClass }: ThemeProps) => {
  return (
    <main className={`${themeClass} bodyBg`}>
      <Landing />
      <AboutSection />
      <HomeProjects />
      <Skills />
    </main>
  );
};

export default HomePage;
