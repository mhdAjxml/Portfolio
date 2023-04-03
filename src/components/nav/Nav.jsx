import React from 'react'
import "./nav.css"
import {AiOutlineBook,AiOutlineHome} from "react-icons/ai"
import{BiUser} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {MdContactPhone} from "react-icons/md"
import { useState } from 'react'

const Nav = () => {
  const [activeNav,setActiveNav]=useState('#')
  return (
    <nav>
      <a href='#' className={activeNav === '#' ? 'active' : ' '}><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')}  className={activeNav === '#about' ? 'active' : ' '}><BiUser/></a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')}  className={activeNav === '#experience' ? 'active' : ' '}><AiOutlineBook/></a>
      <a href='#service' onClick={()=>setActiveNav('#service')}  className={activeNav === '#service' ? 'active' : ' '}><RiServiceLine/></a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active' : ' '}><MdContactPhone/></a>
    </nav>
  )
}





export default Nav


























