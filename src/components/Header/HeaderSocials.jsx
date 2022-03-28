import React from 'react'

/*Importing a react icon*/
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiOpenai} from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            {/*Using the react icon by using */ }
            <a href="https://www.linkedin.com/in/hamed-mirabadi-31ba73227/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/Hamed16" target="_blank"><BsGithub/></a>
        </div>
    )
}

export default HeaderSocials