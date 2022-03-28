import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'



const Footer = () => {
    return (
        <footer>
            <a href='#' className='footer__logo'>Hamed Mirabadi</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
            </ul>

            <div className="footer__socials">
                <a href='https://www.linkedin.com/in/hamed-mirabadi-31ba73227/'><BsLinkedin/></a>
                <a href='https://github.com/Hamed16'><BsGithub/></a>
            </div>
        </footer>
    )
}

export default Footer