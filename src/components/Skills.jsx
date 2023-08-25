import { Link } from 'react-router-dom'
import '../styles/Skills.css'
import { motion } from "framer-motion";
const Skills = () => {
  return (
    <div className="skills-container mb-5">
         <motion.div
          initial={{ scale:0,opacity:0 }}
          animate={{scale:1,opacity:1 }}
          transition={{
            duration: 1,
            ease: "easeIn"
           
          }}
        >
        <h1 className="display-6 text-light text-center">My Prowess</h1>
        <ol className="list text-light mx-5 text-center">
          <li className="item">
          <h4> Front-End</h4>
            <span>
              ReactJS, Redux Toolkit, React-BootStrap, MaterialUI, TailwindCSS, Framer Motion
            </span>
          </li>
          <li className="item">
            <h4>Back-End</h4>
            <span>
              ExpressJs
            </span>
          </li>
          <li className="item">
            <h4>Languages</h4>
            <span>JavaScript</span>
          </li>
        </ol>
        <Link to="/education" className="about-btn btn btn-outline-light rounded-0 d-block mt-3 px-5" size="lg">
            Education
          </Link>
          <Link to="/projects" className="about-btn btn btn-outline-light rounded-0 d-block mt-3 px-5" size="lg">
            Projects
          </Link>
          </motion.div>
    </div>
  )
}

export default Skills