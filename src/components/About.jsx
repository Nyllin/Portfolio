import { Card } from "react-bootstrap";
import "../styles/About.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div>
      <div className="about-container">
      <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1,
            ease: "easeIn"
           
          }}
        >
        <Card className="about-card p-md-4 mx-md-5 border-0" bg="transparent">
          <Card.Title>
            <h1 className="display-6 text-center text-light">About me</h1>
          </Card.Title>
          <Card.Text className="text-justify text-light">
            Greetings! I'm <span className="text-warning">Nay Yi Lin</span>, a React Js enthusiast who embarked on a
            web development journey in May 2021. I specialize in crafting
            captivating frontend experiences. I'm passionate about solving
            coding challenges and constantly expanding my web wizardry. Let's
            connect and shape the digital realm together!
          </Card.Text>
          <div>
          <Link to="/skill" className="about-btn btn btn-outline-light rounded-0 d-block mt-3 px-5" size="lg">
            My Skills
          </Link>
          <Link to="/education" className="about-btn btn btn-outline-light rounded-0 d-block mt-3 px-5" size="lg">
            Education
          </Link>
          <Link to="/projects" className="about-btn btn btn-outline-light rounded-0 d-block mt-3 px-5" size="lg">
           Projects
          </Link>
          </div>
        </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

