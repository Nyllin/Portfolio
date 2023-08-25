import '../styles/Education.css'
import SchoolIcon from '@material-ui/icons/School';
import { Link } from 'react-router-dom';
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";

const Education = () => {
  return (
    <div className='education-container'>
       <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2023 Jan - 2023 Sep"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Institute of Advanced Technologies (IAT)
            </h3>
            <p>Diploma in IT</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <Link to="/skill" className="about-btn btn btn-outline-light rounded-0 d-block mt-3 px-5" size="lg">
            My Skills
          </Link>
          <Link to="/projects" className="about-btn btn btn-outline-light rounded-0 d-block mt-3 px-5" size="lg">
            Projects
          </Link>
    </div>
  )
}

export default Education