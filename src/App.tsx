import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Experience from "./pages/experience";
import Hobbies from "./pages/hobbies";
import ProjectDetail from "./pages/project-detail";
import Navbar from "./components/navbar";
import { Analytics } from "@vercel/analytics/next"

/**
 * Main App component
 * Sets up routing and global navigation for the entire application
 */
function App() {
  return (
    <Router>
      <Navbar />
      <Analytics />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes>
    </Router>
  );
}

export default App;