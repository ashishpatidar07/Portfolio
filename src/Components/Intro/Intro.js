import React from 'react'
import './Intro.css'
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import {Link} from 'react-scroll'

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello' >Hello,</span>
            <span className='itnroText'>I'm <span className='introName'>Ashish </span><br/><span> Frontend Developer</span></span>
            <p className='introPara'>I'm skiled Frontend Developer and I've worked on a variety of projects.<br/> I'm passionate about creating great user interface.</p>
            <Link><button className='btn'><img src={btnImg} alt='Hire' className='btnImg'/> Hire me</button></Link>
        </div>

        <img src={bg} alt='profile' className='bg'/>
    </section>
  )
}

export default Intro