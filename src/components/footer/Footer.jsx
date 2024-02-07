import React from 'react'
import "./footer.css"
import {FaLinkedin} from 'react-icons/fa' 
import {AiOutlineGithub} from "react-icons/ai"
import {GrInstagram} from "react-icons/gr"
import {BsTwitter} from "react-icons/bs"
import Resume from "../../assets/Resume.pdf"
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className='social'>
      <a className='logo' href='https://www.linkedin.com/in/mohamed-ajmal-m-26904024b/' target='_blank'><FaLinkedin/></a>
      <a className='logo' href='https://twitter.com/ajmalado_7' target='_blank'><BsTwitter/></a>
      <a className='logo' href='https://github.com/Ajmal-07' target='_blank'><AiOutlineGithub/></a>
      <a className='logo' href='https://www.instagram.com/mhd.__.ajmal/' target='_blank'><GrInstagram/></a>
      {/* <a className='logo' href='https://www.facebook.com/mohamed.ajmal.73997861?mibextid=hu50Ix' target='_blank'><FaFacebook/></a> */}
      {/* <br></br> */}
      </div>
      <a href={Resume} target='_blank'  id='but'>
        Click here for Resume
      </a>
    </footer>
  )
}

export default Footer