import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/IMG-0825-removebg-preview.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        <header> 
            {/*This div has the css properties of the container class made*/}
            <div className="container header__container">  
                <h5>Hello I'm</h5>
                <h1>Hamed Mirabadi</h1>

                {/*Using the text-light class we made to change the colour of the text*/}
                <h5 className="text-light">Front End Modern UI/UX Developer + Data Science & ML Stack</h5>
                <CTA />
                
                <HeaderSocials/>

                <div className="me">
                    <img src={ME} alt="me" />
                </div>
            </div>
        </header>  
    )   
}

export default Header 