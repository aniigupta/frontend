import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow_icon.png';

const Hero = () => {
  return (
    <div className='Hero'>
        <div className='Hero-left'> 
            <h2>NEW ARRIVAL ONLY</h2>
            <div className='hand-hand-icon'>
                <p>New</p>
                <img src = {hand_icon.png} alt=''/>
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className='hero-latest-btn'>
           <div> Latest Collections</div>
           <img src={arrow_icon} alt=''/>
        </div>
        <div className='Hero-right'></div>
    </div>
  )
}

export default Hero