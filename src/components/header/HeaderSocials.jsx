import React from 'react'
import "./header.css"
import {FaLinkedin} from 'react-icons/fa' 
import {AiOutlineGithub} from "react-icons/ai"
import {GrInstagram} from "react-icons/gr"
import {BsTwitter} from "react-icons/bs"
import { FaFacebook } from "react-icons/fa";
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href='https://twitter.com/ajmalado_7' target='_blank'><BsTwitter/></a>
        <a href='https://www.instagram.com/mhd.__.ajmal/' target='_blank'><GrInstagram/></a>
        <a  href='https://www.facebook.com/mohamed.ajmal.73997861?mibextid=hu50Ix' target='_blank'><FaFacebook/></a>
        <a href='https://www.linkedin.com/in/mohamed-ajmal-m-26904024b/' target='_blank'><FaLinkedin/></a>
        <a href='https://github.com/Ajmal-07' target='_blank'><AiOutlineGithub/></a>
        <a href='https://github.com/mhdAjxml' target='_blank'><AiOutlineGithub/></a>
    </div>
  )
}

export default HeaderSocials