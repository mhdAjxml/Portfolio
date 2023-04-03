import React from 'react'
import "./header.css"
import CTA from "./CTA"
import HeaderSocials from './HeaderSocials'
import Ajmal1e from "../../assets/ajmal1e.png"

const Header = () => {
  return (
    <div>
      <header>
        <div className="container header_container">
          <br></br>
          <h5>Hello I'm</h5>
          <h1>Ajmal</h1>
          <CTA/> 
          <HeaderSocials/>
          <div id='cont'>
          <div className='me'>
            <img src={Ajmal1e} alt="" />
          </div>
        </div>
        </div>
      </header>
    </div>
  )
}

export default Header