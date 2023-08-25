import '../styles/Contact.css'
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { GitHub } from '@mui/icons-material';
import { Email } from '@mui/icons-material';


const Contact = () => {
  return (
    <div className='contact-container p-5'>
        <motion.div
          initial={{ rotate: 100, scale:0 }}
          animate={{ rotate: 0,scale:1 }}
          exit={{rotate:0}}
          transition={{
            duration: 1,
            ease: "easeIn"
           
          }}
        >
        <div className='contact-icon-container'>
        <a href='https://github.com/Nyllin' rel="noreferrer" target='_blank' className='contact-link'><GitHub className='contact-icon'/></a>
        <a rel="noreferrer" href='https://www.linkedin.com/in/nay-yi-lin-244616236/' target='_blank' className='contact-link'><LinkedInIcon className='contact-icon'/></a>
        </div>
        <ol className="list text-light m-5 text-center">
          <li className="item p-2">
         <Email className='contact-list-icon'/> :
            <span>
            <a className='contact-link' rel="noreferrer" target='_blank' href="mailto: nayyi0608@gmail.com"> nayyi0608@gmail.com</a>
            </span>
          </li>
        </ol>
        </motion.div>
    </div>
  )
}

export default Contact