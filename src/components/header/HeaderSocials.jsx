import React from 'react'
import "./header.css"
import {FaLinkedin} from 'react-icons/fa' 
import {AiOutlineGithub} from "react-icons/ai"
import {GrInstagram} from "react-icons/gr"
import {BsTwitter} from "react-icons/bs"
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/mohamed-ajmal-7-26904024b/' target='_blank'><FaLinkedin/></a>
        <a href='https://twitter.com/ajmalado_7' target='_blank'><BsTwitter/></a>
        <a href='https://github.com/Ajmal-07' target='_blank'><AiOutlineGithub/></a>
        <a href='https://www.instagram.com/mhd.__.ajmal/' target='_blank'><GrInstagram/></a>
    </div>
  )
}

export default HeaderSocials