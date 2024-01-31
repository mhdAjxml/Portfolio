import React from 'react'
import "./header.css"
// import CTA from "./CTA"
import HeaderSocials from './HeaderSocials'
// import Ajmal1e from "../../assets/ajmal1e.png"
// import Ajmal1_c from "../../assets/ajmal3_c.jpeg"
// import IMG_2030 from "../../assets/IMG_2030.jpg"
import ajmalbg from "../../assets/ajmalbg.png"
// import CTA from './CTA'

const Header = () => {
  return (
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

export default Header