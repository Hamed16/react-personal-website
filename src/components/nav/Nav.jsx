import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {BsPatchCheck} from 'react-icons/bs'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
    /* Doing the const for usState hook */
    const [activeNav, setActiveNav] = useState('#')

    return (
        <nav>
            {/* using the usetate hook, we are sating, on the click, setActiveNav to the href, then we are asking if activeNav === the href,
             if so set the classname to active which applies the designs from the css file, otherwise set the class to empty */}

           <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
           <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
           <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookAlt /></a>
           <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineFundProjectionScreen /></a>
           <a href="#testimonials" onClick={() => setActiveNav('#testimonial')} className={activeNav === '#testimonial' ? 'active' : ''}><BsPatchCheck /></a>
        </nav>
    )
}

export default Nav