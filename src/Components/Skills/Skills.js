import React from 'react'
import './Skills.css'
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTittle'>What I Do</span>
        <span className='skillDesc'>I am skilled and passionate Web Developer with skills in creating visually appealing and user-friendly websites. I have a strong understanding of frontend and a keen eye for detail. I am proficient in HTML,CSS,BootStrap,JavaScript and as well as ReactJS library.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>UI Design</h2>
                    <p>I create clean, intuitive, and visually engaging user interfaces that enhance the overall user experience. </p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Web Design</h2>
                    <p>I specialize in creating visually appealing and user-friendly web designs that prioritize both aesthetics and functionality.</p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>I design user-centric, visually appealing, and functional app interfaces that provide seamless experiences across mobile and desktop platforms.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills