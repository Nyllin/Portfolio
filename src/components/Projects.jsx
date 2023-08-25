import { Button, Card } from "react-bootstrap";
import Gym from '../assets/Gymfitness.png';
import Expense from '../assets/ExpenseTracker.png'
import Admin from '../assets/AdminDashboard.png'
import { motion } from "framer-motion";
import '../styles/Projects.css'
const Projects = () => {
  return (
    <div className="projects-container">
        <motion.div
          initial={{ rotate: 100, scale:0 }}
          animate={{ rotate: 0,scale:1 }}
          exit={{rotate:0}}
          transition={{
            duration: 1,
            ease: "easeIn"
           
          }}
        >
    <div className="row">
      <div className="d-lg-flex col-12">
        <div className="projects-card col-lg-4 col-md-12 ">
          <Card className=" text-light border-0 " bg="transparent">
            <Card.Img variant="top" className="projects-img" src={Gym} />
            <Card.Body>
              <Card.Title className="text-center">Gym Fitness</Card.Title>
              <Card.Text>
              Check out my practice project: Gym Fitness.
              </Card.Text>
              <div className="projects-btn">
              <Button href="https://gym-fitness.vercel.app/" target="_blank" variant="outline-light">Demo</Button>
              <Button href="https://github.com/Nyllin/gym-fitness" target="_blank" variant="outline-light" className="m-2">Code</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className=" projects-card col-lg-4 col-md-12  ">
        <Card className="text-light border-0 "  bg="transparent">
            <Card.Img variant="top" className="projects-img" src={Expense} />
            <Card.Body>
              <Card.Title className="text-center">Expense Tracker</Card.Title>
              <Card.Text>
              Check out my practice project: Expense Tracker
              </Card.Text>
              <div className="projects-btn">
              <Button href="https://expense-tracker-sandy.vercel.app/" target="_blank" variant="outline-light">Demo</Button>
              <Button href="https://github.com/Nyllin/Expense-Tracker" target="_blank" variant="outline-light" className="m-2">Code</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className=" projects-card col-lg-4 col-md-12 ">
        <Card className="text-light border-0 "  bg="transparent">
            <Card.Img variant="top" className="projects-img" src={Admin} />
            <Card.Body>
              <Card.Title className="text-center">Admin Dashboard</Card.Title>
              <Card.Text>
              Check out my practice project: Admin Dashboard
              </Card.Text>
              <div className="projects-btn">
              <Button href="https://admin-dashboard-pink.vercel.app/" target="_blank" variant="outline-light">Demo</Button>
              <Button href="https://github.com/Nyllin/Admin-Dashboard-" target="_blank" variant="outline-light" className="m-2">Code</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
    </motion.div>
    </div>
  );
};

export default Projects;
