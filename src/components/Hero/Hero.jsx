import React from 'react'
import './Hero.css'
import hand_icon from '../assests/earbud2.jpeg'
import arrow_icon from '../assests/arrow icon.jpeg'
import hero_image from '../assests/logom.webp'
export const Hero = () => {
  return (
    <div className='hero'>
    <div className="hero-left">
    <h2>NEW ARRIVAL only </h2>
    <div>
        <div className="hand-hand-icon">
            <p>New</p>
            <img src={hand_icon} alt="" />

        </div>
        <div className="hometext">
        <p>collections</p>
        <p>for everyone</p>
        </div>
    </div>
    <div className='hero-latest-btn'>
        <div>Latest Collection</div>
        <img className='arrow'src={arrow_icon} alt="" />
    </div>
    </div>
    <div  className="hero-right">
        <img src={hero_image} width={700} alt="" />
    </div>
    </div>
  )
}
