
import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from  "./components/about/About"
import Experience from "./components/experience/Experience"
import Footer from './components/footer/Footer'

import Contact from "./components/contact/Contact"
import Portfolioo from './components/portfolio/Portfolio'

export default function App() {
  return (
    <div>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Portfolioo/> 
    <Contact/>
    <Footer/>
    </div>
  )
}


//npm run build
//npm run deploy