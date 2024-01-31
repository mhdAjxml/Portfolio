import React from 'react'
import "./about.css"
// import Ajmal1_c from "../../assets/ajmal3_c.jpeg"
import {MdOutlineInsertDriveFile} from "react-icons/md"
// import { SlBadge } from "react-icons/sl";
import { FaLanguage } from "react-icons/fa";
import {DiYeoman} from "react-icons/di"
import {FaSchool} from "react-icons/fa"
const About = () => {
  return (
    <section id='about'>
      {/* <h5>Know</h5> */}
      <h1>About me!</h1>
      <div className='container about_container'>
        <div className='about_me'>
          
          {/* <div className='about_me_img'>
            <img src={Ajmal1_c} alt=""  />
          </div> */}
          <div className='about_cardss'>
          <article className='about_card'>
          
              <h3 >Certifications </h3>
            {/* <MdOutlineInsertDriveFile className='about_icon'/> */}
              {/* <div> */}
              <ul className='UL' >
              <li id='neww'>&#x2022;Arduino Step by Step: Getting started</li>
              <li id='neww'>&#x2022;Ethics in Engineering Practice</li>
              <li id='neww'>&#x2022;Enhancing Soft Skills and Personality</li>
              <li id='neww'>&#x2022;Introduction to Machine Learning</li>
              <li id='neww'>&#x2022;Basics of Computer Networking</li>
              {/* </div> */}
              </ul>
            </article>
          <article className='about_card'>
              <h3 >Events </h3>
            {/* <MdOutlineInsertDriveFile className='about_icon'/> */}
              {/* <div> */}
              <ul className='UL' >
              <li id='neww'>&#x2022;Smart India Hackathon (2022)</li>
              <li id='neww'>&#x2022;Tech Innovation (2023)</li>
              <li id='neww'>&#x2022;BIT Prakyuti (2023)</li>
              <li id='neww'>&#x2022;YESIST (2022)</li>
              <li id='neww'>&#x2022;Project Expo (2023)</li>
              <li id='neww'>&#x2022;IOT Workshop (2023)</li>
              {/* </div> */}
              </ul>
            </article>
            </div>
        </div>
        
        <div className='about_content'>
          <div id='about_cards'>
            <article className='about_card'>
            <MdOutlineInsertDriveFile className='about_icon'/>
              <h2> Projects </h2>
              <large>6+ completed</large>
            </article>
            <br></br>
            <article className='about_card'>
            <FaSchool className='about_icon'/>
              <h2>Course</h2>
              <medium>Electronics & Communication Engineering</medium>
            </article>
        <br></br>
          
            <article className='about_card'>
            <DiYeoman className='about_icon'/>
              <h2> Expert in </h2>
              <medium>Java & ReactJS</medium>
            </article>  
          <br></br>
            <article className='about_card'>
            <FaLanguage className='about_icon'/>
              <h2> Languages </h2>
              <medium>English & Tamil</medium>
            </article>  
            <br></br>
            
          {/* <a href='#contact'> Contact </a> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About