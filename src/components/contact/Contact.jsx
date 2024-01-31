import React from 'react'
import "./contact.css"
import {AiOutlineMail} from "react-icons/ai"
import {FaWhatsapp} from "react-icons/fa"
const Contact = () => {
  return (
    <section id='contact'>
      <h1>Contact</h1>
      <div className='container contat_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <AiOutlineMail id="icon"/>
            <h2>Email</h2>
            <h5>afsalsara2015@gmail.com</h5>
            <a href='mailto:afsalsara2015@gmail.com' target='blank'>Click Here</a>
          </article>
          <article className='contact_option'>
            <FaWhatsapp id="icon"/>
            <h2>Whatsapp</h2>
            <h5>+91 8870883678</h5>
            <a href='https://api.whatsapp.com/send?phone=+91887088368' target='blank'>Click Here</a>
          </article>
          
          


        </div>
      </div>
    </section>
  )
}

export default Contact