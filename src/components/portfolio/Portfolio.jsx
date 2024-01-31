import React from 'react'
import "./portfolio.css"
// import Ui from "../../assets/Ui.png"
import Score from "../../assets/score.jpg"
import Weather from "../../assets/weather.jpg"
import Language from "../../assets/Language.png"
import sentiment from "../../assets/sentiment.jpg"
import emotion from "../../assets/emotion.jpg"
import bot from "../../assets/bot.jpg"
import face from "../../assets/face.jpg"
import commerce from "../../assets/commerce.png"
import hug from "../../assets/hug.jpg"
const Portfolioo = () => {
  return (
    <section id='portfolio'>
      <h1>Recent Works</h1>
      <div className='container portfolio_container'>

        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img src={Weather} alt=''  className='new'></img>
          </div>
          <br></br>
          <h2>Weather Report</h2>
          <div className='button'>
            <a className='btn'  href='https://github.com/Ajmal-07/weather' target='_blank'>Project</a>
            <a className='btn btn-primary' href=' https://ajmal-07.github.io/weather/' target='_blank'>Demo</a>
            </div>
        </article>

        {/* <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img src={Ui} className='new'></img>
          </div>
          <br></br>
      
          <h2>Wiki-Viewer</h2>
          <div className='button'>
            <a className='btn'  href='https://github.com/Ajmal-07/Wiki-viewer' target='_blank'>Project</a>
            <a className='btn btn-primary' href=' https://ajmal-07.github.io/Wiki-viewer/' target='_blank'>Demo</a>
            </div>
        </article> */}
        
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img alt='' src={sentiment} className='new'></img>
          </div>
          <br></br>
      
          <h2>Sentiment Analysis</h2>
          <div className='button'>
            <a className='btn'  href='https://github.com/mhdAjxml/Sentiment-analysis-/tree/main' target='_blank'>Project</a>
            <a className='btn btn-primary' href='https://www.youtube.com/watch?v=4k7J5LNJf5Q' target='_blank'>Video</a>
            </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img alt=" " src={Score}  className='new'></img>
          </div>
          <br></br>
          
          <h2>Score_Card</h2>
          <div className='button'>
          <a href='https://github.com/Ajmal-07/Score-card' className='btn' target='_blank'>Project</a>
          <a href=' https://ajmal-07.github.io/Score-card/' className='btn btn-primary' target='_blank'>Demo</a>
            </div>
        </article>
        
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img alt='' src={emotion} className='new'></img>
          </div>
          <br></br>
      
          <h2>Emotion Detection</h2>
          <div className='button'>
            <a className='btn'  href='https://github.com/mhdAjxml/Emotion-Detection' target='_blank'>Project</a>
            {/* <a className='btn btn-primary' href='https://www.youtube.com/watch?v=4k7J5LNJf5Q' target='_blank'>Video</a> */}
            </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img alt='' src={bot} className='new'></img>
          </div>
          <br></br>
      
          <h2>ChatBot</h2>
          <div className='button'>
            <a className='btn'  href='https://github.com/mhdAjxml/ChatBot' target='_blank'>Project</a>
            {/* <a className='btn btn-primary' href='https://www.youtube.com/watch?v=4k7J5LNJf5Q' target='_blank'>Video</a> */}
            </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img alt='' src={face} className='new'></img>
          </div>
          <br></br>
      
          <h2>Face Recognition</h2>
          <div className='button'>
            <a className='btn'  href='https://github.com/mhdAjxml/FaceRecognition' target='_blank'>Project</a>
            {/* <a className='btn btn-primary' href='https://github.com/mhdAjxml/FaceRecognition' target='_blank'>Project</a> */}
            </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img alt='' src={commerce} className='new'></img>
          </div>
          <br></br>
      
          <h2>E-commerce</h2>
          <div className='button'>
            <a className='btn'  href='https://github.com/Ajmal-07/AppStore' target='_blank'>Project</a>
            {/* <a className='btn btn-primary' href='https://www.youtube.com/watch?v=4k7J5LNJf5Q' target='_blank'>Video</a> */}
            </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img  alt='' src={hug} className='new'></img>
          </div>
          <br></br>
      
          <h2>Image Generator</h2>
          <div className='button'>
            <a className='btn'  href='https://github.com/mhdAjxml/Text-To-Image-Generation' target='_blank'>Project</a>
            {/* <a className='btn btn-primary' href='https://www.youtube.com/watch?v=4k7J5LNJf5Q' target='_blank'>Video</a> */}
            </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img alt='' src={Language} className='new'></img>
          </div>
          <br></br>
      
          <h2>Translator using ML</h2>
          <div className='button'>
            <a className='btn'  href='https://github.com/mhdAjxml/Translator' target='_blank'>Project</a>
            {/* <a className='btn btn-primary' href=' https://ajmal-07.github.io/Wiki-viewer/' target='_blank'>Demo</a> */}
            </div>
        </article>
      </div>

    </section>
  )
}

export default Portfolioo