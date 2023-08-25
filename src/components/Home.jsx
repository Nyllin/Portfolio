
import { motion } from "framer-motion";
import '../styles/Home.css';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>   
      <div className="text-container">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeIn",
          }}
        >
          <h1 className="display-2 fw-400 text-white text-center">
            Welcome to My Journey
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 3,
            ease: "easeIn",
          }}
        >
          <Link to="/about" className="btn btn-outline-light rounded-0 d-block mt-3 px-5" size="lg">
            Start
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
