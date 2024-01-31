import React from 'react'
import "./experience.css"
import {GoVerified} from "react-icons/go"

const Experience = () => {
  return (
    <section id='experience'>
      <h1>My Experience</h1>

      <div className='container experience_container'>
      
        <div className='experience_frontend'>
        <h3>FRONTEND</h3>
        <div className='experience_content'>
          <article className='experience_details'>
              <GoVerified className='experience_details-icon'/> 
              <div>
              <h4 className='hi4'>HTML/CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
          </article>

          <article className='experience_details'>
              <GoVerified className='experience_details-icon'/>
              <div className='right'>
              <h4 className='hi4'>ReactJS</h4>
              <small className='text-light'>Experienced</small>
              </div>
          </article>

          <article className='experience_details'>
              <GoVerified className='experience_details-icon'/>
              <div>
              <h4 className='hi4'>JavaScript</h4>
              <small className='text-light'>Basics</small>
              </div>
          </article>

          <article className='experience_details'>
              <GoVerified className='experience_details-icon'/>
              <div className='right'>
              <h4 className='hi4'>BootStrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
          </article>
          </div>
        
        </div>
        <br></br>
         
        <div className='experienced_backend'>
          <h3>BACKEND & COMPONENT</h3>
          <div className='experience_content'>
          <article className='experience_details'>
              <GoVerified className='experience_details-icon'/> 
              <div>
              <h4 className='hi4' >Java & Python</h4>
              <small className='text-light'>Experienced</small>
              </div>
          </article>
          {/* <article className='experience_details'>
              <GoVerified className='experience_details-icon'/> 
              <div className='right'>
              <h4 className='hi4'>Java</h4>
              <small className='text-light'>Experienced</small>
              </div>
          </article> */}
          <article className='experience_details'>
              <GoVerified className='experience_details-icon'/> 
              <div>
              <h4 className='hi4'>SQL</h4>
              <small className='text-light'>Basics</small>
              </div>
          </article>
          <article className='experience_details'>
              <GoVerified className='experience_details-icon'/> 
              <div>
              <h4 className='hi4'>Arduino</h4>
              <small className='text-light'>Basics</small>
              </div>
          </article>
          <article className='experience_details'>
              <GoVerified className='experience_details-icon'/> 
              <div>
              <h4 className='hi4'>SpringBoot</h4>
              <small className='text-light'>Basics</small>
              </div>
          </article>
         
          </div>
          
          
        </div>
      </div>
    </section>
  )
}

export default Experience