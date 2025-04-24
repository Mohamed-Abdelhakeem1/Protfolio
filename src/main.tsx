import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import ProjectsContext from "./Context/ProjectsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProjectsContext>
      <Router>
        <App />
      </Router>
    </ProjectsContext>
  </StrictMode>
);
