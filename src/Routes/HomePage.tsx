import AboutSection from "../Components/Home/AboutSection";
import HomeProjects from "../Components/Home/HomeProjects";
import Landing from "../Components/Home/Landing";
import Skills from "../Components/Home/Skills";
import WhatIDo from "../Components/Home/WhatIDo";

const HomePage = () => {
  return (
    <main className="bodyBg">
      <Landing />
      <AboutSection />
      <WhatIDo />
      <Skills />
      <HomeProjects />
    </main>
  );
};

export default HomePage;
