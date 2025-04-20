import { useState } from "react";
import Header from "./Layout/Header";
import Landing from "./Components/Home/Landing";
import AboutSection from "./Components/Home/AboutSection";
import Skills from "./Components/Home/Skills";
import HomeProjects from "./Components/Home/HomeProjects";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const themeClass = `${darkMode ? "dark" : ""}`;
  return (
    <>
      <header className={`${themeClass} bodyBg`}>
        <Header mode={darkMode} setTheme={setDarkMode} />
      </header>
      <main className={`${themeClass} bodyBg min-h-[200vh]`}>
        <Landing />
        <AboutSection />
        <HomeProjects/>
        <Skills />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
