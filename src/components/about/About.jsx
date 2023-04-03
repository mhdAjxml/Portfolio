import React from 'react'
import "./about.css"
import Ajmal1_c from "../../assets/ajmal3_c.jpeg"
import {MdOutlineInsertDriveFile} from "react-icons/md"

import {DiYeoman} from "react-icons/di"
import {FaSchool} from "react-icons/fa"
const About = () => {
  return (
    <section id='about'>
      {/* <h5>Know</h5> */}
      <h1>About me!</h1>
      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me_img'>
            <img src={Ajmal1_c} alt="" />
          </div>
        </div>

        <div className='about_content'>
          <div id='about_cards'>
          
            <article className='about_card'>
            <MdOutlineInsertDriveFile className='about_icon'/>
              <h5> Projects </h5>
              <small>3+ completed</small>
            </article>
            
            <br></br>
            
            <article className='about_card'>
            <FaSchool className='about_icon'/>
              <h5>Course</h5>
              <small>Electronics & Communication Engineering</small>
            </article>
          
        <br></br>
          
            <article className='about_card'>
            <DiYeoman className='about_icon'/>
              <h5> Expert in </h5>
              <small>Python</small>
            </article>  
            
            {/* <p> 2008, Ronaldo's number 7 Manchester United shirt was the best-selling Premier League sports product.[548] In 2015, Ronaldo's number 7 Real Madrid shirt was the second best-selling worldwide, after Messi's number 10 Barcelona shirt.[549] In 2018, within 24 hours of his number 7 Juventus shirt being released, over 520,000 had been sold, with $62.4 million generated in one day.[550]
Ronaldo opened a fashion boutique under the name CR7 (his initials and shirt number) on the island of Madeira in 2006 and opened a second in Lisbon in 2008.[551] In partnership with Scandinavian manufacturer JBS Textile Group and the New York fashion designer Richard Chai, Ronaldo co-designed a range of underwear and sock line, released in November 2013.[552] He expanded his CR7 fashion brand by launching a line of premium shirts and shoes in July 2014.[553][554] In September 2015, Ronaldo released his own fragrance, "Legacy", in a partnership with Eden Parfums.[555]</p> */}
          <br></br>
          {/* <a href='#contact'> Contact </a> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About









