import React from 'react'
import AboutImg from '../../img/abt.jpg'
import "../../style/AboutImg.css"
const Aboutimg = () => {
  return (
    <div className="hero_1">
      <div className="mask_1">
        <img className="into-img_1" src={AboutImg} alt="IntroImg" />
      </div>
      <div className="content_1">
        <p>About Us</p>
        <h1>DICCT 2024 | Graphic Era Hill University Haldwani</h1>
       
      </div>
    </div>
  )
}

export default Aboutimg
