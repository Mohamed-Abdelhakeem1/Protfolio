import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./Routes/ScrollToTop";
import HomePage from "./Routes/HomePage";
import ProjectsPage from "./Routes/ProjectsPage";
import AboutPage from "./Routes/AboutPage";
import ContactPage from "./Routes/ContactPage";


function App() {


  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
