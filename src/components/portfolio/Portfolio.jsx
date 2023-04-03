import React from 'react'
import "./portfolio.css"
import Ui from "../../assets/Ui.png"
import Score from "../../assets/score.jpg"
import Weather from "../../assets/weather.jpg"
const Portfolioo = () => {
  return (
    <section id='portfolio'>
      <h1>Recent Works</h1>
      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img src={Score}  className='new'></img>
          </div>
          <br></br>
          
          <h2>Score_Card</h2>
          <div className='button'>
          <a href='https://github.com/Ajmal-07/Score-card' className='btn' target='_blank'>Project</a>
          {/* <a href=' https://ajmal-07.github.io/Score-card/' className='btn btn-primary' target='_blank'>Demo</a> */}
            </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img src={Weather}  className='new'></img>
          </div>
          <br></br>
          <h2>Weather Report</h2>
          <div className='button'>
            <a className='btn'  href='https://github.com/Ajmal-07/weather' target='_blank'>Project</a>
            {/* <a className='btn btn-primary' href=' https://ajmal-07.github.io/weather/' target='_blank'>Demo</a> */}
            </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img src={Ui} className='new'></img>
          </div>
          <br></br>
      
          <h2>Wiki-Viewer</h2>
          <div className='button'>
            <a className='btn'  href='https://github.com/Ajmal-07/Wiki-viewer' target='_blank'>Project</a>
            {/* <a className='btn btn-primary' href=' https://ajmal-07.github.io/Wiki-viewer/' target='_blank'>Demo</a> */}
            </div>
        </article>
      </div>

    </section>
  )
}

export default Portfolioo