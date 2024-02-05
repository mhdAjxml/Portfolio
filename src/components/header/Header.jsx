import React, { useEffect, useState } from 'react'
import "./header.css"
// import CTA from "./CTA"
import HeaderSocials from './HeaderSocials'
// import Ajmal1e from "../../assets/ajmal1e.png"
// import Ajmal1_c from "../../assets/ajmal3_c.jpeg"
// import IMG_2030 from "../../assets/IMG_2030.jpg"
import ajmalbg from "../../assets/ajmalbg.png"
// import CTA from './CTA'



const Header = () => {

  const [isLoad , setIsLoad] = useState(true);

  useEffect(()=>{


    const handletimeout =()=>{
      setIsLoad(false);
    }

    setTimeout(() => {
      handletimeout();
    }, 3000);
  })
  return (
    <>
    {
      isLoad ? (
      // <p>Loading...</p>
      <div className='test'>

      <svg
       style={{
         left: "50%",
         top: "50%",
         position: "absolute",
        transform: "translate(-50%, -50%) matrix(1, 0, 0, 1, 0, 0)"}}
         preserveAspectRatio="xMidYMid meet" viewBox="0 0 187.3 93.7" height="300px" width="400px">
      <path d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 				c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke-width="4" fill="none" id="outline" stroke="#4E4FEB"></path>
      <path d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 				c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="#4E4FEB" fill="none" opacity="0.05" id="outline-bg"></path>
    </svg>
         </div>
      ) :
      (
        <div>
        <header>
          
          <div className="container header_container">
            <br></br>
            <div id="user">
            <h5>Hello I'm</h5>
            </div>
            <h1 id='name'>Ajmal</h1>
            
            {/* <CTA/>    */}
            {/* <Download/> */}
            <br></br>
            <br></br>
            <HeaderSocials/>
            <div id='cont'>
            <div className='me'>
              {/* <img src={Ajmal1e} alt="" /> */}
              {/* <img src={IMG_2030}/> */}
              {/* <img src={Ajmal1_c} /> */}
              <img src={ajmalbg} alt=""/>
            </div>
          </div>
          </div>
        </header>
      </div>
      )
    }
    </>
 
  )
}

export default Header