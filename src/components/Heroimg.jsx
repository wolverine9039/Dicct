import React from 'react'
import IntroImg from '../img/img.jpg'

import "../style/HomeImg.css"

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Welcome</p>
        <h1>DICCT 2024 | Graphic Era Hill University Haldwani</h1>
       
      </div>
    </div>
  )
}

export default Heroimg
