import { useState } from "react";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import HomePage from "./Routes/HomePage";
import { Route, Routes } from "react-router-dom";
import ProjectsPage from "./Routes/ProjectsPage";
import AboutPage from "./Routes/AboutPage";
import ContactPage from "./Routes/ContactPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const themeClass: string = `${darkMode ? "dark" : ""}`;
  return (
    <>
      <header className={`${themeClass} bodyBg`}>
        <Header mode={darkMode} setTheme={setDarkMode} />
      </header>
      <Routes>
        <Route path="/" element={<HomePage themeClass={themeClass} />} />
        <Route path="/projects" element={<ProjectsPage themeClass={themeClass}/>} />
        <Route path="/about" element={<AboutPage themeClass={themeClass}/>} />
        <Route path="/contact" element={<ContactPage themeClass={themeClass}/>} />
      </Routes>
      <footer className={`${themeClass} bg-blck dark:bg-whte py-10`}>
        <Footer />
      </footer>
    </>
  );
}

export default App;
