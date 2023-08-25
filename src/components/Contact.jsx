import '../styles/Contact.css'
import { motion } from "framer-motion";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { GitHub } from '@material-ui/icons';
import EmailIcon from '@material-ui/icons/Email';


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
        <div className='contacticon-container'>
        <a href='https://github.com/Nyllin' target='_blank' className='contact-link'><GitHub className='contact-icon'/></a>
        <a href='https://www.linkedin.com/in/nay-yi-lin-244616236/' target='_blank' className='contact-link'><LinkedInIcon className='contact-icon'/></a>
        </div>
        <ol className="list text-light m-5 text-center">
          <li className="item p-2">
         <EmailIcon className='contactlist-icon'/> :
            <span>
            <a className='contact-link' target='_blank' href="mailto: nayyi0608@gmail.com"> nayyi0608@gmail.com</a>
            </span>
          </li>
        </ol>
        </motion.div>
    </div>
  )
}

export default Contact