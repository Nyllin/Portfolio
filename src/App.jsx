import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NavPage from "./components/NavPage";
import videoBg from "./assets/firevideo.mp4";
import About from "./components/About";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="main">
        <div className="video-container">
          <video className="bg-video" src={videoBg} autoPlay loop muted />
        </div>
        <NavPage />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skill" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer/>
      </div>
    </>
  );
}

export default App;
