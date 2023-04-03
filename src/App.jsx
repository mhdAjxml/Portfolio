
import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from  "./components/about/About"
import Experience from "./components/experience/Experience"
import Footer from './components/footer/Footer'
import Services from "./components/services/Services"
import Contact from "./components/contact/Contact"
import Portfolioo from './components/portfolio/Portfolio'
import Testimonials from "./components/testimonials/Testimonials"
export default function App() {
  return (
    <div>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolioo/> 
    {/* <Testimonials/> */}
    <Contact/>
    <Footer/>
    </div>
  )
}
