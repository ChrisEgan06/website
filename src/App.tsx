import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Projects from "./pages/projects";
import Experience from "./pages/experience";
import ProjectDetail from "./pages/project-detail";
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      {/* Global navigation shared by every page */}
      <Navbar />

      {/* Page content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </Router>
  );
}

export default App;